
const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../data/cart.json");


// module.exports = class Cart {
//       static addProduct(id,productPrice) {
//         fs.readFile(p, (err, filcontent) => {
//           let cart = { products: [], totalPrice: 0 };
//           if (!err) {
//             cart =JSON.parse(filcontent);
//           }
//           const existingProductIndex =cart.products.findIndex(prods =>prods.id === id)
//           const existingProduct=cart.products[existingProductIndex]
//           let updatedProduct;
//           if(existingProduct){
//              updatedProduct={...existingProduct};
//              updatedProduct.qty = updatedProduct.qty+1;
//              cart.products=[...cart.products];
//              cart.products[existingProductIndex]=updatedProduct;
//           }else{
//             updatedProduct={id:id,qty:1};
//             cart.products=[...cart.products,updatedProduct]; 
//           }
//           cart.totalPrice=cart.totalPrice+ +productPrice;
//           fs.writeFile(p,JSON.stringify(cart),err=>{
//             console.log(err)
//           })
          
//         });
//       }
    
//   };


module.exports = class Cart {
    static addProduct(id, productPrice) {
      // Fetch the previous cart
      fs.readFile(p, (err, fileContent) => {
        let cart = { products: [], totalPrice: 0 };
        if (!err) {
          cart = JSON.parse(fileContent);
        }
        // Analyze the cart => Find existing product
        const existingProductIndex = cart.products.findIndex((prod) => prod.id === id);
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        // Add new product/ increase quantity
        if (existingProduct) {
          updatedProduct = { ...existingProduct };
          updatedProduct.qty = updatedProduct.qty + 1;
          cart.products = [...cart.products];
          cart.products[existingProductIndex] = updatedProduct;
        } else {
          updatedProduct = { id: id, qty: 1 };
          cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productPrice;
        fs.writeFile(p, JSON.stringify(cart), err => {
          console.log(err);
        });
      });
    }

    static deleteProduct(id,productPrice){
      fs.readFile(p,(err,file)=>{
       if(err){
         return
       }
       const updatedCart = {...file}; 
       const product = updatedCart.product.find(prod => prod.id !== id)
       const productQty=product.qty;
       updatedCart.products= updatedCart.products.filter(item=>item.id !== id)
        updatedCart.totalPrice = updatedCart.totalPrice -  productPrice * productQty
        fs.writeFile(p,JSON.stringify(updatedCart),err=>{
          if(err){
            return
          }
        })
      })
     }




  };


  