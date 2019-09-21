"use strict";
var productModel = require('../models/tblProductsModel');
var utility = require('../scripts/utility');
var loginModel = require('../models/tblLoginModel');

let product_controller = () => {};

product_controller.actionRouter = (req,res) =>{
    var details = req.body;
    console.log(details);
    var self    = product_controller;
    var action  = details.action.toLowerCase();
    if(utility.isEmpty(action) === true){
        res.json({ errorCode: 1, result:'Action Parameter Required'});
    }
    switch(action){
        case 'select':
            self.select(req,res);
        break;
        case 'insert':
            self.insert(req,res);
        break;
        case 'delete':
            self.delete(req,res);
        break;
        case 'update':
            self.update(req,res);
    }
};

product_controller.select = async (req,res) => {
    var result = await productModel.select(req.body);
    if(result.length > 0){
        res.json({errorCode:0, result:result});
    }
};
product_controller.insert = async (req, res) => {
    var q = req.body;
    if(utility.isEmpty(q.user_name) == true){
        res.json({errorCode:1,result:'User Name Required'});
    }
    if(utility.isEmpty(q.password) == true){
        res.json({errorCode:1,result:'Password Required'});
    }
    var login_result = await loginModel.select(q);
    if(login_result.length > 0){
        var result = await productModel.insert(req.body);
        res.json({ errorCode: 0, result: result });
    }
    else{
        res.json({ errorCode: 1, result: 'You are not authorized to add product' });
    }
    
};
product_controller.delete = async (req, res) => {
    if (utility.isEmpty(req.body.product_name) === true) {
        res.json({ errorcode: 1, result: 'Product Name is Required' });
    }
    if(utility.isEmpty(q.user_name) == true){
        res.json({errorCode:1,result:'User Name Required'});
    }
    if(utility.isEmpty(q.password) == true){
        res.json({errorCode:1,result:'Password Required'});
    }
    var login_result = await loginModel.select(q);
    if(login_result.length > 0){
        var result = await productModel.delete(req.body);
        res.json({ errorCode: 0, result: result });    
    }
    else{
        res.json({ errorCode: 1, result: 'You are not authorized to delete product' });
    }
    
};
product_controller.update = async (req, res) => {
    if(utility.isEmpty(q.user_name) == true){
        res.json({errorCode:1,result:'User Name Required'});
    }
    if(utility.isEmpty(q.password) == true){
        res.json({errorCode:1,result:'Password Required'});
    }
    if (utility.isEmpty(req.body.product_name) === true) {
        res.json({ errorcode: 1, result: 'Product Name is Required' });
    }
    if (utility.isEmpty(req.body.product_price) === true && utility.isEmpty(req.body.quantity) === true) {
        res.json({ errorcode: 1, result: 'Price or Quantity Required' });
    }
    var login_result = await loginModel.select(q);
    if(login_result.length > 0){
        var result = await productModel.update(req.body);
        res.json({ errorCode: 0, result: result });
    }
    else{
        res.json({ errorCode: 1, result: 'You are not authorized to update product' });
    }
    
};

module.exports = product_controller;
