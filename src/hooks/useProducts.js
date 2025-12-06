// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import mockProducts from '../data/mockProducts'; // Importa los datos de prueba

const useProducts = () => {
    // Estado para gestionar todos los productos
    const [allProducts] = useState(mockProducts);
    
    // Estado para gestionar la lista de productos que se muestran (la lista filtrada)
    const [filteredProducts, setFilteredProducts] = useState(mockProducts);
    
    // Estado para almacenar el término de búsqueda
    const [searchTerm, setSearchTerm] = useState('');

    // Lógica principal de filtrado que se ejecuta en cada cambio de searchTerm
    useEffect(() => {
        const term = searchTerm.toLowerCase().trim();
        
        if (term === '') {
            // Si el término está vacío, mostramos todos los productos.
            setFilteredProducts(allProducts);
            return;
        }

        const results = allProducts.filter(product => {
            // Filtra por nombre, compañía O categoría (buscador flexible)
            const matchesName = product.name.toLowerCase().includes(term);
            const matchesCompany = product.company.toLowerCase().includes(term);
            const matchesCategory = product.category.toLowerCase().includes(term);

            return matchesName || matchesCompany || matchesCategory;
        });

        setFilteredProducts(results);

    }, [searchTerm, allProducts]); // Dependencia clave: se ejecuta cuando cambia searchTerm

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return { 
        products: filteredProducts, 
        searchTerm, 
        handleSearchChange 
    };
};

export default useProducts;