import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import "../styles/Blog.css"
import Construction from './Construction';



class Blog extends Component{
    render(){
        return(
            <div className = "blogContainer"> 
                <NavBar pagetype = "Blog" {...this.props}/>
                <Construction {...this.props} />

            </div>

        )
    }
}

export default Blog; 