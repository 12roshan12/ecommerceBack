const { MgetAllCart, MaddCart,MupdateCart,MdeleteCart } = require("../models/cart.models")

const CgetCart = async(req,res)=>{
    const result = await MgetAllCart();
    res.send(result)
    // res.send("get")
    console.log(result);
}

const CaddCart = async(req,res)=>{
    const {client,product,createdBy,updatedBy,createdOn}=req.body
    const result = await MaddCart(client,product,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("add")
    console.log(result);
}

const CupdateCart = async(req,res)=>{
    const {client,product,createdBy,updatedBy,createdOn}=req.body
    const {id} = req.params
    const result = await MupdateCart(id,client,product,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("update")
    console.log(result);
}
const CdeleteCart = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteCart(id);
    res.send(result)
    // res.send("delete")
    console.log(result);
}





module.exports = {
    CgetCart,
    CaddCart,
    CupdateCart,
    CdeleteCart

}

