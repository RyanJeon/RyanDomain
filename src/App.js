import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { bounce, fadeIn, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cbutton from './components/Cbutton';
import {Banner} from './components/Banner';
import ProjectSection from './components/projectSection';
import First from './Pages/First';



const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },

  fadeOut: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  }

}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                    info: "Who is Ryan Jeon?", 
  developer:  'I am a Full-Stack Developer currently working'+ 
              'for a university garage startup based in Evanston,'+
               'IL. I am looking for any opportunities to learn'+
                'and become a better developer and use my technical'+
                 'abilities to contribute to inspiring projects.',  

  student: "I am Sophomore enrolled in a Computer Science program"+
            "in Northwestern University. I have spent my first year"+
             "of college as a Computer Science student in Rensselaer"+ 
             "Polytechnic Institute, where I have learned much about my "+ 
             "career path.",     

  leader: "More than anything, I would like to be incharge of any projects "+
          "that I am responsible for. I love leading teams, and have lead many"+
          "project teams during my career as a developer"
  };

  this.project = {
    domain: "This website on it's own is a constantly on-going project!"+
          " I am updating the website frequently to make the interface"+
          " more interactly & asthetic. Please do contact me for any advice"+
          " or suggestions!",

    focalwealth: "Focal Wealth uses SQL database scraped from market intelligence data feeds and "+
                  "Python script to determine high net-worth individuals in Latin America for" +
                  "clients seeking investors. Click the icon to access the current Demo!",

    HIIT: "HIIT (High Intensity Interval Training) is an android application that allows"+
           " users to split a one-minute efficiently to jog, run, and sprint, for an effective high"+
            "intensity workout. "
    
  }
  
}


  changeSecondBack( info){
    this.setState({info: info});

  }

  render() {
    return (
      <ParallaxProvider>
        <main>
            <nav />
            <First/>

            <Banner
                  min={'-50%'}
                  max={'50%'}
                  image= {require("./images/upper_tress.jpg")}
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
                        <div className = "ButtonWrapper">

                          <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                              <h3>
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

            <Banner
                min={'-50%'}
                max={'50%'}
                image= {require("./images/lower_tress.jpg")}
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
                  image = {require("./images/codingico.png")}
                  link = "https://github.com/RyanJeon/RyanDomain"
                  />  



                  <ProjectSection 
                  title = "Focal Wealth"
                  description = {this.project.focalwealth}
                  image = {require("./images/focalwealth.png")}
                  link = "https://focalwealth.herokuapp.com/"
                  />

                  <ProjectSection 
                  description = {this.project.HIIT}
                  title = "High Intensity Interval Training App"
                  image = {require("./images/runico.png")}
                  link = "https://github.com/RyanJeon/HIIT_v1"
                  />  
         

               </div>
            </Banner>


            
        </main>

    </ParallaxProvider>
    );
  }
}



export default App;
