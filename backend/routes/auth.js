const express = require("express")
const router = express.Router()

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

// signup
router.post("/signup", async (req,res)=>{

  const {username,email,password} = req.body

  const hashed = await bcrypt.hash(password,10)

  const referralCode = Math.random().toString(36).substring(2,8)

  const user = new User({
    username,
    email,
    password:hashed,
    referralCode
  })

  await user.save()

  res.json({
    message:"User created"
  })

})

// login
router.post("/login", async (req,res)=>{

  const {email,password} = req.body

  const user = await User.findOne({email})

  if(!user){
    return res.json({error:"User not found"})
  }

  const valid = await bcrypt.compare(password,user.password)

  if(!valid){
    return res.json({error:"Invalid password"})
  }

  const token = jwt.sign(
    {id:user._id},
    "starry_secret"
  )

  res.json({
    token,
    userId:user._id
  })

})

module.exports = router