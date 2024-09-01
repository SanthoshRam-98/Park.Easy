class ReactPagesController < ApplicationController
    skip_before_action :authenticate_user!, only: [:log_in,:sign_up,:forgot_password]
      # Add this before action to prevent caching
    after_action :set_cache_headers
    def log_in
        render 'react_pages/log_in'
    end

    def sign_up
        render 'react_pages/sign_up'
    end

    def forgot_password
        render 'react_pages/forgot_password'
    end
    
    def users_home_page
        unless user_signed_in?
          redirect_to log_in_path, alert: "Please log in to continue."
        end
        # Other logic for the home page...
    end

    private

    def set_cache_headers
      response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
      response.headers["Pragma"] = "no-cache"
      response.headers["Expires"] = "0"
    end
end
