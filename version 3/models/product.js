const fs = require("fs");
const path = require("path");
const p = path.join(__dirname, "../data/products.json");
const Cart = require('../models/cart')

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id,title,imageUrl,description,price) {
    this.id = id;
    this.title = title;
    this.imageUrl=imageUrl;
    this.description=description;
    this.price=price;
  }
  save() {
      getProductsFromFile(products=>{
        if(this.id){
          const existingProductIndex =products.findIndex(prod=>prod.id === this.id);
          const updatedProducts = [...products];
          updatedProducts[existingProductIndex]=this;
          fs.writeFile(p,JSON.stringify(updatedProducts),err =>{
            console.log(err);
          })
        }else{  this.id=Math.floor(Math.random() * 1000000).toString();
          products.push(this);
          fs.writeFile(p,JSON.stringify(products),err=>{
            console.log(err)
          })}
    
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

 
  static findById(id,cb){
    getProductsFromFile(products=>{
      const product = products.find(p =>p.id === id);
      cb(product)
    })
  }
  
  static deleteById(id){
    getProductsFromFile(products=>{
      const item = products.find(prod=>prod.id === id)
      console.log(item)
      const updatedProduct = products.filter(prod=>prod.id !== id)
      fs.writeFile(p,JSON.stringify(updatedProduct),err=>{
        if(!err){
         Cart.deleteProduct(id,item.price)
        }
      })
    })
  }

  



};


