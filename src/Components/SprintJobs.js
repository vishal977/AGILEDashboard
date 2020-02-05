import React, { Component } from 'react'
import ReactTable from 'react-table';
import Pagination from './Pagination'
import 'react-table/react-table.css'

export default class SprintJobs extends Component {


    componentDidMount()
    {
        const url = "http://localhost:3000/tasks";
        fetch(url, {
            method:"GET"
        }).then(response => response.json()).then(data =>
            this.setState({data: data})
        )
    }

    state = {
        data: []
    }

    render() {

        const columns = [
            {
                Header: "Task",
                accessor: "name",
                headerStyle: {background:"#FBEEC1"}
            },
            {
                Header: "Assigned To",
                accessor: "assignedTo",
                headerStyle: {background:"#FBEEC1"}
            },
            {
                Header: "Start Date",
                accessor: "start",
                headerStyle: {background:"#FBEEC1"}         
            },
            {
                Header: "End Date",
                accessor: "end",
                headerStyle: {background:"#FBEEC1"}
            },
            {
                Header: "Status",
                accessor: "status",
                headerStyle: {background:"#FBEEC1"}
            },
            {
                Header: "Priority",
                accessor: "priority",
                headerStyle: {background:"#FBEEC1"}
            }
        ]

        return (
            <div>
               <ReactTable
                columns = {columns}
                data={this.state.data}
                defaultPageSize = {5}
                noDataText = {"Loading... Please wait"}
                loadingText = {"Loading... Please wait"}
                className = "striped"
                PaginationComponent = {Pagination}>
                </ReactTable>
            </div>
        )
    }
}
