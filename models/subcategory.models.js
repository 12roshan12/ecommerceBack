var con = require('../database/db')


const MgetAllSubCategory = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM SubCategory";
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


const MaddSubCategory = async (name,description,category,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO SubCategory (name,description,category,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?,?)";
        con.query(sql,[name,description,category,createdBy,updatedBy,createdOn], function (err, result) {
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

const MupdateSubCategory = async (id,name,description,category,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  SubCategory set name=?,description=?,category=?,createdBy=?,updatedBy=?,createdOn=? where id = ? ";
        con.query(sql,[name,description,category,createdBy,updatedBy,createdOn,id], function (err, result) {
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

const MdeleteSubCategory = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM SubCategory  where id = ? ";
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
    MgetAllSubCategory,
    MaddSubCategory,
    MupdateSubCategory,
    MdeleteSubCategory
    
}


