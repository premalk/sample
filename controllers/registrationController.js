"use strict";
var userModel  = require('../models/tblUsersModel');
var loginModel = require('../models/tblLoginModel');
var utility = require('../scripts/utility');
let registration = () => {};

registration.makeRegistration = async (req,res) => {
    var q = req.body;
    if(utility.isEmpty(q.user_name) === true){
        res.json({errorCode:1,result:'User Name Required'});
    }
    if(utility.isEmpty(q.email) === true){
        res.json({errorCode:1,result:'Email Required'});
    }
    if(utility.isEmpty(q.mobile_no) === true){
        res.json({errorCode:1,result:'Mobile Number Required'});
    }
    if(utility.isEmpty(q.password) === true){
        res.json({errorCode:1,result:'Password Required'});
    }
    if(utility.isEmpty(q.address) === true){
        res.json({errorCode:1,result:'Address Required'});
    }
    if(utility.isEmpty(q.access) === true){
        res.json({errorCode:1,result:'Access Required'});
    }
    var obj = { access:access,password:q.password,email: q.email, mobile_no: q.mobile_no, address: q.address, user_name: q.user_name};
    var result1 = await userModel.insert(obj);
    var result2 = await loginModel.insert(obj);
    res.json({errorCode:0,result:result2});
}

module.exports = registration;