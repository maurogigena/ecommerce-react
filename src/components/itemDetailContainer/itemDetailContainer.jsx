import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { productos } from '../data/data'; // Asegúrate de que la ruta sea correcta

function ItemDetailContainer() {
  const { productoId } = useParams(); // Obtiene el id del producto de la URL
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  useEffect(() => {
    // Busca el producto en el array basado en el ID
    const productoEncontrado = productos.find(prod => prod.id.toString() === productoId);
    setProducto(productoEncontrado);
  }, [productoId]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen || 'https://via.placeholder.com/150'} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            {producto.descripcion}
          </Card.Text>
          <Card.Text>
            Precio: ${producto.precio}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <Button variant="secondary" onClick={decrementar}>-</Button>
            <span>{contador}</span>
            <Button variant="secondary" onClick={incrementar}>+</Button>
          </div>
          <Button variant="primary" onClick={(e) => e.stopPropagation()}>Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetailContainer;
