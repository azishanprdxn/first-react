import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Card extends Component {
  render() {
    return (
      <div className="flexbox">
        <div className="content" title={this.props.name}>
          <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="Avatar" />
          <h1>My name is {this.props.name}</h1>
          <p>I am a {this.props.post}</p>
        </div>
      </div>
    );
  }
}

export default Card;