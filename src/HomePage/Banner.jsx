import React from 'react';
import fb from '../assets/images/icons8-facebook-logo-94.png';
import x from '../assets/images/icons8-x-100.png';
import git from '../assets/images/icons8-github-logo-96.png';
import lk from '../assets/images/icons8-linkedin-96.png';
import img from '../assets/images/66605.jpg';

const Banner = () => {
    return (
        <div className='border-b-2'>
            <div className="bg-white py-6">
                <div className=" px-8 sm:px-8 md:px-10 flex justify-center items-center flex-col md:flex-row-reverse">
                    <img
                        src={img}
                        className="max-w-sm w-full md:w-1/2 justify-center items-center text-center rounded-lg shadow-2xl" />
                    <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className="text-2xl text-sky-400 font-normal">Hello, I am</h1>
                            <h1 className="text-5xl font-bold">Anamul Hoque</h1>
                        </div>
                        <h1 className="text-3xl py-4 font-medium">Front-End Developer</h1>
                        <p className="pb-6">
                            My goal is to create visually stunning and user-friendly web experiences that merge creativity with functionality. I’m excited to learn, grow, and contribute to building better digital spaces.
                        </p>
                        <div className='flex gap-4 pb-4'>
                            <div className='h-20 w-20'><a href="https://www.facebook.com/anamul.hoque.7583" target="_blank">
                                <img className='w-full h-full' src={fb} alt="Facebook Icon" /></a>
                            </div>
                            <div className='h-20 w-20'><a href="https://github.com/Anamul-Hoque37" target="_blank">
                                <img className='w-full h-full' src={git} alt="GitHub Icon" /></a>
                            </div>
                            <div className='h-20 w-20'><a href="https://x.com/AnamulHoqu12564" target="_blank">
                                <img className='w-full h-full' src={x} alt="Twitter Icon" /></a>
                            </div>
                            <div className='h-20 w-20'><a href="https://www.linkedin.com/in/anamul-hoque-4558511a9/" target="_blank">
                                <img className='w-full h-full' src={lk} alt="Linkedin Icon" /></a>
                            </div>
                        </div>
                        <a href="https://drive.google.com/file/d/1-_VDA3lcRp7jo9s04h2HrqwKFcOY3P0a/view?usp=sharing"><button className="btn btn-primary hover:bg-green-600">Resume Download</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;