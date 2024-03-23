import React from 'react';
import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { TuComponenteIconoX } from 'ruta/a/tu/icono/X';
import LogoImg from '../assets/brand.png'

const FooterComponent = () => {
  return (
    <Container fluid className="bg-dark text-white py-4">
      <Row className="justify-content-center">
        <Col xs={12} md={3} className="d-flex justify-content-center align-items-center">
          <LogoImg />
        </Col>

        <Col xs={12} md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item action href="#" className="bg-dark text-white">Todos los Productos</ListGroup.Item>
            <ListGroup.Item action href="#" className="bg-dark text-white">Autumn/Winter Season 2024</ListGroup.Item>
            <ListGroup.Item action href="#" className="bg-dark text-white">Verano</ListGroup.Item>
            <ListGroup.Item action href="#" className="bg-dark text-white">Zapatillas</ListGroup.Item>
            <ListGroup.Item action href="#" className="bg-dark text-white">Accesorios</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col xs={12} md={3}>
          <h5>Contactanos</h5>
          <div className="d-flex flex-column">
            <a href="https://instagram.com"><InstagramIcon className="my-2" /></a>
            <a href="#"><XIcon className="my-2" /></a>
            <a href="https://wa.me"><WhatsappIcon className="my-2" /></a>
            <a href="mailto:example@example.com"><MailIcon className="my-2" /></a>
          </div>
        </Col>

        <Col xs={12} md={3}>
          <h5>Suscríbete a nuestro Newsletter</h5>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Escribe tu mail aquí" />
            </Form.Group>
            <Button variant="primary" type="submit">
              {/* Asume un icono de flecha hacia la derecha aquí, ajusta según necesites */}
              →
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;