import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Card from './Card';

class Main extends Component {
  render() {
    return (
      <main>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export const Home = () => {
  return <h2>This is Home Page</h2>;
}

export const About = () => {
  return <h2>This is About Page</h2>;
}

export class Users extends Component {
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

    const cardDetails = userArray.map((cardDetail, i) => {
      return <Card key={userArray[i].id} name={userArray[i].name} post={userArray[i].post}></Card>
    });

    return (
      <div>
        <h2>Users</h2>
        <div className="flex-container">
          {cardDetails}
        </div>
      </div>
    );
  }
}

export default Main;