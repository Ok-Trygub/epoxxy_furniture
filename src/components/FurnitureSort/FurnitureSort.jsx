import React from 'react';
import './FurnitureSort.scss';
import VerticalDivider from "../../assets/images/verticalDivider.png";
import CrossIcon from "../../assets/images/crossIcon.png";

const FurnitureSort = () => {
    return (
        <div className='sort d-flex align-items-center justify-content-between fw-bold'>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='sort__name'>Price: </span>
                <span className='text-uppercase sort__value'>low to high</span>
            </div>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='sort__name'>Price: </span>
                <span className='text-uppercase sort__value'>high to low</span>
            </div>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='text-uppercase'>Bestselling</span>
            </div>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='text-uppercase'>Relevance</span>
            </div>
            <img src={VerticalDivider} alt="divider" className='sort__divider'/>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='sort__name'>Color: </span>
                <span className='text-uppercase sort__value'>Black</span>
                <img src={CrossIcon} alt="close_img" className='sort__crossImg'/>
            </div>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='sort__name'>Material: </span>
                <span className='text-uppercase sort__value'>Leather</span>
                <img src={CrossIcon} alt="close_img" className='sort__crossImg'/>
            </div>

            <div className='d-flex align-items-center sort__itemWrapper'>
                <span className='sort__name'>Collection: </span>
                <span className='text-uppercase sort__value'>Minimalism</span>
                <img src={CrossIcon} alt="close_img" className='sort__crossImg'/>
            </div>
        </div>
    );
};

export default FurnitureSort;
