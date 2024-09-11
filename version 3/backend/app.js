const express = require('express')
const path=require('path')
const bodyparser = require('body-parser')
const app =express();
const erorrcontroller=require('./controllers/erorr')
const cors =require('cors');


// app.set('view engine','pug')
// app.set('view engine','hbs')
app.set('view engine','ejs')
app.set('views',"views")
// app.engine('handlebars',expressHbs())


const adminData = require('./routes/admin')
const shopRoutes=require('./routes/shop')


app.use(bodyparser.json())
app.use(express.static(path.join(__dirname,'public')));
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });



app.use('/admin',adminData);
app.use(shopRoutes);




app.use(erorrcontroller.get404,)

app.listen(3002);
