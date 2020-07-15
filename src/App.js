import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import './App.css';

window.onload = () => {
  // Active URL
  const activeURL = document.querySelectorAll('header a');
  for (let i = 0; i < activeURL.length; i++) {
    activeURL[i].className = '';
  }
  if (window.location.pathname === '/') {
    activeURL[0].className = 'active';
  }
  if (window.location.pathname === '/about') {
    activeURL[1].className = 'active';
  }
  if (window.location.pathname === '/users') {
    activeURL[2].className = 'active';
  }
  if (window.location.pathname === '/add-document') {
    activeURL[3].className = 'active';
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    );
  }
}

export default App;
