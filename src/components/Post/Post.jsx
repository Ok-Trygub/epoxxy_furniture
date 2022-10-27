import React from 'react';
import Container from "react-bootstrap/Container";
import './Post.scss';
import Sofa from '../../assets/images/postPage/sofa.png';
import Divider from '../../assets/images/divider.png';
import RouteLink from "../RouteLink/RouteLink";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Office from "../../assets/images/postPage/office.png";
import Cabinet from "../../assets/images/postPage/cabinet.png";
import LivingRoom from "../../assets/images/postPage/livingRoom.png";
import Facebook from '../../assets/images/fb_icon.png';
import Telegram from '../../assets/images/telegram_icon.png';
import Twitter from '../../assets/images/twitter_icon.png';
import InterestingCard from "../InterestingCard/InterestingCard";
import Office2 from "../../assets/images/postPage/office2.png";
import Lamps from "../../assets/images/postPage/lamps.png";
import Table from "../../assets/images/postPage/table.png";
import Square from "../../assets/images/postPage/squares.png";


const Post = () => {
    return (
        <>
            <div className='post'>
                <Container>
                    <RouteLink
                        subLink='Blog'
                        subLink2='Conservationists oppose plans to modernise a wind'
                    />
                    <img src={Sofa} alt="sofa" className='w-100 post__img'/>

                    <div className='post__textBground d-flex flex-column align-items-center'>
                        <img src={Divider} alt="divider" className="post__divider"/>

                        <div className="post__text px-3 px-md-4">
                            <h1 className='text-center post__mainTitle text-uppercase fw-medium m-0'>
                                Conservationists oppose plans to modernise a wind</h1>
                            <p className='post__date text-center'>August 24, 2013</p>
                            <p>
                                There is something else promised as well. The blessing was not only for Abraham. It says
                                that “all
                                peoples on earth will be blessed through you” (through Abraham). We should pay attention
                                because you and
                                I are part of ‘all peoples on earth’ – no matter what our religion, color, background,
                                nationality,
                                social status, or what language we speak. This promise for a blessing includes everybody
                                alive today!
                                How? When? What kind of blessing? This is not clearly stated here but since we know that
                                the
                                first parts
                                of this promise have come true, we can have confidence that this last part will also
                                come
                                true. We find
                                the key to unlock this mystery by continuing to follow the journey of Abraham in our
                                next
                                article.
                            </p>
                            <h2 className='post__minorTitle post__minorTitleMargin text-uppercase text-center fw-medium'>The
                                Journey that still shakes the World</h2>
                            <p>
                                The Jews who descended from Abraham were never really the nation we associate with
                                greatness. They did
                                not conquer and build a great empire like the Romans did or build large monuments like
                                the
                                Egyptians did
                                with the pyramids. Their fame comes from the Law and Book which they wrote; from some
                                remarkable
                                individuals that were Jewish; and that they have survived as a somewhat different people
                                group for
                                thousands of years. Their greatness is not because of anything they did, but rather what
                                was
                                done to and
                                through them. The promise says repeatedly “I will …” – that would be the power behind
                                the
                                promise. Their
                                unique greatness happened because God made it happen rather than some ability, conquest
                                or
                                power of
                                their own.
                                The Jews who descended from Abraham were never really the nation we associate with
                                greatness. They did
                                not conquer and build a great empire like the Romans did or build large monuments like
                                the
                                Egyptians did
                                with the pyramids. Their fame comes from the Law and Book which they wrote; from some
                                remarkable
                                individuals that were Jewish; and that they have survived as a somewhat different people
                                group for
                                thousands of years. Their greatness is not because of anything they did, but rather what
                                was
                                done to and
                                through them. The promise says repeatedly “I will …” – that would be the power behind
                                the
                                promise. Their
                                unique greatness happened because God made it happen rather than some ability, conquest
                                or
                                power of
                                their own.
                            </p>
                        </div>

                        <div className='post__carouselWrapper'>
                            <Carousel slide={false} controls={true} interval={null} className='d-md-none'>
                                <Carousel.Item>
                                    <Row className='d-flex flex-column flex-md-row'>
                                        <Col>
                                            <img src={Office} alt="office" className='w-100'/>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Row className='d-flex flex-column flex-md-row'>
                                        <Col>
                                            <img src={Cabinet} alt="office" className='w-100'/>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Row className='d-flex flex-column flex-md-row'>
                                        <Col>
                                            <img src={LivingRoom} alt="office" className='w-100'/>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>


                            <Carousel slide={false} controls={true} interval={null} className='d-none d-md-block'>
                                <Carousel.Item>
                                    <Row className='d-flex flex-column flex-md-row'>
                                        <Col>
                                            <img src={Office} alt="office" className='w-100'/>
                                        </Col>
                                        <Col>
                                            <img src={Cabinet} alt="office" className='w-100'/>
                                        </Col>
                                        <Col>
                                            <img src={LivingRoom} alt="office" className='w-100'/>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Row className='d-flex flex-column flex-md-row'>
                                        <Col>
                                            <img src={Cabinet} alt="office" className='w-100'/>
                                        </Col>
                                        <Col>
                                            <img src={LivingRoom} alt="office" className='w-100'/>
                                        </Col>
                                        <Col>
                                            <img src={Office} alt="office" className='w-100'/>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                        <p className='post__carouselTitle'>Abraham were never really the nation we associate with
                            greatness</p>
                        <h2 className='post__minorTitle mb-3'>The Sign of the Branch: The Dead</h2>
                        < p className='post__text px-3 px-md-4'>The Jews who descended from Abraham were never really
                            the nation we
                            associate with greatness. They did not conquer and build a great empire like the Romans did
                            or build large monuments like the Egyptians did with the pyramids. Their fame comes from the
                            Law and Book which they wrote; from some remarkable individuals that were Jewish; and that
                            they have survived as a somewhat different people group for thousands of years. Their
                            greatness is not because of anything they did, but rather what was done to and through them.
                            The promise says repeatedly “I will …” – that would be the power behind the promise. Their
                            unique greatness happened because God made it happen rather than some ability, conquest or
                            power of their own.
                            <hr className='post__textDivider'/>
                        </p>
                    </div>

                    <div className='sign'>
                        <div
                            className='d-flex justify-content-between sign__itemsWrapper px-3 px-md-4 fw-medium text-uppercase align-items-center'>
                            <div className='d-flex align-items-center'>
                                <span className='sign__sharePost'>Share post</span>
                                <a href="https://www.facebook.com/"><img src={Facebook} alt="facebookIcon"/></a>
                                <a href="https://web.telegram.org/z/"> <img src={Telegram} alt="telegramIcon"
                                                                            className='mx-2'/></a>
                                <a href="https://twitter.com/"><img src={Twitter} alt="twitterIcon"/></a>
                            </div>
                            <p>Author: <span>Jane foster</span></p>
                        </div>
                    </div>

                    <h3 className='text-uppercase fw-medium post__likeTitle'>You may also like</h3>
                    <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                        <div className='mb-3 m-lg-0'>
                            <InterestingCard
                                imgSource={Office2}
                                text='Consider the Gospel with English as 2nd Language'
                                date='August 24, 2013'
                            />
                        </div>

                        <div className='mb-3 m-lg-0'>
                            <InterestingCard
                                imgSource={Lamps}
                                text='Consider the Gospel with English as 2nd Language'
                                date='August 24, 2013'
                            />
                        </div>

                        <div className='mb-3 m-lg-0'>
                            <InterestingCard
                                imgSource={Table}
                                text='Conservationists oppose plans to modernise a wind'
                                date='May 9, 2014'
                            />
                        </div>


                        <InterestingCard
                            imgSource={Square}
                            text='Consider the Gospel with English as 2nd Language'
                            date='October 30, 2017'
                        />


                    </div>




                </Container>
            </div>
        </>
    );
};

export default Post;
