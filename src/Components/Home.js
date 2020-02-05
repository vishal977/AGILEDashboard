import React, { Component } from 'react'
import '../CSS/Card.css'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render()
    {
        return(
            <div className="">
               <Navbar/>
               <div className="container">
                   <div className="signInCard card bodyBackground setCardWidth">
                       <div className="signInContainer card-content">
                           <h4>Sign In</h4>
                           <form >
                               <div className="input-field">
                                   <input type="text" id="email"/>
                                   <label htmlFor="email">Enter Email</label>
                               </div>
                               <div className="input-field">
                                   <input type="password" id="pass"/>
                                   <label htmlFor="pass">Enter Password</label>
                               </div>
                               <div className="input-field center card-action">
                               <Link to = "/projects"> <button className="btn buttonColor">Sign In</button></Link>
                                </div>
                           </form>
                       </div>
                   </div>
               </div>
            </div>
        )
    }

    
}
