const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

// Import routes
const authRoutes = require("./routes/auth")
const walletRoutes = require("./routes/wallet")
const earnRoutes = require("./routes/earn")
const shopRoutes = require("./routes/shop")

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ultratechhub", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.once("open", () => {
  console.log("MongoDB connected")
})

mongoose.connection.on("error", (err) => {
  console.error("MongoDB error:", err)
})

// API routes
app.use("/auth", authRoutes)
app.use("/wallet", walletRoutes)
app.use("/earn", earnRoutes)
app.use("/shop", shopRoutes)

// Root test route
app.get("/", (req, res) => {
  res.send("UltraTechHub API running")
})

// Server port
const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})