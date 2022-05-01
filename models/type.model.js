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


const MaddType = async (name,description,subcategory) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO type (name,description,subcategory) VALUES (?,?,?)";
        con.query(sql,[name,description,subcategory], function (err, result) {
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

const MupdateType = async (id,name,description,subcategory) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  type set name=?,description=?,subcategory=? where id = ? ";
        con.query(sql,[name,description,subcategory,id], function (err, result) {
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


