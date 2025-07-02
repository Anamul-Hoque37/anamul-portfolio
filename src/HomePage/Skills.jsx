import React from 'react';
import NodeJs from '../assets/icons/icons8-nodejs-96 (1).png';
import Express from '../assets/icons/icons8-express-96.png';
import Native from '../assets//icons/icons8-react-native-96.png';
import HTML from '../assets/icons/icons8-html-100.png';
import CSS from '../assets/icons/icons8-css-96.png';
import Javascript from '../assets/icons/icons8-javascript-96.png';
import Tailwind from '../assets/icons/icons8-tailwind-css-96.png';
import ReactImg from '../assets/icons/icons8-react-80.png';
import Mongo from '../assets/icons/icons8-mongo-db-96.png';
import Git from '../assets/icons/icons8-git-100.png';
import Firebase from '../assets/icons/icons8-firebase-96.png';
import vite from '../assets/icons/icons8-vite-96.png';

const Skills = () => {
    return (
        <div id="skills" className='flex flex-col justify-center items-center border-t-2'>
            <h1 className='text-4xl font-bold py-4'>Skills</h1>
            <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between ">
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={NodeJs} className="w-12" />
                    <h4 className="text-md ml-4">NodeJS</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Express} className="w-12" />
                    <h4 className="text-md ml-4">Express</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Native} className="w-12" />
                    <h4 className="text-md ml-4">React Native</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={HTML} className="w-12" />
                    <h4 className="text-md ml-4">HTML</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={CSS} className="w-12" />
                    <h4 className="text-md ml-4">CSS</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Javascript} className="w-12" />
                    <h4 className="text-md ml-4">Javascript</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Tailwind} className="w-12" />
                    <h4 className="text-md ml-4">Tailwind CSS</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={ReactImg} className="w-12" />
                    <h4 className="text-md ml-4">React</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Mongo} className="w-12" />
                    <h4 className="text-md ml-4">Mongo DB</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Git} className="w-12" />
                    <h4 className="text-md ml-4">Git</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={Firebase} className="w-12" />
                    <h4 className="text-md ml-4">Firebase</h4>
                </div>
                <div className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40">
                    <img alt="" src={vite} className="w-12" />
                    <h4 className="text-md ml-4">Vite</h4>
                </div>
            </div>
        </div>
    )
};

export default Skills;