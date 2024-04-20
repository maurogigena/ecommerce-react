import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext.jsx";
import { createBuyOrder } from "../../services/firebase";
import "./checkoutForm.css";

export const CheckoutForm = () => {
  const { cartItems, cartQuantity, emptyCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false); // Cambia a true para mostrar el spinner al principio
  const [idOrder, setIdOrder] = useState();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    items: "",
    date: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado a falso después de 0.5 segundos
    }, 500);

    return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonta el componente
  }, []);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setUserData({ ...userData, [inputName]: inputValue });
  };

  const handleSubmit = (event) => {

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

    event.preventDefault();
    
    if (userData.name.trim === "" || userData.email.trim === "" || !cartItems) return; // Verificar si cart está definido
  
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
        // Handle error appropriately, e.g., display a message to the user
      })
      .finally(() => {
        setLoading(false);
        setUserData({
          name: "",
          email: "",
        });
      });
  };

	if (loading) return <Spinner style={{ marginTop: "120px", marginBottom:"50px", display:"flex", justifyContent:"center", alignSelf:"center", textAlign:"center" }} />;

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
          <Card.Text style={{ fontWeight:"900" }} className="container--orderid--id">{idOrder}</Card.Text>
          <Card.Title className="container--orderid--text">Gracias por tu compra! Hood'99.</Card.Title>
        </Card>
      </div>
    );
  }  
  
  return (
    <div className="form--container">
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="email-title">Email</Form.Label>
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
          {loading ? <Spinner animation="border" size="sm" /> : "Enviar"}
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;