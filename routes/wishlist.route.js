const express = require("express")
const { CgetWishlist, CupdtaeWishlist, CaddWishlist, CdeleteWishlist } = require("../controller/wishlist.controller")
const route = express.Router()


route.get('/getwishlist',CgetWishlist)
route.put('/updatewishlist/:id',CupdtaeWishlist)
route.post('/addwishlist',CaddWishlist)
route.delete('/deletewishlist/:id',CdeleteWishlist)

module.exports = route
