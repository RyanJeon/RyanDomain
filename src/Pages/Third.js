import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { bounce, fadeIn, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cbutton from '../components/Cbutton';
import {Banner} from '../components/Banner';
import ProjectSection from '../components/projectSection';


class Third extends Component{

    constructor(props) {
        super(props);
    
      this.project = {
        domain: "This website on its own is a constantly on-going project!"+
              " I am updating the website frequently to make the interface"+
              " more interactive & aesthetic. Please do contact me for any advice"+
              " or suggestions for the website!",
    
        focalwealth: "Focal Wealth uses SQL database scraped from market intelligence data feeds and "+
                      "Python script to determine high net-worth individuals in Latin America for " +
                      "clients seeking investors. Click the icon to access the current Demo!",
    
        HIIT: "HIIT (High Intensity Interval Training) is an android application that allows"+
               " users to split 1 minute efficiently to jog, run, and sprint, for an effective high "+
                "intensity workout. "
        
      }
      
    }

    render(){
        return(
            <Banner
            min={'-50%'}
            max={'50%'}
            image= {require("../images/lower_tress.jpg")}
            container = "project-container"
        >
           <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
            <div className = "project-header">
              
                    <h2> 	&#8212; Projects &#8212; </h2>
                
            </div>  
           </ScrollAnimation>
           <div className = "project-info">


              <ProjectSection 
              description = {this.project.domain}
              title = "This Website"
              image = {require("../images/codingico.png")}
              link = "https://github.com/RyanJeon/RyanDomain"
              />  



              <ProjectSection 
              title = "Focal Wealth"
              description = {this.project.focalwealth}
              image = {require("../images/focalwealth.png")}
              link = "https://focalwealth.herokuapp.com/"
              />

              <ProjectSection 
              description = {this.project.HIIT}
              title = "High Intensity Interval Training App"
              image = {require("../images/runico.png")}
              link = "https://github.com/RyanJeon/HIIT_v1"
              />  
     

           </div>
        </Banner>

        )
    }

}

export default Third;