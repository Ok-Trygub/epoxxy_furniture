import {React, useState} from 'react';
import {Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './TextPage.scss';
import Container from "react-bootstrap/Container";
import RouteLink from "../../components/RouteLink/RouteLink";
import MainRules from '../../components/MainRules/MainRules';
import cn from "classnames";


const TextPage = () => {
    const navigate = useNavigate();
    const [linkActive, setLinkActive] = useState(false);

    const displayRules = cn({
        'd-none': linkActive
    })

    const styleRules = cn('textPage__link textPage__mainRulesLink d-inline-block', {
        'textPage__borderNone': linkActive
    })

    return (
        <div className='textPage'>
            <Container>
                <RouteLink
                    subLink='Textile'
                    subLink2='Rules'
                />
                <div>
                    <h1 className='textPage__title text-uppercase fw-medium'>
                        <span className='d-none d-md-inline'>Service </span>
                        <span className='text-uppercase d-md-none'>r</span>
                        <span className='d-none d-md-inline'>r</span>
                        ules</h1>
                </div>

                <div className='d-flex flex-column flex-lg-row justify-content-between'>
                    <div
                        className='textPage__titlesBlock d-flex flex-column align-items-start text-uppercase'>
                        <span
                            className={styleRules}
                            onClick={() => {
                                setLinkActive(true)
                                navigate('main_rules')
                            }}
                        >
                            Main rules
                        </span>

                        <span onClick={() => {
                            setLinkActive(true)
                            navigate('desclaimer')
                        }}
                              className='textPage__desclaimer textPage__link d-inline-block'>
                            desclaimer</span>

                        <span onClick={() => {
                            setLinkActive(true)
                            navigate('contact_information')
                        }}
                              className='textPage__link text-nowrap d-inline-block'>Contact information</span>
                    </div>

                    <div className={displayRules}>
                        <MainRules/>
                    </div>
                    <Outlet/>
                </div>
            </Container>
        </div>
    );
};

export default TextPage;
