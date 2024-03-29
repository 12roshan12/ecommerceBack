const { Maddclient,Mgetclient,Mdeleteclient,Mupdateclient } = require("../models/client.models")


const Caddclient = async(req,res)=>{
    const {clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn} = req.body
    const result = await Maddclient(clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn)
    console.log(result);
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cgetclients = async(req,res)=>{
    const result = await Mgetclient()
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cupdateclients  = async(req,res)=>{
    const {clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn} = req.body
    const {id} = req.params
    const result =await Mupdateclient(id,clientId,name,password,email,phoneNumber,address,createdBy,createdOn,updatedBy,updatedOn);
    console.log(result);
    if(result.error){

        res.status(400).json("Bad requets")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cdeleteclient = async(req,res)=>{
    const {id}= req.params
    const result = await Mdeleteclient(id);
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }

} 


module.exports = {
    Caddclient,
    Cgetclients,
    Cupdateclients,
    Cdeleteclient
}