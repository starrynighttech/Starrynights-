const mongoose = require("mongoose")

const TransactionSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  type: {
    type: String,
    enum: ["deposit", "withdraw", "earn", "purchase"]
  },

  amount: Number,

  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Transaction", TransactionSchema)