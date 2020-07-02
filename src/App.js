import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import './App.css';

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
