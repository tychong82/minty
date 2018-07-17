import React, { Component } from 'react';
import HeroCarousel from '../../components/hero-carousel/HeroCarousel';

import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="slide-content-text d-flex h-100 w-100 justify-content-center align-items-center flex-column text-white">
          <header>
            <h1 className="text-shadow text-white"><span className="text-primary">Min</span>dy &amp; <span className="text-primary">Ty</span>rone</h1>
          </header>
          <p className="mt-5 text-shadow">
            This is our website. To do stuff in...
          </p>
        </div>
        <HeroCarousel />
      </div>
    );
  }
}

export default Home;
