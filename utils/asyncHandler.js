// Generally used for code snippets to work without copy pasting each time 


const asyncHandler = (reqhandler) =>{
    (req,res,next)=>{
        Promise.resolve(reqhandler(req,res,next)).catch((err)=>next(err))  //1. Promising to resolve an error 2. Catching error and then moving on to the next error
    }
}  //This is promise block




// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }   //This is try-catch asyncHandler

export {asyncHandler}