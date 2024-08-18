const Product =require('../models/product')


  exports.getAddproduct=(req,res,)=>{
    res.render('admin/add-product',{pageTitle:'Add product',path:'/admin/add-product',formsCSS: true,
     productCSS: true,
     activeAddProduct: true});
 }

 exports.getProducts=(req,res,next)=>{
    Product.fetchAll(products =>{
       res.render('admin/products',{
        prods:'products',
        pageTitle:'Admin Products',
        path:'/'
       })
    })
 }

 exports.postAddproduct=(req,res,next)=>{
   const title=new Product(req.body.title);
   const imageUrl=new Product(req.body.imageUrl);
   const price =new Product(req.body.price);
   const description=new Product(req.body.description);
   const product =new Product(title,imageUrl,price,description);
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
  Product.fetchAll((products)=>{ res.render('shop/index', {prods: products, pageTitle: 'Shop',path:'admin/products',hasProducts: products.length > 0,
       activeShop: true,
       productCSS: true});});
}