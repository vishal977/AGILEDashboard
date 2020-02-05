import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Card.css'


export default class Sprints extends Component {

    state = 
    {
        sprints: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/sprints',{
            headers : {"access-control-allow-origin" : "*"}
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({ sprints: data })
        })
        .catch(console.log)
      }

    render() {
        const sprints = this.state.sprints;
        const projectId = this.props.projectId;
        var arr = [];
        for (var key in sprints) {
            arr.push(sprints[key]);
        }
        const data = arr.length ? (
            arr.map(arr => {
                var url = "/viewproject/"+projectId+"/sprintdetails/"+arr.id;
                return(
                <div className="col s12 m4" key = {arr.id}>
                <div className="card card-color" >
                        <div className="card-content black-text">
                            <i className="material-icons">
                            directions_run
                                </i>
                            <span className="card-title">{arr.sprint_name}</span>
                                <p className="card-content">
                                    {arr.description}
                                </p>
                            <div className="card-action ">
                                <b><Link to={url} className = "grey-text text-darken-3">Expand</Link></b>
                            </div>
                        </div>   
                </div>
                </div>
                )
            })
        ) : (
            <div className="container">
                <h3>No Data found!</h3>
            </div>
        )
        return (
            <div className = "row">
               {data}
            </div>
        )
    }
}
