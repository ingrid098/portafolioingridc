import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="sobre-mi" className="about">
            <div className="container">
                <h2>Sobre Mí</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>Soy una desarrolladora apasionada por la tecnología y la creación de soluciones innovadoras. Me especializo en desarrollo web con tecnologías modernas.</p>
                        <h3>Habilidades:</h3>
                        <ul>
                            <li>JavaScript, React, Node.js</li>
                            <li>HTML5, CSS3, Bootstrap</li>
                            <li>Base de datos MySQL, MongoDB</li>
                            <li>Git, GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;