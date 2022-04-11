const { MgetAllWishlist, MaddWishlist,MupdateWishlist,MdeleteWishlist } = require("../models/wishlist.models")

const CgetWishlist = async(req,res)=>{
    const result = await MgetAllWishlist();
    res.send(result)
    // res.send("get")
    console.log(result);
}

const CaddWishlist = async(req,res)=>{
    const {client,product,createdBy,updatedBy,createdOn}=req.body
    const result = await MaddWishlist(client,product,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("add")
    console.log(result);
}

const CupdtaeWishlist = async(req,res)=>{
    const {client,product,createdBy,updatedBy,createdOn}=req.body
    const {id} = req.params
    const result = await MupdateWishlist(id,client,product,createdBy,updatedBy,createdOn);
    res.send(result)
    // res.send("update")
    console.log(result);
}
const CdeleteWishlist = async(req,res)=>{
    const {id} = req.params
    const result = await MdeleteWishlist(id);
    res.send(result)
    // res.send("delete")
    console.log(result);
}





module.exports = {
    CgetWishlist,
    CaddWishlist,
    CupdtaeWishlist,
    CdeleteWishlist

}
