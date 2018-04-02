import React, {Component} from 'react';
import '../styles/Blog.css';
import BackButton from '../components/BackButton'



class Blog extends Component{
    back(history){
        history.push('/')
    }

    render(){
        return(
            <div className = "blog-container">
                <div className = "blog-title">
                    <h1> Coming Soon!</h1>
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

export default Blog;