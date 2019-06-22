import React, { Component } from 'react';
import  CategoriesDetails  from './CategoriesDetails';
import  Headers  from './Headers';

class CategoriesPage extends Component {
    
    render() { 
        return ( 
            <div>
                                <Headers />

        {this.props.data.filter(d=> d.category == this.props.match.params.name).map(d=> <CategoriesDetails data={d}/>)}
            </div>
         )
    }
}
 
export default CategoriesPage;