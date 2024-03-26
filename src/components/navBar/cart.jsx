import React, { useContext } from 'react';
import { Offcanvas, Card, Button, ListGroup } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext.jsx';
import './navBar.css';
import { Link } from 'react-router-dom';

const CartOffcanvas = ({ showCartOffcanvas, handleCartToggle }) => {
  const { cartItems, removeProduct, emptyCart } = useContext(CartContext);

  return (
    <Offcanvas show={showCartOffcanvas} onHide={handleCartToggle} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <ListGroup variant="flush">
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div>
                <h6>{item.nombre}</h6> 
                <p>Cantidad: {item.quantity}</p>
                <p style={{ lineHeight:'0' }}>Precio: ${item.precio}</p>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeProduct(item.id)}>X</Button>
            </ListGroup.Item>
          ))}
          <div className="d-flex justify-content-between mt-3">
            <Button className='vaciar-carrito' variant="warning" onClick={emptyCart}>Vaciar Carrito</Button>
            <Button className='checkout' variant="success">Checkout</Button>
          </div>
        </ListGroup>        
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Card className="text-center" style={{ borderColor: '#b7b7b7', borderRadius: '0px' }}>
              <Card.Header>No hay productos en el carrito</Card.Header>
              <Card.Body>
                <Button as={Link} to="/" variant="primary">Mira Our Collection</Button>
              </Card.Body>
            </Card>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
