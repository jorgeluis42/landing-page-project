import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default class Navbar extends Component {
    render() {
        return (
          
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <div className="navbar-item">
                <img src='assets/images/1.png' alt="didnt load" width="30" height="90"/>
              </div>
          
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
              <Link to='/'>
                <a className="navbar-item">
                  Home
                </a>
                </Link>
                <Link to='/project'>
                <a className="navbar-item">
                  Projects
                </a>
                </Link>
                <Link to='/contact'>
                <a className="navbar-item">
                  Contact Me
                </a>
                </Link>
                </div>
                
          
              
            </div>
          </nav>
          
        )
    }
}
