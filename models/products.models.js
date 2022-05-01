var con = require('../database/db')


const MgetAllProducts = async () => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM products";
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


const MaddProducts = async (vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn) => {
    return new Promise((resolve, reject) => {
        var sql = "INSERT INTO products (vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
        con.query(sql,[vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn], function (err, result) {
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

const MupdateProducts = async (id,vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn) => {
    return new Promise((resolve, reject) => {
        var sql = "UPDATE  products set vendorId = ?,name =?,description =?,quantity =?,price =?,categoryId =?,subCategoryId =?,typeId =?,brand =?,sizeAvailable =?,mainImageUrl =?,I1ImageUrl =?,I2ImageUrl =?,I3ImageUrl =?,colorOption =?,tags =?,createdBy =?,updatedBy =?,createdOn =?,updatedOn =? where id = ? ";
        con.query(sql,[vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn,id], function (err, result) {
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
        var sql = "DELETE FROM products  where id = ? ";
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

const Mgetproductsbyid = async (id) => {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM products  where id = ? ";
        con.query(sql,[id], function (err, result) {

            if(err){
                resolve({error:err,result:null})
            }
            else{
                if(result.length >0 )
                resolve({error:null,result:result[0]})

                else
                resolve({error:null,result:null})

                console.log(" Product Deleted");
            }
        });
    })
}

const MgetproductsbyVendorid = async (vendorId) => {
    return new Promise((resolve, reject) => {

        
        var sql = "SELECT * FROM products  where vendorId = ? ";
        con.query(sql,[vendorId], function (err, result) {

            console.log( "model" + result);
            console.log( "model" + err);

            if(err){
                resolve({error:err,result:null})
            }
            else{                
                resolve({error:null,result:result})              
                console.log(" Product Fetched");
            }
        });
    })
}






module.exports = {
    MgetAllProducts,
    MaddProducts,
    MupdateProducts,
    MdeleteProducts,
    Mgetproductsbyid,
    MgetproductsbyVendorid
    
}


