const express =require('express')
const path =require('path')
const router =express.Router();
const rootDir = require("../util/path")



const products=[]

router.get('/add-product',(req,res,)=>{
   res.render('add-products',{pageTitle:'Add product',path:'/admin/add-product'});
})

router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
})

// module.exports=router;
exports.routes=router;
exports.products=products