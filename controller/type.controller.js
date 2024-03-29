const { MgetAllType, MaddType,MupdateType,MdeleteType } = require("../models/type.model")

const CgetType = async(req,res)=>{
    const result = await MgetAllType();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const CaddType = async(req,res)=>{
    const {name,description,subcategory}=req.body
    const result = await MaddType(name,description,subcategory);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateType = async(req,res)=>{
    const {name,description,subcategory}=req.body
    const {id} = req.params
    const result = await MupdateType(id,name,description,subcategory);
    // res.send("update")
    res.send(result)
    console.log(result);
}
const CdeleteType = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteType(id);
    // res.send("delete")
    res.send(result)
    console.log(result);
}





module.exports = {
    CgetType,
    CaddType,
    CupdateType,
    CdeleteType

}
