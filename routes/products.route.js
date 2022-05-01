const express = require('express')
const { CfindAllProducts,CaddProducts,CupdateProducts,CdeleteProducts,Cgetproductsbyid } = require('../controller/products.controller')
const route = express.Router()

route.get('/getproducts',CfindAllProducts)
route.post('/addproducts',CaddProducts)
route.put('/updateproducts/:id',CupdateProducts)
route.delete('/deleteproducts/:id',CdeleteProducts)
route.get('/getProductbyid/:id',Cgetproductsbyid)


module.exports = route