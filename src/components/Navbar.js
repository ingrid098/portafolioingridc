import React, { useEffect, useRef } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const navEl = navRef.current;
            if (!navEl) return;
            if (window.scrollY > 50) {
                navEl.classList.add('scrolled');
            } else {
                navEl.classList.remove('scrolled');
            }
        };

        // Llama al handler una vez al montar para sincronizar estado
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav ref={navRef} className="site-navbar navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#inicio">Ingrid Castaño</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#sobre-mi">Sobre mí</a></li>
                        <li className="nav-item"><a className="nav-link" href="#habilidades">Habilidades</a></li>
                        <li className="nav-item"><a className="nav-link" href="#formacion">Educación</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experiencia">Experiencia</a></li>
                        <li className="nav-item"><a className="nav-link" href="#proyectos">Proyectos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
