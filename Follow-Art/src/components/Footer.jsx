import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <span className="footer-heading">Curators & Artists</span>
                <a href="#">About Us</a>
            </div>

            <div className="footer-center">
                <a href="#">Brand Kit</a>
                <a href="#">Buy Gift Card</a>
                <a href="#">Terms & Conditions</a>
            </div>

            <div className="footer-right">
                Digital product development by Vide Infra
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1.5" />
                    <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </footer>
    );
};

export default Footer;
