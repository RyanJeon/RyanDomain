import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { bounce, fadeIn, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cbutton from './components/Cbutton';
import {Banner} from './components/Banner';



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
    this.state = {secondBack: require("./images/nightsk.jpeg"),
                    info: "Who is Ryan Jeon?", 
  developer:  'I am a Full-Stack Developer currently working for a university garage startup based in Evanston, IL. I am looking for any opportunities to learn and become a better developer and use my technical abilities to contribute to inspiring projects.',  
  student: "I am Sophomore enrolled in a Computer Science program in Northwestern University. I have spent my first year of college as a Computer Science student in Rensselaer Polytechnic Institute, where I have learned much about my career path.",              
  leader: " "
  };
}


  changeSecondBack(tag, info){
    this.setState({secondBack: require(`./images/${tag}`)});
    this.setState({info: info});



  }

  render() {
    return (
      <ParallaxProvider>
        <main>
            <nav />

            <StyleRoot>
            <div className="test" style={styles.fadeIn}>
              <Banner
                  min={'-50%'}
                  max={'50%'}
                  image= {require("./images/banner.jpg")}
                  container = "BannerChildren"
              >
                <div>
                  <h1>Meet Ryan!</h1>
                  
                  <div className = "Buttons">
                    <div className = "ButtonWrapper">
                    <Cbutton label = "LinkedIn" link = "https://www.linkedin.com/in/ryan-yejun-jeon-70b4a7145/" />
                    <Cbutton label = "Resume" link = "https://www.linkedin.com/in/ryan-yejun-jeon-70b4a7145/" />
                    <Cbutton label = "View Source Code" link = "https://github.com/RyanJeon/RyanDomain"/>
                    </div>
                  </div>
                </div>
              </Banner>
              </div>
            </StyleRoot>

            <Banner
                min={'-50%'}
                max={'50%'}
                container = "info-box"
                image= {this.state.secondBack}
                
            >   

                <div className = "info-title"> 


                    <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                      <h2> 	&#8212; About Me &#8212; </h2>
                    </ScrollAnimation>
                </div>

                
                <div className = "info-box">

                  <div className = "infContainer">



                    <ScrollAnimation animateIn="fadeIn" duration={4}  animateOnce={true}>
                      <div className = "InfoButtons">
                        <div className = "ButtonWrapper">
                            <h3>
                            I am a/an..
                            </h3>

                            <div  onClick = {this.changeSecondBack.bind(this, 'nightsk.jpeg', this.state.developer)}>
                              <Cbutton width = "300px" label = "Developer"/>
                            </div>
                            <div  onClick = {this.changeSecondBack.bind(this, 'nightsk.jpeg', this.state.student)}>
                            <Cbutton width = "300px" label = "Student" />
                            </div>
                            <div  onClick = {this.changeSecondBack.bind(this, 'nightsk.jpeg', 'A Leader')}>
                            <Cbutton width = "300px" label = "Leader" />
                            </div>

                        </div>

                              <div className = "info">
                                   {this.state.info}
                              
                            </div>
                      </div>

                      
                    </ScrollAnimation>
                  </div>
                </div>
            </Banner>

            <Banner
                min={'-50%'}
                max={'50%'}
                image= {require("./images/dawn.jpg")}
                container = "project-container"
            >
               <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                <div className = "project-header">
                  
                        <h2> 	&#8212; Projects &#8212; </h2>
                    
                </div>  
               </ScrollAnimation>
               <div className = "project-info">

               </div>
            </Banner>


            
        </main>

    </ParallaxProvider>
    );
  }
}



export default App;
