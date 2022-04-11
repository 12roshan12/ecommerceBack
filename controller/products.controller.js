const { MgetAllProducts, MaddProducts,MupdateProducts,MdeleteProducts } = require("../models/products.models")

const CfindAllProducts = async(req,res)=>{
    const result = await MgetAllProducts();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddProducts = async(req,res)=>{
    const {name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn}=req.body
    const result = await MaddProducts(name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateProducts = async(req,res)=>{
    const {name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn}=req.body
    const {id} = req.params
    const result = await MupdateProducts(id,name,description,brand,quantity,category,multiColor,colorOption,subCategory,tag,vendor,price,createdBy,updatedBy,createdOn);
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
