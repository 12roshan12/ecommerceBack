const { MgetAllDelivery, MaddDelivery,MupdateDelivery,MdeleteDelivery } = require("../models/delivery.model")

const CgetDelivery = async(req,res)=>{
    const result = await MgetAllDelivery();
    res.send(result)
    // res.send("get")
    console.log(result);
}

const CaddDelivery = async(req,res)=>{
    const {orders,createdBy,updatedBy,createdOn}=req.body
    const result = await MaddDelivery(orders,createdBy,updatedBy,createdOn);
    // res.send("add")
    res.send(result)
    console.log(result);
}

const CupdateDelivery = async(req,res)=>{
    const {orders,createdBy,updatedBy,createdOn}=req.body
    const {id} = req.params
    const result = await MupdateDelivery(id,orders,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("update")
    console.log(result);
}
const CdeleteDelivery = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteDelivery(id);
    res.send(result)
    // res.send("delete")
    console.log(result);
}





module.exports = {
    CgetDelivery,
    CaddDelivery,
    CupdateDelivery,
    CdeleteDelivery

}
