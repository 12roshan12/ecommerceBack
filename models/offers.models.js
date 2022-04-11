var con = require('../database/db')


const MgetAllOffers = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM Offers";
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


const MaddOffers = async (product,offerName,description,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO Offers (product,offerName,description,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?,?)";
        con.query(sql,[product,offerName,description,createdBy,updatedBy,createdOn], function (err, result) {
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

const MupdateOffers = async (id,product,offerName,description,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  Offers set product=?,offerName=?,description=?,createdBy=?,updatedBy=?,createdOn = ? where id = ? ";
        con.query(sql,[product,offerName,description,createdBy,updatedBy,createdOn,id], function (err, result) {
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

const MdeleteOffers = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM Offers  where id = ? ";
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
    MgetAllOffers,
    MaddOffers,
    MupdateOffers,
    MdeleteOffers
    
}


