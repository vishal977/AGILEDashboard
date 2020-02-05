import React, { Component } from 'react'
import RAGChart from './RAGChart';
import SprintJobs from './SprintJobs';
import '../CSS/Card.css'
import BackButton from './BackButton'
import Modal from 'react-modal';
import ModalContent from './ModalContent';

export default class SprintDetails extends Component {

    state = {
        modalIsOpen: false
    }
    
     openModal = (e) => {
        this.setState({modalIsOpen: true});
      }
 closeModal = (e) =>{
        this.setState({modalIsOpen: false});
        console.log(this.state.modalIsOpen);
      }

    render() {


        let projId = this.props.match.params.projectid;
        let sprintId = this.props.match.params.sprintid;
        return (
            <div className="container blue-text text-darken-4">
                <BackButton/>
                <div className="row">
                <div className="col s6 ">
                    <h4>Project {projId} - Sprint {sprintId}</h4>
                </div>
                <div className="col s6">
                    <div className="row">
                        <div className="col s6">
                            <br/>
                            <h6>Team Size: {22}</h6>
                        </div>
                        <div className="col s6">
                        <br/>
                        <h6>Domain: Life Sciences</h6>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card small bodyBackground">
                    <span className="card-title">
                        Task status report
                    </span>
                    <div className="card-content bodyBackground">
                        <RAGChart/>
                        
                    </div>
                </div>
                <button className = "btn notesButton" onClick = {this.openModal}>
                            Open Meeting Notes
                </button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Notes"
                    >
                    <div className="left">
                        <h3>Notes</h3>
                    </div>
                    <div className = "right">
                            <button className = "btn" onClick = {this.closeModal}><i className="material-icons ">close</i></button>
                    </div>
                    <div className="container">
                        <ModalContent/>
                    </div>
                </Modal>
                <SprintJobs/>

            </div>
        )
    }
}
