import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ServicesDetail.css';

const ServicesDetail = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    const services = [
        {
            id: 'mobile',
            category: 'SOLUCIONES',
            categoryName: 'MOBILE',
            title: 'Desarrollo de aplicaciones móviles',
            hashtag: '#mobileapp',
            description: 'Soluciones móviles se centra en crear experiencias fluidas y potentes que conectan a las personas con la tecnología. Entendemos que el mundo actual se mueve en la palma de la mano, por lo que cada línea de código está optimizada para el rendimiento y la usabilidad.',
            image: './mobile_solution.jpg',
            bgText: 'mobile'
        },
        {
            id: 'web',
            category: 'SOLUCIONES',
            categoryName: 'WEB',
            title: 'Desarrollo de aplicaciones web',
            hashtag: '#webDesign',
            description: 'Desarrollamos ecosistemas web robustos que no solo lucen increíbles, sino que están construidos para escalar. Desde aplicaciones empresariales complejas hasta sitios interactivos modernos, nuestra arquitectura web prioriza la accesibilidad, la velocidad y un diseño que trasciende tendencias.',
            image: './web_solution.jpg',
            bgText: 'web'
        },
        {
            id: 'custom',
            category: 'SOLUCIONES',
            categoryName: 'CUSTOM',
            title: 'Desarrollo de software a medida',
            hashtag: '#uniquesolutions',
            description: 'Cada negocio tiene desafíos únicos que el software comercial no puede resolver. Creamos soluciones a medida que se integran perfectamente con tus procesos, automatizando lo tedioso y potenciando lo creativo. Tu visión es nuestro punto de partida para construir el futuro.',
            image: './custom_solution.jpg',
            bgText: 'custom'
        }
    ];

    return (
        <div className="services-detail-container">
            {services.map((service) => (
                <section key={service.id} id={service.id} className="service-detail-section">
                    <div className="service-detail-content">
                        <div className="service-detail-text">
                            <span className="service-detail-category">
                                {service.category} / {service.categoryName}
                            </span>
                            <h1 className="service-detail-title">{service.title}</h1>
                            <span className="service-detail-hashtag">{service.hashtag}</span>
                            <p className="service-detail-description">
                                {service.description}
                            </p>
                            <a href="https://wa.me/+5491125599997" className="service-detail-contact">Contactar...</a>
                        </div>

                        <div className="service-detail-image-wrapper">
                            <img src={service.image} alt={service.title} className="service-detail-image" />
                        </div>
                    </div>


                    <div className="service-detail-footer">
                        <span>SOLUTION</span>
                        <span className="footer-visual">EDGAR_DEV</span>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default ServicesDetail;
