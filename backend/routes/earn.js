const express = require("express")
const router = express.Router()

const User = require("../models/User")

const AD_REWARD = 0.05
const SHAKE_REWARD = 0.02

router.post("/watch-ad", async (req,res)=>{

  const {userId} = req.body

  const user = await User.findById(userId)

  if(!user){
    return res.json({error:"User not found"})
  }

  if(user.adsWatchedToday >= 20){
    return res.json({
      error:"Daily ad limit reached"
    })
  }

  user.walletBalance += AD_REWARD
  user.totalEarned += AD_REWARD
  user.adsWatchedToday += 1

  await user.save()

  res.json({
    reward:AD_REWARD,
    balance:user.walletBalance
  })

})

router.post("/shake", async (req,res)=>{

  const {userId} = req.body

  const user = await User.findById(userId)

  if(!user){
    return res.json({error:"User not found"})
  }

  if(user.shakesToday >= 50){
    return res.json({
      error:"Daily shake limit reached"
    })
  }

  user.walletBalance += SHAKE_REWARD
  user.totalEarned += SHAKE_REWARD
  user.shakesToday += 1

  await user.save()

  res.json({
    reward:SHAKE_REWARD,
    balance:user.walletBalance
  })

})

module.exports = router