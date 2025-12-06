// src/pages/ProductDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom'; // Hook para leer parámetros de la URL
import mockProducts from '../data/mockProducts'; // Importamos los datos
import ProductDetailCard from '../components/ProductDetailCard'; // Componente de la vista de detalle

function ProductDetail() {
  // 1. Obtener el ID de la URL
  // El parámetro debe llamarse 'id' porque así lo definimos en App.js: path="/products/:id"
  const { id } = useParams(); 
  
  // 2. Lógica de búsqueda: Encontrar el producto correspondiente al ID
  const product = mockProducts.find(p => p.id === Number(id)); 
  // NOTA TÉCNICA CLAVE: Usamos Number(id) porque useParams() retorna un string, 
  // pero nuestros IDs en mockProducts son números.

  // 3. Manejo de error/producto no encontrado (Criterio de robustez)
  if (!product) {
    return (
      <div className="detail-page detail-page--error">
        <h1>404</h1>
        <p>El producto con ID: {id} no fue encontrado en nuestro catálogo.</p>
      </div>
    );
  }
  
  // 4. Renderizar la vista de detalle
  return (
    <div className="detail-page">
      {/* Aquí podemos usar un componente reutilizable para la presentación 
        del producto con la descripción larga. 
      */}
      <ProductDetailCard product={product} /> 
    </div>
  );
}

export default ProductDetail;