const express = require("express");
const { CgetOffers, CaddOffers, CupdateOffers, CdeleteOffers } = require("../controller/offers.controller");
const route = express.Router()


route.get('/getoffers',CgetOffers)
route.put('/updateoffers/:id',CupdateOffers)
route.post('/addoffers',CaddOffers)
route.delete('/deleteoffers/:id',CdeleteOffers)

module.exports = route