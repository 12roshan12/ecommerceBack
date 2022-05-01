const { MgetAllProducts, MaddProducts,MupdateProducts,MdeleteProducts,Mgetproductsbyid,MgetproductsbyVendorid } = require("../models/products.models")

const CfindAllProducts = async(req,res)=>{
    const result = await MgetAllProducts();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddProducts = async(req,res)=>{
    const {vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn}=req.body
    
    const result = await MaddProducts(vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,JSON.stringify(sizeAvailable),mainImageUrl,I1ImageUrl,I2ImageUrl,I3ImageUrl,JSON.stringify(colorOption), JSON.stringify(tags),createdBy,updatedBy,createdOn,updatedOn);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateProducts = async(req,res)=>{
    const {vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,sizeAvailable,mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,colorOption,tags,createdBy,updatedBy,createdOn,updatedOn}=req.body
    const {id} = req.params
    const result = await MupdateProducts(id,vendorId,name,description,quantity,price,categoryId,subCategoryId,typeId,brand,JSON.stringify(sizeAvailable),mainImageUrl,I1ImageUrl,I2ImageUrl ,I3ImageUrl,JSON.stringify(colorOption), JSON.stringify(tags),createdBy,updatedBy,createdOn,updatedOn);
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
const Cgetproductsbyid = async(req,res)=>{
    const {id} = req.params
    const result = await Mgetproductsbyid(id);
    res.send(result)
    // res.send("delete")
    console.log(result);
}
const CgetproductsbyVendorid = async(req,res)=>{

    console.log(req);
    const {vendorId} = req.params
    const result = await MgetproductsbyVendorid(vendorId);
    res.send(result)
    console.log("controller" + result);
}





module.exports = {
    CfindAllProducts,
    CaddProducts,
    CupdateProducts,
    CdeleteProducts,
    Cgetproductsbyid,
    CgetproductsbyVendorid

}
