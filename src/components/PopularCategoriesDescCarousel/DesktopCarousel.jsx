import React from 'react';
import './DesktopCarousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "../PopularCategoriesCarouselItem/CarouselItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sofas from '../../assets/images/popularCategories/sofas.png';
import Chairs from '../../assets/images/popularCategories/chairs.png';
import Table from '../../assets/images/popularCategories/table.png';
import Storage from '../../assets/images/popularCategories/storage.png';
import Beds from '../../assets/images/popularCategories/beds.png';
import Garden from '../../assets/images/popularCategories/garden.png';
import Pets from '../../assets/images/popularCategories/petBeds.png';
import Drinkware from '../../assets/images/popularCategories/drinkWare.png';
import Lightning from '../../assets/images/popularCategories/lightning.png';
import Textiles from '../../assets/images/popularCategories/textiles.png';
import Decor from '../../assets/images/popularCategories/decor.png';
import Kitchen from '../../assets/images/popularCategories/kitchen.png';

const DesktopCarousel = () => {
    return (
            <Carousel slide={false} controls={true} interval={null} className='popularCategoriesDescCarousel'>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <CarouselItem
                                categoryName='Sofas'
                                imgSource={Sofas}
                            />
                            <CarouselItem
                                categoryName='beds'
                                imgSource={Beds}
                            />
                            <CarouselItem
                                categoryName='lighting'
                                imgSource={Lightning}
                            />
                        </Col>
                        <Col>
                            <CarouselItem
                                categoryName='chairs'
                                imgSource={Chairs}
                            />
                            <CarouselItem
                                categoryName='garden'
                                imgSource={Garden}
                            />
                            <CarouselItem
                                categoryName='textiles'
                                imgSource={Textiles}
                            />
                        </Col>
                        <Col>
                            <CarouselItem
                                categoryName='table'
                                imgSource={Table}
                            />
                            <CarouselItem
                                categoryName='pet Beds'
                                imgSource={Pets}
                            />
                            <CarouselItem
                                categoryName='decor'
                                imgSource={Decor}
                            />
                        </Col>
                        <Col>
                            <CarouselItem
                                categoryName='storage'
                                imgSource={Storage}
                            />
                            <CarouselItem
                                categoryName='drinkware'
                                imgSource={Drinkware}
                            />
                            <CarouselItem
                                categoryName='kitchen'
                                imgSource={Kitchen}
                            />
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row>
                        <Col>
                            <CarouselItem
                                categoryName='table'
                                imgSource={Table}
                            />
                            <CarouselItem
                                categoryName='pet Beds'
                                imgSource={Pets}
                            />
                            <CarouselItem
                                categoryName='decor'
                                imgSource={Decor}
                            />
                        </Col>
                        <Col>
                            <CarouselItem
                                categoryName='storage'
                                imgSource={Storage}
                            />
                            <CarouselItem
                                categoryName='drinkware'
                                imgSource={Drinkware}
                            />
                            <CarouselItem
                                categoryName='kitchen'
                                imgSource={Kitchen}
                            />
                        </Col>
                        <Col>
                            <CarouselItem
                                categoryName='Sofas'
                                imgSource={Sofas}
                            />
                            <CarouselItem
                                categoryName='beds'
                                imgSource={Beds}
                            />
                            <CarouselItem
                                categoryName='lighting'
                                imgSource={Lightning}
                            />
                        </Col>
                        <Col>
                            <CarouselItem
                                categoryName='chairs'
                                imgSource={Chairs}
                            />
                            <CarouselItem
                                categoryName='garden'
                                imgSource={Garden}
                            />
                            <CarouselItem
                                categoryName='textiles'
                                imgSource={Textiles}
                            />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
    );
};

export default DesktopCarousel;
