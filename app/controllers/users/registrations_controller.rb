class Users::RegistrationsController < Devise::RegistrationsController
    respond_to :html, :json

    # Override the create action to handle registration via JSON
    def create
      build_resource(sign_up_params)
  
      if resource.save
        if resource.active_for_authentication?
          sign_up(resource_name, resource)
          render json: { message: 'Sign up successful!' }, status: :ok
        else
          expire_data_after_sign_in!
          render json: { message: 'Sign up successful, but user not active.' }, status: :ok
        end
      else
        clean_up_passwords resource
        set_minimum_password_length
        render json: { message: resource.errors.full_messages.join(", ") }, status: :unprocessable_entity
      end
    end
  
    private
  
    def sign_up_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
