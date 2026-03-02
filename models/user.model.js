import mongoose, { Schema } from 'mongoose'
import jwt from 'jsonwebtoken' // for hiding sensitive information in the url
import bcrypt from 'bcrypt'  //for password encrption

const userschema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true,
        index: true,
        lowercase: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname : {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar : {
        type: String, //cloudnary file
        required: true
    },
    coverimage : {
        type: String, //cloudnary file
    },
    watchHistory : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "video"
        }
    ],
    password:{
        type: String,
        required: [true,"Password is required"]
    },
    refreshToken: {
        type: String
    }
},{timestamps: true})

userschema.pre("save", async function (next) {//error, request, response, next
    if(!this.isModified("password")) return next() //checking if the password field is modified by the user or not. If not, then it will not affect the code return below it
    this.password = bcrypt.hash(this.password, 10)
    next()
})  //pre function is a hook which basically changes/manipulates data just before reaching the server. Save here is the inbuilt functionality -- that means just before saving

//check password
userschema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userschema.methods.generateAccessTokens = function() {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userschema.methods.generateRefreshTokens = function() {
    return jwt.sign({
        _id: this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const user = mongoose.model("user", userschema)