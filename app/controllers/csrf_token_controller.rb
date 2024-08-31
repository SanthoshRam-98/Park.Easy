class CsrfTokenController < ApplicationController
    skip_before_action :verify_authenticity_token, only: :show

    def show
      render json: { csrfToken: form_authenticity_token }
    end
end
