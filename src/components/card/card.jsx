import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ButtonGroup } from 'react-bootstrap';
import './card.css'

function ItemCard({ producto, onClickSubtract, quantity, onClickAdd }) {
  return (
    <div className='card-container'>
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            Precio: ${producto.precio}
          </Card.Text>
          <ButtonGroup className='mb-2' style={{ margin: '2px'}}>
            <Button variant="secondary" onClick={onClickSubtract}>-</Button>
            <Button variant="secondary" disabled>{quantity}1</Button>
            <Button variant="secondary" onClick={onClickAdd}>+</Button>
          </ButtonGroup>
          <Button variant="primary">Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;