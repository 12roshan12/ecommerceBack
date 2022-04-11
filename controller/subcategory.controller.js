const { MgetAllSubCategory, MaddSubCategory,MupdateSubCategory,MdeleteSubCategory } = require("../models/subcategory.models")

const CgetSubCategory = async(req,res)=>{
    const result = await MgetAllSubCategory();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddSubCategory = async(req,res)=>{
    const {name,description,category,createdBy,updatedBy,createdOn}=req.body
    const result = await MaddSubCategory(name,description,category,createdBy,updatedBy,createdOn);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateSubCategory = async(req,res)=>{
    const {name,description,category,createdBy,updatedBy,createdOn}=req.body
    const {id} = req.params
    const result = await MupdateSubCategory(id,name,description,category,createdBy,updatedBy,createdOn);
    // res.send("update")
    res.send(result)
    console.log(result);
}
const CdeleteSubCategory = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteSubCategory(id);
    // res.send("delete")
    res.send(result)
    console.log(result);
}





module.exports = {
    CgetSubCategory,
    CaddSubCategory,
    CupdateSubCategory,
    CdeleteSubCategory

}
