import React, { Component } from 'react';

 
class Inputs extends Component {
    makeNewToDo = () => {
        this.props.makeNewToDo()
    }

    render() { 
        return(
            <div className="nav">
            <input className="buttons big-input" type="text" placeholder="Todo" name="todo"
             onChange={this.props.handleInput}
              value={this.props.value.todo}/>

            <select className="buttons"  name="category"  onChange={this.props.handleInput}
              value={this.props.value.category}>
                <option>Category</option>
                <option>Work</option>
                <option>bills</option>
                <option>relationship</option>
                <option>shoping</option>
            </select>

            {/* <input className="buttons" type="text" placeholder="Category" name="category"
             onChange={this.props.handleInput}
              value={this.props.value.category}/> */}


            <input className="buttons" type="text" placeholder="Date" name="date"
             onChange={this.props.handleInput}
             value={this.props.value.date} />
             <div className="buttons" id="button" onClick={this.makeNewToDo}>Press</div>
            </div>
        )
    }
}
 
export default Inputs;