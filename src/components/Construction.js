import React, {Component} from 'react';
import '../styles/Construction.css';
import BackButton from '../components/BackButton'



class Construction extends Component{
    back(history){
        history.push('/')
    }

    render(){
        return(
            <div className = "blog-container">
                <div className = "blog-title">
                    Coming Soon!   
                </div>

                <div className = "blog-info">
                    The page is currently under-construction, preparing to be born.
                    <img className = "blog-icon" src = {require('../images/under.png')} />
                    <BackButton {...this.props} />
                </div>
                
            </div>
        )
    }

}

export default Construction;