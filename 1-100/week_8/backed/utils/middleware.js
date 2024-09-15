const jwt =require("jsonwebtoken")
const dotenv =require("dotenv")
dotenv.config(); 


const Auth = (res,req,next)=>{
 const authHeaders =req.headers.authorization



 if(!authHeaders || !authHeaders.startswith("bearer")){
    return res.status(403).json(

    )}

 const decode =jwt.verify(authHeaders,process.env.JWT_SECERT)
 req.userId=decode.userId
 next();
 }



exports.module= {Auth};