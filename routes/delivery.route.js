const express = require("express");
const { CgetDelivery, CaddDelivery, CupdateDelivery, CdeleteDelivery } = require("../controller/delivery.controller");
const route = express.Router()


route.get('/getdelivery',CgetDelivery)
route.put('/updatedelivery/:id',CupdateDelivery)
route.post('/adddelivery',CaddDelivery)
route.delete('/deletedelivery/:id',CdeleteDelivery)

module.exports = route