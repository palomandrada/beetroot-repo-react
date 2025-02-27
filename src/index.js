import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieFinder from './MovieFinder/MovieFinder';
import Punishment from './Punishment/MinCalculator';
import ImageGallery from './ImageGallery/ImageGallery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog/Blog";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <nav className="navbar navbar-light bg-light mb-4">
          <Link to="/blog" className="navbar-brand">Blog</Link>
        </nav>
        
        <MovieFinder />
        <hr />
        <Punishment />
        <hr />
        <ImageGallery />
        <hr />

        <Routes>
          <Route path="/blog/*" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 