import React from 'react';
import './MobCarousel.scss';
import Carousel from "react-bootstrap/Carousel";
import CarouselItem1 from '../../../assets/images/aboutUs/carouselItem1.png';
import CarouselItem2 from '../../../assets/images/aboutUs/carouselItem2.png';
import CarouselItem3 from '../../../assets/images/aboutUs/carouselItem3.png';

const MobCarousel = () => {
    return (
        <Carousel slide={false} controls={true} interval={null} className='aboutUsMobCarousel'>
            <Carousel.Item>
                <img src={CarouselItem1} alt="carousel_img" className='w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={CarouselItem2} alt="carousel_img" className='w-100'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={CarouselItem3} alt="carousel_img" className='w-100'/>
            </Carousel.Item>
        </Carousel>
    );
};

export default MobCarousel;
