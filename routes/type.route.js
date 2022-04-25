const express = require("express");
const { CgetType, CaddType, CupdateType, CdeleteType } = require("../controller/type.controller");
const route = express.Router()


route.get('/getType',CgetType)
route.put('/updateType/:id',CupdateType)
route.post('/addType',CaddType)
route.delete('/deleteType/:id',CdeleteType)

module.exports = route