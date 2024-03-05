/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

// import { HttpContext } from '@adonisjs/core/build/standalone'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async (ctx:HttpContextContract) => {

  ctx.user = "testing"
  return { hello: 'world' }
})
// adding .where is for validation for the id to avoid conflict with other routes with similar path
Route.get("/post/:id", async ({params})=> `get post with id ${params.id}`).where("id", /^[2-9]+$/)
// route.matchers
Route.get("/post/1",async()=> "this is for only 1")
Route.get("/post",async()=> "create a post")
Route.get('/post/topic/:topic?', ({params})=> `get post with topic ${params.topic}`).where("topic", /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/) // ? makes the parameter optional
// wildcard route
Route.get("/img/*", async ({params})=> params['*'][0])
Route.get("/pic/:userid/*", async ({params})=> params['userid'] + " " + params['*'][0])