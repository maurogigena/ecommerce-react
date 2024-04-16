import React, { useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { CartContext } from '../../context/cartContext.jsx';
import './navBar.css';
import { CartItemList } from '../cartItemList/cartItemList.jsx';

const CartOffcanvas = ({ showCartOffcanvas, handleCartToggle }) => { // eslint-disable-next-line
  const {} = useContext(CartContext);
  
  return (
    <Offcanvas show={showCartOffcanvas} onHide={handleCartToggle} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CartItemList />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
