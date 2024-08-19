const Product = require('../models/product')
exports.getProducts=(req, res, next) => {
    const product=Product.fetchAll((products)=>{ res.render('shop/product-list', {prods: products, pageTitle: 'Products',path:'/products',hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true});});

  }
exports.postAddproduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save()
    res.redirect('/')
}

exports.getIndex=(req,res,next)=>{
    // Product.fetchAll(products=>{
    //     res.render('shop/index',{
    //         prods:products,
    //         pageTitle:'Shop',
    //         hasProducts:products.length>0,
    //         activeShop:true,
    //         productCSS:true
    //     })
    // })
   Product.fetchAll((products)=>{ res.render('shop/index', {prods: products, pageTitle: 'Shop',path:'/',hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true});});
}

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart'
    })
}

exports.getCheckout=(req,res,next)=>{
    res.render('shop/chechout',{
        path:'/checkout',
        pageTitle:'checkout'
    })
}

exports.getOrders=(req,res,next)=>{
    res.render('/orders',{
        path:'/orders',
        pageTitle:'your Orders'
    })
}

exports.getProduct=(req,res,next)=>{
    const prodId=req.params.productId;
    console.log(prodId);
    Product.findById(prodId,product =>{
        console.log(product)
        res.render('shop/product-details',{product:product,path:'/products',pageTitle:'product.title'});
    })
   
}