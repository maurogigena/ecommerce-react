import React from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ItemCard from '../card/card.jsx';

function ItemList({ productos }) {
  return (
    <Container>
      <Row>
        {productos.map((producto) => (
          <Col key={producto.id} sm={6} md={4} lg={3}>
            <ItemCard productId={producto.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
