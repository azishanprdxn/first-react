import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div class="lds-dual-ring"></div>
      </div>
    );
  }
}

export default Loader;