import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section id="proyectos" className="projects">
            <div className="container">
                <h2>Mis Proyectos</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <h3>Proyecto 1</h3>
                        <p>Descripción de tu primer proyecto.</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>Node.js</span>
                        </div>
                    </div>
                    <div className="project-card">
                        <h3>Proyecto 2</h3>
                        <p>Descripción de tu segundo proyecto.</p>
                        <div className="project-tech">
                            <span>JavaScript</span>
                            <span>CSS3</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;