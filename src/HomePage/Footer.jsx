import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center border rounded-md bg-gray-900 text-base-content p-4">
                <aside>
                    <p className='text-white'>Copyright © {new Date().getFullYear()} - All right reserved by Anamul Hoque</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;