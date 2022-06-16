
var con = require('../database/db.js')


const Mgetallorders = async () => {

    return new Promise((resolve, reject) => {
        var sql = 'SELECT * FROM orders';
        con.query(sql, function (err, result) {
            if (err) {
                resolve({ error: err, resul: null })
            }
            else {
                resolve({ err: null, result: result })
            }
        })

    })

}


const Maddorders = async (clientId, productId, vendorId, quantity, status, orderedBy, orderedOn, updatedBy, updatedOn) => {
    return new Promise((resolve, reject) => {

        var sql = "INSERT INTO orders (clientId,productId,vendorId, quantity,status,orderedBy,orderedOn,updatedBy,updatedOn) VALUES(?,?,?,?,?,?,?,?,?)";
        con.query(sql, [clientId, productId, vendorId, quantity, status, orderedBy, orderedOn, updatedBy, updatedOn], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })

    })
}

const Mupdateorders = async (id, clientId, productId, vendorId, quantity, status, orderedBy, orderedOn, updatedBy, updatedOn) => {


    return new Promise((resolve, reject) => {
        var sql = "UPDATE orders set clientId = ?,productId =?,vendorId =?,quantity = ?,status =?,orderedBy =?,orderedOn =?,updatedBy =?,updatedOn =? where id = ?"
        con.query(sql, [clientId, productId, vendorId, quantity, status, orderedBy, orderedOn, updatedBy, updatedOn, id], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const Mdeleteorders = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM orders where id=?";
        con.query(sql, [id], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const MgetOrdersbyVendorid = async (vendorId) => {
    return new Promise((resolve, reject) => {


        var sql = "SELECT * FROM orders where vendorId = ? ";
        con.query(sql, [vendorId], function (err, result) {


            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
                console.log(vendorId);

                console.log(result)
                console.log(" Order Fetched");
            }
        });
    })
}

const MgetOrdersandproductbyVendorid = async (vendorId) => {
    return new Promise((resolve, reject) => {


        var sql = "SELECT * FROM orders where vendorId = ? ";
        con.query(sql, [vendorId], function (err, result) {


            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                var obj 
                const temp = Object.values(JSON.parse(JSON.stringify(result.result)));
                for (var i = 0; i < temp.length; i++) {
                     obj = temp[i];
                }
                console.log(obj);
                console.log(result);
                resolve({ error: null, result: result })
                console.log(vendorId);
            }
        });
    })
}

module.exports = {
    Mgetallorders,
    Maddorders,
    Mupdateorders,
    Mdeleteorders,
    MgetOrdersbyVendorid,
    MgetOrdersandproductbyVendorid
}