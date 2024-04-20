import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.css'

const MenuOffcanvas = ({ showOffcanvas, handleToggle }) => {

  const handleContactClick = () => {
    // Hacer scroll hacia abajo de la página
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    handleToggle(); // Ocultar Offcanvas después de hacer clic en "Contacto"
  };

  // Función para ocultar el Offcanvas después de hacer clic en cualquier NavLink
  const handleNavLinkClick = () => {
    handleToggle();
  };

  return (
    <Offcanvas show={showOffcanvas} onHide={handleToggle} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menú</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'} onClick={handleNavLinkClick}>Todos los Productos</Nav.Link>
          <Nav.Link as={Link} to="category/Autum-Winter Season 2024" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'} onClick={handleNavLinkClick}>Autumn/Winter Season 2024</Nav.Link>
          <Nav.Link as={Link} to="category/Verano" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'} onClick={handleNavLinkClick}>Verano</Nav.Link>
          <Nav.Link as={Link} to="category/Zapatillas" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'} onClick={handleNavLinkClick}>Zapatillas</Nav.Link>
          <Nav.Link as={Link} to="category/Accesorios" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'} onClick={handleNavLinkClick}>Accesorios</Nav.Link>
          <Nav.Link onClick={handleContactClick} onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Contacto</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MenuOffcanvas;
