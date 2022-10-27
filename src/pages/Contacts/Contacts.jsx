import React from 'react';
import './Contacts.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import RouteLink from "../../components/RouteLink/RouteLink";
import EmailIcon from '../../assets/images/contacts/email.png';
import ScheduleIcon from '../../assets/images/contacts/schedule.png';
import Divider from '../../assets/images/extraLongDivider.png';
import VerticalDivider from '../../assets/images/contacts/dividerVertical.png';
import Form from 'react-bootstrap/Form';
import LinkButton from "../../components/LinkButton/LinkButton";
import Arrow from '../../assets/images/arrowRight.png';

const Contacts = () => {
    return (
        <div className='contacts'>
            <Container>
                <RouteLink
                    subLink='Contacts'
                />
                <h1 className='text-uppercase fw-medium contacts__mainTitle'>Contacts</h1>
                <div className='contacts__wrapper'>
                    <Row>
                        <Col className='col-12 col-md-4'>
                            <div className='d-flex'>
                                <div className='d-flex flex-column'>
                                    <img src={EmailIcon} alt="emailImg" className='contacts__icon'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <h2 className='contacts__title fw-medium text-uppercase'>Let’s be in touch</h2>
                                    <p className='contacts__seo fw-medium'>SEO – Alex Browning</p>
                                    <a href="mailto:alexbrown@hotmail" className='contacts__email'>alexbrown@hotmail</a>
                                    <p className='contacts__phone'>924-533-1103</p>
                                    <p className='contacts__phone m-0'>432-783-6534</p>
                                </div>
                            </div>

                            <img src={Divider} alt="divider" className='contacts__divider w-100'/>

                            <div className='d-flex'>
                                <div className='d-flex flex-column'>
                                    <img src={ScheduleIcon} alt="emailImg" className='contacts__icon'/>
                                </div>
                                <div className='d-flex flex-column'>
                                    <h2 className='contacts__title text-uppercase fw-medium'>Work Schedule</h2>
                                    <p className='contacts__acceptOrders'>We accept orders from <br/> 9:00 to 22:00</p>
                                    <p className='mb-2'>Order sending</p>
                                    <p className='mb-2'>Mon-Sat – 9:00-19:00</p>
                                    <p>Sun – day off</p>
                                </div>
                            </div>
                            <img src={Divider} alt="divider" className='contacts__divider d-md-none w-100'/>
                        </Col>

                        <Col className='col-12 col-md-8'>
                            <div className='d-flex'>
                                <img src={VerticalDivider} alt="divider"
                                     className='d-none d-md-block contacts__verticalDivider'/>

                                <div className='d-flex flex-column w-100'>
                                    <h2 className='contacts__title text-uppercase fw-medium'>Have any questions? – Write
                                        us</h2>

                                    <Form className='contacts__form'>
                                        <div className='d-lg-flex'>
                                            <Form.Group className="mb-4 w-100 contacts__nameInput" controlId="formName">
                                                <Form.Label>name*</Form.Label>
                                                <Form.Control type="text" placeholder="Name"/>
                                            </Form.Group>
                                            <Form.Group className="mb-5 w-100" controlId="formEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email"/>
                                            </Form.Group>
                                        </div>
                                        <FloatingLabel controlId="floatingTextarea2">
                                            <Form.Control
                                                as="textarea"
                                                placeholder="Message"
                                                className='formTextarea'
                                            />
                                        </FloatingLabel>
                                        <div
                                            className='contacts__btnWrapper d-flex justify-content-center justify-content-lg-start'>
                                            <LinkButton
                                                btnText='send message'
                                                imgSource={Arrow}
                                                type='submit'
                                            />
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Contacts;
