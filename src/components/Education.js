import React, { useState } from 'react';
import '../styles/Education.css';

const Education = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTab, setActiveTab] = useState('profesional');

    const educationData = {
        profesional: [
            {
                id: 1,
                title: "Ingeniería Industrial",
                institution: "Universidad de Ibagué - Convenio Unicatolica",
                period: "2015 - 2020",
                location: "Cali, Colombia",
                icon: "🏭",
                description: "Formación en optimización de procesos, gestión de operaciones y mejora continua. Enfoque en eficiencia operacional y gestión de proyectos.",
                skills: ["Gestión de Procesos", "Optimización", "Mejora Continua", "Project Management"]
            },
            {
                id: 2,
                title: "Tecnólogo en Análisis y Desarrollo de Software",
                institution: "SENA",
                period: "2023 - Actualmente",
                location: "Colombia",
                icon: "💻",
                description: "Formación en desarrollo de software, bases de datos, programación y metodologías ágiles. Especialización en creación de soluciones tecnológicas.",
                skills: ["Desarrollo Web", "Bases de Datos", "Programación", "Metodologías Ágiles"],
                current: true
            }
        ],
        complementaria: [
            {
                id: 1,
                title: "Tecnologías de la Información - Análisis de Datos Power BI",
                institution: "Comfandi",
                period: "Junio 2025 - Julio 2025",
                icon: "📊",
                description: "Especialización en herramientas de Business Intelligence y visualización de datos con Power BI.",
                skills: ["Power BI", "Business Intelligence", "Data Visualization", "Dashboards"]
            },
            {
                id: 2,
                title: "Introducción a Data Science en Python",
                institution: "Crehana",
                period: "Noviembre 2024",
                icon: "🐍",
                description: "Fundamentos de ciencia de datos aplicados con Python, incluyendo análisis exploratorio y técnicas básicas de machine learning.",
                skills: ["Python", "Data Science", "Análisis Exploratorio", "Machine Learning"]
            },
            {
                id: 3,
                title: "Diplomado en Big Data y Análisis de Datos",
                institution: "Universidad Autónoma de Occidente",
                period: "Julio 2024 - Octubre 2024",
                icon: "📈",
                description: "Programa especializado en gestión y análisis de grandes volúmenes de datos, herramientas avanzadas y técnicas de procesamiento.",
                skills: ["Big Data", "Análisis de Datos", "Procesamiento", "Herramientas Avanzadas"]
            },
            {
                id: 4,
                title: "Python Avanzado (Análisis de datos)",
                institution: "Universidad Santiago de Cali (Talento TICS)",
                period: "Diciembre 2023",
                icon: "⚡",
                description: "Curso avanzado de Python enfocado en análisis de datos, manipulación de datasets y librerías especializadas.",
                skills: ["Python Avanzado", "Pandas", "NumPy", "Análisis de Datos"]
            },
            {
                id: 5,
                title: "Estructura del lenguaje de programación C++ (Nivel I)",
                institution: "SENA",
                period: "Agosto 2023",
                icon: "🔧",
                description: "Fundamentos de programación en C++, estructuras de control y desarrollo de lógica computacional.",
                skills: ["C++", "Programación", "Lógica Computacional", "Estructuras de Datos"]
            },
            {
                id: 6,
                title: "Variables y estructuras de control en Python",
                institution: "SENA",
                period: "Junio 2023",
                icon: "🐍",
                description: "Bases de programación en Python, manejo de variables, estructuras de control y fundamentos de programación.",
                skills: ["Python Básico", "Variables", "Estructuras de Control", "Fundamentos"]
            }
        ]
    };

    return (
        <section id="formacion" className="education">
            <div className="education-container">
                {/* Header Section */}
                <div className="education-header">
                    <div className="section-divider">
                        <div className="divider-line"></div>
                        <h2 className="section-title">Mi Formación</h2>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Trayectoria académica y desarrollo profesional continuo en ingeniería y tecnología
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="education-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'profesional' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profesional')}
                    >
                        <span className="tab-icon">🎓</span>
                        Formación Profesional
                        <span className="tab-count">{educationData.profesional.length}</span>
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'complementaria' ? 'active' : ''}`}
                        onClick={() => setActiveTab('complementaria')}
                    >
                        <span className="tab-icon">📚</span>
                        Formación Complementaria
                        <span className="tab-count">{educationData.complementaria.length}</span>
                    </button>
                </div>

                {/* Education Content */}
                <div className="education-content">
                    {educationData[activeTab].map((item, index) => (
                        <div key={item.id} className="education-card">
                            <div className="education-timeline">
                                <div className="timeline-icon">
                                    {item.icon}
                                </div>
                                {index < educationData[activeTab].length - 1 && (
                                    <div className="timeline-line"></div>
                                )}
                            </div>

                            <div className="education-details">
                                <div className="education-header-info">
                                    <h3 className="education-title">{item.title}</h3>
                                    <div className="education-meta">
                                        <span className="institution">{item.institution}</span>
                                        <span className="period">{item.period}</span>
                                        {item.location && (
                                            <span className="location">📍 {item.location}</span>
                                        )}
                                        {item.current && (
                                            <span className="current-badge">En Curso</span>
                                        )}
                                    </div>
                                </div>

                                <p className="education-description">{item.description}</p>

                                <div className="education-skills">
                                    {item.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;