var con = require('../database/db')


const MgetAllWishlist = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM Wishlist";
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


const MaddWishlist = async (client,product,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO Wishlist (client,product,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?)";
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

const MupdateWishlist = async (id,client,product,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  Wishlist set client=?,product=?,createdBy=?,updatedBy=?,createdOn = ? where id = ? ";
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

const MdeleteWishlist = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM Wishlist  where id = ? ";
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
    MgetAllWishlist,
    MaddWishlist,
    MupdateWishlist,
    MdeleteWishlist
    
}


