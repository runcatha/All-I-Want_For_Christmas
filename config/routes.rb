Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # post '/users', to 'users#create'
  resources :users, only: [:create, :index, :show]
  post '/groups/:id/join', to: 'groups#add_user_to_group'
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :groups
  resources :gifts
end
