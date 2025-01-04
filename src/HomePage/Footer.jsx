import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center border rounded-md bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Anamul Hoque</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;