const { MgetAllOffers, MaddOffers,MupdateOffers,MdeleteOffers } = require("../models/offers.models")

const CgetOffers = async(req,res)=>{
    const result = await MgetAllOffers();
    res.send(result)
    // res.send("get")
    console.log(result);
}

const CaddOffers = async(req,res)=>{
    const {product,offerName,description,createdBy,updatedBy,createdOn}=req.body
    const result = await MaddOffers(product,offerName,description,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("add")
    console.log(result);
}

const CupdateOffers = async(req,res)=>{
    const {product,offerName,description,createdBy,updatedBy,createdOn}=req.body 
    const {id} = req.params
    const result = await MupdateOffers(id,product,offerName,description,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("update")
    console.log(result);
}
const CdeleteOffers = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteOffers(id);
    res.send(result)
    // res.send("delete")
    console.log(result);
}





module.exports = {
    CgetOffers,
    CaddOffers,
    CupdateOffers,
    CdeleteOffers

}
