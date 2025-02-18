import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieFinder from './MovieFinder/MovieFinder';
import Punishment from './Punishment/MinCalculator';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieFinder />
    <hr></hr>
    <Punishment/>
    <hr></hr>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 