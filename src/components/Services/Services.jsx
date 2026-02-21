import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const navigate = useNavigate();
    const services = [
        {
            id: 'mobile',
            title: 'Mobile Solutions',
            image: './mobile_solution.jpg',
        },
        {
            id: 'web',
            title: 'Web Solutions',
            image: './web_solution.jpg',
        },
        {
            id: 'custom',
            title: 'Custom Solutions',
            image: './custom_solution.jpg',
        }
    ];

    return (
        <section className="services-section">
            <div className="services-header">
                <div className="services-title-area">
                    <p className="services-subtitle">Servicios</p>
                    <h2 className="services-main-title">
                        Soluciones <br />
                        escalables para tu negocios
                    </h2>
                </div>
                <button className="view-all-btn" onClick={() => navigate('/services')}>
                    Ver todos los servicios
                </button>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        className="service-card"
                        key={index}
                        onClick={() => navigate(`/services#${service.id}`)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={service.image} alt={service.title} className="service-image" />
                        <div className="service-overlay">
                            <h3 className="service-card-title">{service.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
