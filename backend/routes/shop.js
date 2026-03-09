const express = require("express")
const router = express.Router()

const User = require("../models/User")

const products = [
  {
    id:1,
    name:"Phone Case",
    price:5
  },
  {
    id:2,
    name:"Wireless Earbuds",
    price:25
  },
  {
    id:3,
    name:"Screen Protector",
    price:3
  }
]

// get products
router.get("/products",(req,res)=>{
  res.json(products)
})

// purchase product
router.post("/buy", async (req,res)=>{

  const {userId,productId} = req.body

  const user = await User.findById(userId)

  const product = products.find(p=>p.id==productId)

  if(!user || !product){
    return res.json({error:"Invalid request"})
  }

  if(user.walletBalance < product.price){
    return res.json({error:"Not enough balance"})
  }

  user.walletBalance -= product.price

  await user.save()

  res.json({
    message:"Purchase successful",
    balance:user.walletBalance
  })

})

module.exports = router