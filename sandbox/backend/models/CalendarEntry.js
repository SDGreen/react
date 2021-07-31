const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CalendarEntrySchema = new Schema({
    date: {
        type: String,
        required: true,   
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }


})

const CalendarEntry = mongoose.model("calendarEntry", CalendarEntrySchema);
module.exports = CalendarEntry