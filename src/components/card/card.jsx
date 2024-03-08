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
            {producto.descripcion} {/* Agrega la descripción del producto */}
          </Card.Text>
          <Card.Text>
            Precio: ${producto.precio} {/* Agrega el precio del producto */}
          </Card.Text>
          <Card.Text>
            Stock: {producto.stock} {/* Agrega el precio del producto */}
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


// import { Card, Button } from 'react-bootstrap'; // Importa los componentes de tarjeta y botón de Bootstrap

//function ItemCard ({ producto }) {
  //return (
    //<Card style={{ width: '18rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      //<Card.Img variant="top" src={producto.imagen} /> {/* Agrega la imagen del producto */}
      //<Card.Body>
        //<Card.Title>{producto.nombre}</Card.Title> {/* Agrega el nombre del producto */}
        //<Card.Text>
          //Descripción: {producto.descripcion} {/* Agrega la descripción del producto */}
        //</Card.Text>
        //<Card.Text>
          //Precio: ${producto.precio} {/* Agrega el precio del producto */}
        //</Card.Text>
        //Stock: {producto.stock} {/* Agrega el stock del producto */}
        //</Card.Text>
        //<Button variant="primary">Añadir al carrito</Button> {/* Agrega un botón de "Añadir al carrito" */}
      //</Card.Body>
    //</Card>
  //);
//}

//export default ItemCard;
