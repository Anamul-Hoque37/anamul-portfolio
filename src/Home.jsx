import React from 'react';
import Banner from './HomePage/Banner';
import About from './HomePage/About';
import Skills from './HomePage/Skills';
import Projects from './HomePage/Projects';
import Contacts from './HomePage/Contacts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;