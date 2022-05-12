const express = require("express");
const { Cgetvendor, Caddvendor, Cupdatevendor, Cdeletevendor } = require("../controller/register.controller");
const route = express.Router()


route.get('/getvendor',Cgetvendor)
route.put('/updatevendor/:id',Cupdatevendor)
route.post('/addvendor',Caddvendor)
route.delete('/deletevendor/:id',Cdeletevendor)

module.exports = route