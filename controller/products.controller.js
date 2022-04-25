const { MgetAllProducts, MaddProducts,MupdateProducts,MdeleteProducts } = require("../models/products.models")

const CfindAllProducts = async(req,res)=>{
    const result = await MgetAllProducts();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddProducts = async(req,res)=>{
    const {vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,subImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn}=req.body
    
    const result = await MaddProducts(vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,subImageUrl,colorOption, JSON.stringify(tags),createdBy,updatedBy,createdOn,updatedOn);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateProducts = async(req,res)=>{
    const {vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,subImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn}=req.body
    const {id} = req.params
    const result = await MupdateProducts(id,vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,subImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn);
    // res.send("update")
    res.send(result)
    console.log(result);
}
const CdeleteProducts = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteProducts(id);
    res.send(result)
    // res.send("delete")
    console.log(result);
}





module.exports = {
    CfindAllProducts,
    CaddProducts,
    CupdateProducts,
    CdeleteProducts

}
