import React, {Component} from 'react';
import {Parallax, ParallaxProvider} from 'react-scroll-parallax';
import '../App.css';
import "animate.css/animate.min.css";
import Cbutton from '../components/Cbutton';
import { bounce, fadeIn, fadeOut } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import {Banner} from '../components/Banner';


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


class First extends Component{
    render(){
        return(
            <StyleRoot>
            <div className="test" style={styles.fadeIn}>
              <Banner
                  min={'-50%'}
                  max={'50%'}
                  image= {require("../images/banner.jpg")}
                  container = "BannerChildren"
              >
                <div>
                  <h1>Meet Ryan!</h1>
                  
                  <div className = "Buttons">
                    <div className = "ButtonWrapper">
                    <Cbutton label = "LinkedIn" link = "https://www.linkedin.com/in/ryan-yejun-jeon-70b4a7145/" />
                    <Cbutton label = "Resume" link = "https://drive.google.com/file/d/1IpYA07nDMGNZCquxinFjhmuBIEe1G6up/view?usp=sharing" />
                    <Cbutton label = "View Source Code" link = "https://github.com/RyanJeon/RyanDomain"/>
                    </div>
                  </div>
                </div>
              </Banner>
              </div>
            </StyleRoot>
        )
    }


}


export default First;