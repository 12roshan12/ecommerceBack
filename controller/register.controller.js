const { MgetAllvendor, Maddvendor,Mupdatevendor,Mdeletevendor } = require("../models/register.models")

const Cgetvendor = async(req,res)=>{
    const result = await MgetAllvendor();
    // res.send("get")
    res.send(result)
    console.log(result);
}

const Caddvendor = async(req,res)=>{
    const {vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn}=req.body
    const result = await Maddvendor(vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const Cupdatevendor = async(req,res)=>{
    const {vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn}=req.body
    const {id} = req.params
    const result = await Mupdatevendor(id,vendorId,name,password,email,phoneNumber,address,createdBy,updatedBy,createdOn,updatedOn);
    // res.send("update")
    res.send(result)
    console.log(result);
}
const Cdeletevendor = async(req,res)=>{
    const {id} = req.params
    const result = await Mdeletevendor(id);
    // res.send("delete")
    res.send(result)
    console.log(result);
}





module.exports = {
    Cgetvendor,
    Caddvendor,
    Cupdatevendor,
    Cdeletevendor

}
