"use strict";
var loginModel = require('../models/tblLoginModel');
var utility = require('../scripts/utility');

let login_controller = async (req,res) =>{
    var q = req.body;
    if(utility.isEmpty(q.user_name) === true){
        res.json({errorCode:1,result:'User Name Required'});
    }
    if(utility.isEmpty(q.password) === true){
        res.json({errorCode:1,result:'Password Required'});
    }
    if(utility.isEmpty(q.login_type) === true){
        res.json({errorCode:1,result:'Login Type Required'});
    }
    var result = await loginModel.select(q);
    if(result.length > 0){
        res.json({errorCode:0,result:'Successfully Login'});
    }
    else{
        res.json({errorCode:1,result:'Something Went Wrong'});
    }
    
};
module.exports = login_controller;