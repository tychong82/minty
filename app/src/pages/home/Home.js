import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div className="p-3">
        <header>
          <h1><strong className="text-primary">Min</strong>dy &amp; <strong className="text-primary">Ty</strong>rone</h1>
        </header>
        <p>
          This is our website. To do stuff in...
        </p>
      </div>
    );
  }
}

export default Home;
