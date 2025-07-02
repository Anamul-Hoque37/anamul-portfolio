import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

const Contacts = () => {
    const [formData, setFormData] = useState({
        senderEmail: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS service
        emailjs
            .send(
                "service_c5h9a5b", // Replace with your EmailJS service ID
                "template_hfnrbhu", // Replace with your EmailJS template ID
                {
                    from_email: formData.senderEmail,
                    message: formData.message,
                },
                { publicKey: 'vBqcvrXSj-tGJ35MY' }, // Replace with your EmailJS public key
            )
            .then(
                () => {
                    setStatus("Message sent successfully! wait for Feedback");
                    setFormData({ senderEmail: "", message: "" }); // Clear form
                },
                (error) => {
                    console.error("Failed to send message:", error);
                    setStatus("Failed to send the message. Please try again.");
                }
            );
    };
    return (
        <div>
            <section id="contact" className="bg-white py-4 border-t-2 px-6">
                <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
                <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-around bg-white shadow-lg rounded-lg p-6">
                    <div className='w-full md:w-2/4'>
                        {status && <p className="text-center text-green-500 mb-4">{status}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="senderName"
                                    name="senderName"
                                    value={formData.senderName}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="senderEmail"
                                    name="senderEmail"
                                    value={formData.senderEmail}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Write your message here"
                                    rows="3"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className='flex flex-col pb-4 items-center justify-center text-start'>
                        <h1 className='text-2xl font-bold'>Anamul Hoque</h1>
                        <p className='text-base font-medium'>Narayanganj, Bangladesh.</p>
                        <p className='text-base font-medium'>Contact No: 01737712037</p>
                        <p className='text-base font-medium'>Email: anamul.eee73@gmail.com</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contacts;