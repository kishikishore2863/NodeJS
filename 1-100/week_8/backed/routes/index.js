const express =require('express');
const router =express.Router()
const userRouter = require('../controller/user')

router.use('/user',userRouter)


module.exports=router;