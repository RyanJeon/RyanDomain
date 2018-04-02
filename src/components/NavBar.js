import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';



import '../styles/NavBar.css';



const NavBar = ({  }) =>(

    <div className = "nav-container">


        <div className = "nav-item" > 
            Updates
        </div>
        <div className = "nav-item">
            Blog
        </div>

        <div className = "nav-item">
            More
        </div>


    </div>



);

export default NavBar