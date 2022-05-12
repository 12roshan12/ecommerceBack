const express = require("express");
const { CVendorLogin } = require("../controller/login.controller");
const route = express.Router()


route.get('/vendorLogin',CVendorLogin)


module.exports = route