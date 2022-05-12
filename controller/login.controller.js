const { MVendorLogin} = require("../models/login.models")

const CVendorLogin = async(req,res)=>{
    const {id} = req.params
    const result = await MVendorLogin(id);
    // res.send("get")
    res.send(result)
    console.log(result);
}



module.exports = {
    CVendorLogin 

}
