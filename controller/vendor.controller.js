const { Maddvendor,Mgetvendor,Mdeletevendor,Mupdatevendor } = require("../models/vendor.model")


const Caddvendor = async(req,res)=>{
    const {pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy} = req.body
    const result = await Maddvendor(pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy)
    console.log(result);
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cgetvendors = async(req,res)=>{
    const result = await Mgetvendor()
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cupdtaevendors  = async(req,res)=>{
    const {pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy} = req.body
    const {id} = req.params
    const result =await Mupdatevendor(id,pan,name,address,contactNo,authorizationType,createdBy,createdOn,updatedBy);
    console.log(result);
    if(result.error){

        res.status(400).json("Bad requets")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cdeletevendor = async(req,res)=>{
    const {id}= req.params
    const result = await Mdeletevendor(id);
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }

}


module.exports = {
    Caddvendor,
    Cgetvendors,
    Cupdtaevendors,
    Cdeletevendor
}