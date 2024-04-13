import React, { useState, useContext, useEffect } from 'react';
import brand from '../../assets/brand.png';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { BsCart4, BsPersonFill } from 'react-icons/bs';
import MenuOffcanvas from './mainMenu.jsx';
import CartOffcanvas from './offCanvasCart.jsx';
import LoginToast from './loginToast.jsx';
import AdBar from './adbar.jsx';
import { CartContext } from '../../context/cartContext.jsx'; // Importa el contexto del carrito

function NavBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCartOffcanvas, setShowCartOffcanvas] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);

  const { cartItems } = useContext(CartContext); // Obtiene el contexto del carrito

  // Calcula la cantidad total de elementos en el carrito
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCartToggle = () => {
    setShowCartOffcanvas(!showCartOffcanvas);
  };

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  // Función para mostrar el toast de inicio de sesión
  const handleLoginToast = () => {
    setShowLoginToast(true);
  };

  return (
    <>
      <AdBar />
      <Navbar className='navbar' bg="black" variant="dark" expand={false}>
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleToggle} />
        <Navbar.Brand href="/" className="mx-auto">
          <img src={brand} alt="Brand Hood'99." style={{ width: '120px' }} />
        </Navbar.Brand>
        <div style={{ cursor: 'pointer' }} className='user-icon' onClick={handleLoginToast}>
          <BsPersonFill size={30} />
        </div>
        <div className="cart-icon" onClick={handleCartToggle}>
          <BsCart4 size={25} color="white" /> 
          <span className="badge">{cartItemCount}</span>
        </div>
        <MenuOffcanvas showOffcanvas={showOffcanvas} handleToggle={handleToggle} />
        <CartOffcanvas showCartOffcanvas={showCartOffcanvas} handleCartToggle={handleCartToggle} />
      </Navbar>
      <LoginToast 
        showLoginToast={showLoginToast} 
        handleClose={() => setShowLoginToast(false)}
      />
    </>
  );
}

export default NavBar;
