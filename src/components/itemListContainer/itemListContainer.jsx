import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { productos } from '../../data/data.js';
import ItemList from '../itemList/itemList.jsx';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { idcategory } = useParams();

  useEffect(() => {
    setIsLoading(true); // Asegúrate de que el spinner se muestra al recargar los productos
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        let filteredItems;
        if (idcategory) {
          // Filtra todos los productos que coincidan con la category
          filteredItems = productos.filter(product => product.category === idcategory);
        } else {
          // Si no hay category, devuelve todos los productos
          filteredItems = productos;
        }
        resolve(filteredItems);
      }, 1300);
    });

    getProducts.then((res) => {
      setItems(res);
      setIsLoading(false);
    });
  }, [idcategory]); 

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '95px', marginBottom: '20px' }}>
        {idcategory ? `${idcategory}` : 'Nuestra Colección'}
      </h2>
      <ItemList productos={items} />
    </div>
  );
}

export default ItemListContainer;
