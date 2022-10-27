import {React, useState} from 'react';
import {useNavigate} from "react-router-dom";
import './ProductPage.scss';
import Container from "react-bootstrap/Container";
import StarRatings from 'react-star-ratings';
import RouteLink from "../../components/RouteLink/RouteLink";
import CarouselWithIndicators from '../../components/CarouselWithIndicators/CarouselWithIndicators';
import Video from '../../assets/images/productPage/video.png';
import Kitchen from '../../assets/images/productPage/kitchen.png';
import Chair2 from '../../assets/images/productPage/chair2.png';
import Flowers from '../../assets/images/productPage/flowers.png';
import BigImg from '../../assets/images/productPage/bigChair.png';
import Divider from '../../assets/images/divider.png';
import Color from '../../assets/images/productPage/color.png';
import Plus from '../../assets/images/productPage/plusBtn.png';
import Minus from '../../assets/images/productPage/minusBtn.png';
import Truck from '../../assets/images/productPage/truckIcon.png';
import LikeBtn from '../../assets/images/productPage/likeBtn.png';
import LongDivider from '../../assets/images/productPage/divider.png';
import ExtraLongDivider from '../../assets/images/extraLongDivider.png';
import ProductProperties from '../../components/ProductProperties/ProductProperties';
import MobCarousel from "../../components/AlsoLikeCarousel/MobCarousel";
import DescCarousel from "../../components/AlsoLikeCarousel/DescCarousel";
import LinkButton from "../../components/LinkButton/LinkButton";
import ArrowRight from '../../assets/images/arrowRight.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ProductPage = () => {
    const [rating, setRating] = useState();
    const navigate = useNavigate();

    const changeRating = (newRating) => {
        setRating(newRating);
    }

    return (
        <div className='product'>
            <Container>
                <RouteLink
                    subLink='Home'
                    subLink2='Textile'
                    subLink3='Armchair, fleece'
                />
                <div className='d-flex d-lg-none justify-content-center'>
                    <CarouselWithIndicators/>
                </div>

                <div
                    className='d-flex align-items-center justify-content-center justify-content-lg-between product__wrapper'>
                    <div className='d-none d-lg-flex align-items-center'>
                        <div className='d-flex flex-column justify-content-around'>
                            <img src={Chair2} alt="img" className='imgChair'/>
                            <img src={Video} alt="img"/>
                            <img src={Kitchen} alt="img"/>
                            <img src={Chair2} alt="img"/>
                            <img src={Flowers} alt="img"/>
                        </div>
                        <div className='m-0 product__bigImg'>
                            <img src={BigImg} alt="img" className='w-100'/>
                        </div>
                    </div>

                    <div>
                        <div className='text-center'>
                            <img src={Divider} alt="img"/>
                            <h1 className='text-uppercase fw-medium product__title text-wrap'>cesil micro velvet
                                chair</h1>
                            <StarRatings
                                rating={rating}
                                starRatedColor='rgba(224, 86, 20, 1)'
                                changeRating={changeRating}
                                starDimension='16px'
                                starSpacing='0'
                                name='rating1'
                            />
                            <a href="#" className='product__reviews'>3 reviews</a>

                            <img src={LongDivider} alt="divider" className='product__divider w-100'/>
                        </div>

                        <div
                            className='d-flex align-items-center justify-content-between justify-content-lg-start product__colorWrapper'>
                            <span
                                className='product__propertyTitle product__colorTitle text-uppercase fw-medium'>Color</span>
                            <div>
                                <img src={Color} alt="color_img"/>
                                <img src={Color} alt="color_img" className='mx-2 mx-lg-3'/>
                                <img src={Color} alt="color_img"/>
                            </div>
                        </div>

                        <div className='d-flex justify-content-between justify-content-lg-start'>
                            <div
                                className='d-flex flex-column d-lg-inline product__propertyTitle product__dimensionsTitle'>
                                <span className='product__propertyTitle fw-medium text-uppercase'>dimensions</span>
                            </div>

                            <div className='d-flex flex-column d-lg-inline'>
                                <span className='product__dimensionFirstProperty fw-medium'>W:75 х H:82 cm</span>
                                <span className='product__dimensionSecondProperty fw-medium'>W:120 х H:100 cm</span>
                            </div>
                        </div>

                        <div
                            className='product__quantityWrapper d-flex justify-content-between align-items-center justify-content-lg-start'>
                            <span
                                className='product__quantityTitle product__propertyTitle fw-medium text-uppercase'>quantity</span>
                            <div>
                                <img src={Minus} alt="minus_btn"/>
                                <span className='product__quantityText'>1</span>
                                <img src={Plus} alt="plus_btn"/>
                            </div>
                        </div>

                        <img src={LongDivider} alt="divider" className='product__divider w-100'/>
                        <div className='d-flex d-lg-none'>
                            <div className='w-50'>
                                <span className='newPrice text-uppercase fw-bold'>$600</span>
                                <span className='oldPrice text-uppercase fw-medium'>$675</span>
                            </div>

                            <div className='w-50 product__deliveryWrapper'>
                                <img src={Truck} alt="truck_img"/>
                                <span className='product__deliveryText'>Free delivery <br className='d-xl-none'/> from $1 000</span>
                            </div>

                        </div>
                        <div className='d-none d-lg-flex'>
                            <div>
                                <span className='newPrice text-uppercase fw-bold'>$600</span>
                                <span className='oldPrice text-uppercase fw-medium'>$675</span>
                            </div>

                            <div className='product__deliveryWrapper'>
                                <img src={Truck} alt="truck_img"/>
                                <span className='product__deliveryText'>Free delivery <br className='d-lg-none'/> from $1 000</span>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <button className='product__btn text-uppercase fw-bold'>add to cart</button>
                            <img src={LikeBtn} alt="like_btn"/>
                        </div>
                    </div>
                </div>
                <ProductProperties/>
                <img src={ExtraLongDivider} alt="divider" className='d-none d-lg-block w-100 product__largeDivider'/>
                <h2 className='text-uppercase fw-medium product__title product__likeTitle'>you may <br
                    className='d-md-none'/> also like</h2>

                <div className='d-lg-none'>
                    <MobCarousel/>
                </div>
                <div className='d-none d-lg-block'>
                    <DescCarousel/>
                </div>
                <div className='d-flex justify-content-center' onClick={()=>navigate('/','catalog')}>
                    <LinkButton
                        btnText='see more products'
                        imgSource={ArrowRight}
                    />
                </div>

                <div
                    className='product__reviewWrapper text-center d-flex flex-column flex-lg-row justify-content-between'>

                    <div className='customerReviewsWrapper'>
                        <img src={Divider} alt="divider"/>
                        <h2 className='product__customerReviewTitle text-uppercase fw-medium'>customer reviews</h2>
                        <img src={LongDivider} alt="divider" className='w-100'/>
                        <p className='product__customerReviewText'>There is no any customer review of this product. Be
                            the first and <br className='d-none d-lg-block'/> add your review</p>
                        <img src={LongDivider} alt="divider" className='w-100'/>
                    </div>

                    <div className='addReview'>
                        <img src={Divider} alt="divider"/>
                        <h2 className='addReview__title text-uppercase fw-medium'>add review</h2>
                        <div>
                            <StarRatings
                                rating={rating}
                                starRatedColor='rgba(224, 86, 20, 1)'
                                changeRating={changeRating}
                                starDimension='16px'
                                starSpacing='0'
                                name='rating2'
                            />
                            <span> –  your rate</span>
                        </div>
                        <Form>
                            <Form.Group className="addReview__inputWrapper addReview__reviewInput"
                                        controlId="formBasicReview">
                                <Form.Label></Form.Label>
                                <Form.Control as="textarea" type="text" placeholder="Your review"/>
                            </Form.Group>

                            <Form.Group className="addReview__inputWrapper" controlId="formBasicPassword">
                                <Form.Label></Form.Label>
                                <Form.Control type="password" placeholder="Password" autoComplete='true'/>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label></Form.Label>
                                <Form.Control type="email" placeholder="Email"/>
                            </Form.Group>
                            <Button type="submit" className='addReview__btn fw-bold text-uppercase'>post review
                                <img src={ArrowRight} alt="btn_img" className='mx-2'/>
                            </Button>
                        </Form>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default ProductPage;
