// src/components/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import '../styles/components/ProductCard.css';

function ProductCard({ product }) {

    // Usamos el hook para obtener la función addToCart
    const { addToCart } = useCart();

    // 💡 FUNCIÓN CORREGIDA: Ahora el toast solo se dispara con el CLIC
    const handleAddToCart = (e) => {
        e.stopPropagation(); // Evita navegar si el card es un enlace
        addToCart(product, 1); // Añade 1 unidad por defecto

        // 🟢 MOVIMIENTO CLAVE: El toast DEBE estar dentro del manejador de eventos
        toast.info(`${product.name} añadido al carrito.`, {
            toastId: product.id,
            position: "bottom-right", // Aseguramos la posición definida en App.js
        });
    };

    // ❌ ELIMINADO: La llamada al toast que estaba aquí se ha movido a handleAddToCart

    return (
        // Uso de clases BEM y Bootstrap (card shadow-sm)
        <div className="product-card card shadow-sm">

            {/* Imagen del producto */}
            <img
                src={product.imageURL}
                alt={product.name}
                className="product-card__image card-img-top"
            />

            <div className="product-card__body card-body">

                {/* Título y Enlace a Detalles */}
                <h5 className="product-card__title card-title">{product.name}</h5>

                <p className="product-card__category card-subtitle text-muted">{product.category}</p>

                <p className="product-card__description card-text">{product.descriptionShort}</p>

                <div className="product-card__actions d-flex justify-content-between align-items-center mt-3">
                    <span className="product-card__price lead text-success">
                        ${product.price.toFixed(2)}
                    </span>

                    <div>
                        {/* Enlace de Detalles */}
                        <Link
                            to={`/products/${product.id}`}
                            className="product-card__link me-2 text-decoration-none"
                        >
                            Ver Detalles
                        </Link>

                        {/* Botón de Añadir al Carrito (usa handleAddToCart) */}
                        <button
                            onClick={handleAddToCart}
                            type="button"
                            className="product-card__button btn btn-primary btn-sm"
                        >
                            Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;