const products=[]
exports.getAddproduct=(req,res,)=>{
    res.render('add-product',{pageTitle:'Add product',path:'/admin/add-product',formsCSS: true,
     productCSS: true,
     activeAddProduct: true});
 }
exports.postAddproduct=(req,res,next)=>{
    products.push({title:req.body.title})
    res.redirect('/')
}
exports.getproducts=(req, res, next) => {
    res.render('shop', {prods: products, pageTitle: 'Shop',path:'/',hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true});
  }
