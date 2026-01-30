import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: 'Mobile Solutions',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Web Solutions',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
        },
        {
            title: 'Custom Solutions',
            image: 'https://images.unsplash.com/photo-1769109001988-9682771b3092?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }
    ];

    return (
        <section className="services-section">
            <div className="services-header">
                <div className="services-title-area">
                    <p className="services-subtitle">What we offer</p>
                    <h2 className="services-main-title">
                        Unlock Revenue Growth<br />
                        for Your Business
                    </h2>
                </div>
                <button className="view-all-btn">
                    View All Services
                </button>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
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
