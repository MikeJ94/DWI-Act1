// src/components/CartModal.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom'; // Para la navegación al Checkout

function CartModal({ isOpen, onClose }) {
    const { cartItems, cartTotal, addToCart, removeFromCart, deleteItem } = useCart();
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleCheckout = () => {
        onClose(); // Cierra el modal
        navigate('/checkout'); // Navega a la página de Checkout
    };

    return (
        // Estructura básica de Modal de Bootstrap (simulado con div y fixed)
        <div className="modal d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">

                    {/* Header del Modal */}
                    <div className="modal-header">
                        <h5 className="modal-title">🛍️ Tu Carrito de Compras</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Cerrar"></button>
                    </div>

                    {/* Cuerpo del Modal - Lista de Productos */}
                    <div className="modal-body">
                        {cartItems.length === 0 ? (
                            <p className="text-center text-muted">El carrito está vacío.</p>
                        ) : (
                            <ul className="list-group">
                                {cartItems.map(item => (
                                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">

                                        {/* Nombre y Precio Unitario */}
                                        <div>
                                            <strong>{item.name}</strong>
                                            <small className="text-muted d-block">${item.price.toFixed(2)} c/u</small>
                                        </div>

                                        {/* Controles de Cantidad y Subtotal */}
                                        <div className="d-flex align-items-center">

                                            {/* Botón Restar */}
                                            <button
                                                className="btn btn-sm btn-outline-secondary me-2"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                -
                                            </button>

                                            {/* Cantidad */}
                                            <span className="me-2">{item.quantity}</span>

                                            {/* Botón Sumar */}
                                            <button
                                                className="btn btn-sm btn-outline-secondary me-3"
                                                onClick={() => addToCart(item)} // Suma 1 a la cantidad
                                            >
                                                +
                                            </button>

                                            {/* Subtotal del Item */}
                                            <strong className="me-3">${(item.price * item.quantity).toFixed(2)}</strong>

                                            {/* Botón Eliminar por Completo */}
                                            <button
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => deleteItem(item.id)}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer del Modal - Total y Botón de Checkout */}
                    <div className="modal-footer justify-content-between">
                        <h5>Total: <span className="text-primary">${cartTotal}</span></h5>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={handleCheckout}
                            disabled={cartItems.length === 0}
                        >
                            Finalizar Compra ({cartItems.length} {cartItems.length === 1 ? 'ítem' : 'ítems'})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartModal;