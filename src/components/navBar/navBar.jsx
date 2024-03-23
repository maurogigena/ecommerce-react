import React from 'react';
import brand from '../assets/brand.png';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navBar.css';
import { BsCart4 } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import MenuOffcanvas from './mainMenu.jsx';
import CartOffcanvas from './cart.jsx';
import LoginToast from './loginToast.jsx';
import AdBar from './adbar.jsx';

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
        <AdBar />
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
          {/* Off Canvas con enlaces */}
          <MenuOffcanvas showOffcanvas={this.state.showOffcanvas} handleToggle={this.handleToggle} />
          {/* Off Canvas Carrito */}
          <CartOffcanvas showCartOffcanvas={this.state.showCartOffcanvas} handleCartToggle={this.handleCartToggle} cartItems={this.state.cartItems} />
        </Navbar>
        {/* Toast para el inicio de sesión */}
        <LoginToast 
        showLoginToast={this.state.showLoginToast} 
        handleClose={() => this.setState({ showLoginToast: false })}
      />
      </>
    );
  }
}

export default NavBar;