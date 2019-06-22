import React, { Component } from 'react';
import  TodoDetails  from './TodoDetails';
import  Headers  from './Headers';

class TodoPage extends Component {
  

    render() { 
      
        return (  
            <div>
                                <Headers />

                {this.props.data.filter(d=> d.todo == this.props.match.params.name).map(d=> <TodoDetails data={d}/>)}
            </div>
        )
    }
}
 
export default TodoPage;