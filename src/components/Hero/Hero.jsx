import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero-container">
            <div className="hero-left">
                <div className="hero-text-content">
                    <p className="hero-subtitle">
                        Construyamos juntos tecnología <br />
                        sostenible para un mejor futuro.
                    </p>
                    <button className="btn-details" onClick={() => navigate('/projects')}>
                        <span className="play-icon">
                            <span className="play-triangle"></span>
                        </span>
                        Proyectos
                    </button>
                    <h2 className="brand-title">Design</h2>
                </div>
            </div>

            <div className="hero-right">
                <img
                    src="/hero_right.svg"
                    alt="Model"
                    className="hero-image"

                />
                <div className="scroll-indicator">
                    <span className="arrow-right">*</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
