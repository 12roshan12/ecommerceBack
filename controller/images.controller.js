const {Maddimages,Mgetimages } = require("../models/image.models")


const Caddimages = async(req,res)=>{
    const {name} = req.body
    const result = await Maddimages(name)
    console.log(result);
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }
}

const Cgetimages= async(req,res)=>{
    const result = await Mgetimages()
    if(result.error){
        res.status(400).json("Bad request")
    }
    else{
        res.status(200).json(result.result)
    }
}



module.exports = {
    Caddimages,
    Cgetimages
 
}