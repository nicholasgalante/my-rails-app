Rails.application.routes.draw do
  resources :causes
  resources :donations
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/signin", to: "sessions#create"
  delete "/signout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
