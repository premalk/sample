"use strict";
var orderModel = require('../models/tblOrdersModel');
var utility = require('../scripts/utility');

let order_controller = () => { };

order_controller.actionRouter = (req, res) => {
    
    var details = req.body;
    var self = order_controller;
    var action = details.action.toLowerCase();
    if (utility.isEmpty(action) === true) {
        res.json({ errorCode: 1, result: 'Action Parameter Required' });
    }
    switch (action) {
        case 'select':
            self.select(req, res);
            break;
        case 'insert':
            self.insert(req, res);
            break;
        case 'delete':
            self.delete(req, res);
            break;
    }
}; 

order_controller.select = async (req, res) => {
    var q = req.body;
    if(utility.isEmpty(q.login_type) == true){
        res.json({ errorcode: 1, result: 'Login Type Required' });    
    }
    if(q.login_type === 'user'){
        if(utility.isEmpty(q.order_by) === true){
            res.json({ errorcode: 1, result: 'Order By Required' });    
        }
    }
    else if(q.login_type === 'admin'){
        if(utility.isEmpty(q.order_date) === true){
            res.json({ errorcode: 1, result: 'Order Date Required' });    
        }
    }
    if (utility.isEmpty(q.order_by) === true && utility.isEmpty(q.order_date) === true) {
        res.json({ errorcode: 1, result: 'Order By or Order Date Required' });
    }
    var result = await orderModel.select(q);
    if (result.length > 0) {
        res.json({ errorCode: 0, result: result });
    }
};
order_controller.insert = async (req, res) => {
    var result = await orderModel.insert(req.body);
    res.json({ errorCode: 0, result: result });
};
order_controller.delete = async (req, res) => {
    if (utility.isEmpty(req.body.order_by) === true) {
        res.json({ errorcode: 1, result: 'Order By is Required' });
    }
    if (utility.isEmpty(req.body.order_date) === true) {
        res.json({ errorcode: 1, result: 'Order Date is Required' });
    }
    var result = await orderModel.delete(req.body);
    res.json({ errorCode: 0, result: result });
};

module.exports = order_controller;
