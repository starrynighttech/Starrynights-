const express = require("express")
const router = express.Router()

router.get("/products",(req,res)=>{

  res.json([
    {
      id:1,
      name:"Phone Case",
      price:5
    },
    {
      id:2,
      name:"Wireless Earbuds",
      price:25
    }
  ])

})

module.exports = router