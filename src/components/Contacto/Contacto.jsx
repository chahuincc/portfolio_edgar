import React from 'react';
import './Contacto.css';

const Contacto = () => {
    return (
        <div className="contacto-page">
            <div className="contacto-bg-text">CONTACT</div>

            <div className="contacto-container">
                <div className="contacto-column bio-section">
                    <h2 className="bio-headline">Desarrollador de software<br /></h2>
                    <p className="bio-description">
                        Desarrollador de software apasionado por crear soluciones tecnológicas
                        escalables y eficientes. Gracias a mis bases matematicas y mi creatividad, ayudo a las empresas a
                        transformar sus ideas en realidades digitales sólidas y modernas.
                    </p>
                </div>

                <div className="contacto-column details-section">
                    <h3 className="section-subtitle"><br />Contacto:</h3>

                    <a href="https://wa.me/+5491125599997" target="_blank" rel="noopener noreferrer" className="detail-item-link">
                        <div className="detail-item">
                            <div className="detail-icon">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">TELEFONO</span>
                                <span className="detail-value">+54 9 11 2559 9997</span>
                            </div>
                        </div>
                    </a>

                    <a href="mailto:chahuincc@gmail.com" className="detail-item-link">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">E-MAIL</span>
                                <span className="detail-value">chahuincc@gmail.com</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://maps.app.goo.gl/RPJs4dFeRP2vs2Ty5" target="_blank" rel="noopener noreferrer" className="detail-item-link">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">LOCATION</span>
                                <span className="detail-value">Lomas de Zamora, Buenos Aires, Argentina</span>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/chahuin/" target="_blank" rel="noopener noreferrer" className="detail-item-link">
                        <div className="detail-item">
                            <div className="detail-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </div>
                            <div className="detail-text">
                                <span className="detail-label">LINKEDIN</span>
                                <span className="detail-value">linkedin.com/in/chahuin</span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Right Column: Image */}
                <div className="contacto-column image-section">
                    <div className="contacto-image-wrapper">
                        <img
                            src="./foto.png"
                            alt="Edgar"
                            className="contacto-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
