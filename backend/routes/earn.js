```javascript
const express = require("express")
const router = express.Router()

const User = require("../models/User")

// reward settings
const WATCH_REWARD = 0.05
const SHAKE_REWARD = 0.02

const MAX_ADS_PER_DAY = 20
const MAX_SHAKES_PER_DAY = 50

// watch ad reward
router.post("/watch-ad", async (req,res)=>{

  const { userId } = req.body

  const user = await User.findById(userId)

  if(!user){
    return res.json({error:"User not found"})
  }

  if(user.adsWatchedToday >= MAX_ADS_PER_DAY){
    return res.json({
      error:"Daily ad limit reached"
    })
  }

  user.walletBalance += WATCH_REWARD
  user.totalEarned += WATCH_REWARD
  user.adsWatchedToday += 1

  await user.save()

  res.json({
    reward: WATCH_REWARD,
    balance: user.walletBalance
  })

})


// shake reward
router.post("/shake", async (req,res)=>{

  const { userId } = req.body

  const user = await User.findById(userId)

  if(!user){
    return res.json({error:"User not found"})
  }

  if(user.shakesToday >= MAX_SHAKES_PER_DAY){
    return res.json({
      error:"Daily shake limit reached"
    })
  }

  user.walletBalance += SHAKE_REWARD
  user.totalEarned += SHAKE_REWARD
  user.shakesToday += 1

  await user.save()

  res.json({
    reward: SHAKE_REWARD,
    balance: user.walletBalance
  })

})

module.exports = router
```
