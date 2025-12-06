// src/components/InputField.jsx

import React from 'react';
// import '../styles/components/InputField.css'; // Asumiendo estilos BEM

function InputField({ label, type = 'text', name, value, onChange, required = false }) {
  return (
    <div className="input-field">
      {/* Elemento BEM: input-field__label */}
      <label htmlFor={name} className="input-field__label">
        {label}
        {required && <span className="input-field__label--required">*</span>}
      </label>
      
      {/* Elemento BEM: input-field__input */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field__input form-control"
      />
    </div>
  );
}

export default InputField;