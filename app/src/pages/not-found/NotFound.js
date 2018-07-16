import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class NotFound extends Component {
  render() {
    return (
      <Jumbotron className="bg-white">
        <h1>Page Not Found!</h1>
        <p>The page you are trying to reach cannot be found. Make sure the address is correct or go back to the <a href="/">Home page</a>.</p>
      </Jumbotron>
    );
  }
}

export default NotFound;
