const { MVendorLogin} = require("../models/login.models")

const CVendorLogin = async(req,res)=>{
    const {vendorId,password} = req.body
    const result = await MVendorLogin(vendorId,password);
    // res.send("get")
    res.send(result)
    console.log(result);
}



module.exports = {
    CVendorLogin 
}
