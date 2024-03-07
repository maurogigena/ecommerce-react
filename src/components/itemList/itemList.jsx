import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes de contenedor, fila y columna de Bootstrap
import ItemCard from '../card/card'; // Importa el componente de tarjeta de producto

function ItemList({ productos }) {
  return (
    <Container>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} sm={6} md={4} lg={3}> {/* Utiliza columnas de Bootstrap para mostrar las tarjetas */}
            <ItemCard producto={producto} /> {/* Renderiza la tarjeta de producto */}
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;