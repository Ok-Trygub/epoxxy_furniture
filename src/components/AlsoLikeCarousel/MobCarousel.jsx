import React from 'react';
import './MobCarousel.scss';
import Carousel from "react-bootstrap/Carousel";
import FurnitureCard from '../../components/FurnitureCard/FurnitureCard';
import BrownChair from "../../assets/images/youMayAlsoLike/brownChair.png";
import GreyChairs from "../../assets/images/youMayAlsoLike/greyChairs.png";
import YellowChairs from "../../assets/images/youMayAlsoLike/yellowChair.png";
import BlueChairs from "../../assets/images/youMayAlsoLike/blueChair.png";
import HotTag from '../../assets/images/hot_tag.png';
import PopularTag from '../../assets/images/popular_tag.png';


const MobCarousel = () => {
    return (
        <Carousel slide={false} controls={true} interval={null} className='productPageMobCarousel'>
            <Carousel.Item>
                <FurnitureCard
                    imgSource={BrownChair}
                    cardTitle='ebro bedside chair'
                    oldPrice='$310'
                    newPrice='$250'
                    tag={HotTag}
                />
            </Carousel.Item>
            <Carousel.Item>
                <FurnitureCard
                    imgSource={GreyChairs}
                    cardTitle='Tirado chair'
                    newPrice='$280'
                />
            </Carousel.Item>
            <Carousel.Item>
                <FurnitureCard
                    imgSource={YellowChairs}
                    cardTitle='emmi velvet chair'
                    newPrice='$240'

                />
            </Carousel.Item>
            <Carousel.Item>
                <FurnitureCard
                    imgSource={BlueChairs}
                    cardTitle='ebro bedside chair'
                    newPrice='$250'
                    tag={PopularTag}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default MobCarousel;
