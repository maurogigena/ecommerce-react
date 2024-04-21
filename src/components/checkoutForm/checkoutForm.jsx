import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext.jsx";
import { createBuyOrder } from "../../services/firebase";
import "./checkoutForm.css";

export const CheckoutForm = () => {
  const { cartItems, cartQuantity, emptyCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);  // Inicia con true para mostrar el spinner inmediatamente
  const [idOrder, setIdOrder] = useState();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    items: "",
    date: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Cambia el estado a false después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer);  // Limpia el temporizador cuando se desmonta el componente
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setUserData({ ...userData, [inputName]: inputValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartQuantity === 0) {
      return (
        <div className="MessageCartEmpty">
          Carrito Vacio 🤔 <br />
          <Link className="MessageCartEmptyButton" to="/">
            Ir a comprar
          </Link>
        </div>
      );
    }

    if (userData.name.trim() === "" || userData.email.trim() === "" || !cartItems) return;

    let order = {
      name: userData.name,
      email: userData.email,
      items: cartItems,
      date: new Date(),
    };

    setLoading(true);
    createBuyOrder(order)
      .then((data) => {
        setIdOrder(data);
        emptyCart();
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      })
      .finally(() => {
        setLoading(false);
        setUserData({
          name: "",
          email: "",
        });
      });
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px', marginBottom:"20px" }}>
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (idOrder) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100px'
      }}>
        <Card style={{ width: '300px', textAlign: 'center' }} className="container--orderid">
          <Card.Title className="container--orderid--text">¡Compra exitosa!</Card.Title>
          <Card.Text className="container--orderid--text">Su número de orden es:</Card.Text>
          <Card.Text style={{ fontWeight: "900" }} className="container--orderid--id">{idOrder}</Card.Text>
          <Card.Title className="container--orderid--text">Gracias por tu compra! Hood'99.</Card.Title>
        </Card>
      </div>
    );
  }

  return (
    <div className="form--container">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label style={{ fontWeight:"900" }}>Nombre y Apellido*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Card.Text style={{ fontSize:"13px" }}>* el apellido es opcional.</Card.Text>

        <Form.Group controlId="formEmail">
          <Form.Label style={{ fontWeight:"900" }} className="email-title">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button className="button-enviar" variant="primary" type="submit" disabled={loading}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;
