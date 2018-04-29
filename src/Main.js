import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';


import NavBar from './components/NavBar';




class App extends Component {
  render() {
    return (
      <ParallaxProvider>
          
        <main>
            <First />
            <Second/>
            <Third/>
            <NavBar pagetype = "" {...this.props} />         
        </main>

      </ParallaxProvider>
      
      
    );
  }
}



export default App;
