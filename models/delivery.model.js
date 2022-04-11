var con = require('../database/db')


const MgetAllDelivery = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM Delivery";
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


const MaddDelivery = async (orders,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO Delivery (orders,createdBy,updatedBy,createdOn) VALUES (?,?,?,?)";
        con.query(sql,[orders,createdBy,updatedBy,createdOn], function (err, result) {
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

const MupdateDelivery = async (id,orders,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  Delivery set orders=?,createdBy=?,updatedBy=?,createdOn= ? where id = ? ";
        con.query(sql,[orders,createdBy,updatedBy,createdOn,id], function (err, result) {
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

const MdeleteDelivery = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM Delivery  where id = ? ";
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
    MgetAllDelivery,
    MaddDelivery,
    MupdateDelivery,
    MdeleteDelivery
    
}


