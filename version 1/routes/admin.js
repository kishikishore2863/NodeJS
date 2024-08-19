const express =require('express')
const path =require('path')
const router =express.Router();
const adminController=require('../controllers/admin')





router.get('/add-product',adminController.getAddproduct)

router.post('/add-product',adminController.postAddproduct)

router.get('/products',adminController.getProducts)

module.exports=router;
// exports.routes=router;
// exports.products=products;