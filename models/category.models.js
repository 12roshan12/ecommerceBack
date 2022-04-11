var con = require('../database/db')


const MgetAllCategory = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM category";
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


const MaddCategory = async (categoryName,categoryDesc,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO category (categoryName,categoryDesc,createdBy,updatedBy,createdOn) VALUES (?,?,?,?,?)";
        con.query(sql,[categoryName,categoryDesc,createdBy,updatedBy,createdOn], function (err, result) {
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

const MupdateCategory = async (id,categoryName,categoryDesc,createdBy,updatedBy,createdOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  category set categoryName=?,categoryDesc=?,createdBy=?,updatedBy=?,createdOn=? where id = ? ";
        con.query(sql,[categoryName,categoryDesc,createdBy,updatedBy,createdOn,id], function (err, result) {
            console.log(result);
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

const MdeleteCategory = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM category  where id = ? ";
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
    MgetAllCategory,
    MaddCategory,
    MupdateCategory,
    MdeleteCategory
    
}


