const mongoose = require('mongoose')
const Schema = mongoose.Schema

let todoSchema = new Schema({
    todo: String,
    category: String,
    date: String,
    status: String
})


const Todo = mongoose.model("Todo", todoSchema)
module.exports = Todo