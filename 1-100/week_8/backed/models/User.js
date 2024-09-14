const mongoose =require('mongoose')

const userShema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50,
    },
    lastName:{
      type:String,
      required:true,
      trim:true,
      maxLength:50,
    }
})

 const User =mongoose.model('User',userShema)
 module.exports={User}
