const express =require('express')
const path =require('path')
const router =express.Router();
const productsController=require('../controllers/products')





router.get('/add-product',productsController.getAddproduct)

router.post('/add-product',productsController.postAddproduct)

module.exports=router;
// exports.routes=router;
// exports.products=products;