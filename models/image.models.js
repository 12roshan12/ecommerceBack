
const con = require('../database/db')


const Maddimages = async (name) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO images (name) VALUES (?)";
        con.query(sql, [name], function (err, result) {
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

const Mgetimages = async () => {

    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM images";
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

// const Mupdateclient = async (id,pan,name,address,contactNo,createdBy,createdOn,updatedBy) => {

//     return new Promise((resolve, reject) => {
//         const sql = "UPDATE clients set pan=?,name=?,address=?,contactNo=?,createdBy=?,createdOn=?,updatedBy=? where id=?";
//         con.query(sql, [pan,name,address,contactNo,createdBy,createdOn,updatedBy, id], function (err, result) {
//             if (err) {
//                 resolve({ error: err, result: null })
//             }
//             else {
//                 resolve({ error: null, result: result })
//             }
//         })
//     })
// }

// const Mdeleteclient = async (id) => {
//     return new Promise((resolve, reject) => {
//         const sql = "DELETE FROM clients where id = ?";
//         con.query(sql, [id], function (err, result) {
//             if (err) {
//                 resolve({ error: err, result: result })
//             }
//             else {
//                 resolve({ erorr: null, result: result })
//             }
//         })
//     })
// }


module.exports = {
    Maddimages,
    Mgetimages
    
}