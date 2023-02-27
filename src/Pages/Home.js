import React, { Fragment } from 'react'
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/Hero-section';
import Company from '../components/Company-Section/Company';
import AboutUs from '../components/About-Us/AboutUs';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <HeroSection/>
            <Company/>
            <AboutUs/>
        </Fragment>
    )
}

export default Home;
