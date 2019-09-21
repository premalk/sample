var express = require('express');
var Router = express.Router();
var productController = require('./productController');
var userController = require('./usersController');
var orderController = require('./orderController');
var regController   = require('./registrationController');
var viewProducts = require('./viewProductsController');
var cartController = require('./cartController');
var loginController = require('./loginController');

Router.post('/products', productController.actionRouter);
Router.post('/users', userController.actionRouter);
Router.post('/orders', orderController.actionRouter);

Router.post('/registration', regController.makeRegistration);
Router.post('/view-products', viewProducts.showProduct);
Router.post('/cart', cartController.counter);
Router.post('/login', loginController);

module.exports = Router;



