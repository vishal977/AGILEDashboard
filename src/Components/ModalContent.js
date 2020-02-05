import React, { Component } from 'react'


export default class ModalContent extends Component {
    render() {
        return (
            <table className = "striped">
        <thead>
          <tr>
              <th>Note</th>
              <th>Created at</th>
              <th>Serious issue?</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Fix a bug in the Login component</td>
            <td>28-11-2019 05:40 AM</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Scale Project description cards properly</td>
            <td>28-11-2019 09:50 AM</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Change project theme</td>
            <td>20-11-2019 11:30 AM</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Fix user profile not loading</td>
            <td>25-11-2019 08:40AM</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>
        )
    }
}
