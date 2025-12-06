// src/context/CartContext.js

import React, { createContext, useState, useContext } from 'react';

// 1. Creación del Contexto
const CartContext = createContext();

// 2. Provider: Componente que envuelve la aplicación y provee el estado
export const CartProvider = ({ children }) => {
  // 1. Estado del Carrito: Un array de objetos { id, name, price, quantity }
  const [cartItems, setCartItems] = useState([]);

  // 2. Función para Añadir/Actualizar (Se mantiene igual, recibe producto y cantidad)
  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Si ya existe, actualiza la cantidad
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // Si no existe, añádelo
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // 3. Función para Remover/Disminuir (Usada por el Modal para el botón '-')
  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === productId);

      // Previene errores si el ítem no existe
      if (!itemToRemove) return prevItems;

      if (itemToRemove.quantity > 1) {
        // Si hay más de uno, solo disminuye la cantidad
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        // Si es 1, elimina el producto del array
        return prevItems.filter(item => item.id !== productId);
      }
    });
  };

  // 💡 NUEVA FUNCIÓN: Eliminar un producto del carrito completamente (Usada por el botón 'X' del Modal)
  const deleteItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // 4. Valor Calculado: Total del Carrito (Subtotal)
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 0
  ).toFixed(2);

  // 💡 NUEVO CÁLCULO: Conteo total de unidades para el Header
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity, 0
  );

  // 💡 NUEVA FUNCIÓN: Vacía completamente el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // El objeto value que se expone a toda la aplicación
  const contextValue = {
    cartItems, // Lista de productos
    addToCart, // Función para añadir
    removeFromCart, // Función para disminuir
    deleteItem, // FUNCIÓN AGREGADA
    clearCart,  // Exportar la nueva función
    cartTotal, // Subtotal del carrito
    cartCount: totalQuantity, // CAMBIO: Usamos totalQuantity (unidades)
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom Hook para consumir el contexto fácilmente
export const useCart = () => {
  return useContext(CartContext);
};
