const express = require("express")
const router = express.Router()

const User = require("../models/User")

router.post("/watch-ad", async (req,res)=>{

  const {userId} = req.body

  const user = await User.findById(userId)

  user.walletBalance += 0.05
  user.totalEarned += 0.05

  await user.save()

  res.json({
    reward:0.05
  })

})

module.exports = router