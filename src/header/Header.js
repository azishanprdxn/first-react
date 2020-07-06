import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import './Header.css';

class Header extends Component {
  handleClick = (event) => {
    const activeURL = document.querySelectorAll('header a');
    for (let i = 0; i < activeURL.length; i++) {
      activeURL[i].className = '';
    }
    event.target.className = 'active';
  }

  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" title="Home" onClick={this.handleClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" title="About" onClick={this.handleClick}>About</Link>
            </li>
            <li>
              <Link to="/users" title="Users" onClick={this.handleClick}>Users</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;