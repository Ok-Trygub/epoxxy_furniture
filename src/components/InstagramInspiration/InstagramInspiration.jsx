import React from 'react';
import Container from "react-bootstrap/Container";
import './InstagramInspiration.scss';
import Divider from '../../assets/images/divider.png';
import InspirationCard from "../InspirationCard/InspirationCard";
import ChairTable from '../../assets/images/instagramInspiration/chairTable.png';
import Phone from '../../assets/images/instagramInspiration/phone.png';
import Sofa from '../../assets/images/instagramInspiration/sofa.png';
import Kitchen from '../../assets/images/instagramInspiration/kitchen.png';
import Room from '../../assets/images/instagramInspiration/room.png';


const InstagramInspiration = () => {
    return (
        <div className='inspirationWrapper'>
            <Container fluid className='d-flex flex-column align-items-center'>
                <div className='d-flex flex-column align-items-center'>
                    <img src={Divider} alt="divider_img"/>
                    <h2 className='d-flex justify-content-center inspirationTitle'>instagram inspiration</h2>
                </div>

                <div className='d-flex flex-column flex-lg-row'>
                    <div className='d-lg-flex'>
                        <div className='d-flex align-items-center'>
                            <InspirationCard imgSource={Room}/>
                            <InspirationCard imgSource={ChairTable}/>
                        </div>
                        <div className='d-flex align-items-center'>
                            <InspirationCard imgSource={Sofa}/>
                            <InspirationCard imgSource={Kitchen}/>
                        </div>
                    </div>
                    <div>
                        <InspirationCard imgSource={Phone}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InstagramInspiration;
