class ReactPagesController < ApplicationController
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
        render 'react_pages/users_home_page'
    end

    private

    def set_cache_headers
      response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
      response.headers["Pragma"] = "no-cache"
      response.headers["Expires"] = "0"
    end
end
