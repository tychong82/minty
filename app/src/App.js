import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
