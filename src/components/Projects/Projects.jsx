import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: "ABOUT NATURE",
        subtitle: "play with nature",
        hashtag: "#themistinthesouth",
        description: "Nature is often seen as something we can escape to when life is hard. The reality is that the nature that surrounds us is far more meaningful and far more valuable than the money that we chase and obsess over. If we appreciated nature the way we love money, we might just make the world a bit more peaceful... and beautiful.",
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=800&auto=format&fit=crop",
        bgText: "about"
    },
    {
        id: 2,
        title: "URBAN EXPLORATION",
        subtitle: "city lights",
        hashtag: "#concretejungle",
        description: "The city never sleeps, and neither do the stories hidden within its steel veins. From the glowing neon signs to the quiet alleys, every corner holds a secret waiting to be captured through a lens of curiosity.",
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop",
        bgText: "urban"
    },
    {
        id: 3,
        title: "TECH HORIZON",
        subtitle: "digital dawn",
        hashtag: "#futureisnow",
        description: "Technology isn't just about code and circuits; it's about the humans it connects and the possibilities it creates. Witness the dawn of a new era where innovation meets empathy in the digital landscape.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        bgText: "tech"
    },
    {
        id: 4,
        title: "OCEAN BREEZE",
        subtitle: "salt in the air",
        hashtag: "#deepblue",
        description: "The ocean is a vast mystery, a constant rhythm of tides and waves. It reminds us of the power of nature and the importance of preserving the wonders that lie beneath the surface.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
        bgText: "ocean"
    },
    {
        id: 5,
        title: "MOUNTAIN PEAK",
        subtitle: "reaching heights",
        hashtag: "#summitview",
        description: "Every step up the mountain is a challenge to oneself. The air grows thin, the path steep, but the reward at the top is a perspective that changes how you view everything below.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        bgText: "peak"
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projectsData[0]);

    return (
        <div className="projects-page">
            <div className="projects-bg-text">{selectedProject.bgText}</div>

            <div className="project-detail-container">
                <div className="project-info">
                    <h2 className="project-main-title">
                        {selectedProject.title.split(' ')[0]} <span>{selectedProject.title.split(' ').slice(1).join(' ')}</span>
                    </h2>
                    <h3 className="project-subtitle">{selectedProject.subtitle}</h3>
                    <p className="project-hashtag">{selectedProject.hashtag}</p>
                    <p className="project-description">
                        {selectedProject.description}
                    </p>
                </div>
                <div className="project-image-preview">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
            </div>

            <div className="horizontal-scroll-container">
                <div className="scroll-header">
                    <span className="scroll-title">FOOTAGE</span>
                    <span className="scroll-subtitle">VISUAL OF DENIS</span>
                </div>
                <div className="projects-grid-scroll">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className={`project-thumbnail ${selectedProject.id === project.id ? 'active' : ''}`}
                            onClick={() => {
                                setSelectedProject(project);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                        >
                            <img src={project.image} alt={project.title} />
                            <div className="thumbnail-overlay">
                                <span className="thumbnail-title">{project.bgText.toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
