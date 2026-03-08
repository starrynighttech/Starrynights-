const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

const SECRET = "ultratechhub_secret"

router.post("/signup", async (req,res)=>{

  const {username,email,password} = req.body

  const hashed = await bcrypt.hash(password,10)

  const user = new User({
    username,
    email,
    password: hashed
  })

  await user.save()

  res.json({message:"User created"})

})

router.post("/login", async (req,res)=>{

  const {email,password} = req.body

  const user = await User.findOne({email})

  if(!user){
    return res.status(400).json({error:"User not found"})
  }

  const match = await bcrypt.compare(password,user.password)

  if(!match){
    return res.status(400).json({error:"Wrong password"})
  }

  const token = jwt.sign(
    {userId:user._id},
    SECRET
  )

  res.json({token})

})

module.exports = router