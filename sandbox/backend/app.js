const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Event = require("./models/CalendarEntry");
require("dotenv").config()

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => app.listen(5000))
.catch((error) => {
    console.log(error);
    process.exit(1);
})

mongoose.connection.on("connected", () => {
    console.log("connected")
})

app.get("/get-entries", (req, res) => {
    Event.find().then(response => {

        res.send({
            status: true,
            message: response,
        })
        
    }).catch(err => {
        res.status(500).send({
            status: false,
            message: "Failed to retrieve calendar entries",
        })
        console.log(err)
    })

})

app.post("/new-entry", (req, res) => {

    const date = req.body.date
    const title = req.body.title
    const description = req.body.description
    if(typeof title === "undefined" || typeof date === "undefined" || date === "" || title === ""){
        res.status(400).send({
            status: false,
            message: "Title and Date required"
        })
        return
    }

    const event = new Event(req.body)
    event.save().then(e => {
        res.send({
            status: true,
            message: "Calendar entry saved",
            id: e._id
        })
    }).catch(err => {
        res.status(500).send({
            status: false,
            message: "Calendar entry failed to save",
        })
        console.log(err)
    })
})

app.put("/edit-entry", (req, res) => {

    const id = req.body.id
    const date = req.body.date
    const title = req.body.title
    const description = req.body.description


    if(typeof title === "undefined" || typeof date === "undefined" || date === "" || title === ""){
        res.status(400).send({
            status: false,
            message: "Title and Date required"
        })
        return
    }

    Event.findByIdAndUpdate(id, {date: date, title: title, description: description}).then(() => {
        res.send({
            status: true,
            message: "Calendar entry edited",
        })
    }).catch(err => {
        res.status(500).send({
            status: false,
            message: "Calendar entry failed to updated",
        })
        console.log(err)
    })

})