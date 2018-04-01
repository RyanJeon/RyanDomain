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



class Second extends Component{
    constructor(props) {
        super(props);
        this.state = {
                        info: "Who is Ryan Jeon?", 
      developer:  'I am a Full-Stack Developer currently working '+ 
                  'for a university garage startup based in Evanston,'+
                   'IL. I am looking for any opportunities to learn '+
                    'and become a better developer and use my technical '+
                     'abilities to contribute to inspiring projects.',  
    
      student: "I am a Sophomore enrolled in a Computer Science program "+
                "in Northwestern University. I have spent my first year "+
                 "of college as a Computer Science student in Rensselaer "+ 
                 "Polytechnic Institute, where I have learned much about my "+ 
                 "career path and passion.",     
    
      leader: "More than anything, I would like to be in charge of any projects "+
              "that I am responsible for. I love leading teams, and have lead many "+
              "project teams during my career as a developer."
      };
          
    }


  changeSecondBack( info){
    this.setState({info: info});

  }


    render(){
        return(
            <Banner
            min={'-50%'}
            max={'50%'}
            image= {require("../images/upper_tress.jpg")}
            container = "info-box"
            bannerContainer = "secondcontainer"
        >


        <div className = "info-title"> 
          <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
              <h2> 	&#8212; About Me &#8212; </h2>
            </ScrollAnimation>
        </div>
                      
          <div className = "info-box">
            <div className = "infContainer">
                <div className = "InfoButtons">
                
                  <div className = "ButtonsWrapper">
                  <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                        <h3 style = {{paddingRight: "10%"}}>
                        I am a..
                        </h3>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                      <div  onClick = {this.changeSecondBack.bind(this, this.state.developer)}>
                        <Cbutton width = "90%" label = "Developer"/>
                      </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                      <div  onClick = {this.changeSecondBack.bind(this, this.state.student)}>
                      <Cbutton width = "90%" label = "Student" />
                      </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                      <div  onClick = {this.changeSecondBack.bind(this, this.state.leader)}>
                      <Cbutton width = "90%" label = "Leader" />
                      </div>
                    </ScrollAnimation>

                  </div>

                    
                  <div className = "info">
                        <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                             {this.state.info}
                        </ScrollAnimation>
                  </div>               
                </div>
                                      
            </div>
             
          </div>                
      </Banner>
        )
    }

}

export default Second; 