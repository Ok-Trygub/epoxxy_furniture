import React from 'react';
import './InterestingInBlog.scss';
import Container from "react-bootstrap/Container";
import BlogMobCarousel from '../InterestingInBlogCarousel/BlogMobCarousel';
import BlogDescCarousel from '../InterestingInBlogCarousel/BlogDescCarousel';
import ArrowRight from "../../assets/images/arrowRight.png";
import LinkButton from "../LinkButton/LinkButton";


const InterestingInBlog = () => {
    return (
        <div className='interestingInBlog'>
            <Container>
                <h2 className='interestingInBlog__title text-wrap'>interesting in <br className='d-md-none'/> blog</h2>

                <div className='d-md-none'>
                    <BlogMobCarousel/>
                </div>

                <div className='d-none d-md-block'>
                    <BlogDescCarousel/>
                </div>

                <div className="btnWrapper d-flex justify-content-center">
                    <LinkButton btnText='read more articles' imgSource={ArrowRight}/>
                </div>
            </Container>
        </div>
    );
};

export default InterestingInBlog;
