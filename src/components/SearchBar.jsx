// src/components/SearchBar.jsx

import React from 'react';

import '../styles/components/SearchBar.css'; // Importación de estilos BEM

// El componente SearchBar recibe el 'searchTerm' y el 'handleSearchChange' del custom hook.
// NOTA: La funcionalidad de 'handleSearchChange' maneja la búsqueda en tiempo real,
// por lo que el botón solo será estético o de accesibilidad.

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar mb-4 mx-auto">

      {/* Bootstrap: input-group para alinear el input y el botón */}
      <div className="input-group">
      <input
        type="text"
        className="search-bar__input form-control"
        placeholder="Buscar por nombre, categoría o fabricante..."
        value={searchTerm}
        onChange={onSearchChange} // Asigna la función del hook al evento 'onChange'
      />
      <button 
        type="button" 
        className="search-bar__button btn btn-primary"
        // Ejemplo de uso de Modificador BEM (aunque el botón no es estrictamente necesario 
        // para la búsqueda en tiempo real, lo incluimos por estructura).
        // className={`search-bar__button ${!searchTerm ? 'search-bar__button--disabled' : ''}`}
        disabled={!searchTerm} 
      >
  
      <img src="/assets/images/search.png" alt="Bootstrap" width="20" height="20"></img>

      </button>
    </div>
    </div>
  );
}

export default SearchBar;
