import React from 'react';
import './LinkButton.scss'

const LinkButton = (props) => {
    const {btnText, imgSource, type} = props

    return (
        <button className='linkBtn text-uppercase align-content-center' type={type}>{btnText}
            <img src={imgSource} alt="link_btn_img" className='linkBtn__img'/>
        </button>
    );
};

export default LinkButton;
