import React from 'react';
import './BlogMobCarousel.scss';
import Carousel from "react-bootstrap/Carousel";
import InterestingCard from "../InterestingCard/InterestingCard";
import Bedroom from "../../assets/images/interestingInBlog/bedroom.png";
import Table from "../../assets/images/interestingInBlog/table.png";
import Kitchen from "../../assets/images/interestingInBlog/kitchen.png";


const BlogMobCarousel = () => {

    return (
        <Carousel slide={false} controls={true} interval={null} className='interestingInBlogCarousel'>
            <Carousel.Item>
                <div className='mb-3'>
                    <InterestingCard
                        text='Updating your bedroom? It’s easier than you think'
                        date='May 2, 2012'
                        imgSource={Bedroom}
                    />
                </div>
                <div className='mb-3'>
                    <InterestingCard
                        text='Back on the menu: hosting a post-lockdown dinner party'
                        date='May 2, 2012'
                        imgSource={Table}
                    />
                </div>
                <InterestingCard
                    text='How to refresh your kitchen in 5 easy steps'
                    date='February 27, 2022'
                    imgSource={Kitchen}
                />
            </Carousel.Item>

            <Carousel.Item>
                <div className='mb-3'>
                    <InterestingCard
                        text='Updating your bedroom? It’s easier than you think'
                        date='May 2, 2012'
                        imgSource={Kitchen}
                    />
                </div>
                <div className='mb-3'>
                    <InterestingCard
                        text='Updating your bedroom? It’s easier than you think'
                        date='May 2, 2012'
                        imgSource={Bedroom}
                    />
                </div>
                <InterestingCard
                    text='Updating your bedroom? It’s easier than you think'
                    date='May 2, 2012'
                    imgSource={Table}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BlogMobCarousel;
