import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { bounce, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';



const HeroBanner = ({ image, min, max, children, color, container}) => (
  <div className="hero-container">
      <Parallax offsetYMin={min} offsetYMax={max} slowerScrollRate>
          <div
              className="hero-image"
              style={{ backgroundImage: `url(${image})` }}
          />
      </Parallax>
      <div className={container}>{children}</div>
  </div>
);



const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      animation: 'fadeIn',
    };

    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  triggerAnimation() {
    const { animation } = this.state;
    this.setState({ animation: '' }, () => {
      this.setState({ animation });
    });
  }


  render() {
    return (
      <ParallaxProvider>
        <main>
            <nav />

            <StyleRoot>
            <div className="test" style={styles.fadeIn}>
              <HeroBanner
                  min={'-50%'}
                  max={'50%'}
                  image= "http://www.tokkoro.com/picsup/1105878-bangkok.jpg"
                  container = "hero-children"
              >
                  <h1>Hi! My Name is Ryan!</h1>
              </HeroBanner>
              </div>
            </StyleRoot>

            <HeroBanner
                min={'-50%'}
                max={'50%'}
                container = "info-box"
                
            >

           
                <div className = "info-box">
                  <div className = "info-title">

                  

                  <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                    <h2> Who Am I? </h2>
                  </ScrollAnimation>
                  </div>

                  <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
                  <div className = "info">

                  
                     I am a Full-Stack Developer who is currently enrolled
                        in Northwestern University as a Sophomore studyign Computer Science
                        I want to get a job but I can't so you really should hire me
                        I like to code and do some cool stuff so I u shud defo hire me fo sho
                        in Northwestern University as a Sophomore studyign Computer Science
                        I want to get a job but I can't so you really should hire me
                        I like to code and do some cool stuff so I u shud defo hire me fo sho!
                    
                    <img className = "photo" src = 'https://i.imgur.com/tnUFInc.jpg'/>
                  </div>
                  </ScrollAnimation>

                </div>

            
                


            </HeroBanner>

            <HeroBanner
                min={'-50%'}
                max={'50%'}
                image= "http://www.tokkoro.com/picsup/1105878-bangkok.jpg"
                container = "hero-children"
            >
                <h1>Hi! My Name is Ryan!</h1>
            </HeroBanner>

            
        </main>

    </ParallaxProvider>
    );
  }
}



export default App;
