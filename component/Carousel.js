import React from "react";
import CardItem from "./CardItem";
import Slider from 'infinite-react-carousel';
import 'infinite-react-carousel/lib/carousel/style.css'


const Carousel = () =>{
    const settings =  {
        autoplay: true,
        autoplaySpeed: 7000,
        duration: 400,
        shift: 100,
        centerMode: true,
        dots: true,
      };
    return (
            <Slider { ...settings }>
                <CardItem/>
                <CardItem/>
            </Slider>
    )
}

export default Carousel