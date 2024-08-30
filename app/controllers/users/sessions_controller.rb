# frozen_string_literal: true
# app/controllers/users/sessions_controller.rb
class Users::SessionsController < Devise::SessionsController
  respond_to :html, :json

  # def new
  #   respond_to do |format|
  #     format.html { render 'users/sessions/new' }  # This will render the HTML for the log_in page
  #     format.json { render json: { message: 'Use POST /users/sign_in for login.' }, status: :not_acceptable }
  #   end
  # end 

  def create
    Rails.logger.debug "Attempting to authenticate user with email: #{params[:user][:email]}"
    user = User.find_by(email: params[:user][:email])

    if user && user.valid_password?(params[:user][:password])
      sign_in(user)
      render json: { message: 'Login successful!' }, status: :ok
    else
      render json: { message: 'Invalid email or password.' }, status: :unauthorized
    end
  end
  

  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Logged out successfully.' }
      format.json { log_out_success }
    end
  end

  protected

def after_sign_in_path_for(resource)
  root_path # Redirect to the root path or any other path you prefer
end

def after_sign_out_path_for(resource_or_scope)
  log_in_path # Redirect to your custom login page after sign out
end
end

