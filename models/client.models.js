
const con = require('../database/db')


const Maddclient = async (clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO client (clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn) VALUES (?,?,?,?,?,?,?,?,?,?)";
        con.query(sql, [clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn], function (err, result) {
            console.log(result)
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const Mgetclient = async () => {

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM client";
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

const Mupdateclient = async (id,clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn) => {

    return new Promise((resolve, reject) => {
        const sql = "UPDATE client set clientId = ?,name =?,password =?,email =?,phoneNumber =?,address =?,createdBy=?,createdOn =?,updatedBy =?,updatedOn =? where id=?";
        con.query(sql, [clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn,id], function (err, result) {
            if (err) {
                resolve({ error: err, result: null })
            }
            else {
                resolve({ error: null, result: result })
            }
        })
    })
}

const Mdeleteclient = async (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM client where id = ?";
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
    Maddclient,
    Mgetclient,
    Mupdateclient,
    Mdeleteclient
}