const express = require("express")
const router = express.Router()

const User = require("../models/User")

router.get("/balance", async (req, res) => {

  const { userId } = req.query

  const user = await User.findById(userId)

  if(!user){
    return res.json({ error: "User not found" })
  }

  res.json({
    balance: user.walletBalance
  })

})

module.exports = router