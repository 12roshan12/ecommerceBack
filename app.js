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
var imageRouter = require('./routes/images.route')
var typeRouter = require('./routes/type.route')
var registerRouter = require('./routes/register.route')
var loginRouter = require('./routes/login.route')
var path = require("path")
var imageUpload  = require('./models/upload.model')
var body = require('body-parser')
var con = require('./database/db.js')

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
app.use("/images",imageRouter)
app.use("/type",typeRouter)
app.use("/register",registerRouter)
app.use("/login",loginRouter)

app.post('/api/upload', imageUpload.uploadImage().single('file'), (req, res,next) => {
  console.log(res);
  console.log(req);  
 
  console.log(req.file.filename)
        var imgsrc =  req.file.filename
        var insertData = "INSERT INTO images(filename)VALUES(?)"
        con.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err            
            res.json(req.file)  
        })  
});
app.post('/api/upload1', imageUpload.uploadImage().single('file'), (req, res,next) => {
  console.log(res);
  console.log(req);  
 
  console.log(req.file.filename)
        var imgsrc =  req.file.filename
        var insertData = "INSERT INTO images(filename)VALUES(?)"
        con.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err            
            res.json(req.file)  
        })  
});
app.post('/api/upload2', imageUpload.uploadImage().single('file'), (req, res,next) => {
  console.log(res);
  console.log(req);  
 
  console.log(req.file.filename)
        var imgsrc =  req.file.filename
        var insertData = "INSERT INTO images(filename)VALUES(?)"
        con.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err            
            res.json(req.file)  
        })  
});
app.post('/api/upload3', imageUpload.uploadImage().single('file'), (req, res,next) => {
  console.log(res);
  console.log(req);  
 
  console.log(req.file.filename)
        var imgsrc =  req.file.filename
        var insertData = "INSERT INTO images(filename)VALUES(?)"
        con.query(insertData, [imgsrc], (err, result) => {
            if (err) throw err            
            res.json(req.file)  
        })  
});
app.post('/api/upload/multiple', imageUpload.uploadImage().array('file',3), (req, res,next) => {
     console.log( req.files);
        var temp = []
        temp = req.files.map((e)=>{
          return [e.filename]
        })
        console.log(temp);        
        var insertData = "INSERT INTO images (filename) VALUES ?"
        con.query(insertData,[temp], (err, result) => {
            if (err) throw err
            console.log("file uploaded")
            res.json(req.files)  
        })
  
});


app.use(body.json());
app.use(body.urlencoded({
    extended: true
}));



var dir = path.join(__dirname,'uploads')
app.use('/images',express.static(dir));


app.listen(5001, function () {
  console.log(dir);
  console.log('CORS-enabled web server listening on port 80')
})




