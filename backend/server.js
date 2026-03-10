const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/starrynights", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err))

app.use("/api/auth", require("./routes/auth"))
app.use("/api/wallet", require("./routes/wallet"))
app.use("/api/earn", require("./routes/earn"))
app.use("/api/shop", require("./routes/shop"))
app.use("/api/withdraw", require("./routes/withdraw"))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})