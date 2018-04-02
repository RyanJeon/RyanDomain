import React, { Component } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';
import Blog from './Pages/Blog';
import { Route, BrowserRouter as Router } from 'react-router-dom'



const MainPage = () =>(
  <ParallaxProvider>
    <main>
        <First/>
        <Second/>
        <Third/>         
    </main>

  </ParallaxProvider>
)


class App extends Component {
  render() {
    return (

      <MainPage/>
      
    );
  }
}



export default App;
