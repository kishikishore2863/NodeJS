const db =require('../util/database')
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
  constructor(title,imageUrl,description,price) {
    this.title = title;
    this.imageUrl=imageUrl;
    this.description=description;
    this.price=price ? parseFloat(price) : null;;
  }
  save() {
    return db.execute(
      'INSERT INTO products (title,imageUrl,description,price) VALUES (?, ?, ?, ?)',
      [this.title, this.imageUrl, this.description, this.price]
    )
  }

  static fetchAll() {
   return db.execute('SELECT * FROM products');
  }

 
  static findById(id,cb){
   
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


