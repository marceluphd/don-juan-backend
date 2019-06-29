'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

// Users
Route.post('users', 'UserController.store').validator('User')

// Sessions
Route.post('sessions', 'SessionController.store').validator('Session').middleware('device')

// Protected routes
Route.group(() => {
  Route.resource('products', 'ProductController')
    .apiOnly()
    .validator(new Map([[['products.store'], ['Product']]]))
    .middleware(
      new Map([
        [['products.store', 'products.update', 'products.destroy'], ['is:administrator']]
      ]))

  Route.resource('products.types', 'TypeController')
    .apiOnly()
    .validator(new Map([[['products.types.store'], ['Type']]]))
    .middleware(
      new Map([
        [['products.types.store', 'products.types.update', 'products.types.destroy'], ['is:administrator']]
      ]))

  Route.resource('sizes', 'SizeController')
    .apiOnly()
    .validator(new Map([[['sizes.store'], ['Size']]]))
    .middleware(
      new Map([
        [['sizes.store', 'sizes.update', 'sizes.destroy'], ['is:administrator']]
      ]))
}).middleware('auth')
