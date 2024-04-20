import { Offcanvas } from 'react-bootstrap';
import './navBar.css';
import { CartItemList } from '../cartItemList/cartItemList.jsx';

const CartOffcanvas = ({ showCartOffcanvas, handleCartToggle }) => {
  
  return (
    <Offcanvas show={showCartOffcanvas} onHide={handleCartToggle} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CartItemList handleCartToggle={handleCartToggle} /> {/* Aquí se pasa handleCartToggle */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartOffcanvas;
