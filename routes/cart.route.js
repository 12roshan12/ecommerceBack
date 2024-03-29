const express = require("express");
const { CgetCart, CaddCart, CupdateCart, CdeleteCart } = require("../controller/cart.controller");
const route = express.Router()
const authenticateToken = require("../middleware/validation")

route.get('/getcart',CgetCart)
route.put('/updatecart/:id',CupdateCart)
route.post('/addcart',CaddCart)
route.delete('/deletecart/:id',CdeleteCart)

module.exports = route