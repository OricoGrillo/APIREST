import React from 'react';
// This import is to use the render element.
import ReactDOM from 'react-dom';
import App from './app/layouts/App';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById('root'));