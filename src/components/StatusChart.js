import React, { Component } from 'react';
import ApexCharts from 'apexcharts'

class StatusChart extends Component {

    makePieStatusData = () =>{
        let dataArr = {}
        for(let d of this.props.data){
            if(dataArr[d.status]? dataArr[d.status] ++ : dataArr[d.status] = 1 ){
            }
        }
        console.log(dataArr)
        return dataArr
    }
    
    state = {  }
    render() { 
         
        let options = {
            "chart": {
              height: 300,
                "type": "donut",
            },
          "series": 
            (Object.values(this.makePieStatusData()))
            ,
          legend: {
            position: 'bottom'
          },
            "labels": 
                (Object.keys(this.makePieStatusData()))
        };
        
                let chart = new ApexCharts(
                    document.querySelector("#chartDonut"),
                    options
                );
        
                chart.render();
       
        this.makePieStatusData()
        return ( 
                       <div
 id="chartDonut">
</div>
            
        );
    }
}
 
export default StatusChart;