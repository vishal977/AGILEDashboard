import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Card.css'

export default class BackButton extends Component {
    render() {

        const prev = this.props.prev;
        return (
            <div>
                <nav className="nav-wrapper backColor">
                    <div className="left">
                    <ul>
                        <li>
                            <Link to = '/projects' className="waves-effect waves-light "><i className="material-icons">
                            keyboard_arrow_left </i></Link>
                        </li>
                    </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <Link to = "/"><button className = "buttonColor btn buttonMarginRight">Log out</button></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
