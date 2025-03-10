import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id="projects" className='flex flex-col justify-center items-center border-x-2 gap-4 p-4'>
            <h1 className='text-4xl font-bold'>Projects</h1>
            <div className='flex flex-col items-center md:flex-row gap-8 justify-around'>
                <div className="h-[370px] w-80 rounded-2xl bg-slate-200">
                    <div className="h-[50px] w-full">
                        <h2 className="text-center text-3xl">Dreamnest</h2>
                    </div>
                    <div className='h-[270px]'>
                        <img
                            src="https://i.ibb.co.com/Y2dKkf9/download-21.jpg"
                            alt="car!"
                            className='h-full w-full' />
                    </div>
                    <div className="h-[50px] w-full">
                        <Link to='/council'><button className="btn btn-primary w-full">View Details</button></Link>
                    </div>
                </div>
                <div className="h-[370px] w-80 rounded-2xl bg-slate-200">
                    <div className="h-[50px] w-full">
                        <h2 className="text-center text-3xl">Tutors Home</h2>
                    </div>
                    <div className='h-[270px]'>
                        <img
                            src="https://i.ibb.co.com/NsvQK6t/download-6.jpg"
                            alt="car!"
                            className='h-full w-full' />
                    </div>
                    <div className="h-[50px] w-full">
                        <Link to='/tutor'><button className="btn btn-primary w-full">View Details</button></Link>
                    </div>
                </div>
                <div className="h-[370px] w-80 rounded-2xl bg-slate-200">
                    <div className="h-[50px] w-full">
                        <h2 className="text-center text-3xl">Aaraf Sports</h2>
                    </div>
                    <div className='h-[270px]'>
                        <img
                            src="https://i.ibb.co.com/7r3H2vS/download-13.jpg"
                            alt="car!"
                            className='h-full w-full' />
                    </div>
                    <div className="h-[50px] w-full">
                        <Link to='/sports'><button className="btn btn-primary w-full">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;