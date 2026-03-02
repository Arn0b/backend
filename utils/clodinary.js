import {v2} from "cloudinary"
import fs from "fs"  //import file system

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadoncloudinary = async (filelink) =>{
    try {
        if(!filelink) return null //if filelink not available
        const response = await v2.uploader.upload(filelink,{ // upload a file to cloudinary
            resource_type: "auto" // the resource type that you will be providing
        })
        console.log("File successfully added",response.url)
        return response
    } catch (error) {
        fs.unlinkSync(filelink) // remove the locally saved temporary file as the upload operation got failed
        return null
        console.log(error)
    }
}

export {uploadoncloudinary}