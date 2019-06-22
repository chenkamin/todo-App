const express = require('express')
const router = express.Router()
const Todo = require('../model/Todo')



Todo.find({}, function(err, data){
    console.log(data)
})

router.get('/todos', function(req,res){
    Todo.find({}, function(err,result){
        res.send(result)
    })
})

router.post('/todo', function(req,res){
    console.log(req.body)
    let t1 = new Todo(req.body)
    t1.save()
    res.end()
})


router.put('/todo/:todo', function(req,res){
    let todo = req.params.todo
    // Clients.findOneAndUpdate({_id: client}, req.body ,(err, result)=>  {console.log(result) } )
    console.log(todo)
    Todo.findOneAndUpdate({ todo: todo }, req.body ,function(req, result){
        console.log("========", result)
    })
})

module.exports = router