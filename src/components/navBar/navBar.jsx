import React, { useState, useContext } from 'react';
import brand from '../../assets/brand.png';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { BsCart4 } from 'react-icons/bs';
import MenuOffcanvas from './mainMenu.jsx';
import CartOffcanvas from './offCanvasCart.jsx';
import AdBar from './adbar.jsx';
import { CartContext } from '../../context/cartContext.jsx';

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCartOffcanvas, setShowCartOffcanvas] = useState(false);

  const { cartItems } = useContext(CartContext); // Obtiene el contexto del carrito

  // Calcula la cantidad total de elementos en el carrito
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCartToggle = () => {
    setShowCartOffcanvas(!showCartOffcanvas);
  };

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
    <>
      <AdBar />
      <Navbar className='navbar' bg="black" variant="dark" expand={false}>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
        <Navbar.Brand href="/" className="mx-auto">
          <img src={brand} alt="Brand Hood'99." style={{ width: '120px' }} />
        </Navbar.Brand>
        <div className="cart-icon" onClick={handleCartToggle}>
          <BsCart4 size={25} color="white" /> 
          <span className="badge">{cartItemCount}</span>
        </div>
        <MenuOffcanvas showOffcanvas={showOffcanvas} handleToggle={handleToggle} />
        <CartOffcanvas showCartOffcanvas={showCartOffcanvas} handleCartToggle={handleCartToggle} />
      </Navbar>
    </>
  );
}

export default NavBar;
