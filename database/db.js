
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:3306,
  database:"ecom"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



module.exports = con;