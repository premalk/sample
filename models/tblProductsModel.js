var db = require('../connection');
var utility = require('../scripts/utility');
product_model = function () { };

product_model.select = async (q) => {
    var obj = {product_name:'',where:''};
    if(utility.isEmpty(q.where) === false){
        var where_details = JSON.parse(q.where);
        if(where_details.hasOwnProperty('product_name') == true){
            obj.product_name = where_details.product_name;
        }
    }
    if(obj.product_name!=''){
        obj.where = ` where product_name = '${obj.product_name}'`;
    }
    if(obj.where !=''){
        var query = `select * from db_finance.tbl_products ${obj.where}`;
    }
    else{
        var query = `select * from db_finance.tbl_products`;
    }
    var result = await executeQuery(query);
    if (result.length > 0) {
        return result;
    }
};

product_model.insert = async (q) => {
    console.log('In product model');
    var p_name   = q.product_name  || '';
    var p_price  = q.product_price || '';
    var quantity = q.quantity || '';
    var query = `insert into db_finance.tbl_products set product_name = '${p_name}', product_price = '${p_price}' 
    , quantity = '${quantity}', entry_date= now()`;
    var result = await executeQuery(query);
    return result;
};

product_model.delete = async (q) => {
    var p_name = q.product_name || '';
    var query = `delete from db_finance.tbl_products where product_name = '${p_name}'`;
    var result = await executeQuery(query);
    return result;
};

product_model.update = async (q) => {
    var {product_name, product_price, quantity} = q;
    var obj_flag = { p_price:false, quantity:false};
    var set = '';
    if (utility.isEmpty(product_price) === true) {
        obj_flag.p_price = true;
    }
    if (utility.isEmpty(quantity) === true) {
        obj_flag.quantity = true;
    }
    if (obj_flag.p_price === false && obj_flag.quantity === false) {
        set = `product_price = '${product_price}', quantity = '${quantity}'`;
    }
    else if(obj_flag.p_price === false){
        set = `product_price = '${product_price}'`;
    }
    else if (obj_flag.quantity === false) {
        set = `quantity = '${quantity}'`;
    }
    var query = `update db_finance.tbl_products set ${set} where product_name = '${product_name}'`;
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

module.exports = product_model;
