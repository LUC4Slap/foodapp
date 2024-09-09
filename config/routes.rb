Rails.application.routes.draw do
  namespace :admin do
    resources :orders
    resources :products do
      resources :stocks
    end
    resources :categories
  end
  devise_for :admins

  authenticated :admin_user do
    root to: "admin#index", as: :admin_root
  end
  get "admin" => "admin#index"
  get "cart" => "carts#show"
  post "checkout" => "checkouts#create"

  get "success" => "checkouts#success"
  get "cancel" => "checkouts#cancel"
  post "webhooks" => "webhooks#stripe"

  get "adicionar-depoimento" => "depoiment#new"
  post "adicionar-depoimento" => "depoiment#create"
  resources :categories, only: [:show]
  resources :products, only: [:show]
  # resources :depoiment

  root "home#index"
end
