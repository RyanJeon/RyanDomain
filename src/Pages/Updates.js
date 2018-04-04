import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import Construction from './Construction';
import '../styles/Updates.css'



class Updates extends Component{
    render(){
        return(
            <div className = "UpdatesContainer" >
                <NavBar pagetype = "Updates" {...this.props} />
                <Construction {...this.props} />

            </div>
        )
    }

}

export default Updates