const multer = require('multer');
var con = require('../database/db.js')


module.exports.uploadImage = () =>{


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+ '-'+ `${file.originalname}` )
    }
  })

  const imageFilter = (req,file,cb) =>{
      if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
          return cb(new Error('Only Image File Are Acceptable !!'), false)
      }

      cb(null,true)
  }; 

   
 return multer({ imageFilter, storage })

}