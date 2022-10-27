import React from 'react';
import {useNavigate} from "react-router-dom";
import './Error.scss';
import Container from "react-bootstrap/Container";
import LinkButton from "../../components/LinkButton/LinkButton";
import ArrowIcon from '../../assets/images/arrowRight.png';
import Logo from '../../assets/images/logo_una.png';


const Error = () => {
    const navigate = useNavigate();

    return (
        <div className='error d-flex align-items-center'>
            <Container>
                <div className='d-flex justify-content-center'>
                    <img src={Logo} alt="logo" className='error__logo'/>
                </div>

                <div className="error__wrapper d-flex flex-column align-items-center text-center">
                    <span className='error__number text-uppercase'>404 error</span>
                    <h1 className='error__title text-uppercase fw-medium'>page not found</h1>
                    <p className='error__text'>Sorry, something went wrong and page not found. Check the link or try
                        later</p>
                    <div onClick={()=>navigate('/')}>
                        <LinkButton
                            btnText='go to mainpage'
                            imgSource={ArrowIcon}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Error;
