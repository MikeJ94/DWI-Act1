// src/pages/ReturnPage.jsx (Ejemplo de la página de devoluciones)

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Importar toast

function ReturnPage() {
    const navigate = useNavigate();

    const [returnForm, setReturnForm] = useState({
        orderId: '',
        reason: '',
        comments: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setReturnForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSendRequest = (e) => {
        e.preventDefault();

        // 1. Lógica de Envío de Solicitud (simulada)
        console.log('Solicitud de devolución enviada:', returnForm);
        
        // 2. MOSTRAR TOAST: Mensaje de éxito
        toast.success(`Solicitud de devolución para Orden #${returnForm.orderId} enviada con éxito.`, {
             position: "top-center" 
        });
        
        // 3. LIMPIAR CAMPOS
        setReturnForm({
            orderId: '',
            reason: '',
            comments: '',
        });

        // 4. REDIRECCIÓN (opcional): Redirigir al inicio después de un breve retraso
        setTimeout(() => {
            navigate('/');
        }, 3000); 
    };

    return (
        <div className="container my-5">
            <h1 className="display-6 fw-bold mb-4">Solicitud de Devolución</h1>
            <form onSubmit={handleSendRequest} className="p-4 border rounded shadow-sm">
                
                <div className="mb-3">
                    <label htmlFor="orderId" className="form-label">Número de Orden</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="orderId" 
                        name="orderId"
                        value={returnForm.orderId}
                        onChange={handleFormChange}
                        required
                    />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Motivo de la Devolución</label>
                    <select 
                        className="form-select" 
                        id="reason" 
                        name="reason"
                        value={returnForm.reason}
                        onChange={handleFormChange}
                        required
                    >
                        <option value="">Seleccione...</option>
                        <option value="Talla Incorrecta">Mala Calidad</option>
                        <option value="Producto Defectuoso">Producto Defectuoso</option>
                        <option value="Cambio de Opinión">Cambio de Opinión</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">Comentarios Adicionales</label>
                    <textarea 
                        className="form-control" 
                        id="comments" 
                        name="comments"
                        rows="3"
                        value={returnForm.comments}
                        onChange={handleFormChange}
                    ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary btn-lg mt-3">
                    Enviar Solicitud
                </button>
            </form>
        </div>
    );
}

export default ReturnPage;
