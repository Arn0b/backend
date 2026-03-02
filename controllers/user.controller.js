import {asyncHandler} from "../utils/asyncHandler.js"

const userregister = asyncHandler(async(req,res)=>{
    return res.status(200).json({
        message: "Using POSTMAN this text should bw reflected"
    })
})

export {userregister}