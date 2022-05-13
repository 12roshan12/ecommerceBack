const express = require("express");
const { CVendorLogin } = require("../controller/login.controller");
const route = express.Router()


route.post('/vendorLogin',CVendorLogin)


module.exports = route