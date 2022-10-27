import React from 'react';
import './CarouselWithIndicators.scss';
import Carousel from 'react-bootstrap/Carousel';
import ChairMob from '../../assets/images/productPage/chairMob.png';
import Chair2 from '../../assets/images/productPage/chair2.png';
import Kitchen from '../../assets/images/productPage/kitchen.png';
import Video from '../../assets/images/productPage/video.png';

const CarouselWithIndicators = () => {
    return (
        <Carousel fade slide={false} controls={true} interval={null} className='carouselWithIndicators'>
            <Carousel.Item>
                <div className='d-flex flex-column align-items-center carouselItemWrapper'>
                    <div className='d-flex'>
                        <img src={ChairMob} alt="product_photo" className='slideImg mb-4'/>
                    </div>
                    <div className='d-flex'>
                        <img src={Chair2} alt="product_photo" className='slideImg'/>
                        <img src={Video} alt="product_photo" className='slideImg mx-3'/>
                        <img src={Kitchen} alt="product_photo" className='slideImg'/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex flex-column align-items-center carouselItemWrapper'>
                    <div className='d-flex'>
                        <img src={ChairMob} alt="product_photo" className='slideImg mb-4'/>
                    </div>
                    <div className='d-flex'>
                        <img src={Video} alt="product_photo" className='slideImg'/>
                        <img src={Chair2} alt="product_photo" className='slideImg mx-3'/>
                        <img src={Kitchen} alt="product_photo" className='slideImg'/>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex flex-column align-items-center carouselItemWrapper'>
                    <div className='d-flex'>
                        <img src={ChairMob} alt="product_photo" className='slideImg mb-4'/>
                    </div>
                    <div className='d-flex'>
                        <img src={Chair2} alt="product_photo" className='slideImg'/>
                        <img src={Kitchen} alt="product_photo" className='slideImg mx-3'/>
                        <img src={Video} alt="product_photo" className='slideImg'/>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselWithIndicators;
