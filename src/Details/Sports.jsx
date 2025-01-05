import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Sports = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <div className="grid grid-cols-2 rounded-box">
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/1bpymxr/sport4.png"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/3Fdf7Ft/sport2.png"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/7Jtt1Sf/sport1.png"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/HC3GL90/sport3.png"
                            alt="Drink" />
                    </div>
                </div>
            </div>
            <div className=''>
                <Link to='/'><p className='w-56 text-blue-500 border flex justify-center items-center gap-6 p-2 text-center mx-auto'><FaArrowLeftLong />Back to Portfolio</p></Link>
            </div>
        </div>
    );
};

export default Sports;