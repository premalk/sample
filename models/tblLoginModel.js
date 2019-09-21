var db = require('../connection');
var utility = require('../scripts/utility');
login_model = function () { };

login_model.select = async (q) => {
    var user_name     = q.user_name || '';
    var password = q.password || '';
    var where = '';
    var access = 0;
    if (user_name != '' && password!='') {
        where = ` where user_name = '${user_name}' and password = '${password}'`;
    }
    if(q.login_type === 'user'){
        access = 1;
    }
    else if(q.login_type === 'admin'){
        access = 2;
    }
    if(utility.isEmpty(q.login_type) == true){
        access = 2;
    }
    var query = `select * from db_finance.tbl_login ${where} and access = ${access}`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};

login_model.insert = async (q) => {
    var { user_name, password, access } = q;
    var query = `insert into db_finance.tbl_login set user_name = '${user_name}', password = '${password}', access = '${access}'`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};

login_model.delete = async (q) => {
    var user_name = q.user_name;
    var query = `delete from db_finance.tbl_login where user_name = '${user_name}'`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};
executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        db.makeConnection((err, con) => {
            if (err) reject(err);
            con.query(query, (err1, result) => {
                if (err1) reject(err1);
                resolve(result);
            })
        });
    });
};

module.exports = login_model;
