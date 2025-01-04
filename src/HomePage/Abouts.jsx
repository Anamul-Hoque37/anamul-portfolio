import React from 'react';
import img from '../assets/images/66605.jpg'

const Abouts = () => {
    return (
        <div>
            <section id="about-me" className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 py-20">
                <div className="w-10/12 mx-auto px-2 flex flex-col-reverse justify-center items-center gap-12">
                    {/* About Content */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            About Me
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Hi! I'm <span className="font-bold text-indigo-500">Anamul Hoque</span>, a dedicated and creative
                            <span className="font-bold text-indigo-500"> Frontend Web Developer</span>. I love crafting meaningful
                            experiences and solving real-world problems through my expertise in
                            <span className="font-bold text-indigo-500"> [Your Skills]</span>.
                        </p>
                        <p className="text-gray-600 text-lg mb-6">
                            When I’m not working, I enjoy <span className="italic">traveling</span>, exploring
                            <span className="italic"> Engineering</span>, or learning something new. Let's create something amazing together!
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-indigo-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-600 transition-transform duration-300 transform hover:scale-105"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Profile Image */}
                    <div className="text-center">
                        <img
                            src={img}
                            alt="Your Profile"
                            className="w-48 h-48 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Abouts;