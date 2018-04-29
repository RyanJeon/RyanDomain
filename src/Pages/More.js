import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import "../styles/More.css"
import Construction from '../components/Construction';



class More extends Component{
    render(){
        return(
            <div className = "moreContainer"> 
                <NavBar pagetype = "More" {...this.props}/>
                <Construction {...this.props} />
            </div>

        )
    }
}

export default More; 