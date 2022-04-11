const express = require('express')
const { CfindAllProducts,CaddProducts,CupdateProducts,CdeleteProducts } = require('../controller/products.controller')
const route = express.Router()

route.get('/getproducts',CfindAllProducts)
route.post('/addproducts',CaddProducts)
route.put('/updateproducts/:id',CupdateProducts)
route.delete('/deleteproducts/:id',CdeleteProducts)


module.exports = route