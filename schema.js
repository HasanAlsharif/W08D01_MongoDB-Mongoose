const mongoose = require("mongoose");

const todoschema = new mongoose.Schema({

    task : String,
    description : String,
    deadline : String,
    isCompleted : Boolean ,
    priority : String

})

module.exports = mongoose.model("todo",todoschema)
//"todo" here is the module wich will be shown in MongoDB with added s