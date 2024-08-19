const Product =require('../models/product')


  exports.getAddproduct=(req,res,)=>{
    res.render('admin/add-product',{
      pageTitle:'Add product',
      path:'/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
     
   });
 }

 exports.postAddproduct=(req,res,next)=>{
  const title=req.body.title;
  const imageUrl=req.body.imageUrl;
  const price =req.body.price;
  const description=req.body.description;
  const product =new Product(title,imageUrl,description,price);

  product.save()
  res.redirect('/')
}


 exports.getProducts=(req,res,next)=>{
    Product.fetchAll(product =>{
       res.render('admin/products',{
        prods:product,
        pageTitle:'Admin Products',
        path:'/admin/products'
       })
    })
 }


