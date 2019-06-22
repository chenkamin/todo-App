import React, { Component } from 'react';
import ApexCharts from 'apexcharts'

class CategoryChart extends Component {

    makePieData = () =>{
        let dataArr = {}
        for(let d of this.props.data){
            if(dataArr[d.category]? dataArr[d.category] ++ : dataArr[d.category] = 1 ){
            }
        }
        console.log(dataArr)
        return dataArr
    }
    render() { 

        
      let  options = {
            "chart": {
              height: 300,
                "type": "pie",
            },
          "series": 
            (Object.values(this.makePieData()))
            ,
          legend: {
            position: 'bottom'
          },
            "labels": 
                (Object.keys(this.makePieData()))
        };
        
              let  chart = new ApexCharts(
                    document.querySelector("#chartPie"),
                    options
                );
        
                chart.render();
        return ( 
            <div
 id="chartPie">
</div>
         );
    }
}
 
export default CategoryChart;