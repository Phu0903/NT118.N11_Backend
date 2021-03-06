const express = require('express');
const client = express.Router();
const controller = require('../controllers/authentication');
const CORS = require('../middleware/CORS')

//Login account
client.get('/login', CORS, controller.loginGet)
client.post('/login', CORS, controller.loginPost)
client.get('/register', CORS, controller.registerGet)
client.post('/register', CORS, controller.registerPost)
client.get('/logout', controller.logout)

module.exports = client;
