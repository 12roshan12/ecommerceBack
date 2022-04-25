var con = require('../database/db')


const MgetAllType = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM type";
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


const MaddType = async (name,description,category,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO type (name,description,category,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?,?)";
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

const MupdateType = async (id,name,description,category,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  type set name=?,description=?,category=?,createdBy=?,updatedBy=?,createdOn=? where id = ? ";
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

const MdeleteType = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM type  where id = ? ";
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
    MgetAllType,
    MaddType,
    MupdateType,
    MdeleteType
    
}


