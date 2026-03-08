```javascript
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// middleware
app.use(cors())
app.use(express.json())

// database connection
mongoose.connect("mongodb://127.0.0.1:27017/ultratechhub",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

// routes
app.use("/auth", require("./routes/auth"))
app.use("/wallet", require("./routes/wallet"))
app.use("/earn", require("./routes/earn"))
app.use("/shop", require("./routes/shop"))
app.use("/withdraw", require("./routes/withdraw"))

// test route
app.get("/", (req,res)=>{
  res.send("UltraTechHub API running")
})

// server start
const PORT = 5000

app.listen(PORT, ()=>{
  console.log("Server running on port " + PORT)
})
```
