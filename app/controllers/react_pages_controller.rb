class ReactPagesController < ApplicationController
    def log_in
        render 'react_pages/log_in'
    end

    def sign_up
        render 'react_pages/sign_up'
    end

    def forgot_password
        render 'react_pages/forgot_password'
    end
end
