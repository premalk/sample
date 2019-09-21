var db = require('../connection');
var utility = require('../scripts/utility');
order_model = function () { };

order_model.select = async (q) => {
    var order_by   = q.order_by || '';
    var order_date = q.order_date || '';
    var where = '';
    if (utility.isEmpty(order_by) === false) {
        where = ` where order_by = '${order_by}'`;
    }
    if (utility.isEmpty(order_date) === false) {
        where = ` where order_date >= '${order_date} 00:00:00' and order_date <= '${order_date} 23:59:59'`;
    }
    var query = `select * from db_finance.tbl_orders ${where}`;
    console.log(query);
    var result = await executeQuery(query);
    if (result.length > 0) {
        return result;
    }
};

order_model.insert = async (q) => {
    var { order_product, order_by, order_amount, quantity } = q;
    var order_id = utility.makeid('1234567890ABCDEFG');
    var query = `insert into db_finance.tbl_orders set order_id = '${order_id}',order_product = '${order_product}', order_by = '${order_by}', order_date = now(),order_amount = '${order_amount}',quantity= '${quantity}'`;
    var result = await executeQuery(query);
    return result;
};

order_model.delete = async (q) => {
    var {order_product, order_by} = q;
    var query = `delete from db_finance.tbl_orders where order_product = '${order_product}' and order_by = '${order_by}'`;
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

module.exports = order_model;
