import React, { Component } from 'react'
import Sprints from './Sprints'
import BackButton from './BackButton'
import '../CSS/Card.css'

export default class ProjectView extends Component {
    render() {
        let projId = this.props.match.params.projectid;
        return (
            <div className = "container">
            <BackButton prev = "projects"/>
                <h3 className = "">Project - {projId} : Sprints</h3>
                <Sprints projectId = {projId}/>
            </div>
        )
    }
}
