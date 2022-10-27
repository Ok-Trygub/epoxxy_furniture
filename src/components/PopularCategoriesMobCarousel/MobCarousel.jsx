import React from 'react';
import './MobCarousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from '../PopularCategoriesCarouselItem/CarouselItem';
import Sofas from '../../assets/images/popularCategories/sofas.png';
import Chairs from '../../assets/images/popularCategories/chairs.png';
import Table from '../../assets/images/popularCategories/table.png';
import Storage from '../../assets/images/popularCategories/storage.png';
import Beds from '../../assets/images/popularCategories/beds.png';
import Garden from '../../assets/images/popularCategories/garden.png';
import Pets from '../../assets/images/popularCategories/petBeds.png';
import Drinkware from '../../assets/images/popularCategories/drinkWare.png';
import Lightning from '../../assets/images/popularCategories/lightning.png';
import Textiles from '../../assets/images/popularCategories/textiles.png';
import Decor from '../../assets/images/popularCategories/decor.png';
import Kitchen from '../../assets/images/popularCategories/kitchen.png';

const MobCarousel = () => {
    return (
        <Carousel slide={false} controls={true} interval={null} className='popularCategoriesMobCarousel'>
            <Carousel.Item>
                <CarouselItem
                    categoryName='Sofas'
                    imgSource={Sofas}
                />
                <CarouselItem
                    categoryName='chairs'
                    imgSource={Chairs}
                />
                <CarouselItem
                    categoryName='table'
                    imgSource={Table}
                />
                <CarouselItem
                    categoryName='storage'
                    imgSource={Storage}
                />
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem
                    categoryName='beds'
                    imgSource={Beds}
                />
                <CarouselItem
                    categoryName='garden'
                    imgSource={Garden}
                />
                <CarouselItem
                    categoryName='pet Beds'
                    imgSource={Pets}
                />
                <CarouselItem
                    categoryName='drinkware'
                    imgSource={Drinkware}
                />
            </Carousel.Item>

            <Carousel.Item>
                <CarouselItem
                    categoryName='lighting'
                    imgSource={Lightning}
                />
                <CarouselItem
                    categoryName='textiles'
                    imgSource={Textiles}
                />
                <CarouselItem
                    categoryName='pet decor'
                    imgSource={Decor}
                />
                <CarouselItem
                    categoryName='kitchen'
                    imgSource={Kitchen}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MobCarousel;
