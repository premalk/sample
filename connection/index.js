const mysql = require('mysql');

exports.makeConnection = (done) =>{
    let con = mysql.createConnection({host:'localhost',user:'root',password:''});
    con.connect((err)=>{
        if(err) return done(err);
        done(false,con);
    })
};