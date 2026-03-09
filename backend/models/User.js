const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

  username:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },

  password:{
    type:String,
    required:true
  },

  walletBalance:{
    type:Number,
    default:0
  },

  totalEarned:{
    type:Number,
    default:0
  },

  referralCode:{
    type:String,
    unique:true
  },

  referredBy:{
    type:String,
    default:null
  },

  adsWatchedToday:{
    type:Number,
    default:0
  },

  shakesToday:{
    type:Number,
    default:0
  },

  role:{
    type:String,
    default:"user"
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model("User",UserSchema)