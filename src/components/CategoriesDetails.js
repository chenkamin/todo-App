import React, { Component } from 'react';


class CategoriesDetails extends Component {
    render() { 
        console.log(this.props.data)

        return (  
            <div>
            <div className="todos">
                <div>{this.props.data.todo}</div>
                <div>{this.props.data.category}</div>
                <div>{this.props.data.date}</div>
            </div>
            </div>
        )
    }
}
 
export default CategoriesDetails;