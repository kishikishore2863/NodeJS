const express = require('express')
const path=require('path')
const bodyparser = require('body-parser')
const app =express();


app.set('view engine','pug')
app.engine('handlebars',expressHbs())


const adminData = require('./routes/admin')
const shopRoutes=require('./routes/shop')


app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')));



app.use('/admin',adminData.routes);
app.use(shopRoutes);




app.use((req,res)=>{
    res.status(404).render('404')
    
})

app.listen(3000);
