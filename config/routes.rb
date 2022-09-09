Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show]
    resources :users do
      resources :reservations, only: [:create, :index, :show, :destroy, :update]
    end
    resource :session, only: [:create, :destroy]
    resources :rooms, only: [:index, :show]
  end
end
