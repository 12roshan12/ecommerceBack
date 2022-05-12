var con = require('../database/db')


const MgetAllvendor = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM vendor";
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


const Maddvendor = async (vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO vendor (vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn) VALUES (?,?,?,?,?,?,?,?,?,?)";
        con.query(sql,[vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log("Vendor Inserted");
            }
        });
    })
}

const Mupdatevendor = async (id,vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  vendor set vendorId =?,name =?,password =?,email =?,phoneNumber =?,address =?,createdBy =?,updatedBy =?,createdOn =?,updatedOn =? where id = ? ";
        con.query(sql,[vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn,id], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log(" Vendor Updated");
            }
        });
    })
}

const Mdeletevendor = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "DELETE FROM vendor  where id = ? ";
        con.query(sql,[id], function (err, result) {
            if(err){
                resolve({error:err,result:null})
            }
            else{
                resolve({error:null,result:result})
                console.log(" Vendor Deleted");
            }
        });
    })
}





module.exports = {
    MgetAllvendor,
    Maddvendor,
    Mupdatevendor,
    Mdeletevendor
    
}


