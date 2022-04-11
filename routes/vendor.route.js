const express = require("express")
const { Cgetvendors, Cupdtaevendors, Caddvendor, Cdeletevendor } = require("../controller/vendor.controller")
const route = express.Router()


route.get('/getvendors',Cgetvendors)
route.put('/updatevendors/:id',Cupdtaevendors)
route.post('/addvendors',Caddvendor)
route.delete('/deletevendors/:id',Cdeletevendor)

module.exports = route