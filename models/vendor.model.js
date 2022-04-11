
const con = require('../database/db')


const Maddvendor = async (pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO vendors (pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy) VALUES (?,?,?,?,?,?,?,?)";
        con.query(sql, [pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const Mgetvendor = async () => {

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM vendors";
        con.query(sql, function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const Mupdatevendor = async (id,pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy) => {

    return new Promise((resolve, reject) => {
        const sql = "UPDATE vendors set pan=?,name=?,address=?,contactNo=?,authorizationType=?,createdBy=?,createdOn=?,updatedBy=? where id=?";
        con.query(sql, [pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy, id], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const Mdeletevendor = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM vendors where id = ?";
        con.query(sql, [id], function (err, result) {
            if (err) {
                resolve({ error: err, result: result })
            }
            else {
                resolve({ erorr: null, result: result })
            }
        })
    })
}


module.exports = {
    Maddvendor,
    Mgetvendor,
    Mupdatevendor,
    Mdeletevendor
}