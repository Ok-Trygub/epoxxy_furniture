import React from 'react';
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import FurnitureCard from '../FurnitureCard/FurnitureCard';
import './BlockByFilter.scss';
import LinkButton from "../LinkButton/LinkButton";
import BedsideTable from "../../assets/images/blockByFilter/bedside_table.png";
import Chair from "../../assets/images/blockByFilter/chair.png";
import Lamp from "../../assets/images/blockByFilter/lamp.png";
import Set from "../../assets/images/blockByFilter/set.png";
import Lamp2 from "../../assets/images/blockByFilter/floor_lamp.png";
import Chair2 from "../../assets/images/blockByFilter/chair2.png";
import Sofa from "../../assets/images/blockByFilter/sofa.png";
import SideBoard from "../../assets/images/blockByFilter/sideboard.png";
import ArrowRight from "../../assets/images/arrowRight.png";
import PopularTag from '../../assets/images/popular_tag.png';


const BlockByFilter = () => {
    const navigate = useNavigate();

    return (
        <div className='blocks'>
            <Container>
                <div
                    className='align-items-center text-uppercase fw-medium blocks__itemsWrapper d-flex justify-content-center'>
                    <span className='blocks__item'>All</span>
                    <span className='blocks__item'>popular</span>
                    <span className='blocks__item'>hot</span>
                    <span className='blocks__item'>new</span>
                </div>

                <div className='d-flex flex-column flex-lg-row'>

                    <FurnitureCard
                        imgSource={BedsideTable}
                        cardTitle='ebro bedside table'
                        oldPrice='310$'
                        newPrice='$250'
                        tag={PopularTag}
                        navigateHandler={()=>navigate('productPage')}
                    />
                    <FurnitureCard
                        imgSource={Chair}
                        cardTitle='Tirado chair'
                        tag={PopularTag}
                        oldPrice='$280'
                        navigateHandler={()=>navigate('productPage')}
                    />
                    <FurnitureCard
                        imgSource={Lamp}
                        cardTitle='caleido lamp'
                        tag={PopularTag}
                        oldPrice='$355'
                        navigateHandler={()=>navigate('productPage')}
                    />
                    <FurnitureCard
                        imgSource={Set}
                        cardTitle='emmi set'
                        tag={PopularTag}
                        oldPrice='$240'
                        navigateHandler={()=>navigate('productPage')}
                    />
                </div>

                <div className='d-flex flex-column flex-lg-row pb-3'>
                    <FurnitureCard
                        imgSource={Lamp2}
                        cardTitle='illaria floor lamp'
                        tag={PopularTag}
                        oldPrice='$380'
                        navigateHandler={()=>navigate('productPage')}
                    />
                    <FurnitureCard
                        imgSource={Chair2}
                        cardTitle='caleido chair'
                        tag={PopularTag}
                        oldPrice='$355'
                        navigateHandler={()=>navigate('productPage')}
                    />
                    <FurnitureCard
                        imgSource={Sofa}
                        cardTitle='Scott angle sofa'
                        tag={PopularTag}
                        newPrice='$4 900'
                        oldPrice='$5 400'
                        navigateHandler={()=>navigate('productPage')}
                    />
                    <FurnitureCard
                        imgSource={SideBoard}
                        cardTitle='hainess wide sideboard'
                        tag={PopularTag}
                        oldPrice='$1 750'
                        navigateHandler={()=>navigate('productPage')}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center' onClick={() => navigate('catalog')}>
                    <LinkButton btnText='see more products' imgSource={ArrowRight}/>
                </div>
            </Container>
        </div>
    );
};

export default BlockByFilter;
