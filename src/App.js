import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';
import Blog from './Pages/Blog';


import NavBar from './components/NavBar';




class App extends Component {
  render() {
    return (
      <ParallaxProvider>
          
        <main>
            <NavBar/>
            <First />
            <Second/>
            <Third/>
            <NavBar {...this.props} />         
        </main>

      </ParallaxProvider>
      
      
    );
  }
}



export default App;
