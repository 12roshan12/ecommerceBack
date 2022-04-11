var con = require('../database/db')


const MgetAllCart = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM Cart";
        con.query(sql, function (err, result) {
           if(err){
               resolve({error:err,result:null})
           }
           else{
               resolve({error:null,result:result})
           }
        });
    })
}


const MaddCart = async (client,product,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO Cart (client,product,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?)";
        con.query(sql,[client,product,createdBy,updatedBy,createdOn], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log("1 Product Inserted");
            }
        });
    })
}

const MupdateCart = async (id,client,product,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  Cart set client=?,product=?,createdBy=?,updatedBy=?,createdOn = ? where id = ? ";
        con.query(sql,[client,product,createdBy,updatedBy,createdOn,id], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log(" Product Updated");
            }
        });
    })
}

const MdeleteCart = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM Cart  where id = ? ";
        con.query(sql,[id], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log(" Product Deleted");
            }
        });
    })
}





module.exports = {
    MgetAllCart,
    MaddCart,
    MupdateCart,
    MdeleteCart
    
}


