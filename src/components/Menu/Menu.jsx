import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setShow(false);
            setIsOpen(false); // Close menu on scroll down
        } else {
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`menu-container ${show ? '' : 'menu-hidden'} ${isOpen ? 'menu-open' : ''}`}>
            <div className="menu-logo">
                <Link to="/" onClick={() => setIsOpen(false)}>
                    <img src="/logo_light.svg" alt="Logo" />
                </Link>
            </div>

            <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={`menu-links ${isOpen ? 'active' : ''}`}>
                <li className="menu-item"><Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link></li>
                <li className="menu-item"><Link to="/projects" onClick={() => setIsOpen(false)}>Proyectos</Link></li>
                <li className="menu-item"><Link to="/trayectoria" onClick={() => setIsOpen(false)}>Trayectoria</Link></li>
                <li className="menu-item"><Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link></li>
                <li className="menu-item"><Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
