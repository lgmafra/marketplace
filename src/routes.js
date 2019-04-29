const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controller = require('./app/controllers')

routes.post('/users', controller.UserController.store)
routes.post('/sessions', controller.SessionController.store)

routes.use(authMiddleware)

routes.get('/ads', controller.AdController.index)
routes.get('/ads/:id', controller.AdController.show)
routes.post('/ads', controller.AdController.store)
routes.put('/ads/:id', controller.AdController.update)
routes.delete('/ads/:id', controller.AdController.destroy)

module.exports = routes
