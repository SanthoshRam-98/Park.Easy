class Users::SessionsController < Devise::SessionsController
  before_action :authenticate_user!, only: [:current_user_info]

  def current_user_info
    if user_signed_in?
      render json: { user: current_user.email }, status: :ok
    else
      render json: { error: 'Not logged in' }, status: :unauthorized
    end
  end

  def create
    Rails.logger.debug "Attempting to authenticate user with email: #{params[:user][:email]}"
    user = User.find_by(email: params[:user][:email])

    if user&.valid_password?(params[:user][:password])
      sign_in(user)
      Rails.logger.debug "User #{user.email} signed in successfully"
      render json: { message: 'Login successful!' }, status: :ok
    else
      Rails.logger.debug "Invalid email or password for #{params[:user][:email]}"
      render json: { error: 'Invalid email or password.' }, status: :unauthorized
    end
  end

def destroy
  Rails.logger.debug "Attempting to sign out user"
  sign_out_all_scopes # Sign out all user scopes
  reset_session # Clear session data
  Rails.logger.debug "User signed out and session reset"
  
  respond_to do |format|
    format.html do
      redirect_to log_in_path, notice: "Logged out successfully"
      # Ensure this redirects to the login page with a success message
    end
    format.json do
      render json: { message: "Logged out successfully" }, status: :ok
      # Ensure the frontend handles this response correctly
    end
  end
end
end
