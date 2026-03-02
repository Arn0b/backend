import mongoose from "mongoose"
import {DB_NAME} from "./constants.js"
import connectionBD from "../db/index.js"
import dotenv from "dotenv"
import { app } from "./app.js"

console.log("hello")

dotenv.config({
    path: "./.env"
})
console.log(process.env.PORT)

connectionBD()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Listening at PORT:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`DB Connection Failed: ${err}`)
})




// 1st approach
/*import express from "express"
const app = express()

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)  //DB is in another continent -- need to apply async, await for it
        app.on("error",(error)=>{   //on is like a to check everything. This function is to check if it app is working fine or not
            console.log(error);
            throw error;
        })

        app.listen(process.env.PORT),()=>{
            console.log(`Listening on port${process.env.PORT}`)
        }
    }
    catch(error){
        console.log(error)
    }
})()
*/