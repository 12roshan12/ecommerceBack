const { MgetAllCategory, MaddCategory,MupdateCategory,MdeleteCategory } = require("../models/category.models")

const CgetCategory = async(req,res)=>{
    const result = await MgetAllCategory();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddCategory = async(req,res)=>{
    console.log(req);
    const {categoryName,categoryDesc}=req.body
    const result = await MaddCategory(categoryName,categoryDesc);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateCategory = async(req,res)=>{
    const {categoryName,categoryDesc}=req.body
    const {id} = req.params
    const result = await MupdateCategory(id,categoryName,categoryDesc);
    // res.send("update")
    res.send(result)
    console.log(result);
}
const CdeleteCategory = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteCategory(id);
    // res.send("delete")
    res.send(result)
    console.log(result);
}





module.exports = {
    CgetCategory,
    CaddCategory,
    CupdateCategory,
    CdeleteCategory

}
