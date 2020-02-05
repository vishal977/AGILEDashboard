import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import BackButton from './BackButton'
import '../CSS/Card.css'

export default class ProjectsHome extends Component {
    render() {
        return (
            <div className = "container">
                <BackButton prev=""/>
            <h3 className = "">Ongoing Projects</h3>
                <ProjectCard/>
                <div className="fixed-action-btn">
                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
                </div>
            </div>
        )
    }
}
