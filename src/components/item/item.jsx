import React, { useState, useEffect } from 'react';
import { getOneProduct } from '../../services/firebase.js';

function Item({ id }) {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const product = await getOneProduct(id);
      setProducto(product);
      setIsLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (isLoading || !producto) {
    return (
      <div>
        Cargando producto...
      </div>
    );
  }

  return (
    <div>
      <img alt={producto.nombre} src={producto.imagen} style={{ width: "100px", height: "100px" }} />
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
    </div>
  );
}

export default Item;
