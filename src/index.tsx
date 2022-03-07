import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App';
import { LoginPages } from './pages/loginPages';
import { NotFoundPages } from './pages/notFoundPages';
import { HomePages } from './pages/homePages';
import { Myroutes}  from './components/myroutes'




ReactDOM.render(
  <React.StrictMode>
  <Myroutes />
  </React.StrictMode>
  , document.getElementById('root')
);


reportWebVitals();
