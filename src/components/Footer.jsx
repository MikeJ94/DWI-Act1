// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css'; 

function Footer() {
  return (
    // Bloque BEM: footer 
    // Clases Bootstrap: bg-dark, text-white, pt-5, pb-4, mt-auto (Sticky Footer)
    <footer className="footer bg-dark text-white pt-5 pb-4 mt-auto">
      <div className="container">
        
        <div className="row footer__row">
          
          {/* Elemento BEM: footer__section--info */}
          <div className="col-lg-4 col-md-6 mb-4 footer__section footer__section--info">
            <h5 className="footer__title text-uppercase fw-bold mb-3">
                <i className="bi bi-shop me-2"></i> Mi Tienda Online
            </h5>
            <p className="footer__text text-secondary">
              Ofreciendo los mejores productos tecnológicos con la más alta calidad y servicio al cliente.
            </p>
            <p className="footer__contact-item">
              <i className="bi bi-envelope me-2"></i> contacto@mitienda.com
            </p>
            <p className="footer__contact-item">
              <i className="bi bi-phone me-2"></i> +504 9441-2731
            </p>
          </div>
          
          {/* Elemento BEM: footer__section--links */}
          <div className="col-lg-4 col-md-6 mb-4 footer__section footer__section--links">
            <h5 className="footer__title text-uppercase fw-bold mb-3">Enlaces Rápidos</h5>
            {/* Elemento BEM: footer__list */}
            <ul className="footer__list list-unstyled">
              <li className="footer__list-item mb-2">
                <Link to="/" className="footer__link text-secondary text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li className="footer__list-item mb-2">
                <Link to="/checkout" className="footer__link text-secondary text-decoration-none">
                  Finalizar Compra
                </Link>
              </li>
              <li className="footer__list-item mb-2">
                <Link to="/returns" className="footer__link text-secondary text-decoration-none">
                  Política de Devolución
                </Link>
              </li>
              <li className="footer__list-item mb-2">
                <a href="#contacto" className="footer__link text-secondary text-decoration-none">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>
          
          {/* Elemento BEM: footer__section--social */}
          <div className="col-lg-4 col-md-12 mb-4 footer__section footer__section--social">
            <h5 className="footer__title text-uppercase fw-bold mb-3">Síguenos</h5>
            {/* Elemento BEM: footer__social-group */}
            <div className="footer__social-group d-flex mb-3">
              <a href="#facebook" className="footer__social-icon text-white me-4 fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#twitter" className="footer__social-icon text-white me-4 fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#instagram" className="footer__social-icon text-white me-4 fs-4"><i className="bi bi-instagram"></i></a>
            </div>
            
            <h5 className="footer__title text-uppercase fw-bold mb-3 mt-4">Legal</h5>
            <p>
                <a href="#privacidad" className="footer__link text-secondary text-decoration-none">
                    Política de Privacidad
                </a>
            </p>
            <p>
                <a href="#terminos" className="footer__link text-secondary text-decoration-none">
                    Términos y Condiciones
                </a>
            </p>
          </div>
        </div>

        {/* Separador */}
        <hr className="my-3 border-secondary"/>

        {/* Fila del Copyright (Elemento BEM: footer__copyright) */}
        <div className="row footer__row--copyright">
          <div className="col-12 text-center">
            <p className="footer__copyright mb-0 text-secondary">
              &copy; {new Date().getFullYear()} Mi Tienda Online. Todos los derechos reservados.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;