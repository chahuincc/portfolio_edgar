import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section brand-section">
                    <div className="footer-logo">
                        <img src="/logo_light.svg" alt="Logo" />
                        <span className="logo-text">STUDIO</span>
                    </div>
                    <p className="footer-slogan">
                        Let's create something<br />
                        extraordinary together!
                    </p>
                </div>

                <div className="footer-section links-section">
                    <h4 className="section-title">MAIN</h4>
                    <ul className="footer-links">
                        <li><a href="#works">Works</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                    </ul>
                </div>

                <div className="footer-section links-section">
                    <h4 className="section-title">SUPPORT</h4>
                    <ul className="footer-links">
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#terms">Terms & Condition</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#disclosures">Disclosures</a></li>
                    </ul>
                </div>

                <div className="footer-section socials-section">
                    <h4 className="section-title">SOCIALS</h4>
                    <div className="social-icons">
                        <a href="https://behance.net" className="social-icon">B</a>
                        <a href="https://dribbble.com" className="social-icon">D</a>
                        <a href="https://instagram.com" className="social-icon">I</a>
                        <a href="https://twitter.com" className="social-icon">T</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="footer-divider" />
                <div className="footer-legal">
                    <p>&copy; {new Date().getFullYear()} Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
