const express = require("express");
const { Cgetorders, Caddorders, Cupdateorders, Cdeleteorders,CgetOrderssbyVendorid,CgetOrdersandproductbyVendorid } = require("../controller/orders.controller");
const route = express.Router()


route.get('/getorders',Cgetorders)
route.put('/updateorders/:id',Cupdateorders)
route.post('/addorders',Caddorders)
route.delete('/deleteorders/:id',Cdeleteorders)
route.get('/getordersbyVendorid/:vendorId',CgetOrderssbyVendorid)
route.get('/getordersbyVendorpid/:vendorId',CgetOrdersandproductbyVendorid)

module.exports = route