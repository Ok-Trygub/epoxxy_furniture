import React from 'react';
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../Blog/Blog.scss';
import InterestingCard from "../InterestingCard/InterestingCard";
import Sofa from '../../assets/images/blog/sofa.png';
import Table from '../../assets/images/blog/table.png';
import Face from '../../assets/images/blog/face.png';
import Room from '../../assets/images/blog/room.png';
import Lamps from '../../assets/images/blog/lamps.png';
import Bedroom from '../../assets/images/blog/bedroom.png';
import ArrowDown from '../../assets/images/arrowDown.png';
import Button from '../../components/LinkButton/LinkButton';
import RouteLink from "../RouteLink/RouteLink";


const Blog = () => {
    return (
        <div className='blog'>
            <Container>
                <RouteLink
                    subLink='Textile'
                    subLink2='Blog'
                />
                <h2 className='blog__title'>Blog</h2>

                <Row className="d-flex flex-column flex-md-row blog__postsWrapper">
                    <Col className='mb-3 m-md-0'>
                        <InterestingCard
                            imgSource={Sofa}
                            text='Consider the Gospel with English as 2nd Language'
                            date='October 30, 2017'
                        />
                    </Col>
                    <Col className='mb-3 m-md-0'>
                        <InterestingCard
                            imgSource={Table}
                            text='Conservationists oppose plans to modernise a wind'
                            date='August 24, 2013'
                        />
                    </Col>
                    <Col>
                        <InterestingCard
                            imgSource={Face}
                            text='Abraham’s name became Great'
                            date='May 9, 2014'
                        />
                    </Col>
                </Row>

                <Row className="d-flex flex-column flex-md-row blog__postsWrapper">
                    <Col className='mb-3 m-md-0'>
                        <InterestingCard
                            imgSource={Room}
                            text='Consider the Gospel with English as 2nd Language'
                            date='October 30, 2017'
                        />
                    </Col>
                    <Col className='mb-3 m-md-0'>
                        <InterestingCard
                            imgSource={Lamps}
                            text='Conservationists oppose plans to modernise a wind'
                            date='August 24, 2013'
                        />
                    </Col>
                    <Col>
                        <InterestingCard
                            imgSource={Bedroom}
                            text='Abraham’s name became Great'
                            date='May 9, 2014'
                        />
                    </Col>
                </Row>

                <div className='d-flex justify-content-center align-items-center'>
                    <Button btnText='show more' imgSource={ArrowDown}/>
                </div>
            </Container>
        </div>
    );
};

export default Blog;
