import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id="projects" className='flex flex-col justify-center items-center border-x-2 gap-4 p-4'>
            <h1 className='text-4xl font-bold'>Projects</h1>
            <div className='w-full flex flex-col md:flex-row gap-4 justify-around'>
                <div className="card glass">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/NsvQK6t/download-6.jpg"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Tutors Home</h2>
                        <p>Empowering students with personalized learning, expert guidance, and a supportive environment to achieve their academic goals.</p>
                        <div className="card-actions justify-around">
                            <a href="https://tutor-booking-platform.web.app/" target="_blank"><button className="btn btn-primary bg-green-600">Live Link</button></a>
                            <Link to='/tutor'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card glass">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/7r3H2vS/download-13.jpg"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Aaraf Sports</h2>
                        <p>Unleashing Potential, Inspiring Excellence – Aaraf Sports: Your Partner in Every Sporting Journey!</p>
                        <div className="card-actions justify-around">
                            <a href="https://aaraf-sports.web.app/" target="_blank"><button className="btn btn-primary bg-green-600">Live Link</button></a>
                            <Link to='/council'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card glass">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/N6JdB4R/download-12.jpg"
                            alt="car!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Next Gen Career</h2>
                        <p>Shaping Futures, Unlocking Potential – Next Gen Career: Your Pathway to Success in Tomorrow’s World.</p>
                        <div className="card-actions justify-around">
                            <a href="https://next-gen-career.web.app/" target="_blank"><button className="btn btn-primary bg-green-600">Live Link</button></a>
                            <Link to='/sports'><button className="btn btn-primary">View Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;