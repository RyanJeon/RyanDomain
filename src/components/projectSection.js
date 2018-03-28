import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../styles/projectSection.css';


class ProjectSection extends Component{

    
    
    raiseInvoiceClicked(link){
        if(link === "" || link === null){
            return //Not going
        }
        window.open(link);
    }


    render(){
        const {image, title, description, link} = this.props;

        return(
            <div className = "project-info-container">
               <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                <img className = "project-icon" src = {image} onClick = {this.raiseInvoiceClicked.bind(this, link)} />
                <div className = "project-information">
                    <div className = "project-title">
                         {title} 
                    </div>
                    <div className = "project-des">
                        {description}
                    </div>
                </div>
                </ScrollAnimation>
            </div>
        )
    }



}

export default ProjectSection;