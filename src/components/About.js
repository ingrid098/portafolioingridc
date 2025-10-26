import React, { useState } from 'react';
import '../styles/About.css';

const About = () => {
    const [currentHobby, setCurrentHobby] = useState(0);
    const [currentValue, setCurrentValue] = useState(0);

    const hobbies = [
        {
            id: 1,
            title: "Dibujar & Pintar",
            description: "Expreso mi creatividad a través del arte",
            image: "/Image/dibujo.jpeg",
            icon: "🎨"
        },
        {
            id: 2,
            title: "Fotografía",
            description: "Capturo momentos únicos y perspectivas diferentes del mundo",
            image: "/Image/fotografia.jpeg",
            icon: "📸"
        },
        {
            id: 3,
            title: "Viajar",
            description: "Exploro nuevas culturas, sabores y paisajes inspiradores",
            image: "/Image/paisajes.jpeg",
            icon: "✈️"
        },
        {
            id: 4,
            title: "Gastronomía",
            description: "Creo experiencias culinarias y descubro nuevos sabores",
            image: "/Image/comida.jpeg",
            icon: "👩‍🍳"
        }
    ];

    const values = [
        {
            id: 1,
            title: "Innovación Constante",
            description: "Siempre busco nuevas formas de resolver problemas y mejorar procesos",
            icon: "🚀"
        },
        {
            id: 2,
            title: "Colaboración",
            description: "Creo en el poder del trabajo en equipo y el intercambio de conocimientos",
            icon: "🤝"
        },
        {
            id: 3,
            title: "Crecimiento Continuo",
            description: "Nunca dejo de aprender y me adapto a los cambios tecnológicos",
            icon: "🌱"
        },
        {
            id: 4,
            title: "Pasión",
            description: "Hago todo con entusiasmo y dedicación, tanto profesional como personalmente",
            icon: "❤️"
        }
    ];

    const nextHobby = () => {
        setCurrentHobby((prev) => (prev + 1) % hobbies.length);
    };

    const prevHobby = () => {
        setCurrentHobby((prev) => (prev - 1 + hobbies.length) % hobbies.length);
    };

    const goToHobby = (index) => {
        setCurrentHobby(index);
    };

    const nextValue = () => {
        setCurrentValue((prev) => (prev + 1) % values.length);
    };

    const prevValue = () => {
        setCurrentValue((prev) => (prev - 1 + values.length) % values.length);
    };

    const goToValue = (index) => {
        setCurrentValue(index);
    };

    return (
        <section id="sobre-mi" className="about">
            <div className="about-container">
                {/* Header Section */}
                <div className="about-header">
                    <div className="section-divider">
                        <div className="divider-line"></div>
                        <h2 className="section-title">Sobre Mí</h2>
                        <div className="divider-line"></div>
                    </div>
                    <p className="section-subtitle">
                        Conoce más sobre mi journey personal y mis pasiones beyond code
                    </p>
                </div>

                <div className="about-content">
                    {/* Main Profile Grid */}
                    <div className="profile-grid">
                        {/* Professional Story */}
                        <div className="profile-card main-card">
                            <div className="card-header">
                                <div className="card-icon">👋</div>
                                <h3>Mi Historia</h3>
                            </div>
                            <div className="card-content">
                                <p>
                                    Soy <strong>Ingrid Castaño</strong>, ingeniera industrial apasionada por la tecnología y la innovación.
                                    en la optimización de procesos industriales y evolucionó hacia el desarrollo de software y el análisis de datos.
                                </p>
                                <p>
                                    Disfruto combinar mi formación en ingeniería con las últimas tecnologías para crear
                                    soluciones que generen impacto real. Me motiva transformar ideas en realidad,
                                    enfrentar nuevos desafíos y seguir aprendiendo cada día. Creo firmemente en el poder
                                    de la tecnología para mejorar vidas y procesos.
                                </p>
                                <div className="highlight-tag">
                                    <span>💡 Aprendizaje rápido y actualización constante</span>
                                </div>
                            </div>
                        </div>

                        {/* Personal Side - Hobbies Carousel */}
                        <div className="profile-card personal-card">
                            <div className="card-header">
                                <div className="card-icon">🌟</div>
                                <h3>Mis Hobbies</h3>
                            </div>
                            <div className="card-content">
                                <p>
                                    Me encanta explorar mi lado creativo
                                    y disfrutar de experiencias:
                                </p>

                                {/* Hobbies Carousel */}
                                <div className="hobbies-carousel">
                                    <div className="carousel-container">
                                        {/* Navigation Arrows */}
                                        <button className="carousel-arrow carousel-prev" onClick={prevHobby}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                            </svg>
                                        </button>

                                        <button className="carousel-arrow carousel-next" onClick={nextHobby}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                            </svg>
                                        </button>

                                        {/* Carousel Content */}
                                        <div className="carousel-content">
                                            <div className="hobby-slide active">
                                                <div className="hobby-image">
                                                    <img
                                                        src={hobbies[currentHobby].image}
                                                        alt={hobbies[currentHobby].title}
                                                        onError={(e) => {
                                                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%238b7355'%3E" + hobbies[currentHobby].icon + "%3C/text%3E%3C/svg%3E";
                                                        }}
                                                    />
                                                    <div className="hobby-overlay">
                                                        <div className="hobby-icon">{hobbies[currentHobby].icon}</div>
                                                    </div>
                                                </div>
                                                <div className="hobby-info">
                                                    <h4>{hobbies[currentHobby].title}</h4>
                                                    <p>{hobbies[currentHobby].description}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dots Indicator */}
                                        <div className="carousel-dots">
                                            {hobbies.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={`dot ${index === currentHobby ? 'active' : ''}`}
                                                    onClick={() => goToHobby(index)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Philosophy Section - Compacta */}
                    <div className="philosophy-section">
                        <div className="philosophy-content">
                            <div className="philosophy-icon">💫</div>
                            <div className="philosophy-text">
                                <h3>Mi Filosofía</h3>
                                <p>
                                    "Somos lo que hacemos repetidamente. La excelencia, entonces, no es un acto, sino un hábito."
                                    — Aristóteles
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Personal Values - Carrusel */}
                    <div className="values-section">
                        <h3 className="values-title">Mis Valores</h3>

                        {/* Carrusel de Valores */}
                        <div className="values-carousel">
                            <div className="values-carousel-container">
                                {/* Navigation Arrows */}
                                <button className="values-arrow values-prev" onClick={prevValue}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                    </svg>
                                </button>

                                <button className="values-arrow values-next" onClick={nextValue}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                    </svg>
                                </button>

                                {/* Carousel Content */}
                                <div className="values-carousel-content">
                                    <div className="value-slide active">
                                        <div className="value-slide-content">
                                            <div className="value-icon-large">{values[currentValue].icon}</div>
                                            <div className="value-text">
                                                <h4>{values[currentValue].title}</h4>
                                                <p>{values[currentValue].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dots Indicator */}
                                <div className="values-carousel-dots">
                                    {values.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`values-dot ${index === currentValue ? 'active' : ''}`}
                                            onClick={() => goToValue(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;