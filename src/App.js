import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import axios from 'axios';

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
}

let data;

class App extends Component {
  componentDidMount() {
    // Axios
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        data = response.data;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
