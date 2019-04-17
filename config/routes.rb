Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index]
    end
  end

  root to: 'games#index'
end
