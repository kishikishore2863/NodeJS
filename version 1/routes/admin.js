const express =require('express')
const path =require('path')
const router =express.Router();
const rootDir = require("../util/path")

const products=[]

router.get('/add-product',(req,res,)=>{
   res.sendFile(path.join(__dirname,'../','views','add-products.html'))
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})

// module.exports=router;
exports.routes=router;
exports.products=products;