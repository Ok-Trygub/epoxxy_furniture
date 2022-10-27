import React from 'react';
import './AboutUs.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RouteLink from '../../components/RouteLink/RouteLink.jsx';
import MainImg from '../../assets/images/aboutUs/mainImg.png';
import InstaCard1 from '../../assets/images/aboutUs/instaCard1.png';
import InstaCard2 from '../../assets/images/aboutUs/instaCard2.png';
import InstaCard3 from '../../assets/images/aboutUs/instaCard3.png';
import InstaCard4 from '../../assets/images/aboutUs/instaCard4.png';
import InstaCard5 from '../../assets/images/aboutUs/instaCard5.png';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
import Divider from '../../assets/images/divider.png';
import MobCarousel from './Carousel/MobCarousel';
import DescCarousel from './Carousel/DescCarousel';
import InspirationCard from "../../components/InspirationCard/InspirationCard";


const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <Container>
                <RouteLink
                    subLink='About'
                />
                <h2 className='aboutUs__mainTitle aboutUs__title text-uppercase fw-medium'>About</h2>

                <img src={MainImg} alt="MainImg" className='w-100'/>
                <Row className='aboutUs__textWrapper'>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <h2 className='aboutUs__title aboutUs__textTitle text-uppercase fw-medium'>Focus on Canada An
                            introduction to Canada in intermediate-level English</h2>
                    </Col>
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <p className='aboutUs__text'>
                            There is something else promised as well. The blessing was not only for Abraham. It says
                            that “all peoples on earth will be blessed through you” (through Abraham). We should pay
                            attention because you and I are part of ‘all peoples on earth’ – no matter what our
                            religion, color, background, nationality, social status, or what language we speak.
                        </p>
                        <br/>
                        <br className='d-md-none'/>
                    </Col>
                    <Col>
                        <p className='aboutUs__text'>
                            Why? A look at Israel’s history in the book of Genesis in the Bible reveals that 4000 years
                            ago a man, who is now very well known, went on a camping trip in that part of the world. The
                            Bible says that his story affects our future. This ancient man is Abraham (also known as
                            Abram). We can take his story seriously because the places and cities he visited are
                            mentioned in other old writings.
                        </p>
                    </Col>
                </Row>

                <ChooseUs/>

                <div className='d-none d-md-flex flex-column align-items-center aboutUs__secondTextWrapper text-center'>
                    <img src={Divider} alt="divider"/>
                    <h2 className='aboutUs__title aboutUs__textTitle text-uppercase fw-medium'>Conservationists oppose
                        plans to modernise a wind</h2>
                    <p className='aboutUs__text'>
                        There is something else promised as well. The blessing was not only for Abraham. It says that
                        “all peoples on earth will be blessed through you” (through Abraham). We should pay attention
                        because you and I are part of ‘all peoples on earth’ – no matter what our religion, color,
                        background, nationality, social status, or what language we speak.
                    </p>
                </div>

                <div className='d-flex justify-content-center d-lg-none aboutUs__mobCarouselWrapper'>
                    <MobCarousel/>
                </div>
                <div className='d-none d-lg-block aboutUs__descCarouselWrapper'>
                    <DescCarousel/>
                </div>

                <div className='text-center'>
                    <img src={Divider} alt="divider"/>
                    <h2 className='aboutUs__title aboutUs__textTitle'>follow us in instagram</h2>

                    <div className='d-flex flex-column flex-lg-row'>
                        <div className='d-lg-flex'>
                            <div className='d-flex align-items-center'>
                                <InspirationCard imgSource={InstaCard1}/>
                                <InspirationCard imgSource={InstaCard2}/>
                            </div>
                            <div className='d-flex align-items-center'>
                                <InspirationCard imgSource={InstaCard3}/>
                                <InspirationCard imgSource={InstaCard4}/>
                            </div>
                        </div>
                        <div>
                            <InspirationCard imgSource={InstaCard5}/>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default AboutUs;
