const express = require("express");
const { CgetSubCategory, CaddSubCategory, CupdateSubCategory, CdeleteSubCategory } = require("../controller/subcategory.controller");
const route = express.Router()


route.get('/getsubcategory',CgetSubCategory)
route.put('/updatesubcategory/:id',CupdateSubCategory)
route.post('/addsubcategory',CaddSubCategory)
route.delete('/deletesubcategory/:id',CdeleteSubCategory)

module.exports = route