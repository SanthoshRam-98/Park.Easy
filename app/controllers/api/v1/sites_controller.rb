module Api
  module V1
    class SitesController < BaseController
      def index
        sites = Site.accessible_to(current_user).order(:name)
        render json: sites.map { |s| site_json(s) }
      end

      def show
        render json: site_json(current_site)
      end

      # Daily numbers for the owner: movement, money by method and by staff.
      def summary
        tz = ActiveSupport::TimeZone[current_site.time_zone]
        day = params[:date].present? ? Date.iso8601(params[:date]) : tz.today
        range = day.in_time_zone(tz).all_day
        sessions = current_site.parking_sessions
        closed = sessions.closed.where(exited_at: range)

        render json: {
          date: day.iso8601,
          entries: sessions.where(entered_at: range).count,
          exits: closed.count,
          inside_now: sessions.active.count,
          collected_paise: closed.where.not(payment_method: :pending).sum(:amount_paise),
          pending_paise: closed.where(payment_method: :pending).sum(:amount_paise),
          by_method: closed.group(:payment_method).sum(:amount_paise),
          by_staff: closed.group(:exited_by_id).sum(:amount_paise)
        }
      rescue Date::Error
        render json: { error: "date must be YYYY-MM-DD" }, status: :unprocessable_entity
      end

      private

      def site_json(site)
        site.slice(:id, :name, :address, :city, :kind, :latitude, :longitude, :time_zone)
            .merge(live: site.live?, availability: site.availability)
      end
    end
  end
end
