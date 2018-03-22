import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import { bounce, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import Cbutton from './components/Cbutton';
import Banner from './components/Banner';



const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  fadeIn: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },

}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {secondBack: require("./images/nightsk.jpeg"),
                    info: "I can be anything.."
  };
  }


  changeSecondBack(tag, info){
    this.setState({secondBack: require(`./images/${tag}`)});
    this.setState({info: info});
    console.log('lol')


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
                            <h3  onClick = {this.changeSecondBack.bind(this, 'nightsk.jpeg', 'I can be anything..')}>
                            I am a/an..
                            </h3>

                            <div  onClick = {this.changeSecondBack.bind(this, 'devel.jpg', 'A Developer')}>
                              <Cbutton width = "300px" label = "Developer"/>
                            </div>
                            <div  onClick = {this.changeSecondBack.bind(this, 'explorer.jpg', 'An explorer')}>
                            <Cbutton width = "300px" label = "Explorer" />
                            </div>
                            <div  onClick = {this.changeSecondBack.bind(this, 'leader.jpg', 'A Leader')}>
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
                image= "http://www.tokkoro.com/picsup/1105878-bangkok.jpg"
                container = "hero-children"
            >
                <h1>Hi! My Name is Ryan!</h1>
            </Banner>

            
        </main>

    </ParallaxProvider>
    );
  }
}



export default App;
