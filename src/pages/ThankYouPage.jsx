// src/pages/ThankYouPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function ThankYouPage() {
    return (
        <div className="container my-5 text-center">
            <div className="p-5 bg-white rounded shadow-lg">
                <h1 className="display-4 text-success mb-3">¡Gracias por tu Compra! 🎉</h1>
                <p className="lead mb-4">Tu pedido ha sido procesado exitosamente y será enviado pronto.</p>
                <hr className="my-4" />
                <p>Recibirás una confirmación por correo electrónico con los detalles de tu pedido.</p>
                
                <Link to="/" className="btn btn-primary btn-lg mt-3">
                    Volver a la Tienda
                </Link>
            </div>
        </div>
    );
}

export default ThankYouPage;