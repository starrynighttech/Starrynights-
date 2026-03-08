const express = require("express")
const router = express.Router()

const User = require("../models/User")

router.get("/balance", async (req,res)=>{

  const userId = req.query.userId

  const user = await User.findById(userId)

  res.json({
    balance: user.walletBalance
  })

})

module.exports = router