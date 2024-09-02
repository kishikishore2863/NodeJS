const express = require("express");


const app = express();

app.use(express.json())

let count =0
function middleware(req,res,next){
    count=count+1
    console.log(count)
    next()
}

app.get('/',middleware,(req,res)=>{
res.status(200).json({"dbcjhdbhjschbjds":"bcjhsdbchjsd"})
})




app.listen(3000)