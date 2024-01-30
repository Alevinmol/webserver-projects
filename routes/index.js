const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.alejandroRoute);
routes.get('/jesus', lesson1Controller.jesusRoute);
routes.get('/dora', lesson1Controller.doraRoute);

module.exports = routes;