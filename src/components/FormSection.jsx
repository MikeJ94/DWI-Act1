// src/components/FormSection.jsx

import React from 'react';
// import '../styles/components/FormSection.css'; // Asumiendo estilos BEM

function FormSection({ title, children }) {
  return (
    // Bloque BEM: form-section
    <div className="form-section">
      {/* Elemento BEM: form-section__title */}
      <h2 className="form-section__title">{title}</h2>
      
      {/* El 'children' contendrá los InputField u otros componentes de formulario */}
      <div className="form-section__content">
        {children}
      </div>
    </div>
  );
}

export default FormSection;