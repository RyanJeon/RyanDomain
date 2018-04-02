import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';



import '../styles/NavBar.css';



const BackButton = (props) => {
    const {gotoLink, history} = props;

    return(

        <div>


            <div className = "BackButton"  onClick = {() => history.push('/')} > 
                Return Home
            </div>

        </div>
    );


};

export default BackButton