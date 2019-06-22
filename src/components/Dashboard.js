import React, { Component } from 'react';
import ApexCharts from 'apexcharts'
import CategoryChart from './CategoryChart';
import StatusChart from './StatusChart';

class Dashboard extends Component {
  

    
    render() { 
     
   


        return (  
            <div>
            <CategoryChart  data={this.props.data}/>
            <StatusChart data={this.props.data} />
            </div>

        )
    }
}
 
export default Dashboard;