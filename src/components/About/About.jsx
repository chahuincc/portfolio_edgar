import React from 'react';
import './About.css';

const About = () => {
    const stats = [
        { number: '4+', label: 'Años de experiencia en desarrollo de software' },
        { number: '10+', label: 'Proyectos personales completados' },
        { number: '100%', label: 'Compromiso con el cliente' },
        { number: '100%', label: 'Trabajo en equipo' }
    ];

    const logos = [
        { name: 'CSS3', icon: '/skills/css-3-svgrepo-com.svg' },
        { name: 'JavaScript', icon: '/skills/javascript-svgrepo-com.svg' },
        { name: 'Node.js', icon: '/skills/nodejs-icon-svgrepo-com.svg' },
        { name: 'React', icon: '/skills/react-svgrepo-com.svg' },
        { name: 'SQL', icon: '/skills/sql-database-sql-azure-svgrepo-com.svg' }
    ];

    return (
        <section className="about-section">
            <div className="about-top">
                <div className="about-info">
                    <h2 className="about-title">Experiencia</h2>
                    <p className="about-description">
                        Con el gran cambio tecnológico de los últimos años es importante escalar al siguiente nivel,
                        quedarse atrás no es una opción, por eso es importante estar en constante aprendizaje y adaptación.
                        Mi objetivo es ayudar a las empresas a transformar sus ideas en realidades digitales sólidas y modernas.
                    </p>
                </div>

                <div className="about-stats">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="about-logos">
                {logos.map((logo, index) => (
                    <div key={index} className="logo-item">
                        <img src={logo.icon} alt={logo.name} className="logo-img" />
                        <span className="logo-name">{logo.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
