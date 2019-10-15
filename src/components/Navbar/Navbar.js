import React, { Component } from 'react';
import logo from './React.js_logo-512.png'



export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src={logo} alt="didnt load" width="30" height="90"/>
              </a>
          
              <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item">
                  Home
                </a>
          
                <a className="navbar-item">
                  Projects
                </a>
                <a className="navbar-item">
                  Contact Me
                </a>
                </div>
                
          
              
            </div>
          </nav>
        )
    }
}
