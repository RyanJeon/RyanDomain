import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Blog from './Pages/Blog';
import { BrowserRouter , Switch, Route } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path = '/blog' component = {Blog}/>
            <Route path = '/' component = {App}/>
        </Switch>
    </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
