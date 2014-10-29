Rails.application.routes.draw do

  # NOTE: like i mentioned in your static_pages controller
  # might wanna move move these routes to two discrete controllers

  root                'static_pages#home' # root 'home#index'

  # NOTE: there's a new syntax since ruby 1.9 that does away with the hashrocket (=>)
  # and moves to colon (:) so if you want to go with that (who knows, maybe they'll deprecate
  # hashrocket some day) your new definition would look like this:
  # resource :contact, only: :index
  # you can whitelist more actions with an array (e.g. only: [:index, :show, :blahblah])
  # or blacklist actions via except: [:put, :destroy], etc.
  # good move using `get` instead of `match` though. stay away from `match`
  get 'contact'   =>  'static_pages#contact'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
