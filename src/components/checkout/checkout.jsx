import { Link } from 'react-router-dom'; // Importa Link
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap'; // Importa Spinner de react-bootstrap
import { CartContext } from '../../context/cartContext.jsx';
import { useContext, useState, useEffect } from 'react'; // Importa useState y useEffect

export const Checkout = () => {
  const { cartItems, totalCartValue } = useContext(CartContext);
  const [loading, setLoading] = useState(true); // Estado para controlar si se está cargando o no

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia el estado a falso después de 2 segundos
    }, 2000);

    return () => clearTimeout(timer); // Limpia el temporizador cuando se desmonta el componente
  }, []);

  if (loading) {
    // Muestra el spinner mientras se está cargando
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return <div style={{ margin:"100px 0px 15px 0px", fontSize:"50px", fontWeight:"900", display:"flex", justifyContent:"center", color:"#c00000" }}>El carrito está vacío.</div>;
  }

  return (
    <div>
      <h2 style={{ display:"flex", justifyContent:"center", marginTop: "95px", marginBottom:"20px" }}>Revisión del pedido</h2>
      <Row xs={1} md={2} lg={3}>
        {cartItems.map(item => (
          <Col style={{ display:"flex", justifyContent:"center" }} key={item.id}>
            <Card style={{ width: '18rem', display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
              <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                  Cantidad: {item.quantity}
                </Card.Text>
                <Card.Text>
                  Precio: ${item.precio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3">
        <Card.Text style={{ fontSize: "22px" }}>Total de la compra: US${totalCartValue}</Card.Text>
        <Link to="/checkout-form">
          <Button style={{ marginBottom: "20px", fontSize:"25px" }} variant="primary">Continuar</Button>
        </Link>
      </div>
    </div>
  );
};