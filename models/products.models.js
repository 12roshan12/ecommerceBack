var con = require('../database/db')


const MgetAllProducts = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM product";
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


const MaddProducts = async (name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO product (name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        con.query(sql,[name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn], function (err, result) {
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

const MupdateProducts = async (id,name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  product set name=?,description=?,brand=?,quantity=?,category=?,multiColor=?,colorOption=?,subCategory=?,tag=?,vendor=?,price=?,createdBy=?,updatedBy=?,createdOn=? where id = ? ";
        con.query(sql,[name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn,id], function (err, result) {
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

const MdeleteProducts = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM product  where id = ? ";
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
    MgetAllProducts,
    MaddProducts,
    MupdateProducts,
    MdeleteProducts
    
}


