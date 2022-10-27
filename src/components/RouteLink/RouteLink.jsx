import React from 'react';
import './RouteLink.scss';
import LinkIcon from "../../assets/images/linkIcon.png";
import {useNavigate} from "react-router-dom";

const RouteLink = (props) => {
    const {subLink, subLink2, subLink3} = props;

    const navigate = useNavigate();

    return (
        <div className='links'>
            <p className='links__wrapper fw-medium'>
                <span onClick={() => navigate('/')}>Home</span>
                {subLink ? <img src={LinkIcon} alt="linkIcon" className='linkIcon'/> : null}
                <span>{subLink}</span>
                {subLink2 ? <img src={LinkIcon} alt="linkIcon" className='linkIcon'/> : null}
                <span>{subLink2}</span>
                {subLink3 ? <img src={LinkIcon} alt="linkIcon" className='linkIcon'/> : null}
                <span>{subLink3}</span>
            </p>
        </div>
    );
};

export default RouteLink;
