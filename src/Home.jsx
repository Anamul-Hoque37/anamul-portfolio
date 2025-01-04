import React from 'react';
import Banner from './HomePage/Banner';
import Abouts from './HomePage/Abouts';
import Skills from './HomePage/Skills';
import Education from './HomePage/Education';
import Projects from './HomePage/Projects';
import Contacts from './HomePage/Contacts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Abouts></Abouts>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;