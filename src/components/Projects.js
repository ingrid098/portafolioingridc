import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('todos');

    const projectsData = {
        'web-development': [
            {
                id: 1,
                title: "IKIGAI - Plataforma Web",
                description: "Sistema web completo con autenticación de usuarios, dashboard administrativo y gestión de habitos. Desarrollado con React, Node.js y MongoDB.",
                category: "web-development",
                technologies: ["React", "Node.js", "MongoDB", "Express", "CSS"],
                images: [
                    "/Image/ikigai-1.png",
                    "/Image/ikigai-2.png",
                    "/Image/ikigai-3.png"
                ],
                demoLink: "https://ikigaidesplegue14.vercel.app/",
                githubLink: "https://github.com/ingrid098/ikigai_desplegue1",
                credentials: {
                    usuario: "prueba@gmail.com",
                    contraseña: "prueba123"
                },
                features: [
                    "Autenticación segura de usuarios",
                    "Dashboard interactivo",
                    "Gestión de contenido en tiempo real"
                ]
            },
            {
                id: 6,
                title: "Tienda Online - Bisutería Artesanal",
                description: "E-commerce desarrollado como proyecto final de grado en Tecnología de Análisis y Desarrollo de Software. Plataforma completa de ventas en línea para bisutería artesanal.",
                category: "web-development",
                technologies: ["React", "Node.js", "MongoDB", "Express", "CSS"],
                images: [
                    "/Image/bisuteria-1.png"
                ],
                demoLink: "#",
                githubLink: "#",
                status: "en-proceso",
                features: [
                    "Catálogo de productos interactivo",
                    "Sistema de carrito de compras",
                    "Pasarela de pagos integrada",
                    "Panel administrativo"
                ]
            }
        ],
        'data-analytics': [
            {
                id: 2,
                title: "Dashboard R - Índice de Pobreza",
                description: "Dashboard analítico desarrollado en R Shiny para visualización y análisis de indicadores de pobreza. Procesamiento de datos demográficos y generación de insights.",
                category: "data-analytics",
                technologies: ["R", "Shiny", "ggplot2", "dplyr", "Plotly"],
                images: [
                    "/Image/pobreza-dashboard.png"
                ],
                demoLink: "https://ingridcasta.shinyapps.io/Dashboard_Indice_Pobreza/",
                githubLink: "#",
                features: [
                    "Visualización interactiva de datos",
                    "Análisis temporal de indicadores",
                    "Filtros dinámicos",
                    "Reportes exportables"
                ]
            },
            {
                id: 3,
                title: "Dashboard R - Análisis de Gastos",
                description: "Sistema de monitorización y análisis de gastos corporativos. Dashboard interactivo con tendencias, comparativas y proyecciones financieras.",
                category: "data-analytics",
                technologies: ["R", "Shiny", "ggplot2", "dplyr", "Plotly"],
                images: [
                    "/Image/gastos-dashboard.png"
                ],
                demoLink: "https://ingridcasta.shinyapps.io/Dashboard_Gastos/",
                githubLink: "#",
                features: [
                    "Análisis de tendencias de gastos",
                    "Comparativas periódicas",
                    "Proyecciones financieras",
                    "Reportes exportables"

                ]
            },
            {
                id: 4,
                title: "Dashboard Operaciones - Contraloría",
                description: "Sistema para monitorización de operaciones del servicio de contraloria en las exportaciones, importaciones realizadas.",
                category: "data-analytics",
                technologies: ["Power BI", "SharePoint", "Data Modeling", "DAX", "Data Visualization"],
                images: [
                    "/Image/contraloria-1.jpg",
                    "/Image/contraloria-2.jpg",
                    "/Image/contraloria-3.jpg"
                ],
                demoLink: "#",
                confidential: true,
                features: [
                    "Monitorización en tiempo real",
                    "Métricas de eficiencia operacional",
                    "Alertas de cumplimiento"
                ]
            },
            {
                id: 5,
                title: "App Servicio de Mensajería",
                description: "Dashboard analítico para gestión de servicios de mensajería. Análisis de operaciones, eficiencia y métricas de servicio.",
                category: "data-analytics",
                technologies: ["Power BI", , "sharePoint", "Data Visualization", "DAX"],
                images: [
                    "/Image/mensajeria-1.png",
                    "/Image/mensajeria-2.png",
                    "/Image/mensajeria-3.png",
                    "/Image/mensajeria-4.png"
                ],
                demoLink: "#",
                confidential: true,
                features: [

                    "Métricas de servicio y calidad",
                    "Optimización de recursos",
                    "Nivel de Satidisfacción del Cliente",
                ]
            }
        ]
    };

    const allProjects = [
        ...projectsData['web-development'],
        ...projectsData['data-analytics']
    ];

    const filteredProjects = activeFilter === 'todos'
        ? allProjects
        : projectsData[activeFilter] || [];

    const categories = [
        { id: 'todos', name: 'Todos los Proyectos', icon: '📁', count: allProjects.length },
        { id: 'web-development', name: 'Desarrollo Web', icon: '🌐', count: projectsData['web-development'].length },
        { id: 'data-analytics', name: 'Análisis de Datos', icon: '📊', count: projectsData['data-analytics'].length }
    ];

    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) =>
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <section id="proyectos" className="projects">
            <div className="projects-container">
                {/* Header Section */}
                <div className="projects-header">
                    <div className="section-divider">
                        <div className="divider-line"></div>
                        <h2 className="section-title">Mis Proyectos</h2>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Portafolio de soluciones tecnológicas desarrolladas con enfoque en innovación y resultados
                    </p>
                </div>

                {/* Category Filters */}
                <div className="projects-filters">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category.id)}
                        >
                            <span className="filter-icon">{category.icon}</span>
                            <span className="filter-text">{category.name}</span>
                            <span className="project-count">{category.count}</span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-container">
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="project-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                <div className="project-image-fallback">
                                    <span className="fallback-icon">📁</span>
                                    <span>Imagen no disponible</span>
                                </div>

                                {/* Status Badge for In-Progress Projects */}
                                {project.status === 'en-proceso' && (
                                    <div className="status-badge in-progress">
                                        🚧 En Proceso
                                    </div>
                                )}

                                {/* Confidential Watermark for all confidential project images */}
                                {project.confidential && (
                                    <div className="confidential-watermark">
                                        CONFIDENCIAL- NO COMPARTIR
                                    </div>
                                )}

                                <div className="project-overlay">
                                    <button
                                        className="view-details-btn"
                                        onClick={() => openModal(project)}
                                    >
                                        Ver Detalles
                                    </button>
                                </div>

                                {/* Category Badge */}
                                <div className="project-category">
                                    {categories.find(cat => cat.id === project.category)?.icon}
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                {/* Project Status */}
                                {project.status === 'en-proceso' && (
                                    <div className="project-status">
                                        <span className="status-indicator">●</span>
                                        Proyecto Final de Grado - En Desarrollo
                                    </div>
                                )}

                                <div className="project-technologies">
                                    {project.technologies.slice(0, 4).map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="tech-tag-more">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                <div className="project-features">
                                    {project.features.slice(0, 2).map((feature, index) => (
                                        <span key={index} className="feature-badge">
                                            ✓ {feature}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.demoLink && project.demoLink !== '#' && (
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="demo-link"
                                        >
                                            🌐 Demo Live
                                        </a>
                                    )}
                                    {project.githubLink && project.githubLink !== '#' && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="github-link"
                                        >
                                            💻 Código
                                        </a>
                                    )}
                                    <button
                                        className="details-link"
                                        onClick={() => openModal(project)}
                                    >
                                        📖 Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>×</button>

                            <div className="modal-body">
                                {/* Image Gallery */}
                                <div className="modal-gallery">
                                    <div className="gallery-container">
                                        <img
                                            src={selectedProject.images[currentImageIndex]}
                                            alt={selectedProject.title}
                                            className="gallery-image"
                                        />
                                        {/* Confidential Watermark in Modal */}
                                        {selectedProject.confidential && (
                                            <div className="confidential-watermark-modal">
                                                CONFIDENCIAL - NO COMPARTIR
                                            </div>
                                        )}

                                        {selectedProject.images.length > 1 && (
                                            <>
                                                <button className="gallery-nav gallery-prev" onClick={prevImage}>
                                                    ‹
                                                </button>
                                                <button className="gallery-nav gallery-next" onClick={nextImage}>
                                                    ›
                                                </button>
                                                <div className="gallery-indicator">
                                                    {currentImageIndex + 1} / {selectedProject.images.length}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {selectedProject.images.length > 1 && (
                                        <div className="gallery-thumbnails">
                                            {selectedProject.images.map((image, index) => (
                                                <div key={index} className="thumbnail-container">
                                                    <img
                                                        src={image}
                                                        alt={`Thumbnail ${index + 1}`}
                                                        className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                                        onClick={() => setCurrentImageIndex(index)}
                                                    />
                                                    {selectedProject.confidential && (
                                                        <div className="thumbnail-watermark">
                                                            CONFIDENCIAL
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Project Details */}
                                <div className="modal-details">
                                    <h2 className="modal-title">{selectedProject.title}</h2>
                                    <p className="modal-description">{selectedProject.description}</p>

                                    {/* Project Status in Modal */}
                                    {selectedProject.status === 'en-proceso' && (
                                        <div className="project-status-modal">
                                            <div className="status-header">
                                                <span className="status-icon">🚧</span>
                                                <h4>Proyecto en Desarrollo</h4>
                                            </div>
                                            <p>Este proyecto está siendo desarrollado como trabajo final de grado para la Tecnología en Análisis y Desarrollo de Software.</p>
                                        </div>
                                    )}

                                    {/* Credentials for Demo */}
                                    {selectedProject.credentials && (
                                        <div className="credentials-section">
                                            <h4>Credenciales de Prueba:</h4>
                                            <div className="credentials">
                                                <div className="credential-item">
                                                    <strong>Usuario:</strong> {selectedProject.credentials.usuario}
                                                </div>
                                                <div className="credential-item">
                                                    <strong>Contraseña:</strong> {selectedProject.credentials.contraseña}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Confidential Notice */}
                                    {selectedProject.confidential && (
                                        <div className="confidential-notice">
                                            <div className="confidential-header">
                                                <span className="confidential-icon">🔒</span>
                                                <h4>Proyecto Confidencial</h4>
                                            </div>
                                            <p>Este proyecto contiene información corporativa sensible. Las imágenes están protegidas con marca de agua por razones de confidencialidad.</p>
                                        </div>
                                    )}

                                    <div className="modal-features">
                                        <h4>Características Principales:</h4>
                                        <ul className="features-list">
                                            {selectedProject.features.map((feature, index) => (
                                                <li key={index}>✓ {feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="modal-technologies">
                                        <h4>Tecnologías Utilizadas:</h4>
                                        <div className="technologies-grid">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span key={index} className="technology-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="modal-links">
                                        {selectedProject.demoLink && selectedProject.demoLink !== '#' && (
                                            <a
                                                href={selectedProject.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="modal-demo-link"
                                            >
                                                🌐 Ver Demo Live
                                            </a>
                                        )}
                                        {selectedProject.githubLink && selectedProject.githubLink !== '#' && (
                                            <a
                                                href={selectedProject.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="modal-github-link"
                                            >
                                                💻 Ver Código
                                            </a>
                                        )}
                                        {selectedProject.status === 'en-proceso' && (
                                            <span className="coming-soon-badge">
                                                🚀 Próximamente Disponible
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;