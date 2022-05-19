var con = require('../database/db')



const MVendorLogin = async (vendorId) => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM vendor where vendorId=?";

        con.query(sql,[vendorId], function (err, result) {


            if(err){
                resolve({error:err,result:null})
            }
            
            else{        
                resolve({result})                
            }         
           
        });
    })
}
 


module.exports = {
    MVendorLogin
    
    
}


