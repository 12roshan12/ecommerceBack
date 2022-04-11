var express = require('express')
var cors = require('cors')
var app = express()
var productRouter = require('./routes/products.route')
var orderRouter = require('./routes/orders.route')
var vendorRouter = require('./routes/vendor.route')
var clientRouter = require('./routes/client.route')
var wishlistRouter = require('./routes/wishlist.route')
var deliveryRouter = require('./routes/delivery.route')
var categoryRouter = require('./routes/category.route')
var subcategoryRouter = require('./routes/subcategory.route')
var offersRouter = require('./routes/offers.route')
var cartRouter = require('./routes/cart.route')


var body = require('body-parser')

app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

app.use("/products",productRouter)
app.use("/orders",orderRouter)
app.use("/vendors",vendorRouter)
app.use("/clients",clientRouter)
app.use("/wishlist",wishlistRouter)
app.use("/delivery",deliveryRouter)
app.use("/category",categoryRouter)
app.use("/subcategory",subcategoryRouter)
app.use("/offers",offersRouter)
app.use("/cart",cartRouter)




app.listen(5001, function () {
  console.log('CORS-enabled web server listening on port 80')
})




