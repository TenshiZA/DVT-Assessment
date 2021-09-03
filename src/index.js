import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';


ReactDOM.render(  
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
 );