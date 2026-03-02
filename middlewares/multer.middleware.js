// multer is a middleware which helps the server to take files in the form of Video, pics, pdf from the user and pass it from our temp server to the cloudinary

import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"./public/code")
    },
    filename: function(req, file, cb){
        cb(null,file.originalname)
    }
})

export const upload = multer({storage}) 