const express = require("express")
const router = express.Router()

router.get("/reward",(req,res)=>{
  res.json({reward:0.05})
})

module.exports = router