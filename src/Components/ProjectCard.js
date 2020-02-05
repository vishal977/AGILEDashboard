import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../CSS/Card.css'

export default class ProjectCard extends Component {

    componentDidMount()
    {
        
        fetch("http://localhost:3000/projects",{
            headers : {"access-control-allow-origin" : "*"}
        })
        .then(res => res.json())
        .then((data) => {
          this.setState({ projects: data })
        })
        .catch(console.log)
    }

    state = 
    {
        projects: []
    }

    render() {

        const projs = this.state.projects;
        var arr = [];
        for (var key in projs) {
            arr.push(projs[key]);
        }

        const data = arr.length ? (
            arr.map(arr => {
                var url = "/viewproject/"+arr.id;
                return(
                    <div className="col s12 m4" key = {arr.id}>
                        <div className="card card-color" >
                        <div className="card-content black-text">
                            <i className="material-icons">
                            view_agenda
                            </i>
                            <span className="card-title">{arr.title}</span>
                                <p className="card-content">
                                    {arr.desc}
                                </p>
                            <div className="card-action ">
                                <b><Link to={url} className = "grey-text text-darken-3"><i className="material-icons">
                                arrow_forward
                                </i></Link>
                                </b>
                                
                            </div>
                        </div>   
                    </div>
                </div>
                )
        })
        ): (
            <div className="container">
                <h3>No data available!</h3>
            </div>
        )

        return (
            <div className = "row">
                {data}
            </div>
        )
    }
}
