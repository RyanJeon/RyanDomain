import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';



import '../styles/NavBar.css';







//Write function for components of navigation bar
function renderOptions(tag = "" , history){

    let tag_arrays = ["Updates", "Blog", "More" ] //Initialize global options
   
    if(tag !== ""){ //If the tag is not empty
        let rest_array = []

        while(tag_arrays[0] !== tag && tag_arrays.length > 1     ){
            rest_array.push(tag_arrays[0])
            tag_arrays.shift()
        }

        tag_arrays.shift()

        for(let i = rest_array.length-1; i >= 0; i--){
            tag_arrays.unshift(rest_array[i])
        }

        tag_arrays.unshift("Home")

    }


    //Finalized array
    const final_array = tag_arrays.map((optionTag)  => 
        <div className = "nav-item" onClick = {() => history.push('/' + optionTag )} >
            {optionTag}
        </div>
    );


    
    return(

        <div className = "nav-container">
            {final_array}
        </div>
    )
}



const NavBar = (props) => { 
    const {pagetype, history} = props;


    return(

        <div>

            {renderOptions(pagetype , history)}

        </div>
    );


};

export default NavBar