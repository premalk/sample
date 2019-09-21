"use strict";
var productModel = require('../models/tblProductsModel');

let viewController = () => {};
viewController.showProduct = async (req,res) => {
    var q = req.body;
    var result = await productModel.select(q);
    res.json({errorCode:0, result:result});
}; 

module.exports = viewController;