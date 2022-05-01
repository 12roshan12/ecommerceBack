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


const MaddCategory = async (categoryName,categoryDesc) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO category (categoryName,categoryDesc) VALUES (?,?)";
        con.query(sql,[categoryName,categoryDesc], function (err, result) {
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

const MupdateCategory = async (id,categoryName,categoryDesc) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  category set categoryName=?,categoryDesc=? where id = ? ";
        con.query(sql,[categoryName,categoryDesc,id], function (err, result) {
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


