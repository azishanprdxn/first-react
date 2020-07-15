import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="lds-dual-ring"></div>
      </div>
    );
  }
}

export default Loader;