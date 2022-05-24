const { MVendorLogin } = require("../models/login.models")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const CVendorLogin = async (req, res) => {
    const { vendorId } = req.body
    const result = await MVendorLogin(vendorId);

    console.log("aaaa" + result.result.length);
    if (result.result.length == 1) {

        console.log("entered loops");
        const temp = Object.values(JSON.parse(JSON.stringify(result.result)));

        for (var i = 0; i < temp.length; i++) {
            var obj = temp[i];
            console.log(obj);
        }
        console.log(await bcrypt.compare(req.body.password, obj.password));
        console.log(req.body.password);

        try {
            if (await bcrypt.compare(req.body.password, obj.password)) {
                const username = obj.vendorId
                const user = { name: username, password: obj.password.password }
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
                    // expiresIn: '10s',
                })
                res.send({ status: 200, message: "Login Successful", access_token: accessToken })
            }
            else {
                res.send({ status: 400, message: "Incorrect Password" })
                console.log("b");
            }
        }
        catch {
            res.send({ status: 400, message: "User Not Found" })
            console.log("c");
        }

    }
    else {
        res.status(400).send({ error: "Cannot Find User" })
        console.log("d");
    }

    // res.send("result")
    console.log(result);
}



module.exports = {
    CVendorLogin
}
