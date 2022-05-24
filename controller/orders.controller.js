const { Mgetallorders, Maddorders, Mdeleteorders, Mupdateorders,MgetOrdersbyVendorid } = require("../models/order.models")


const Cgetorders = async(req,res)=>{
    const result = await Mgetallorders()
    if (result.error){
        res.status(400).json("Bad Request")
        return
    }
    else{
        res.status(200).json(result.result)
        return
    }

}

const Caddorders = async(req,res)=>{
    const {clientId,productId,vendorId,status,orderedBy,orderedOn,updatedBy,updatedOn} = req.body
    const result = await Maddorders(clientId,productId,vendorId,status,orderedBy,orderedOn,updatedBy,updatedOn)
    if(result.error){
        console.log(result.error);
        res.status(400).json("Bad Request")
        return
    }
    else{
        res.status(200).json(result.result)
        return
    }
}

const Cdeleteorders = async(req,res)=>{
    const {id} = req.params
    const result = await Mdeleteorders(id)
    if(result.error){
        res.status(400).json("Bad Request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cupdateorders = async(req,res)=>{
    const {clientId,productId,vendorId,status,orderedBy,orderedOn,updatedBy,updatedOn} = req.body
    const {id} = req.params
    const result = await Mupdateorders(id,clientId,productId,vendorId,status,orderedBy,orderedOn,updatedBy,updatedOn)
    console.log(result);
    if(result.error){
        res.status(400).json("Bad Request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const CgetOrderssbyVendorid = async(req,res)=>{

    console.log( "request" + req);
    const {vendorId} = req.params
    const result = await MgetOrdersbyVendorid(vendorId);
    if(result.error){
        res.status(400).json("Bad Request")
    }
    else{
        res.status(200).json(result.result)
    }
    console.log("controller" + result);
}


module.exports = {
    Cgetorders,
    Caddorders,
    Cdeleteorders,
    Cupdateorders,
    CgetOrderssbyVendorid
}