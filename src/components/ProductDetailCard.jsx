// src/components/ProductDetail.jsx

import React, { useState } from 'react'; // Eliminamos useEffect, ya que no se usa
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify'; // 💡 Importar toast
// Importación por defecto (asumiendo que mockProducts.js usa 'export default')
import mockProducts from '../data/mockProducts';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // 💡 Estado local para la cantidad seleccionada
  const [quantity, setQuantity] = useState(1);

  // 🔍 Buscar el producto usando la lista importada
  const product = mockProducts.find(p => p.id === parseInt(id));

  // --- Manejadores de Cantidad ---
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    // No permitir cantidad menor a 1
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleInputChange = (e) => {
    // Asegura que el valor sea un número y que sea al menos 1
    const value = parseInt(e.target.value);
    setQuantity(Math.max(1, value || 1));
  };
  // ------------------------------

  if (!product) {
    return <h1 className="container mt-5">Producto no encontrado.</h1>;
  }

  const handleAddToCart = () => {
    // 🛒 Añadir la cantidad seleccionada al Contexto del Carrito
    addToCart(product, quantity);

    // 💡 MOSTRAR TOAST: Mensaje de éxito
    toast.success(`${quantity} unidad(es) de ${product.name} agregada(s).`, {
      toastId: product.id, // Previene duplicados si se hace clic muy rápido
    });

    setQuantity(1); // Resetear cantidad a 1 después de añadir

    // Opcional: Console log para confirmar la adición (o abrir el modal)
    console.log(`Se agregaron ${quantity} unidades de ${product.name} al carrito.`);
  };

  return (
    <div className="container my-5">
      <div className="row">

        {/* Columna 1: Imagen y Estilos de Visualización */}
        <div className="col-md-6 d-flex align-items-start justify-content-center">
          <img
            src={product.imageURL}
            alt={product.name}
            className="img-fluid rounded shadow-lg mb-4 mb-md-0"
            style={{ maxWidth: '450px', maxHeight: '450px', objectFit: 'contain' }}
          />
        </div>

        {/* Columna 2: Detalles y Compra */}
        <div className="col-md-6">

          <h1 className="display-5 fw-bold">{product.name}</h1>
          <p className="text-muted fw-bold">{product.category}</p>

          <p className="fs-3 text-primary my-3">${product.price.toFixed(2)}</p>

          <hr className="my-4" />

          <h2 className="fs-5 fw-semibold">Descripción</h2>
          <p className="text-secondary">{product.descriptionFull}</p>

          <hr className="my-4" />

          {/* 💡 BLOQUE DE ACCIÓN DE COMPRA - CORREGIDO */}
          {/* Usamos un div para el contenedor de cantidad y otro para el botón */}
          <div className="p-3 border rounded bg-light">

            {/* 1. SECCIÓN DE CANTIDAD */}
            <div className="d-flex align-items-center mb-3">
              <label htmlFor="quantity" className="form-label me-3 mb-0 fw-semibold" style={{ minWidth: '80px' }}>
                Cantidad:
              </label>

              {/* Aumentamos el ancho del input group */}
              <div className="input-group me-3" style={{ width: '150px' }}>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity === 1}
                >
                  -
                </button>

                <input
                  type="number"
                  id="quantity"
                  className="form-control text-center"
                  min="1"
                  value={quantity}
                  onChange={handleInputChange}
                />

                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            </div>

            {/* 2. BOTÓN AÑADIR (Línea separada para darle ancho completo) */}
            <button
              className="btn btn-success btn-lg w-100" // 💡 w-100: Ocupa el 100% del ancho
              onClick={handleAddToCart}
            >
              Añadir al Carrito
            </button>
          </div>

          {/* Enlace para volver al catálogo */}
          <Link to="/" className="btn btn-outline-secondary mt-3">
            ← Volver al Catálogo
          </Link>

        </div>
      </div>
    </div>
  );
}
export default ProductDetail;