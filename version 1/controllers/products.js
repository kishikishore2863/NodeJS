const Product =require('../models/product')
exports.getAddproduct=(req,res,)=>{
    res.render('admin/add-product',{pageTitle:'Add product',path:'/admin/add-product',formsCSS: true,
     productCSS: true,
     activeAddProduct: true});
 }
exports.postAddproduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save()
    res.redirect('/')
}
exports.getproducts=(req, res, next) => {
    const products=Product.fetchAll((products)=>{ res.render('shop/product-list', {prods: products, pageTitle: 'Shop',path:'/',hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true});});

  }
