import React from 'react';
import './DescCarousel.scss';
import Carousel from "react-bootstrap/Carousel";
import CarouselItem1 from "../../../assets/images/aboutUs/carouselItem1.png";
import CarouselItem2 from "../../../assets/images/aboutUs/carouselItem2.png";
import CarouselItem3 from "../../../assets/images/aboutUs/carouselItem3.png";

const DescCarousel = () => {
    return (
        <Carousel slide={false} controls={true} interval={null} className='aboutUsDescCarousel'>
            <Carousel.Item>
                <div className='d-flex justify-content-between'>
                    <img src={CarouselItem1} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                    <img src={CarouselItem2} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                    <img src={CarouselItem3} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-between'>
                    <img src={CarouselItem3} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                    <img src={CarouselItem2} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                    <img src={CarouselItem1} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex justify-content-between'>
                    <img src={CarouselItem3} alt="carousel_img" className='aboutUsDescCarousel__item'/>
                    <img src={CarouselItem1} alt="carousel_img" className=' aboutUsDescCarousel__item'/>
                    <img src={CarouselItem2} alt="carousel_img" className=' aboutUsDescCarousel__item'/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default DescCarousel;
