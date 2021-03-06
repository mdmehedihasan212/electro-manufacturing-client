import React from 'react';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import News from './News';
import Reviews from './Reviews';
import Tools from './Tools';
import WorkOutline from './WorkOutline';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <WorkOutline></WorkOutline>
            <About></About>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <News></News>
        </>
    );
};

export default Home;