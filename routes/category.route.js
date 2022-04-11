const express = require("express");
const { CgetCategory, CaddCategory, CupdateCategory, CdeleteCategory } = require("../controller/category.controller");
const route = express.Router()


route.get('/getcategory',CgetCategory)
route.put('/updatecategory/:id',CupdateCategory)
route.post('/addcategory',CaddCategory)
route.delete('/deletecategory/:id',CdeleteCategory)

module.exports = route