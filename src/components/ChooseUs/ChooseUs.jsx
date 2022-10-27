import React from 'react';
import './ChooseUs.scss';
import Container from "react-bootstrap/Container";
import Furniture from '../../assets/images/aboutUs/bestFurniture.png';
import Clients from '../../assets/images/aboutUs/happyClients.png';
import Asortment from '../../assets/images/aboutUs/richAsortment.png';
import Natural from '../../assets/images/aboutUs/natural.png';
import Experience from '../../assets/images/aboutUs/expirience.png';
import Design from '../../assets/images/aboutUs/design.png';
import Prices from '../../assets/images/aboutUs/prices.png';
import Divider from '../../assets/images/divider.png';

const ChooseUs = () => {
    return (
        <div className='chooseUs'>
            <Container>
                <div className='d-flex flex-column align-items-center text-center'>
                    <img src={Divider} alt="divider"/>
                    <h2 className='text-uppercase fw-medium chooseUs__title'>why you should choose us</h2>
                </div>

                <div>
                    <div className='d-flex flex-column flex-md-row  mb-md-3'>
                        <img src={Furniture} alt="achievement_img" className='chooseUs__img mb-md-0'/>
                        <img src={Clients} alt="achievement_img" className='chooseUs__img mb-md-0'/>
                        <img src={Asortment} alt="achievement_img" className='chooseUs__img mb-md-0'/>
                        <img src={Natural} alt="achievement_img" className='chooseUs__img m-md-0'/>
                    </div>
                    <div className='d-flex flex-column flex-md-row justify-content-md-center'>
                        <img src={Experience} alt="achievement_img" className='chooseUs__img mb-md-0'/>
                        <img src={Design} alt="achievement_img" className='chooseUs__img mb-md-0'/>
                        <img src={Prices} alt="achievement_img" className='chooseUs__img m-0'/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ChooseUs;
