module Api
  module V1
    # JSON API for the staff app and (later) the driver app. Cookie session
    # auth for now: the React pages already send the CSRF token. A token
    # scheme for the offline Android/PWA app comes in a later phase.
    class BaseController < ApplicationController
      skip_before_action :authenticate_user!
      before_action :require_login

      rescue_from ActiveRecord::RecordNotFound do
        render json: { error: "Not found" }, status: :not_found
      end
      rescue_from ActiveRecord::RecordInvalid do |e|
        render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
      end

      private

      def require_login
        render json: { error: "Not logged in" }, status: :unauthorized unless user_signed_in?
      end

      # Every site lookup goes through the user's organizations. A site id
      # from another organization behaves exactly like a missing site.
      def current_site
        @current_site ||= Site.accessible_to(current_user).find(params[:site_id] || params[:id])
      end
    end
  end
end
