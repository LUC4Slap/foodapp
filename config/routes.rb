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

  get "adicionar-depoimento" => "depoiment#index"

  root "home#index"
end
