import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './styles/global.css'
ReactDOM.render(
   
      <Router  >
        <Routes />
      </Router  >
 
  ,
  document.getElementById('root')
);


