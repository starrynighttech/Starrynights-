const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({
  userId:String,
  amount:Number,
  type:String
})

module.exports = mongoose.model("Transaction", TransactionSchema)