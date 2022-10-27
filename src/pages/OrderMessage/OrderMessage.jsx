import React from 'react';
import './OrderMessage.scss';
import Container from "react-bootstrap/Container";
import RouteLink from "../../components/RouteLink/RouteLink";
import LinkButton from "../../components/LinkButton/LinkButton";
import BtnArrow from '../../assets/images/arrowRight.png';

const OrderMessage = () => {
    return (
        <div className='orderMessage'>
            <Container>
                <div className='orderMessage__links px-3'>
                    <RouteLink
                        subLink='Checkout'
                        subLink2='Message'
                    />
                </div>

                <div className='orderMessage__wrapper'>
                    <div className='d-flex flex-column align-items-center'>
                        <div className='orderMessage__text text-center'>
                            <span className='text-uppercase orderMessage__id'>id 4567</span>
                            <h1 className='text-uppercase fw-medium orderMessage__title'>Thank you! Your order has
                                placed succesfully</h1>
                            <p className='orderMessage__email'>An order confirmation email has been sent to your e-mail
                                address <span className='fw-bold'>alexinfo@gmail.com</span>. Expect further messages</p>
                        </div>
                        <LinkButton
                            btnText='check mailbox'
                            imgSource={BtnArrow}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OrderMessage;
