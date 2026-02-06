import mongoose from "mongoose"
import {DB_NAME} from "../src/constants.js"
import dotenv from "dotenv"
/*import dotenv from "dotenv"
import connectionDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectionDB()
*/

dotenv.config({
    path: "./.env"
})
const connectionBD = async ()=>{
    try{
        console.log(`${process.env.MONGODB_URL}/${DB_NAME}`)
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n DB CONNECTED !! DB HOST: ${connectioninstance.connection.host}`)
    }
    catch(error){
        console.log(error)
    }
}

export default connectionBD