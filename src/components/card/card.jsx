import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Importa los componentes de tarjeta y botón de Bootstrap

function ItemCard ({ producto }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} /> {/* Agrega la imagen del producto */}
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title> {/* Agrega el nombre del producto */}
        <Card.Text>
          Descripción: {producto.descripcion} {/* Agrega la descripción del producto */}
        </Card.Text>
        <Card.Text>
          Precio: ${producto.precio} {/* Agrega el precio del producto */}
        </Card.Text>
        <Card.Text>
          Stock: {producto.stock} {/* Agrega el stock del producto */}
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button> {/* Agrega un botón de "Añadir al carrito" */}
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
