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

const AccountScehma = new mongoose.Schema({
    userId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    balance:{
     type:Number,
     required:true
    }
})

 const User =mongoose.model('User',userShema)
 const Account =mongoose.model("Account",AccountScehma)

 module.exports={User,Account}
