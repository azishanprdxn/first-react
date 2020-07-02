import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="flexbox">
        <div className="content" title={this.props.name}>
          <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="Avatar" />
          <h2>My name is {this.props.name}</h2>
          <p>I am a {this.props.post}</p>
        </div>
      </div>
    );
  }
}

export default Card;