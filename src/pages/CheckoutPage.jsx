// src/pages/CheckoutPage.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; //Importar useNavigate
import { useCart } from '../context/CartContext';
import InputField from '../components/InputField';
import FormSection from '../components/FormSection';
import '../styles/components/CheckoutPage.css';

function CheckoutPage() {
  const {
    cartItems,
    cartTotal,
    cartCount,
    removeFromCart,
    addToCart,
    deleteItem,
    clearCart       //Importar clearCart
  } = useCart();

  const navigate = useNavigate(); //Inicializar useNavigate

  // Estado del formulario (se mantiene igual)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación de Carrito: Si está vacío, detenemos la función (Aunque el botón está deshabilitado, es una buena práctica de seguridad).
    if (cartItems.length === 0) {
      console.warn("Intento de envío de formulario con carrito vacío.");
      return;
    }

    // 1. Lógica de Procesamiento (simulada)
    console.log('Datos del formulario:', formData);

    // 2. VACIAR CARRITO
    clearCart();

    // 3. REDIRECCIÓN a una página de agradecimiento
    // Creamos la ruta '/gracias' para esta redirección.
    navigate('/gracias');

    // El alert se puede eliminar si ya tienes la página de gracias
    // alert(`¡Compra de $${cartTotal} Procesada Exitosamente!`);
  };

  // Si el carrito está vacío, muestra un mensaje amigable (antes de renderizar la compleja estructura)
  if (cartItems.length === 0) {
    return (
      <div className="checkout-page container my-5 text-center">
        <h1 className="display-4 mb-4">🛒 Tu Carrito está Vacío</h1>
        <p className="lead">¡Añade algunos productos para empezar!</p>
        <Link to="/" className="btn btn-primary btn-lg mt-3">
          Explorar Productos
        </Link>
      </div>
    );
  }

  // ... (El código de return JSX se mantiene igual, ya que solo cambiamos el manejador) ...

  // Si el carrito está vacío, se muestra un mensaje temprano (se mantiene igual)
  if (cartItems.length === 0) {
    // ...
  }

  return (
    <div className="checkout-page container my-5">
      <h1 className="display-5 fw-bold mb-4">Finalizar Compra</h1>

      <div className="row">

        {/* COLUMNA 1 (Formulario) */}
        <div className="col-lg-7">
          <form className="checkout-form" id="checkout-form-id" onSubmit={handleSubmit}> {/* 💡 Asegurar el onSubmit en el form principal */}

            {/* 1. Datos de Envío */}
            <FormSection title="1. Datos de Envío">
              {/* ... InputFields ... */}
              <InputField label="Nombre Completo" name="name" value={formData.name} onChange={handleChange} required={true} />
              <InputField label="Correo Electrónico" name="email" type="email" value={formData.email} onChange={handleChange} required={true} />
              <InputField label="Dirección de Envío" name="address" value={formData.address} onChange={handleChange} required={true} />
            </FormSection>

            {/* 2. Información de Pago */}
            <FormSection title="2. Información de Pago">
              {/* ... InputFields ... */}
              <InputField label="Número de Tarjeta" name="cardNumber" type="text" value={formData.cardNumber} onChange={handleChange} required={true} />
              <InputField label="Fecha de Vencimiento (MM/AA)" name="expiryDate" type="text" value={formData.expiryDate} onChange={handleChange} required={true} />
            </FormSection>

          </form>
        </div>

        {/* COLUMNA 2 (Resumen del Carrito) */}
        <div className="col-lg-5 mt-4 mt-lg-0">
          {/* ... (Resumen del carrito, lista de productos y totales se mantienen) ... */}
          <div className="card shadow">
            <div className="card-header bg-secondary text-white">
              <h4 className="mb-0">3. Resumen y Confirmación ({cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'})</h4>
            </div>
            <div className="card-body p-0">

              {/* Lista de Productos del Carrito */}
              <div className="checkout-list p-3" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                {/* ... cartItems.map ... */}
                {cartItems.map(item => (
                  <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-3">

                    <img src={item.imageURL} alt={item.name} className="img-fluid rounded me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    <div className="flex-grow-1">
                      <h6 className="mb-0">{item.name}</h6>
                      <small className="text-muted">${item.price.toFixed(2)} x {item.quantity}</small>
                    </div>

                    <div className="d-flex flex-column align-items-end">
                      <span className="fw-bold mb-1">${(item.price * item.quantity).toFixed(2)}</span>

                      <div className="btn-group btn-group-sm" role="group">
                        <button className="btn btn-outline-danger" onClick={() => removeFromCart(item.id)}>-</button>
                        <span className="btn btn-outline-secondary disabled">{item.quantity}</span>
                        <button className="btn btn-outline-success" onClick={() => addToCart(item)}>+</button>
                        <button className="btn btn-danger" onClick={() => deleteItem(item.id)}>&times;</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totales */}
              <div className="p-3">
                <ul className="list-group list-group-flush border-top">
                  <li className="list-group-item d-flex justify-content-between p-2">
                    <span>Total Ítems ({cartCount} unidades):</span>
                    <span className="fw-bold">${(parseFloat(cartTotal)).toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between p-2">
                    <span>Envío:</span>
                    <span className="text-success fw-bold">Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between h5 mt-2 p-2">
                    <span className="fw-bold">Total Final:</span>
                    <span className="fw-bolder text-primary">${cartTotal}</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Botón de Confirmar y Pagar (Final del Formulario) */}
            <div className="card-footer bg-light p-3">
              <button
                type="submit"
                className="btn btn-primary w-100"
                form="checkout-form-id"
              >
                Confirmar y Pagar ${cartTotal}
              </button>
            </div>

            {/* Enlace para volver al catálogo */}
            <Link to="/" className="btn btn-outline-secondary mt-3">
              ← Volver al Catálogo
            </Link>
            <br></br>
          </div>

        </div>


      </div>

    </div>
  );
}

export default CheckoutPage;
