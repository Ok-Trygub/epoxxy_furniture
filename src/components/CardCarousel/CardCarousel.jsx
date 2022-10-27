import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './CardCarousel.scss';
import CardHr from "../../assets/images/card_hr.png";
import cn from "classnames";


const CardCarousel = (props) => {
    const {cardTitle, oldPrice, newPrice, tag, carouselImgSrc1, carouselImgSrc2, carouselHandler} = props;

    const [isOver, setIsOver] = useState(false);


    const oldPriceStyle = cn('fw-medium cardCarousel__oldPrice', {
        'cardCarousel__oldPriceThrough': newPrice
    })

    const hrStyle = cn('cardCarousel__hr', {
        'd-none': isOver
    })

    const btnStyle = cn('cardCarousel__btn text-uppercase cardCarousel__btnMaxWidth', {
        'd-block': isOver
    })

    const titleStyle = cn('cardCarousel__title fw-medium text-uppercase', {
        'cardCarousel__hoverTitle': isOver
    })

    const carouselStyle = cn('w-100', {
        'cardCarousel__hoverTitle': isOver
    })

    const dataWrapperStyle = cn('d-flex flex-column align-items-center mb-3 mb-lg-0 cardCarousel__dataWrapper', {
        'justify-content-lg-end': isOver
    })


    return (
        <div className='cardCarousel position-relative'
             onMouseOver={() => setIsOver(true)}
             onMouseOut={() => setIsOver(false)}
        >
            <Carousel controls={true} interval={null} className={carouselStyle}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImgSrc1}
                        alt="First slide"
                        onMouseOver={carouselHandler}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carouselImgSrc2}
                        alt="Second slide"
                        onMouseOver={carouselHandler}
                    />
                </Carousel.Item>
            </Carousel>

            <div className={dataWrapperStyle}>
                <img src={CardHr} alt="card_separator" className={hrStyle}/>

                <h3 className={titleStyle}>{cardTitle}</h3>

                <p className='cardCarousel__newPrice fw-bold'>{newPrice}
                    <span className={oldPriceStyle}>
                    {oldPrice ? oldPrice : null}</span>
                </p>
                {tag ? <img src={tag} alt="PopularTag" className='cardCarousel__tag position-absolute'/> : null}

                <div className='d-flex justify-content-center'>
                    <button className={btnStyle}>add to cart</button>
                </div>

            </div>
        </div>
    );
};

export default CardCarousel;
