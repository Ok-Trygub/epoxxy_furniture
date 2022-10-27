import React from 'react';
import './PopularCategories.scss';
import Container from "react-bootstrap/Container";
import MobCarousel from '../PopularCategoriesMobCarousel/MobCarousel';
import DesktopCarousel from "../PopularCategoriesDescCarousel/DesktopCarousel";

const PopularCategories = () => {
    return (
        <div className='categories'>
            <Container>
                <h2 className='categories__title'>popular <br className='d-sm-none'/> categories</h2>
                <div className='d-xl-none'>
                    <MobCarousel/>
                </div>

                <div className='d-none d-xl-block'>
                    <DesktopCarousel/>
                </div>
            </Container>
        </div>
    );
};

export default PopularCategories;
