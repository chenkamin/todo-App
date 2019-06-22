import React, { Component } from 'react';
import  Todo  from './Todo';
import axios from 'axios';

class Todos extends Component {

    putData = async (todo, status) =>{
        console.log(status)
        let updatedData = {status: status}

       let data = await axios.put(`http://localhost:8080/todo/${todo}`, updatedData)
       return data
      }

      updateTodo = async (todo, status) =>{
       await this.putData(todo, status)

      }

    render() { 
        


        return ( 
            <div>
        
                {this.props.data.map(d =><Todo data={d}  value={this.props.value}  updateTodo={this.updateTodo}/>  )}
            </div>
        )
    }
}
 
export default Todos;