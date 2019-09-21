"use strict";
var userModel = require('../models/tblUsersModel');
var utility = require('../scripts/utility');

let user_controller = () => { };

user_controller.actionRouter = (req, res) => {
    console.log('dfgdf');
    var details = req.body;
    var self = user_controller;
    if (utility.isEmpty(details.action) === true) {
        res.json({ errorCode: 1, result: 'Action Parameter Required' });
    }
    var action = details.action.toLowerCase();
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
        case 'register':
            self.register(req,res);
    }
};

user_controller.register = async (req, res) => {
    console.log('hola');
    var result = await userModel.insert(req.body);
    res.json({ errorCode: 0, result: result });
};

user_controller.select = async (req, res) => {
    if (utility.isEmpty(req.body.user_name) === true) {
        res.json({ errorcode: 1, result: 'User Name is Required' });
    }
    var result = await userModel.select(req.body);
    if (result.length > 0) {
        res.json({ errorCode: 0, result: result });
    }
};
user_controller.insert = async (req, res) => {
    var result = await userModel.insert(req.body);
    res.json({ errorCode: 0, result: result });
};
user_controller.delete = async (req, res) => {
    if (utility.isEmpty(req.body.user_id) === true) {
        res.json({ errorcode: 1, result: 'User Id is Required' });
    }
    var result = await userModel.delete(req.body);
    res.json({ errorCode: 0, result: result });
};

module.exports = user_controller;
