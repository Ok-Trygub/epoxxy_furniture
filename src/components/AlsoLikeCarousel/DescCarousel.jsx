import React from 'react';
import {useNavigate} from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import './DescCarousel.scss';
import FurnitureCard from "../FurnitureCard/FurnitureCard";
import BrownChair from "../../assets/images/youMayAlsoLike/brownChair.png";
import GreyChairs from "../../assets/images/youMayAlsoLike/greyChairs.png";
import YellowChairs from "../../assets/images/youMayAlsoLike/yellowChair.png";
import BlueChairs from "../../assets/images/youMayAlsoLike/blueChair.png";
import HotTag from "../../assets/images/hot_tag.png";
import PopularTag from "../../assets/images/popular_tag.png";

const DescCarousel = () => {
    const navigate = useNavigate();

    return (
        <Carousel slide={false} controls={true} interval={null} className='productPageDescCarousel'>
            <Carousel.Item>
                <div className='d-flex'>
                    <FurnitureCard
                        imgSource={BrownChair}
                        cardTitle='ebro bedside chair'
                        oldPrice='$310'
                        newPrice='$250'
                        tag={HotTag}
                        navigateHandler={()=>navigate('../productPage')}
                    />
                    <FurnitureCard
                        imgSource={GreyChairs}
                        cardTitle='Tirado chair'
                        newPrice='$280'
                        navigateHandler={()=>navigate('../productPage')}
                    />
                    <FurnitureCard
                        imgSource={YellowChairs}
                        cardTitle='emmi velvet chair'
                        newPrice='$240'
                        navigateHandler={()=>navigate('../productPage')}
                    />
                    <FurnitureCard
                        imgSource={BlueChairs}
                        cardTitle='ebro bedside chair'
                        newPrice='$250'
                        tag={PopularTag}
                        navigateHandler={()=>navigate('../productPage')}
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex'>
                    <FurnitureCard
                        imgSource={BlueChairs}
                        cardTitle='ebro bedside chair'
                        newPrice='$250'
                        tag={PopularTag}
                        navigateHandler={()=>navigate('../productPage')}
                    />
                    <FurnitureCard
                        imgSource={YellowChairs}
                        cardTitle='emmi velvet chair'
                        newPrice='$240'
                        navigateHandler={()=>navigate('../productPage')}
                    />
                    <FurnitureCard
                        imgSource={BrownChair}
                        cardTitle='ebro bedside chair'
                        oldPrice='$310'
                        newPrice='$250'
                        tag={HotTag}
                        navigateHandler={()=>navigate('../productPage')}
                    />
                    <FurnitureCard
                        imgSource={GreyChairs}
                        cardTitle='Tirado chair'
                        newPrice='$280'
                        navigateHandler={()=>navigate('../productPage')}
                    />
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default DescCarousel;
