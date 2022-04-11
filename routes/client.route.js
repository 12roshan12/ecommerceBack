const express = require("express");
const { Cgetclients, Caddclient, Cupdateclients, Cdeleteclient } = require("../controller/client.controller");
const route = express.Router()


route.get('/getclients',Cgetclients)
route.put('/updateclients/:id',Cupdateclients)
route.post('/addclients',Caddclient)
route.delete('/deleteclients/:id',Cdeleteclient)

module.exports = route