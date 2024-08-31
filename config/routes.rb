Rails.application.routes.draw do
  get '/csrf_token', to: 'csrf_token#show'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
  }, skip: [:registrations] # Skip default registration routes

  devise_scope :user do
    get 'log_in', to: 'react_pages#log_in', as: :log_in
    get 'users/sign_up', to: 'react_pages#sign_up', as: :new_user_registration
    get 'forgot_password', to: 'react_pages#forgot_password', as: :forgot_password
    post 'users', to: 'users/registrations#create', as: :user_registration
    delete '/logout', to: 'users/sessions#destroy'
  end

  root "home_page#index"
  get 'parking', to: 'parking#index'
  get 'list_space', to: 'list_your_space#index'
  get 'plan_pricing', to: 'plan_pricing#index'
  get 'about_us', to: 'about_us#index'
  get 'contact_us', to: 'contact_us#index'
  get 'users_home_page', to: 'react_pages#users_home_page'
end
