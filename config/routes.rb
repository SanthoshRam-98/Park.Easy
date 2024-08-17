Rails.application.routes.draw do
  root "home_page#index"
  get 'parking', to: 'parking#index'
end
