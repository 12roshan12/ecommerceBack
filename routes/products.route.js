const express = require('express')
const { CfindAllProducts,CaddProducts,CupdateProducts,CdeleteProducts,Cgetproductsbyid,CgetproductsbyVendorid } = require('../controller/products.controller')
const route = express.Router()
const authenticateToken = require("../middleware/validation")


route.get('/getproducts',authenticateToken,CfindAllProducts)
route.post('/addproducts',CaddProducts)
route.put('/updateproducts/:id',CupdateProducts)
route.delete('/deleteproducts/:id',CdeleteProducts)
route.get('/getProductbyid/:id',Cgetproductsbyid)
route.get('/getProductbyVendorid/:vendorId',authenticateToken,CgetproductsbyVendorid)


module.exports = route