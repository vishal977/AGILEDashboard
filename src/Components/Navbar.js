import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css'

class Navbar extends Component 
{
    render()
    {
        return(
            <div>
            <nav className="nav-wrapper navbarBackground ">
                <div className="container">
                    <Link to = "/" className = "brand-logo logoColor">AGILE Dashboard</Link>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar;