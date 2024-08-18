Rails.application.routes.draw do
  root "home_page#index"
  get 'parking', to: 'parking#index'
  get 'list_space', to: 'list_your_space#index'
  get 'plan_pricing', to: 'plan_pricing#index'
  get 'about_us', to: 'about_us#index'
  get 'contact_us', to: 'contact_us#index'
  get 'log_in', to: 'log_in#index'
end
