// src/components/Header.jsx

import React from 'react';
// CAMBIO CLAVE: Usamos NavLink en lugar de Link para el estado activo
import { NavLink } from 'react-router-dom'; 
// 1. Importamos el Custom Hook
import { useCart } from '../context/CartContext';
import '../styles/components/Header.css';

function Header() {
  // 2. Usamos el hook para obtener el contador (totalQuantity)
  const { cartCount } = useCart();
  
  // Función que NavLink usa para determinar la clase
  const getNavLinkClass = ({ isActive }) => 
    `header__link ${isActive ? 'header__link--active' : ''}`;

  return (
    // Bloque BEM: header
    // La fijación se define en el CSS
    <header className="header fixed-top"> 
      <div className="header__logo">
        {/* 2. MODIFICACIÓN DEL LOGO */}
        <NavLink to="/" className="header__logo-link">
           Mi Tienda Online (Front)
        </NavLink>
      </div>
      
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            {/* 3. ESTADO ACTIVE: 'end' asegura que solo sea activo en la ruta exacta '/' */}
            <NavLink to="/" className={getNavLinkClass} end>Catálogo</NavLink>
          </li>
         {/* <li className="header__item">
            <NavLink to="/checkout" className={getNavLinkClass}>Proceso de Compra</NavLink>
          </li>*/}
          <li className="header__item">
            <NavLink to="/returns" className={getNavLinkClass}>Devoluciones</NavLink>
          </li>
          {/*MODIFICACIÓN CLAVE: Enlace y Contador del Carrito */}
          <li className="header__item">
            <NavLink to="/checkout" className="header__link header__link--cart">
                🛒
                {/* Muestra el contador si hay ítems */}
                {cartCount > 0 && (
                    <span className="header__cart-badge badge text-bg-warning ms-1">
                        {cartCount}
                    </span>
                )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
