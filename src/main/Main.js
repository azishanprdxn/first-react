import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

import Card from './Card';
import ScrollToTop from './../ScrollToTop';

class Main extends Component {
  render() {
    return (
      <main>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <ScrollToTop />
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
  return (
    <div>
      <h2>This is Home Page</h2>
    </div>
  );
}

export class About extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    // Axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const lists = this.state.data.map((list, i) => {
      return (
        <li key={this.state.data[i].id}>
          {this.state.data[i].id}. {this.state.data[i].title}
          <p>{this.state.data[i].body}</p>
        </li>
      );
    });

    return (
      <div className="data-title">
        <ul>{lists}</ul>
      </div>
    );
  }
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
      return <Card key={userArray[i].id} name={userArray[i].name} post={userArray[i].post} />
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