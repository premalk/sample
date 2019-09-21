var db = require('../connection');
var utility = require('../scripts/utility');
cart_model = function () { };

cart_model.select = async (q) => {
    var user_name = q.user_name || '';
    var where = '';
    if (user_name != '') {
        where = ` where user_name = '${user_name}' and flag = 1`;
    }
    var query = `select * from db_finance.tbl_cart_details ${where}`;
    console.log(query);
    var result = await executeQuery(query);
    if (result.length > 0) {
        return result;
    }
};

cart_model.insert = async (q) => {
    var { product_name, product_price, user_name, flag, quantity } = q;
    var query = `insert into db_finance.tbl_cart_details set product_name = '${product_name}', product_price = '${product_price}', user_name = '${user_name}', flag = '${flag}',quantity= '${quantity}'`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};

cart_model.delete = async (q) => {
    var user_name      = q.user_name;
    var product_name   = q.product_name;
    var query = `delete from db_finance.tbl_cart_details where user_name = '${user_name}' and product_name = '${product_name}'`;
    console.log(query);
    var result = await executeQuery(query);
    return result;
};
cart_model.update = async (q) => {
    var {product_name, product_price, quantity, status} = q;
    var product_name = q.product_name;
    var query = `update db_finance.tbl_cart_details set product_name = '${product_name}' , product_price = '${product_price}', quantity = '${quantity}' where user_name = '${user_name}'`;
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

module.exports = cart_model;
