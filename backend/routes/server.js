const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/starrynights")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

// routes
app.use("/auth", require("./routes/auth"))
app.use("/wallet", require("./routes/wallet"))
app.use("/earn", require("./routes/earn"))
app.use("/withdraw", require("./routes/withdraw"))

// health check
app.get("/", (req,res)=>{
  res.send("StarryNights API running")
})

const PORT = 5000

app.listen(PORT, ()=>{
  console.log("Server running on port " + PORT)
})