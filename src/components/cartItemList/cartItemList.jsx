import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext.jsx';
import { CartItem } from '../cartItem/cartItem.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export const CartItemList = () => {
  const { cartItems, totalCartValue, emptyCart } = useContext(CartContext);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Carrito de Compras</Card.Title>
        <ListGroup variant="flush">
          {cartItems.map((product) => (
            <ListGroup.Item key={product.id + 'onCart'}>
              <CartItem
                id={product.id}
                imagen={product.imagen}
                nombre={product.nombre}
                quantity={product.quantity}
                precio={product.precio}
              />
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Card.Text style={{ fontSize: "large" }}>Total de la compra: ${totalCartValue}</Card.Text>
        <Button style={{ fontSize: "large" }} variant="danger" onClick={emptyCart}>
          Vaciar Carrito
        </Button>
        <Link style={{ fontSize: "large" }} to="/checkout" className="btn btn-success mt-2">
          Terminar Compra
        </Link>
      </Card.Body>
    </Card>
  );
};