import React from 'react';
import Slider from 'infinite-react-carousel';
import CardItem from './CardItem';
import 'infinite-react-carousel/lib/carousel/style.css';

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 7000,
    duration: 400,
    shift: 100,
    centerMode: true,
    dots: true,
  };
  return (
    <Slider {...settings}>
      <CardItem />
      <CardItem />
    </Slider>
  );
};

export default Carousel;
