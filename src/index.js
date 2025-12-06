// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importación obligatoria
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega esta línea para importar el CSS global de Bootstrap
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ESTE WRAPPER ES LA CLAVE PARA SOLUCIONAR EL ERROR */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);