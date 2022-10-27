import React, {useState} from 'react';
import CardHr from "../../assets/images/card_hr.png";
import './FurnitureCard.scss';
import cn from "classnames";


const FurnitureCard = (props) => {
    const {imgSource, cardTitle, oldPrice, newPrice, tag, navigateHandler} = props;

    const oldPriceStyle = cn('fw-medium card__oldPrice', {
        'card__oldPriceThrough': newPrice
    })

    return (
        <div className='card position-relative' onClick={navigateHandler}
        >
            <img src={imgSource} alt="card_img" className='w-100'/>

            <div className='d-flex flex-column align-items-center text-center'>
                <img src={CardHr} alt="card_divider" className='card__hr'/>
                <h3 className='card__title'>{cardTitle}</h3>


                <p className='card__newPrice fw-bold'>{newPrice}
                    <span className={oldPriceStyle}>
                    {oldPrice ? oldPrice : null}</span>
                </p>

                {tag ? <img src={tag} alt="PopularTag" className='position-absolute card__tag'/> : null}
            </div>
        </div>
    );
};

export default FurnitureCard;
