import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaTimes } from 'react-icons/fa';
import LogoImg from '../assets/brand.png';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {

  // Estado para controlar la visibilidad del contenido
  const [isVisible, setIsVisible] = useState(false);

  // useEffect para aplicar el setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1300); // Establece el tiempo de espera a 1.3 segundos

    // Limpieza del timer al desmontar el componente
    return () => clearTimeout(timer);
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez

  // Renderizar condicionalmente basado en `isVisible`
  if (!isVisible) {
    return null; // O podrías retornar un loader, por ejemplo
  }

  return (
    <Container fluid className="bg-black text-white py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={3} className="d-flex justify-content-center align-items-center col-query">
          <img src={LogoImg} alt="Logo" />
        </Col>

        <Col className='col-query' xs={12} md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item action as={Link} to="/" className="bg-black text-white filtros">Todos los Productos</ListGroup.Item>
            <ListGroup.Item action as={Link} to="category/Autum-Winter Season 2024" className="bg-black text-white filtros">Autumn/Winter Season 2024</ListGroup.Item>
            <ListGroup.Item action as={Link} to="category/Verano" className="bg-black text-white filtros">Verano</ListGroup.Item>
            <ListGroup.Item action as={Link} to="category/Zapatillas" className="bg-black text-white filtros">Zapatillas</ListGroup.Item>
            <ListGroup.Item action as={Link} to="category/Accesorios" className="bg-black text-white filtros">Accesorios</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col className='col-query' xs={12} md={3}>
          <h5>Contactanos</h5> {/* LAS REDES NO EXISTEN, SON FICTICIAS */}
          <div className="d-flex flex-column">
            <a className='redes' href="#"><FaInstagram className="my-2" /> @Hood99</a>
            <a className='redes' href="#"><FaTimes className="my-2" /> @hood99clothes</a>
            <a className='redes' href="#"><FaWhatsapp className="my-2" /> +1 23 45678910</a>
            <a className='redes' href="#"><FaEnvelope className="my-2" /> info@hood99.com.ar</a>
          </div>
        </Col>

        <Col className='col-query' xs={12} md={3}>
          <h4>Suscríbete a nuestro Newsletter</h4>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <div className="input-group">
                <Form.Control className='form' type="email" placeholder="Escribe tu mail aquí" />
                <Button variant="primary" type="submit" className="button-form">
                  →
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col className="text-center py-3 copyright">
          Hood99 © {new Date().getFullYear()}. Todos los derechos reservados.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
