import React from 'react';
import { Toast, Form, Button } from 'react-bootstrap';
import './navBar.css'

const LoginToast = ({ showLoginToast, handleClose }) => {
  return (
    <Toast className='toast-user' show={showLoginToast} onClose={handleClose}>
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
  );
};

export default LoginToast;
