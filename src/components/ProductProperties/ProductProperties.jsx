import React from 'react';
import './ProductProperties.scss';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Divider from '../../assets/images/productPage/divider.png';

const ProductProperties = () => {
    return (
        <Row className='productProperties'>
            <Col className='col-12 col-md-6 col-lg-4 px-lg-3'>
                <h2 className='productProperties__title text-uppercase fw-medium'>description</h2>
                <img src={Divider} alt="divider" className='w-100 productProperties__titleDivider'/>
                <p className='productProperties__descriptionText fw-medium'>
                    The chair uses a safe, environmentally friendly filler, the special properties of which make the
                    furniture not only soft and comfortable, but also orthopedic. Relaxes the muscles of the back and
                    waist, adjusts to your body.
                    <br/>
                    <br/>
                    Made of mat - the most popular furniture fabric. Pleasant to the touch and at the same time durable
                    and reliable fabric. Large selection of color shades.
                    <br/>
                    <br/>
                    Prepayment on a bank card. Delivery by mail or by courier. Delivery of goods within 16 days, as
                    goods are only by request.
                </p>
            </Col>

            <Col className='col-12 col-md-6 col-lg-4 fw-medium px-lg-3'>
                <h2 className='productProperties__title text-uppercase mt-5 m-md-0'>dimensions</h2>
                <img src={Divider} alt="divider" className='w-100 productProperties__titleDivider'/>

                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Height (cm)</span>
                        <span>82</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Width (cm)</span>
                        <span>75</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Arm dimensions (hwd)</span>
                        <span>53 x 7 x 69 cm</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Seat dimensions (hwd)</span>
                        <span>44 x 56 x 56 cm</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Leg height (cm)</span>
                        <span>23</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Packaging dimensions</span>
                        <span>1:H86 x W79 x D84 cm</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Weight (kg)</span>
                        <span>17</span>
                    </div>
                    <img src={Divider} alt="divider"
                         className='w-100 productProperties__divider productProperties__lastDimensionDivider'/>
                </div>
            </Col>

            <Col className='col-12 col-lg-4 fw-medium px-lg-3'>
                <h2 className='productProperties__title text-uppercase fw-medium mt-5 m-lg-0'>details</h2>
                <img src={Divider} alt="divider" className='w-100 productProperties__titleDivider'/>

                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Assembly</span>
                        <span>No assembly required</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Number of seats</span>
                        <span>1 seater</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Caring instructions</span>
                        <span>Professional cleaning only</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Material</span>
                        <span>Micro velvet, wood</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Assembly</span>
                        <span>No assembly required</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-between'>
                        <span>Caring instructions</span>
                        <span>Professional cleaning only</span>
                    </div>
                    <img src={Divider} alt="divider" className='w-100 productProperties__divider'/>
                </div>
            </Col>
        </Row>
    );
};

export default ProductProperties;
