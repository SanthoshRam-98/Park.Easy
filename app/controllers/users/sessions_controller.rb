# app/controllers/users/sessions_controller.rb
class Users::SessionsController < Devise::SessionsController
  def create
    Rails.logger.debug "Attempting to authenticate user with email: #{params[:user][:email]}"
    user = User.find_by(email: params[:user][:email])

    if user && user.valid_password?(params[:user][:password])
      sign_in(user)
      Rails.logger.debug "User #{user.email} signed in successfully"
      render json: { message: 'Login successful!' }, status: :ok
    else
      Rails.logger.debug "Invalid email or password for #{params[:user][:email]}"
      render json: { message: 'Invalid email or password.' }, status: :unauthorized
    end
  end

  def destroy
    Rails.logger.debug "Attempting to sign out user"
    sign_out_all_scopes
    reset_session
    Rails.logger.debug "User signed out and session reset"
    respond_to do |format|
      format.html { redirect_to log_in_path, notice: "Logged out successfully" }
      format.json { render json: { message: "Logged out successfully" }, status: :ok }
    end
  end
end
