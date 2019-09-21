var db = require('../connection');
var utility = require('../scripts/utility');
user_model = function () { };

user_model.select = async (q) => {
    var user_name = q.user_name || '';
    var where = '';
    if (user_name != '') {
        where = ` where user_name = '${user_name}'`;
    }
    if (where != '') {
        var query = `select * from db_finance.tbl_users ${where}`;
    }
    else {
        var query = `select * from db_finance.tbl_users`;
    }
    console.log(query);
    var result = await executeQuery(query);
    if (result.length > 0) {
        return result;
    }
};

user_model.insert = async (q) => {
    var {user_name, email, mobile_no, address} = q;
    var query = `insert into db_finance.tbl_users set user_name = '${user_name}', email = '${email}' 
    , mobile_no = '${mobile_no}' , address = '${address}', entry_date = now()`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};

user_model.delete = async (q) => {
    var user_name = q.user_name;
    var query = `delete from db_finance.tbl_users where user_name = '${user_name}'`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};

/*user_model.update = async (q) => {
    var { email, mobile_no,address } = q;
    var obj_flag = { email: false, mobile_no: false, address:false};
    var set = '';
    if (utility.isEmpty(email) === true) {
        obj_flag.email = true;
    }
    if (utility.isEmpty(mobile_no) === true) {
        obj_flag.mobile_no = true;
    }
    if (utility.isEmpty(address) === true) {
        obj_flag.address = true;
    }
    if (obj_flag.email === false && obj_flag.mobile_no === false && obj_flag.address === flase) {
        set = `product_price = '${product_price}', quantity = '${quantity}'`;
    }
    else if (obj_flag.p_price === false) {
        set = `product_price = '${product_price}'`;
    }
    else if (obj_flag.quantity === false) {
        set = `quantity = '${quantity}'`;
    }
    var query = `update db_finance.tbl_users set ${set} where product_name = '${product_name}'`;
    var result = await executeQuery(query);
    return result;
};*/

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

module.exports = user_model;
