# frozen_string_literal: true
# app/controllers/users/sessions_controller.rb
class Users::SessionsController < Devise::SessionsController
  respond_to :html, :json

  def new
    super
  end
  
  private

  def respond_with(resource, _opts = {})
    render json: { user: resource, message: 'Logged in successfully.' }, status: :ok
  end

  def respond_to_on_destroy
    log_out_success && return if current_user

    log_out_failure
  end

  def log_out_success
    render json: { message: "Logged out successfully." }, status: :ok
  end

  def log_out_failure
    render json: { message: "Logout failed." }, status: :unauthorized
  end
end

