import React from 'react';
import brand from '../assets/brand.png';
import { Offcanvas, Navbar, Nav, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { BsCart4 } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NavBar extends React.Component {
  state = {
    showOffcanvas: false,
    cartItemCount: 0,
    showCartOffcanvas: false,
    cartItems: [],
    showLoginToast: false // State para controlar la visibilidad del toast de inicio de sesión
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

  // Función para mostrar el toast de inicio de sesión
  handleLoginToast = () => {
    this.setState({ showLoginToast: true });
  };

  render() {
    return (
      <>
        <Navbar className='navbar' bg="black" variant="dark" expand={false}>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={this.handleToggle} />
          <Navbar.Brand href="/" className="mx-auto">
            <img src={brand} alt="Brand Hood'99." style={{ width: '120px' }} />
          </Navbar.Brand>
          <div style={{ cursor: 'pointer' }} className='user-icon' onClick={this.handleLoginToast}>
            <BsPersonFill size={30} />
          </div>
          <div className="cart-icon" onClick={this.handleCartToggle}>
            <BsCart4 size={25} color="white" /> 
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
                <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '0px' }}>
                  <Card className="text-center" style={{ borderColor: 'grey' }}>
                    <Card.Header>Hood'99</Card.Header>
                    <Card.Body>
                      <Card.Title>No tienes ningún artículo en tu carrito.</Card.Title>
                      <Card.Text>
                        Agrega algunos productos a tu carrito y vuelve aquí más tarde.
                      </Card.Text>
                      {/* Aquí puedes añadir un botón para redirigir al usuario */}
                      <Button variant="primary">Empezá ⇲</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Pilcha Posta</Card.Footer>
                  </Card>
                </div>  
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
        {/* Toast para el inicio de sesión */}
        <Toast className='toast-user' show={this.state.showLoginToast} onClose={() => this.setState({ showLoginToast: false })}>
          <Toast.Header>
            <strong className="me-auto">Hood'99</strong>
          </Toast.Header>
          <Toast.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control style={{ borderColor: 'grey' }} className='mb-1' type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control style={{ borderColor: 'grey' }} className='mb-1' type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button className='mb-1' variant="primary" type="submit">
                Iniciar Sesión
              </Button>
            </Form>
          </Toast.Body>
        </Toast>
      </>
    );
  }
}

export default NavBar;