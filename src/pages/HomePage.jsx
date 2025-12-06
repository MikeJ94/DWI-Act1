// src/pages/HomePage.jsx

import React from 'react';
import useProducts from '../hooks/useProducts'; // 1. Importar el Custom Hook
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext'; // 💡 Importar el Custom Hook del Carrito

function HomePage() {
  // 2. Usar el hook para obtener los datos y la lógica de búsqueda
  const { products, searchTerm, handleSearchChange } = useProducts();

  // 💡 OBTENER LA FUNCIÓN DEL CONTEXTO: Necesaria para pasarla a ProductCard
  const { addToCart } = useCart();

  return (
    // Agregamos container y mt-4 (margin-top) de Bootstrap para espaciado y centrado
    <div className="home-page container mt-4">
      <h1 className="mt-0">Catálogo de Productos</h1>

      {/* 3. Renderizar el buscador y pasarle la lógica */}
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
      />

      <br></br>
      <div className="row">
        {products.length > 0 ? (
          // 4. Mapear sobre el array filtrado y renderizar las tarjetas
          products.map(product => (

            <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
              {/* 💡 CORRECCIÓN: Pasar la función addToCart como prop */}
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))
        ) : (
          // Mensaje si no hay resultados
          <p>No se encontraron productos para "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;