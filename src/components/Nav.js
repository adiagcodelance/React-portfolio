import React, { Component } from "react";

import "./Nav.css";


export class Nav extends Component{
    render (){
    return( 
        <div className="main-container">
        <div className='name-container'>
            <h2>
                <p>
                    Aditya Agrawal
                    </p>
                    </h2>                
        </div>
        <div className='title-container'><p><h5>Developer</h5></p></div>
        
    <nav className="nav">
        <ul>
        <h5>
        <li className="nav-item">
        <a href="/about">
            About
            </a>
        </li>
        <li className="nav-item">
        <a href="/projects">Projects</a>
        </li>
        <li className="nav-item">
        <a href="/skills">Skills</a>
        </li>
        <li className="nav-item">
        <a href="/Contact">Contact</a>
        </li>
        </h5>
        </ul>
    </nav>
    </div>
    );
}
}
    
