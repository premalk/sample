"use strict";
var cartModel = require('../models/tblCartModel');
var orderModel = require('../models/tblOrdersModel');
var utility = require('../scripts/utility');

let cart_controller = () => { };

cart_controller.counter = (req, res) => {
    var q = req.body;
    var self = cart_controller;
    if(utility.isEmpty(q.product_name) === true){
        res.json({errorCode:1,result:'Product Name Required'});
    }
    if(utility.isEmpty(q.product_price) === true){
        res.json({errorCode:1,result:'Product Price Required'});
    }
    if(utility.isEmpty(q.user_name) === true){
        res.json({errorCode:1,result:'User Name Required'});
    }
    if(utility.isEmpty(q.quantity) === true){
        res.json({errorCode:1,result:'Quantity Required'});
    }
    if(utility.isEmpty(q.flag) === true){
        res.json({errorCode:1,result:'Flag Required'});
    }
    if(utility.isEmpty(q.action) === true){
        res.json({errorCode:1,result:'Action Required'});
    }
    switch(q.action){
        case 'add-cart':
            self.add_cart(req,res);
        break;
        case 'view-cart':
            self.view_cart(req,res);
        break;
        case 'edit-cart':
            self.edit_cart(req,res);
        break;
        case 'delete-cart':
            self.delete_cart(req,res);
        break;
        case 'confirm-cart':
            self.store_cart(req,res);
        break;
    }
};

cart_controller.add_cart = async (req,res) => {
    var result = await cartModel.insert(req.body);
    res.json({errorCode:0,result:result});
};
cart_controller.view_cart = async (req,res) => {
    var result = await cartModel.select(req.body);
    res.json({errorCode:0,result:result});
};
cart_controller.edit_cart = async (req,res) => {
    var result = await cartModel.update(req.body);
    res.json({errorCode:0,result:result});
};
cart_controller.delete_cart = async (req,res) => {
    var result = await cartModel.delete(req.body);
    res.json({errorCode:0,result:result});
};
cart_controller.store_cart = async (req,res) => {
    console.log('hola'); 
    var q = req.body;
    var obj = {order_product:q.product_name, order_amount:q.product_price, quantity:q.quantity,order_by:q.user_name};
    var result = await orderModel.insert(obj);
    res.json({errorCode:0,result:result});
};
module.exports = cart_controller;
