import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './Demo.css';

import Card from './Card';

class Demo extends Component {
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
        <h1>User Profiles</h1>
        <div className="flex-container">
          {cardArrayList}
        </div>
      </div>
    );
  }
}

export default Demo;