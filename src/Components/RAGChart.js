import React, { Component } from 'react'
import { Doughnut} from 'react-chartjs-2';
import '../CSS/chart.css';


export default class RAGChart extends Component {

    componentDidMount()
    {
        const url = "http://localhost:3000/sprints";
        fetch(url, {
            method:"GET"
        }).then(response => response.json()).then(data =>
            this.setState({serverData: data})
        )
    }

    state = 
    {
        data:{
                labels: ["Tasks Due", "Tasks Overdue", "Tasks Long-waited Due"],
                datasets: [{
                    label: "Sprint Status",
                backgroundColor: ["#3cba9f", "#ff9933","#ff3333"],
                data: [300,200,100]
                }]
            },
            options: {
                legend: {
                  display: true,
                  text: 'Sprint Job Status',
                  position: 'right',
                  animateScale: 'true'
                }
              },
              serverData:[]
        
            
    }

    render() {
        return (
            <div className = "container chartCanvasSize">
            <Doughnut data={this.state.data} options = {this.state.options}/>
            </div>
        )
    }
}


