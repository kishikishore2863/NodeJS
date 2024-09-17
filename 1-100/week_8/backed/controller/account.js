const express =require('express')
const router =express.Router()
const {User,Account}=require('../models/User')
const {Auth}=require('../utils/middleware')
const { default: mongoose } = require('mongoose')
const ObjectId =require('mongoose')


router.get("/balance", Auth, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    })
});




router.post("/transfer",Auth,async(req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount,to}=req.body

    const account = await Account.findOne({userId:req.userId}).session(session)


    if(!account || account.balance < amount ){
        await session.abortTransaction()
        return res.status(400).json({
            message:"Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({userId:to}).session(session);


    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Invalid account"
        })
    }

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session)
    await Account.updateOne({userId:to},{$inc:{balance:amount}}).session(session)

    await session.commitTransaction();

    res.json({
        message:"Transfer successful"
    })
})

router.get("/bulk",Auth,async(req,res)=>{
 const filter =req.query.filter || "";
 const users =await User.find({
    $or:[{
        firstName:{
            "$regex":filter
        }
    },{
        lastName:{
            "$regex":filter
        }
    }
    ]
 })
res.json({
    user:users.map(user=>({
        username:user.username,
        firstName:user.firstName,
        lastName:user.lastName,
        _id:user._id
    }))
})


})

module.exports = router;