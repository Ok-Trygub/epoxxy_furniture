import React from 'react';
import './FirstBlock.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BigImg from '../../assets/images/big_img.png';
import Divider from '../../assets/images/divider.png';
import Hot from '../../assets/images/hot_tag.png';
import Carousel from 'react-bootstrap/Carousel';

const FirstBlock = () => {
    return (
        <div className="firstBlock">
            <Container fluid>

                <Row>
                    <Col className='col-lg-5 p-0'>

                        <div className='firstBlock__carouselWrapper firstBlock__textColumnWrapper'>
                            <Container>
                                <div>
                                    <img src={Divider} alt="divider" className='carouselDivider'/>

                                    <Carousel controls={true} interval={null}
                                              className='firstBlockCarousel'>
                                        <Carousel.Item className='carouselTitle fw-medium text-uppercase'>
                                            profitable offers! Don’t miss
                                        </Carousel.Item>

                                        <Carousel.Item className='carouselTitle fw-medium text-uppercase'>
                                            penny Pendant Lamp Shade, Muted
                                        </Carousel.Item>

                                        <Carousel.Item className='carouselTitle fw-medium text-uppercase'>
                                            profitable offers! Don’t miss
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Container>
                        </div>

                        <div className='d-lg-none bigImgMob'>
                            <img src={BigImg} alt="BigImg" className='w-100'/>
                        </div>

                        <div className='firstBlock__sale firstBlock__textColumnWrapper'>
                            <Container>
                                <img src={Hot} alt="hot_tag"/>
                                <p className='firstBlock__saleTitle fw-medium text-uppercase'>penny Pendant Lamp Shade,
                                    Muted Grey</p>
                                <p className='m-0'>
                                    <span className='firstBlock__price newPrice fw-medium'>$300</span>
                                    <span className='firstBlock__price oldPrice'>$540</span>
                                </p>
                            </Container>
                        </div>
                    </Col>

                    <Col className='d-none d-lg-block  col-lg-7 firstBlock__bigImgColumn'>
                        <img src={BigImg} alt="BigImg" className='w-100 firstBlock__bigImg'/>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default FirstBlock;
