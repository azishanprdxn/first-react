import React, { Component } from 'react';

class Card extends Component {
  render() {
    let imgSrc = `https://joeschmoe.io/api/v1/${this.props.name}`;
    
    return (
      <div className="flexbox">
        <div className="content" title={this.props.name}>
          <img src={imgSrc} alt="Avatar" />
          <h2>My name is {this.props.name}</h2>
          <p>I am a {this.props.post}</p>
        </div>
      </div>
    );
  }
}

export default Card;