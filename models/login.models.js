var con = require('../database/db')



const MVendorLogin = async (vendorId,password) => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM vendor where vendorId=? AND password=? ";

        con.query(sql,[vendorId,password], function (err, result) {


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


