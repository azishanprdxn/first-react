import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Card from './Card';
import './Demo.css';

class Demo extends Component {
  render() {
    return (
      <Router>
        <div>
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

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <main>
            <Switch>
              <Route path="/users" component={Users} />
              <Route path="/about" component={About} />
              <Route path="/" component={Home}/>
            </Switch>
          </main>

          <footer>
            <p>&copy; Copyright 2020. All Rights Reserved.</p>
          </footer>
        </div>
      </Router>
    );
  }
}

function Home() {
  return <h2>This is Home Page</h2>;
}

function About() {
  return <h2>This is About Page</h2>;
}

class Users extends Component {
  render() {
    const userArray = [
      {
        id: 1,
        name: 'Zishan Ansari',
        post: 'Web Developer'
      },
      {
        id: 2,
        name: 'Anonymous',
        post: 'Web Developer'
      },
      {
        id: 3,
        name: 'Anonymous User',
        post: 'Web Developer'
      },
      {
        id: 4,
        name: 'Anonymous Three',
        post: 'Web Developer'
      },
    ]

    const cardArrayList = userArray.map((cardArray, i) => {
      return <Card key={userArray[i].id} name={userArray[i].name} post={userArray[i].post}></Card>
    });

    return (
      <div>
        <h2>Users</h2>
        <div className="flex-container">
          {cardArrayList}
        </div>
      </div>
    );
  }
}

export default Demo;