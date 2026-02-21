import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


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
                        Comuniquese, estare encantado de ayudarte.

                    </p>
                </div>

                <div className="footer-section links-section">
                    <h4 className="section-title">PRINCIPAL</h4>
                    <ul className="footer-links">
                        <li className="menu-item"><Link to="/projects">Proyectos</Link></li>
                        <li className="menu-item"><Link to="/services">Servicios</Link></li>
                        <li className="menu-item"><Link to="/contacto">Sobre mi</Link></li>
                        {/* <li className="menu-item"><Link to="/pricing">Precios</Link></li> */}
                    </ul>
                </div>

                <div className="footer-section links-section">
                    <h4 className="section-title">AYUDA</h4>
                    <ul className="footer-links">
                        <li className="menu-item"><Link to="/">Inicio</Link></li>
                        <li className="menu-item"><Link to="/projects">Proyectos</Link></li>
                        <li className="menu-item"><Link to="/trayectoria">Trayectoria</Link></li>
                        <li className="menu-item"><Link to="/contacto">Contacto</Link></li>
                        <li className="menu-item"><Link to="/blog">Blog</Link></li>
                    </ul>
                </div>

                <div className="footer-section socials-section">
                    <h4 className="section-title">REDES</h4>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="/linkedin-svgrepo-com.svg" alt="Linkedin" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="/instagram-svgrepo-com.svg" alt="Instagram" />
                        </a>
                        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="/whatsapp-logo-thin-svgrepo-com.svg" alt="Whatsapp" />
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="/tiktok-outline-svgrepo-com.svg" alt="TikTok" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <hr className="footer-divider" />
                <div className="footer-legal">
                    <p>&copy; {new Date().getFullYear()} Edgar_dev. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
