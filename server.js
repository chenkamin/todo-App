//server Setup
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const Todo = require('./server/model/Todo')

const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})
//mongoose Setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todoDB', { useNewUrlParser: true })
//bodyParser Setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)




const port =8080
app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})

