import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';

import Card from './Card';
import ScrollToTop from './../ScrollToTop';
import Loader from './../loader/Loader';
import userArray from './UserArray';

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
          <Route path="/add-document" component={AddDocumentComponent} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export const Home = () => {
  return (
    <div>
      <div className="home-banner">
        <h2>Home Page</h2>
      </div>
      <h2>Content goes here...</h2>
    </div>
  );
}

export class About extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      showData: 10
    }
  }

  componentDidMount() {
    // Axios
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            data: res.data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleClick() {
    this.setState({ showData: this.state.showData + 10 })
  }

  render() {
    const { error, isLoaded, data, showData } = this.state;
    if (error) {
      return <h2>Error: {error.message}</h2>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <div className="data-title">
          <ul>
            {data.slice(0, showData).map(item => (
              <li key={item.id}>
                {item.id}. {item.title}
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
          {
            showData < 100 ?
              <div className="show-more">
                <button title="Show More" onClick={this.handleClick}>Show More</button>
              </div> : null
          }
        </div>
      );
    }
  }
}

export class Users extends Component {
  render() {
    return (
      <div>
        <h2>Users</h2>
        <div className="flex-container">
          {userArray.map(item => (<Card key={item.id} name={item.name} post={item.post} />))}
        </div>
      </div>
    );
  }
}

export class AddDocumentComponent extends Component {
  documentData;

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      title: '',
      description: '',
      price: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault()
    localStorage.setItem('document', JSON.stringify(this.state));
  }

  // React Life Cycle
  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));

    if (localStorage.getItem('document')) {
      this.setState({
        title: this.documentData.title,
        description: this.documentData.description,
        price: this.documentData.price
      })
    } else {
      this.setState({
        title: '',
        description: '',
        price: ''
      })
    }
  }

  render() {
    return (
      <div className="form wrapper">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </div>
    )
  }
}

export default Main;