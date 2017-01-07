Rails.application.routes.draw do

  resources :stops
  resources :tours
  root :to => 'tours#index'

  resources :user_sessions
  resources :users
  resources :password_resets

  get 'login' => 'user_sessions#new', :as => :login
  post 'logout' => 'user_sessions#destroy', :as => :logout

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
