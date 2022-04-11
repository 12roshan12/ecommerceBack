const { Mgetallorders, Maddorders, Mdeleteorders, Mupdateorders } = require("../models/order.models")


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
    const {client,product,createdBy,updatedBy,createdOn} = req.body
    const result = await Maddorders(client,product,createdBy,updatedBy,createdOn)
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
    const {client,product,createdBy,updatedBy,createdOn} = req.body
    const {id} = req.params
    const result = await Mupdateorders(id,client,product,createdBy,updatedBy,createdOn)
    console.log(result);
    if(result.error){
        res.status(400).json("Bad Request")
    }
    else{
        res.status(200).json(result.result)
    }
}

module.exports = {
    Cgetorders,
    Caddorders,
    Cdeleteorders,
    Cupdateorders
}