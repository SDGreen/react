const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config()

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => app.listen(3535))
.catch((error) => {
    console.log(error);
    process.exit(1);
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

app.post("/new-entry", (req, res) => {
    console.log(req.body)
})



