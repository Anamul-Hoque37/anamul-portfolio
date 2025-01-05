import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Tutor = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <div className="grid grid-cols-2 rounded-box">
                    <div className="carousel-item">
                        <img src="https://i.ibb.co.com/x335G1J/Tutor3.png" alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/4m0Fhwz/Tutor1.png"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/2cpFqWz/Tutor4.png"
                            alt="Drink" />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://i.ibb.co.com/8cfBCXF/Tutur2.png"
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

export default Tutor;