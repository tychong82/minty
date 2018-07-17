import React from 'react';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import Slider from "react-slick";

import './HeroCarousel.scss';

import photo from '../../images/engagement-photo.jpg';

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames('bg-primary', className)}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames('bg-primary', className)}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SlideContent(props) {
  const { photo } = props;

  return (
    <div className="hero-carousel-slide">
      <div className="h-100 img" style={{ background: `url(${photo}) no-repeat center center`, backgroundSize: 'cover' }}></div>
    </div>
  );
}

function HeroCarousel() {
  const SLIDER_SETTINGS = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: false,
    autoplaySpeed: 2800,
    pauseOnHover: false,
  };

  return (
    <Row noGutters className="hero-carousel">
      <Col xs="12">
        <Slider {...SLIDER_SETTINGS}>
          <SlideContent photo={photo} />
          <SlideContent photo={photo} />
          <SlideContent photo={photo} />
          <SlideContent photo={photo} />
          <SlideContent photo={photo} />
          <SlideContent photo={photo} />
          <SlideContent photo={photo} />
        </Slider>
      </Col>
    </Row>
  );
};

export default HeroCarousel;
