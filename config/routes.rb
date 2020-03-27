Rails.application.routes.draw do
  resources :portfolios

  root :to => "portfolios#index"

  get 'pages/showreel'
  get 'pages/contact'
  get 'pages/blog'
  resources :pages

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
