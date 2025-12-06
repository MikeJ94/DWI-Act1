// src/App.js

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CartModal from './components/CartModal'; // CORRECCIÓN 1: Descomentar e importar CartModal
import { CartProvider } from './context/CartContext';

// Importación de las Páginas
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import CheckoutPage from './pages/CheckoutPage';
import ReturnsPage from './pages/ReturnsPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  // Estado para controlar la visibilidad del Modal
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Función para abrir/cerrar el modal
  const toggleCartModal = () => setIsCartModalOpen(!isCartModalOpen);
  return (

    <div className="app-container d-flex flex-column min-vh-100">

      {/* 🛒 ENVOLVEMOS TODA LA APP EN EL CONTEXTO DEL CARRITO */}
      <CartProvider>

        <Header onCartClick={toggleCartModal}
          isCartModalOpen={isCartModalOpen}
        />

        {/* CLASE DE SOLUCIÓN: Agregamos app-content para aplicar el padding-top CSS */}
        <main className="app-content flex-grow-1 pt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/gracias" element={<ThankYouPage />} />
            {/* Ruta 404 de respaldo */}
            <Route path="*" element={<h1 className="container mt-5">404 | Página No Encontrada</h1>} />
          </Routes>
        </main>

        <ToastContainer position="bottom-right" autoClose={3000} />

        <Footer />

        {/* CORRECCIÓN 2 y 3: Usamos el componente CartModal con las props correctas */}
        <CartModal
          isOpen={isCartModalOpen}
          onClose={toggleCartModal}
        />

      </CartProvider>
    </div>
  );
}

export default App;
