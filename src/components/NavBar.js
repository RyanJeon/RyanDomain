import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';



import '../styles/NavBar.css';



const NavBar = (props) => {
    const {gotoLink, history} = props;

    return(

        <div className = "nav-container">


            <div className = "nav-item" onClick = {() => history.push('/blog')} > 
                Updates
            </div>
            <div className = "nav-item" onClick = {() => history.push('/blog')}>
                Blog
            </div>

            <div className = "nav-item" onClick = {() => history.push('/blog')}>
                More
            </div>


        </div>
    );


};

export default NavBar