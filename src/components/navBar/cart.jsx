import React from 'react';
import { Offcanvas, Card, Button } from 'react-bootstrap';
import './navBar.css'

const CartOffcanvas = ({ showCartOffcanvas, handleCartToggle, cartItems }) => {
  return (
    <Offcanvas show={showCartOffcanvas} onHide={handleCartToggle} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>{item.name} - Cantidad: {item.quantity}</div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Card className="text-center" style={{ borderColor: '#b7b7b7', borderRadius: '0px' }}>
              <Card.Header>Hood'99</Card.Header>
              <Card.Body>
                <Card.Title>No tienes ningún artículo en tu carrito.</Card.Title>
                <Card.Text>
                  Agrega algunos productos a tu carrito y vuelve aquí más tarde.
                </Card.Text>
                <Button variant="primary">Empezá ⇲</Button>
              </Card.Body>
              <Card.Footer className="text-muted">Pilcha Posta</Card.Footer>
            </Card>
          </div>  
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
