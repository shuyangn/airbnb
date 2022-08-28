Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :rooms, only: [:index, :show] do
      resources :reservations, only: [:create]
    end
    resources :reservations, only: [:index, :show, :destroy, :update]
  end
end
