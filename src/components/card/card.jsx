import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './card.css';

function ItemCard({ producto }) {
  const navigate = useNavigate(); // Hook para navegar

  // Función para manejar el clic en la Card
  const handleClick = () => {
    navigate(`/producto/${producto.id}`); // Asegúrate de que `producto` tenga un `id` único
  };

  return (
    <div className='card-container' onClick={handleClick}> {/* Agrega el evento onClick aquí */}
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            Precio: ${producto.precio}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;