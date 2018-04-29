import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Blog from './Pages/Blog'
import Updates from './Pages/Updates'
import More from './Pages/More'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path = '/blog' component = {Blog}/>
            <Route path = '/updates' component = {Updates}/>
            <Route path = '/more' component = {More}/>
            
            <Route path = '/' component = {App}/>
            <Route path = '/Home' component = {App}/>
        </Switch>
    </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
