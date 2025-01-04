import React from 'react';
import fb from '../assets/images/icons8-facebook-logo-94.png';
import x from '../assets/images/icons8-x-100.png';
import git from '../assets/images/icons8-github-logo-96.png';
import lk from '../assets/images/icons8-linkedin-96.png';
import img from '../assets/images/66605.jpg';

const Banner = () => {
    return (
        <div className='py-4'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content sm:px-6 md:px-10 flex-col lg:flex-row-reverse">
                    <img
                        src={img}
                        className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">Frontend Developer</h1>
                        <p className="py-6">
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
                        <button className="btn btn-primary hover:bg-green-600">Resume Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;