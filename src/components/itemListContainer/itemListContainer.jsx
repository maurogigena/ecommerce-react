// Importaciones necesarias de React y otros archivos/componentes
import React, { useState, useEffect } from 'react';
import { productos } from '../data/data.js'; // Asegúrate de que el path sea correcto
import ItemList from '../itemList/itemList.jsx'; // Asegúrate de que el path sea correcto

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });

    getProducts.then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <div>
      <h2>Nuestros Productos</h2>
      <ItemList productos={items} /> {/* Aquí pasas los productos como prop a ItemList */}
    </div>
  );
}

export default ItemListContainer;