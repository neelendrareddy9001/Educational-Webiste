import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/Hero-section';
import Company from '../components/Company-Section/Company';
import AboutUs from '../components/About-Us/AboutUs';
import Courses from '../components/Course-Section/Courses';


const Home = () => {
    return (
        <>
        <Fragment>
                <Header/>
                <HeroSection/>
                <Company/>
                <AboutUs/> 
                <Courses/>
        </Fragment>
        </>
    )
}

export default Home;
