const express = require("express");
const { Cgetimages, Caddimages} = require("../controller/images.controller");
const route = express.Router()


route.get('/getimages',Cgetimages)
route.post('/addimages/:id',Caddimages)

module.exports = route