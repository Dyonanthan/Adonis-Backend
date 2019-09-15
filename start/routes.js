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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('login', 'AuthController.login')
  Route.post('register', 'AuthController.register')
}).prefix('auth')

Route.group(() =>{
  Route.post('/', 'UserController.index').middleware('auth')
  Route.post('getuser/:id', 'UserController.show').middleware('auth')
  Route.post('delete/:id', 'UserController.delete').middleware('auth')
  Route.post('update/:id', 'UserController.update').middleware('auth')
}).prefix('users')