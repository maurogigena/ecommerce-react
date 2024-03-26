import { useState, useEffect } from 'react';
import { productos } from '../data/data.js'; // Asegúrate de que la ruta sea correcta

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular una carga de productos, reemplazar con lógica de fetch si es necesario
    setProducts(productos);
  }, []);

  return products;
};
