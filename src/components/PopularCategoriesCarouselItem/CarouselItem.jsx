import React from 'react';
import './CarouselItem.scss';


const CarouselItem = (props) => {
    const {imgSource} = props;

    return (
        <div className='d-flex align-items-center categoryItemWrapper mb-2'
        >
            <img src={imgSource} alt="category_img" className='categoryImg w-100'/>
            <p className='m-0 text-uppercase fw-medium categoryName'>{props.categoryName}</p>
        </div>
    );
};

export default CarouselItem;
