import React from 'react';
import './Trayectoria.css';

const timelineData = [
    {
        year: "2017",
        title: "MATEMATICAS",
        description: "Empeze a estudiar la carrera de Ingeniería en Sistemas de Información en la Universidad Tecnologica Nacional, donde curse materias elementales de la matematica, fisica y quimica.",
        image: "./trayectoria/primero.jpg",
        accent: "Mis primeros pasos..!"
    },
    {
        year: "2017",
        title: "Algoritmos y Estructuras de Datos",
        description: "En esta materia aprendi a programar y a resolver problemas de manera logica y estructurada. Conoci los algoritmos mas fundamentales. Fue una materia muy desafiante.",
        image: "./trayectoria/algoritmo.png",
        accent: ""
    },
    {
        year: "2018",
        title: "Programacion en C",
        description: "Como primer lenguaje de programacion, C-C++ fue mi primer paso a materializar varios algoritmos y experimentar distintos paradigmas de programacion",
        image: "./trayectoria/c.png",
        accent: ""
    },
    {
        year: "2019",
        title: "Desarrollo Frontend",
        description: "Con la intencion de demostrar mis habilidades de programacion, decidi comenzar a estudiar de manera autodidacta desarrollo frontend, ",
        image: "./trayectoria/frontend.jpg",
        accent: ""
    },
    {
        year: "2021",
        title: "Primer Trabajo",
        description: "Gracias a SAM SISTEMAS pude comenzar a trabajar en el mundo real, donde pude aplicar mis conocimientos y habilidades en el desarrollo de frontend, el trabajo en equipo y metodologias hagiles, fueron experiencias enriquesedoras.",
        image: "./trayectoria/sam.jpg",
        accent: "Gracias a SAM SISTEMAS!"
    },
    {
        year: "2023",
        title: "Nexts",
        description: "Despues de finalizar mi etapa en SAM SISTEMAS, decidi comenzar a especializarme en Nexts.js y Backend, donde pude crear varios proyectos personales.",
        image: "./trayectoria/next.jpeg",
        accent: ""
    },
    {
        year: "2025",
        title: "Nuevas tecnologias AI",
        description: "Empeze a navegar en las distintas tecnologias AI, como ChatGPT, Gemini, Claude, Antigravity, etc. con la finalidad de seguir adquiriendo herramientas de desarrollo ",
        image: "./trayectoria/ai.jpg",
        accent: "Gracias por llegar..!"
    }
];

const Trayectoria = () => {
    return (
        <div className="trayectoria-page">
            <header className="trayectoria-header">
                <h1 className="trayectoria-title">MI <span>TRAYECTORIA</span></h1>
            </header>

            <div className="timeline-container">
                <div className="timeline-line"></div>

                {timelineData.map((item, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            {item.accent && <span className="timeline-accent">{item.accent}</span>}
                            <h3 className="timeline-year">{item.year}</h3>
                            <h4 className="timeline-item-title">{item.title}</h4>
                            <p className="timeline-description">{item.description}</p>
                            <div className="timeline-image">
                                <img src={item.image} alt={item.year} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trayectoria;
