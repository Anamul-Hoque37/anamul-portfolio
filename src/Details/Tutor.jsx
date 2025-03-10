import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

const Tutor = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4">Tutors Home</h1>
                    <img className="w-full mb-4" src='https://i.ibb.co.com/NsvQK6t/download-6.jpg' alt='Tutor Home' />
                    <h2 className="text-2xl font-semibold mb-2">Main Technology Stack Used</h2>
                    <p className="mb-4">'React, Tailwind CSS'</p>
                    <h2 className="text-2xl font-semibold mb-2">Brief Description</h2>
                    <p className="mb-4">Empowering students with personalized learning, expert guidance, and a supportive environment to achieve their academic goals.</p>
                    <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
                    <p className="mb-4">
                        <a href="https://tutor-booking-platform.web.app/" className="text-blue-500 hover:underline">
                            https://tutor-booking-platform.web.app/
                        </a>
                    </p>
                    <h2 className="text-2xl font-semibold mb-2">GitHub Repository Link (Client-Side)</h2>
                    <p className="mb-4">
                        <a href='https://github.com/Anamul-Hoque37/tutor-booking-client' className="text-blue-500 hover:underline">
                            https://github.com/Anamul-Hoque37/tutor-booking-client
                        </a>
                    </p>
                    <h2 className="text-2xl font-semibold mb-2">Challenges Faced During Development</h2>
                    <p className="mb-4">Challenges faced during development of Project One.</p>
                    <h2 className="text-2xl font-semibold mb-2">Potential Improvements and Future Plans</h2>
                    <p>Potential improvements and future plans for Project One.</p>
                </div>
            </div>
            <div className=''>
                <Link to='/'><p className='w-56 text-blue-500 border flex justify-center items-center gap-6 p-2 text-center mx-auto'><FaArrowLeftLong />Back to Portfolio</p></Link>
            </div>
        </div>
    );
};

export default Tutor;