module Api
  module V1
    class ParkingSessionsController < BaseController
      # Device clocks drift. Accept a client time only inside this window,
      # otherwise fall back to the server clock.
      MAX_PAST = 3.days
      MAX_FUTURE = 5.minutes

      def index
        scope = current_site.parking_sessions.order(entered_at: :desc).limit(200)
        scope = scope.where(status: params[:status]) if ParkingSession.statuses.key?(params[:status])
        render json: scope.map { |s| session_json(s) }
      end

      def show
        render json: session_json(find_session)
      end

      # Entry. Safe to retry: the same client_uuid returns the same ticket.
      def create
        p = entry_params
        if (existing = current_site.parking_sessions.find_by(client_uuid: p[:client_uuid]))
          return render json: session_json(existing), status: :ok
        end

        vehicle_type = p[:vehicle_type].to_s
        unless ParkingSession.vehicle_types.key?(vehicle_type)
          return render json: { error: "vehicle_type must be two_wheeler or four_wheeler" }, status: :unprocessable_entity
        end
        if current_site.full_for?(vehicle_type)
          return render json: { error: "No space left for #{vehicle_type}" }, status: :conflict
        end

        rate = RateCard.in_effect(current_site, vehicle_type).first
        return render(json: { error: "No rate card set for #{vehicle_type}" }, status: :unprocessable_entity) unless rate

        session = current_site.parking_sessions.create!(
          client_uuid: p[:client_uuid], vehicle_number: p[:vehicle_number], vehicle_type: vehicle_type,
          rate_card: rate, entered_by: current_user, entered_at: clamp_time(p[:entered_at])
        )
        render json: session_json(session), status: :created
      rescue ActiveRecord::RecordNotUnique
        again = current_site.parking_sessions.find_by(client_uuid: p[:client_uuid])
        return render json: session_json(again), status: :ok if again

        render json: { error: "That vehicle is already inside" }, status: :conflict
      end

      # What the driver would pay if they left now. Changes nothing.
      def quote
        s = find_session
        render json: session_json(s).merge(quote_paise: s.active? ? s.quote_paise : s.amount_paise)
      end

      # Exit and payment. Safe to retry.
      def checkout
        method = params[:payment_method].to_s
        unless ParkingSession.payment_methods.key?(method)
          return render json: { error: "payment_method must be cash, upi or pending" }, status: :unprocessable_entity
        end

        s = find_session.close!(by: current_user, payment_method: method, at: clamp_time(params[:exited_at]))
        render json: session_json(s)
      end

      private

      def find_session
        current_site.parking_sessions.find_by!(ticket_code: params[:id].to_s.upcase)
      end

      def entry_params
        params.permit(:client_uuid, :vehicle_number, :vehicle_type, :entered_at)
      end

      def clamp_time(raw)
        t = raw.present? ? Time.zone.parse(raw.to_s) : nil
        t && t >= MAX_PAST.ago && t <= MAX_FUTURE.from_now ? t : Time.current
      rescue ArgumentError
        Time.current
      end

      def session_json(s)
        s.slice(:ticket_code, :vehicle_number, :vehicle_type, :status, :entered_at, :exited_at,
                :amount_paise, :payment_method, :paid_at, :client_uuid)
      end
    end
  end
end
