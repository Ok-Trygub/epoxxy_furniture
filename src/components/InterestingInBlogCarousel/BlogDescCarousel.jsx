import React from 'react';
import './BlogDescCarousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InterestingCard from "../InterestingCard/InterestingCard";
import Bedroom from "../../assets/images/interestingInBlog/bedroom.png";
import Table from "../../assets/images/interestingInBlog/table.png";
import Kitchen from "../../assets/images/interestingInBlog/kitchen.png";


const BlogDescCarousel = () => {
    return (
        <Carousel slide={false} controls={true} interval={null} className='interestingInBlogDescCarousel'>
            <Carousel.Item>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col>
                        <div className='mb-3 mb-md-0'>
                            <InterestingCard
                                text='Updating your bedroom? It’s easier than you think'
                                date='May 2, 2012'
                                imgSource={Bedroom}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3 mb-md-0'>
                            <InterestingCard
                                text='Updating your bedroom? It’s easier than you think'
                                date='May 2, 2012'
                                imgSource={Table}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3 mb-md-0'>
                            <InterestingCard
                                text='Updating your bedroom? It’s easier than you think'
                                date='May 2, 2012'
                                imgSource={Kitchen}
                            />
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>

            <Carousel.Item>
                <Row className='d-flex flex-column flex-md-row'>
                    <Col>
                        <div className='mb-3 mb-md-0'>
                            <InterestingCard
                                text='Updating your bedroom? It’s easier than you think'
                                date='May 2, 2012'
                                imgSource={Kitchen}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3 mb-md-0'>
                            <InterestingCard
                                text='Updating your bedroom? It’s easier than you think'
                                date='May 2, 2012'
                                imgSource={Bedroom}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className='mb-3 mb-md-0'>
                            <InterestingCard
                                text='Updating your bedroom? It’s easier than you think'
                                date='May 2, 2012'
                                imgSource={Table}
                            />
                        </div>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel>
    );
};

export default BlogDescCarousel;
