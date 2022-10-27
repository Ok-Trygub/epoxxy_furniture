import React from 'react';
import {useNavigate} from "react-router-dom";
import './Footer.scss';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/images/logo_una.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FbIcon from '../../assets/images/fb_icon.png';
import TwitterIcon from '../../assets/images/twitter_icon.png';
import FooterScroll from '../../assets/images/footerScroll.png';
import SubmitEmailIcon from '../../assets/images/submitEmailIcon.png';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className='footer'>
            <Container>
                <div className='d-flex flex-column align-items-center'>
                    <div>
                        <img src={Logo} alt="una_logo" className='footer__logo' onClick={() => navigate('/')}/>
                    </div>

                    <Navbar className='justify-content-center navWrapper'>
                        <Nav className="flex-column text-uppercase align-items-center flex-md-row">
                            <Nav.Link className='fw-bold'
                                      onClick={() => (navigate('about_us'))}>about</Nav.Link>
                            <Nav.Link className='fw-bold'
                                      onClick={() => (navigate('blog_3_cards'))}>blog</Nav.Link>
                            <Nav.Link className='fw-bold'
                                      onClick={() => (navigate('error'))}>discounts</Nav.Link>
                            <Nav.Link className='fw-bold' onClick={() => (navigate('text_page'))}>for
                                partners</Nav.Link>
                            <Nav.Link className='m-md-0 fw-bold'
                                      onClick={() => (navigate('contacts'))}>contacts</Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <hr className='footer__divider'/>

                <div className='footer__mob d-lg-none'>
                    <p className='footer__title mb-3'>information</p>
                    <Row>
                        <Col>
                            <p className='mb-2'>Shipping</p>
                            <p className='footer__paymentText'>Payment options</p>
                            <p className='footer__title'>schedule</p>
                            <p className='footer__scheduleText'>We accept orders from 9:00 to 22:00</p>
                            <p className='footer__title'>stay in touch</p>
                            <p className='mb-2'>siteemail@gmail.com</p>
                            <p className='m-0'>(406) 555-0120</p>
                        </Col>

                        <Col>
                            <p className='mb-2'>Terms & Conditions</p>
                            <p className='footer__faq'>FAQ</p>
                            <p className='footer__title'>Shipping orders</p>
                            <p className='footer__ordersText'>Mon - Sat – 9:00 - 19:00 Sun – weekend</p>
                            <p className='mb-2'>(480) 555-0103</p>

                            <div>
                                <a href="https://www.facebook.com/" className='footer__fbIcon'><img src={FbIcon}
                                                                                                    alt="facebook_icon"/></a>
                                <a href="https://twitter.com/"><img src={TwitterIcon} alt="twitter_icon"/></a>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className='footer__title footer__subscribeWrapper m-0'>SUBSCRIBE</p>
                            <p className='footer__subscribeText m-0'>Get the latest news and promotions on your
                                inbox</p>
                        </Col>
                    </Row>

                    <form action="#" className='position-relative'>
                        <label htmlFor="email"></label>
                        <input type="text" id='email' placeholder='Email address' className='footer__email'/>
                        <button className='footer__submitBtn'>
                            <img src={SubmitEmailIcon} alt="SubmitIcon"
                                 onClick={() => (navigate('order_message'))}/>
                        </button>
                    </form>
                </div>

                <div className='d-none d-lg-flex justify-content-between align-items-start'>
                    <div>
                        <Row>
                            <Col>
                                <p className='footer__title mb-3'>information</p>
                                <p className='mb-2'>Shipping</p>
                                <p className='mb-2'>Payment options</p>
                                <p className='mb-2'>Terms & Conditions</p>
                                <p className='footer__faq'>FAQ</p>
                            </Col>

                            <Col>
                                <p className='footer__title mb-3'>schedule</p>
                                <p className='footer__scheduleText'>We accept orders from 9:00 to 22:00</p>
                                <p className='footer__title mb-3'>Shipping orders</p>
                                <p className='footer__ordersText m-0'>Mon - Sat – 9:00 - 19:00 Sun – weekend</p>
                            </Col>

                            <Col>
                                <p className='footer__title mb-3'>stay in touch</p>
                                <p className='mb-2'>siteemail@gmail.com</p>
                                <p className='m-2 mx-0 mt-0'>(406) 555-0120</p>
                                <p className='mb-3'>(480) 555-0103</p>

                                <div>
                                    <a href="https://www.facebook.com/" className='footer__fbIcon'>
                                        <img src={FbIcon} alt="facebook_icon"/></a>
                                    <a href="https://twitter.com/"><img src={TwitterIcon} alt="twitter_icon"/></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Col>
                                <p className='footer__title footer__subscribeWrapperDesktop'>SUBSCRIBE</p>
                                <p className='footer__subscribeText m-0'>Get the latest news and promotions <br/> on
                                    your
                                    inbox</p>

                                <form action="#" className='position-relative'>
                                    <label htmlFor="email"></label>
                                    <input type="text" id='footerEmail' placeholder='Email address'
                                           className='footer__email'/>
                                    <button className='footer__submitBtn'>
                                        <img src={SubmitEmailIcon} alt="SubmitIcon"
                                             onClick={() => (navigate('order_message'))}/>
                                    </button>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </div>

                <hr className='footer__divider footer__divider2'/>

                <div className='d-flex justify-content-between align-items-center mt-3'>
                    <p className='m-0 footer__rightsText'>2022©All rights reserved</p>
                    <div>
                        <span><img src={FooterScroll} alt="footer_scroll"/></span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
