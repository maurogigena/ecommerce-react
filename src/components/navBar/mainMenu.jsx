import React from 'react';
import { Offcanvas, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navBar.css'

const MenuOffcanvas = ({ showOffcanvas, handleToggle }) => {
  return (
    <Offcanvas show={showOffcanvas} onHide={handleToggle} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menú</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Todos los Productos</Nav.Link>
          <Nav.Link as={Link} to="/categoria/season2024" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Autumn/Winter Season 2024</Nav.Link>
          <Nav.Link as={Link} to="/categoria/verano" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Verano</Nav.Link>
          <Nav.Link as={Link} to="/categoria/accesorios" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Accesorios</Nav.Link>
          <Nav.Link as={Link} to="/categoria/zapatillas" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Zapatillas</Nav.Link>
          <Nav.Link as={Link} to="/" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Contacto</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MenuOffcanvas;
