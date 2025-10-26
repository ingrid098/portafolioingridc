import React, { useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
    const [activeCompany, setActiveCompany] = useState('carvajal-calidad');

    const experienceData = {
        'carvajal-calidad': {
            company: "Carvajal Servicios Compartidos",
            position: "Analista de Mejoramiento y Calidad",
            period: "Julio 2024 - Actualmente",
            location: "Cali, Colombia",
            icon: "🎯",
            responsibilities: [
                "Liderar y acompañar a las áreas en el diseño e implementación de iniciativas de mejora continua, empleando la metodología ágil Scrum",
                "Diseñar y documentar Historias de Usuario, mapeo de procesos As-Is y To-Be, ejecutando pruebas funcionales",
                "Creación de tableros en Power BI para visualización y análisis de datos",
                "Gestionar el levantamiento, actualización y mantenimiento de la documentación de procesos en áreas de Tecnología y Seguridad física",
                "Participar activamente en auditorías internas y externas, así como en el seguimiento de planes de mejora",
                "Validar fuentes de información para la generación de indicadores de calidad, identificando alertas y planes de acción"
            ],
            technologies: ["Scrum", "Power BI", "BPMN", "Documentación de procesos", "Auditorías", "Indicadores de calidad"]
        },
        'carvajal-rpa': {
            company: "Carvajal Servicios Compartidos",
            position: "Analista de Servicios Cognitivos y Tecnología (RPA)",
            period: "Octubre 2023 - Junio 2024",
            location: "Cali, Colombia",
            icon: "🤖",
            responsibilities: [
                "Implementación de soluciones RPA a través de la plataforma Automation Anywhere 360, orientado a la optimización de procesos",
                "Desarrollador de Soluciones Multitecnológicas para la Optimización de Procesos (Excel VBA, Power Query y Power Automate)",
                "Gestionar y manipular datos dentro de procesos automatizados, garantizando la precisión e integridad de la información",
                "Participar activamente en proyectos bajo la metodología ágil Scrum, colaborando con equipos multidisciplinarios"
            ],
            technologies: ["Automation Anywhere 360", "Excel VBA", "Power Query", "Power Automate", "RPA", "Scrum"]
        },
        'unilever': {
            company: "Unilever - Adecco",
            position: "Facilitador de Productividad",
            period: "Agosto 2022 - Julio 2023",
            location: "Palmira, Colombia",
            icon: "⚙️",
            responsibilities: [
                "Realizar estudio de métodos y tiempos en líneas de producción y cargos administrativos, identificando oportunidades de mejora",
                "Llevar a cabo el balanceo de línea logrando una distribución eficiente de las tareas y reducir los costos de producción",
                "Participar de manera activa en proyectos de mejora continua, aplicando herramientas de lean manufacturing y análisis de datos",
                "Levantamiento y actualización de documentos en el sistema de gestión de calidad"
            ],
            technologies: ["Lean Manufacturing", "Estudio de métodos y tiempos", "Balanceo de línea", "Mejora continua", "Gestión de calidad"]
        }
    };

    return (
        <section id="experiencia" className="experience">
            <div className="experience-container">
                {/* Header Section */}
                <div className="experience-header">
                    <div className="section-divider">
                        <div className="divider-line"></div>
                        <h2 className="section-title">Mi Experiencia</h2>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Trayectoria profesional enfocada en la optimización de procesos, automatización y mejora continua
                    </p>
                </div>

                <div className="experience-content">
                    {/* Company Navigation */}
                    <div className="company-navigation">
                        {Object.entries(experienceData).map(([key, experience]) => (
                            <button
                                key={key}
                                className={`company-btn ${activeCompany === key ? 'active' : ''}`}
                                onClick={() => setActiveCompany(key)}
                            >
                                <span className="company-icon">{experience.icon}</span>
                                <div className="company-info">
                                    <span className="company-name">{experience.company}</span>
                                    <span className="company-period">{experience.period}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Experience Details */}
                    <div className="experience-details">
                        <div className="experience-header-info">
                            <div className="position-title">
                                <span className="position-icon">
                                    {experienceData[activeCompany].icon}
                                </span>
                                <div>
                                    <h3 className="position-name">
                                        {experienceData[activeCompany].position}
                                    </h3>
                                    <div className="company-location">
                                        <span className="company-name-large">
                                            {experienceData[activeCompany].company}
                                        </span>
                                        <span className="location">
                                            📍 {experienceData[activeCompany].location}
                                        </span>
                                    </div>
                                    <span className="period-badge">
                                        {experienceData[activeCompany].period}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="responsibilities-section">
                            <h4 className="section-label">Responsabilidades Principales</h4>
                            <div className="responsibilities-list">
                                {experienceData[activeCompany].responsibilities.map((responsibility, index) => (
                                    <div key={index} className="responsibility-item">
                                        <span className="bullet">•</span>
                                        <span className="responsibility-text">{responsibility}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="technologies-section">
                            <h4 className="section-label">Tecnologías y Metodologías</h4>
                            <div className="technologies-list">
                                {experienceData[activeCompany].technologies.map((tech, index) => (
                                    <span key={index} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Summary */}
                <div className="experience-summary">
                    <div className="summary-card">
                        <div className="summary-icon">🚀</div>
                        <div className="summary-content">
                            <h4>Evolución Profesional</h4>
                            <p>
                                De la optimización de procesos industriales al desarrollo de soluciones tecnológicas
                                innovadoras, siempre enfocada en la mejora continua y la creación de valor.
                            </p>
                        </div>
                    </div>
                    <div className="summary-card">
                        <div className="summary-icon">💡</div>
                        <div className="summary-content">
                            <h4>Enfoque Integral</h4>
                            <p>
                                Combino conocimientos en ingeniería industrial con herramientas tecnológicas
                                modernas para desarrollar soluciones eficientes y escalables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;