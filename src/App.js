import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';



class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <main>
            <First/>
            <Second/>
            <Third/>         
        </main>

    </ParallaxProvider>
    );
  }
}



export default App;
