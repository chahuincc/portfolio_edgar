import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-left">
                <div className="hero-text-content">
                    <p className="hero-subtitle">
                        Hola, podemos empezar a trabajar<br />
                        en tu proyecto
                    </p>
                    <button className="btn-details">
                        <span className="play-icon">
                            <span className="play-triangle"></span>
                        </span>
                        Proyectos
                    </button>
                    <h2 className="brand-title">Start...</h2>
                </div>
            </div>

            <div className="hero-right">
                <img
                    src="/persona.jpg"
                    alt="Model"
                    className="hero-image"
                />
                <div className="scroll-indicator">
                    <span className="arrow-right">›</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
