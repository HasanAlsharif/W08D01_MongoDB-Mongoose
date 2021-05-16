const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({

    task : String,
    description : String,
    deadline : Date,
    isCompleted : Boolean ,
    priority : String

})

module.exports = mongoose.model("todo",todoschema)