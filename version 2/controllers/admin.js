const Product =require('../models/product')


  exports.getAddproduct=(req,res,)=>{
    res.render('admin/add-product',{
      pageTitle:'Add product',
      path:'/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
      editing:false
     
   });
 }

 exports.postAddproduct=(req,res,next)=>{
  const title=req.body.title;
  const imageUrl=req.body.imageUrl;
  const price =req.body.price;
  const description=req.body.description;
  const product =new Product(null,title,imageUrl,description,price);

  product.save().then(() => {
      console.log('Product saved successfully');
      res.redirect('/')}
  ).catch(err=>console.log(err))
 
}


 exports.getProducts=(req,res,next)=>{
       Product.fetchAll()
       .then((([rows,fieldData])=>{ 
         res.render("shop/index", {
         prods: rows,
         pageTitle: "Admin Products",
         path: "/admin/products"
       });}))
       .catch(err=>console.log(err))
    }

exports.getEditProduct=(req,res,next)=>{
  const editMode =req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId =req.params.productId;
  Product.findById(prodId,product =>{
    if(!product){
      return res.redirect('/')
    }
 
 
    res.render('admin/add-product',{
      pageTitle:'Edit product',
      path:'/admin/edit-product',
      editing:editMode,
      product:product
    })
  }
)
}

exports.postEditProduct = (req,res)=>{
  const prodId =req.body.productId
  const title=req.body.title;
  const imageUrl=req.body.imageUrl;
  const price =req.body.price;
  const description=req.body.description;
  const product =new Product(prodId,title,imageUrl,description,price);
  product.save();
  res.redirect('products')

}

exports.postDeleteProduct=(req,res)=>{
  const prodId =req.body.productId;
  Product.deleteById(prodId)
  res.redirect('/')
}


