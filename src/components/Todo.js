import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Todo extends Component {
    constructor(){
        super()
        this.state = {
            status : ""
        }
    }



    updateTodo = (e) =>{
        console.log("sdfsdf")
        this.props.updateTodo(this.props.data.todo, e.target.value)
    }

    handleInput = (e) => {
        const target = e.target
        const value =target.value;
        const name = target.name;
        this.setState({[name] : value})
        console.log(e.target.value)
      }


    render() {   
        return (  
            <div className="todos">
     <Link to={`/todos/${this.props.data.todo}`}><div className="item todo" >{this.props.data.todo}</div></Link>
        <Link to={`/todos/categories/${this.props.data.category}`}><div className="item category">{this.props.data.category}</div></Link>
        <div className="item date">{this.props.data.date}</div>
        <select onChange={this.updateTodo} >
        <option  ></option>
            <option value="Done" name="status">Done</option>
            <option value="In progress">In progress</option>
            </select>
        </div>

        )
    }
}
 
export default Todo;