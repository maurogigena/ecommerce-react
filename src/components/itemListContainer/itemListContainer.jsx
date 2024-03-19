import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom'; // Importa useParams
import { productos } from '../data/data.js';
import ItemList from '../itemList/itemList.jsx';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Captura el parámetro de la categoría desde la URL
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true); // Asegúrate de que el spinner se muestra al recargar los productos
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryName) {
          // Filtra los productos por categoría si categoryName existe
          resolve(productos.filter(product => product.category === categoryName));
        } else {
          // Si no hay categoryName, devuelve todos los productos
          resolve(productos);
        }
      }, 1500);
    });

    getProducts.then((res) => {
      setItems(res);
      setIsLoading(false);
    });
  }, [categoryName]); // Añade categoryName a las dependencias de useEffect para que se actualice al cambiar

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '80px', marginBottom: '20px' }}>
        {categoryName ? `Colección de ${categoryName}` : 'Nuestra Colección'}
      </h2>
      <ItemList productos={items} /> {/* Aquí pasamos los productos (filtrados o no) como prop */}
    </div>
  );
}

export default ItemListContainer;
