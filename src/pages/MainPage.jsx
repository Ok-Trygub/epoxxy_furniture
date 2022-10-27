import React from 'react';
import FirstBlock from "../components/FirstBlock/FirstBlock";
import BlockByFilter from '../components/BlockByFilter/BlockByFilter';
import PopularCategories from "../components/PopularCategories/PopularCategories";
import InstagramInspiration from "../components/InstagramInspiration/InstagramInspiration";
import InterestingInBlog from '../components/InterestingInBlog/InterestingInBlog';


const MainPage = () => {
    return (
        <>
            <FirstBlock/>
            <BlockByFilter/>
            <PopularCategories/>
            <InstagramInspiration/>
            <InterestingInBlog/>
        </>
    );
};

export default MainPage;
