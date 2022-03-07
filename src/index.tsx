import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Myroutes}  from './components/myroutes'

ReactDOM.render(
  <React.StrictMode>
  <Myroutes />
  </React.StrictMode>
  , document.getElementById('root')
);

reportWebVitals();
