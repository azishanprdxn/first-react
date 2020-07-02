import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/" title="Home">Home</Link>
            </li>
            <li>
              <Link to="/about" title="About">About</Link>
            </li>
            <li>
              <Link to="/users" title="Users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;