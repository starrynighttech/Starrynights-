const express = require("express")
const router = express.Router()

const User = require("../models/User")

router.post("/", async (req,res)=>{

  const {userId,amount} = req.body

  const user = await User.findById(userId)

  if(user.walletBalance < amount){
    return res.json({
      error:"Insufficient funds"
    })
  }

  user.walletBalance -= amount

  await user.save()

  res.json({
    message:"Withdrawal requested"
  })

})

module.exports = router