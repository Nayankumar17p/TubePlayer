import { promises } from "dns"

const asyncHandler =(requestHandler)=> {
    (req,res,next)=>{
        promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
    return 
}

export{asyncHandler}
// const asyncHandler  = (fn)=> async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error){
//         res.status(error.code || 500).json({
//             success:false
//         })
//     }
// }