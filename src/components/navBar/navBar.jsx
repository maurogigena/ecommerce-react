import React from 'react';
import brand from '../assets/brand.png';
import { Offcanvas, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class navBar extends React.Component {
  state = {
    showOffcanvas: false,
    cartItemCount: 0,
    showCartOffcanvas: false,
    cartItems: [],
  };

  setShowCartOffcanvas = (show) => {
    this.setState({ showCartOffcanvas: show });
  };
  
  handleCartToggle = () => {
    this.setShowCartOffcanvas(!this.state.showCartOffcanvas);
  };

  setShowOffcanvas = (show) => {
    this.setState({ showOffcanvas: show });
  };

  handleToggle = () => {
    this.setShowOffcanvas(!this.state.showOffcanvas);
  };

  render() {
    return (
      <>
        <Navbar className='navbar' bg="dark" variant="dark" expand={false}>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={this.handleToggle} />
          <Navbar.Brand href="/" className="mx-auto">
            <img src={brand} alt="Brand Hood'99." style={{ width: '120px' }} />
          </Navbar.Brand>
            <div className="cart-icon" onClick={this.handleCartToggle}>
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '22px' }} />
                <span className="badge">{this.state.cartItemCount}</span>
            </div>
          <Offcanvas show={this.state.showOffcanvas} onHide={this.handleToggle} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Todos los Productos</Nav.Link>
                <Nav.Link href="/" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Autumn/Winter Season 2024</Nav.Link>
                <Nav.Link href="/" onMouseOver={e => e.target.style.textDecoration = 'underline'} onMouseOut={e => e.target.style.textDecoration = 'none'}>Contacto</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <Offcanvas show={this.state.showCartOffcanvas} onHide={this.handleCartToggle} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {this.state.cartItems.length > 0 ? (
                    <div>
                    {/* Aquí puedes mapear los productos en el carrito para mostrarlos */}
                    {this.state.cartItems.map((item, index) => (
                        <div key={index}>{item.name} - Cantidad: {item.quantity}</div>
                    ))}
                    </div>
                ) : (
                    <p>Tu carrito está vacío</p>
                )}
                </Offcanvas.Body>
            </Offcanvas>
        </Navbar>
      </>
    );
  }
}

export default navBar;

