var con = require('../database/db')


const MVendorLogin = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM vendor where id=?";
        con.query(sql,[id], function (err, result) {
           if(err){
               resolve({error:err,result:null})
           }
           else{
               resolve({error:null,result:result})
           }
        });
    })
}



module.exports = {
    MVendorLogin
    
    
}


