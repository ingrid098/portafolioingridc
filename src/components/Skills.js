import React, { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('analisis-datos');

    const skillsData = {
        'analisis-datos': {
            title: "Análisis de Datos",
            icon: "📊",
            skills: [
                {
                    name: "Python",
                    tools: "Jupyter Notebook, Google Colab, VS Code",
                    logo: "/Image/python.png",
                    icon: "🐍"
                },
                {
                    name: "R",
                    tools: "RStudio",
                    logo: "/Image/R.png",
                    icon: "📈"
                },
                {
                    name: "SQL",
                    tools: "MySQL, MongoDB",
                    logo: "/Image/SQL.png",
                    icon: "🗄️"
                },
                {
                    name: "Power Query",
                    tools: "ETL y transformación de datos",
                    logo: "/Image/Power Query.png",
                    icon: "🔍"
                },
                {
                    name: "Power BI",
                    tools: "Dashboards y visualizaciones",
                    logo: "/Image/PowerBI.png",
                    icon: "📉"
                },
                {
                    name: "Excel",
                    tools: "Avanzado, fórmulas, tablas dinámicas, VBA",
                    logo: "/Image/Excel.png",
                    icon: "📑"
                }
            ]
        },
        'automatizacion': {
            title: "Automatización",
            icon: "⚡",
            skills: [
                {
                    name: "Automation Anywhere 360",
                    tools: "RPA y automatización de procesos",
                    logo: "/Image/AutoAny.png",
                    icon: "🤖"
                },
                {
                    name: "Power Apps",
                    tools: "Aplicaciones low-code",
                    logo: "/Image/Power Apps.png",
                    icon: "📱"
                },
                {
                    name: "Power Automate",
                    tools: "Flujos de trabajo automatizados",
                    logo: "/Image/power Automate.png",
                    icon: "🔄"
                }
            ]
        },
        'desarrollo-software': {
            title: "Desarrollo de Software",
            icon: "💻",
            skills: [
                {
                    name: "React",
                    tools: "Frontend development",
                    logo: "/Image/React.png",
                    icon: "⚛️"
                },
                {
                    name: "HTML",
                    tools: "Estructura web",
                    logo: "/Image/HTML.png",
                    icon: "🌐"
                },
                {
                    name: "JavaScript",
                    tools: "Programación frontend y backend",
                    logo: "/Image/javascript.png",
                    icon: "🟨"
                },
                {
                    name: "Node.js",
                    tools: "Runtime de JavaScript",
                    logo: "/Image/Node.js.png",
                    icon: "🟢"
                },
                {
                    name: "Express",
                    tools: "Framework backend",
                    logo: "/Image/express.png",
                    icon: "🚂"
                }
            ]
        },
        'modelado-procesos': {
            title: "Modelado de Procesos y Prototipado",
            icon: "📐",
            skills: [
                {
                    name: "Bizagi",
                    tools: "Diagramación BPMN",
                    logo: "/Image/bizagi-modeler.png",
                    icon: "📋"
                },
                {
                    name: "Draw.io",
                    tools: "Diagramas técnicos y arquitecturas",
                    logo: "/Image/DRAW.png",
                    icon: "🎨"
                },
                {
                    name: "Daruma",
                    tools: "Gestión documental y procesos",
                    logo: "/Image/daruma.png",
                    icon: "🗂️"
                },
                {
                    name: "Figma",
                    tools: "Prototipado UX/UI",
                    logo: "/Image/figma.png",
                    icon: "🎯"
                }
            ]
        },
        'mejoramiento': {
            title: "Herramientas de Mejoramiento",
            icon: "🛠️",
            skills: [
                {
                    name: "5'S",
                    tools: "Metodología de orden y limpieza",
                    icon: "⭐"
                },
                {
                    name: "Kaizen",
                    tools: "Mejora continua",
                    icon: "📈"
                },
                {
                    name: "Poka-Yoke",
                    tools: "A prueba de errores",
                    icon: "✅"
                },
                {
                    name: "Six Sigma",
                    tools: "Control de calidad",
                    icon: "σ"
                },
                {
                    name: "Análisis FODA",
                    tools: "Análisis estratégico",
                    icon: "🎯"
                },
                {
                    name: "Diagrama de Ishikawa",
                    tools: "Análisis causa-efecto",
                    icon: "🐟"
                },
                {
                    name: "Ciclo PHVA",
                    tools: "Planificar-Hacer-Verificar-Actuar",
                    icon: "🔄"
                },
                {
                    name: "Análisis de Pareto",
                    tools: "Principio 80/20",
                    icon: "📊"
                }
            ]
        },
        'pruebas': {
            title: "Pruebas Funcionales",
            icon: "🧪",
            skills: [
                {
                    name: "Postman",
                    tools: "Testing de APIs",
                    logo: "/Image/postman.png",
                    icon: "📬"
                },
                {
                    name: "Cypress",
                    tools: "Testing end-to-end",
                    logo: "/Image/Cypress.png",
                    icon: "⚡"
                }
            ]
        },
        'habilidades-blandas': {
            title: "Habilidades Blandas",
            icon: "🌟",
            skills: [
                {
                    name: "Resolución de Problemas",
                    tools: "Análisis y solución de desafíos complejos",
                    icon: "💡"
                },
                {
                    name: "Trabajo en Equipo",
                    tools: "Colaboración efectiva en grupos multidisciplinarios",
                    icon: "🤝"
                },
                {
                    name: "Comunicación Efectiva",
                    tools: "Comunicación clara y asertiva",
                    icon: "💬"
                },
                {
                    name: "Adaptabilidad",
                    tools: "Flexibilidad ante cambios y nuevos entornos",
                    icon: "🔄"
                },
                {
                    name: "Gestión del Tiempo",
                    tools: "Organización y priorización de tareas",
                    icon: "⏰"
                },
                {
                    name: "Liderazgo",
                    tools: "Dirección y motivación de equipos",
                    icon: "👑"
                },
                {
                    name: "Pensamiento Crítico",
                    tools: "Análisis objetivo y toma de decisiones",
                    icon: "🎯"
                },
                {
                    name: "Creatividad",
                    tools: "Innovación y pensamiento fuera de lo convencional",
                    icon: "✨"
                }
            ]
        },

    };

    // Función segura para manejar errores de imágenes
    const handleImageError = (e, skill) => {
        e.target.style.display = 'none';
        // Mostrar el fallback de ícono
        const fallbackElement = e.target.parentElement.querySelector('.skill-icon-fallback');
        if (fallbackElement) {
            fallbackElement.style.display = 'flex';
        }
    };

    return (
        <section id="habilidades" className="skills">
            <div className="skills-container">
                {/* Header Section */}
                <div className="skills-header">
                    <div className="section-divider">
                        <div className="divider-line"></div>
                        <h2 className="section-title">Mis Habilidades</h2>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Conjunto de tecnologías, herramientas y metodologías que aplico en cada proyecto
                    </p>
                </div>

                <div className="skills-content">
                    {/* Category Navigation */}
                    <div className="skills-categories">
                        {Object.entries(skillsData).map(([key, category]) => (
                            <button
                                key={key}
                                className={`category-btn ${activeCategory === key ? 'active' : ''}`}
                                onClick={() => setActiveCategory(key)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-text">{category.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Skills Grid */}
                    <div className="skills-grid-container">
                        <div className="skills-category-header">
                            <div className="category-title-icon">
                                <span className="header-icon">{skillsData[activeCategory].icon}</span>
                                <h3>{skillsData[activeCategory].title}</h3>
                            </div>
                        </div>

                        <div className="skills-grid">
                            {skillsData[activeCategory].skills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-header">
                                        <div className="skill-logo-container">
                                            {skill.logo ? (
                                                <>
                                                    <img
                                                        src={skill.logo}
                                                        alt={skill.name}
                                                        className="skill-logo"
                                                        onError={(e) => handleImageError(e, skill)}
                                                    />
                                                    <div
                                                        className="skill-icon-fallback"
                                                        style={{ display: 'none' }}
                                                    >
                                                        {skill.icon}
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="skill-icon-fallback">
                                                    {skill.icon}
                                                </div>
                                            )}
                                        </div>
                                        <div className="skill-info">
                                            <h4 className="skill-name">{skill.name}</h4>
                                            <p className="skill-tools">{skill.tools}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Summary */}
                    <div className="skills-summary">
                        <div className="summary-card">
                            <div className="summary-icon">🚀</div>
                            <div className="summary-content">
                                <h4>Enfoque Integral</h4>
                                <p>
                                    Combino habilidades técnicas con metodologías de mejora continua
                                    para entregar soluciones completas y eficientes.
                                </p>
                            </div>
                        </div>
                        <div className="summary-card">
                            <div className="summary-icon">🌟</div>
                            <div className="summary-content">
                                <h4>Desarrollo Profesional</h4>
                                <p>
                                    Desarrollo constante de habilidades técnicas y blandas para
                                    enfrentar nuevos desafíos y crecer profesionalmente.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;