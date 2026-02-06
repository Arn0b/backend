import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true
}))  //In order to use this cors we need to have use function from express as this will invoke configuration/middleware over that function.

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({  //the %20,+ we see in the url is basicaaly the urlencoder
    extended: true,
    limit: "16kb"
}))

app.use(express.static("public"))

app.use(cookieparser())

export {app}