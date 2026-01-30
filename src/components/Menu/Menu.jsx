import React, { useState, useEffect } from 'react';
import './Menu.css';

const Menu = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            // Scrolling down and past a threshold
            setShow(false);
        } else {
            // Scrolling up
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

    return (
        <nav className={`menu-container ${show ? '' : 'menu-hidden'}`}>
            <div className="menu-logo">
                <img src="/logo_light.svg" alt="Logo" />
            </div>
            <ul className="menu-links">
                <li className="menu-item">Inicio</li>
                <li className="menu-item">Proyectos</li>
                <li className="menu-item">Trayectoria</li>
                <li className="menu-item">Contacto</li>
                <li className="menu-item">Blog</li>
            </ul>
        </nav>
    );
};

export default Menu;
