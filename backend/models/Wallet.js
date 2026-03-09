const router = require("express").Router()
const User = require("../models/User")

router.get("/:userId", async (req, res) => {
  try {

    const user = await User.findById(req.params.userId)

    res.json({
      balance: user.walletBalance
    })

  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router