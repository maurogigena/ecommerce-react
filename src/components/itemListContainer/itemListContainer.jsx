import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'; // Importa Spinner
import { productos } from '../data/data.js'; // Asegúrate de que el path sea correcto
import ItemList from '../itemList/itemList.jsx'; // Asegúrate de que el path sea correcto

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Añade una variable de estado para manejar la carga

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000); // Simula un retraso en la carga
    });

    getProducts.then((res) => {
      setItems(res);
      setIsLoading(false); // Establece isLoading en false cuando los productos se han cargado
    });
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '5px' }}>Nuestros Productos</h2>
      <ItemList productos={items} /> {/* Aquí pasas los productos como prop a ItemList */}
    </div>
  );
}

export default ItemListContainer;
