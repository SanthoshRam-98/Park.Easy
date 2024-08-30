Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  devise_scope :user do
    post 'users/sign_in', to: 'users/sessions#create'
    get 'log_in', to: 'users/sessions#new', as: :log_in
  end

  root "home_page#index"
  get 'parking', to: 'parking#index'
  get 'list_space', to: 'list_your_space#index'
  get 'plan_pricing', to: 'plan_pricing#index'
  get 'about_us', to: 'about_us#index'
  get 'contact_us', to: 'contact_us#index'
end
