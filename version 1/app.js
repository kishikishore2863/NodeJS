const express = require('express')
const path=require('path')
const bodyparser = require('body-parser')
const app =express();
const erorrcontroller=require('./controllers/erorr')


// app.set('view engine','pug')
// app.set('view engine','hbs')
app.set('view engine','ejs')
app.set('views',"views")
// app.engine('handlebars',expressHbs())


const adminData = require('./routes/admin')
const shopRoutes=require('./routes/shop')


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));



app.use('/admin',adminData);
app.use(shopRoutes);




app.use(erorrcontroller.get404,)

app.listen(3001);
