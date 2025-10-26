import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <p className="copyright">
                        &copy; {currentYear} Ingrid Castaño. Todos los derechos reservados.
                    </p>
                    <p className="made-with">
                        Hecho con mucho amor<span className="heart">❤️</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;