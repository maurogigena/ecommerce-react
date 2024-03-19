import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './card.css';

function ItemCard({ producto }) {
  const navigate = useNavigate(); // Hook para navegar

  // Función para manejar el clic en la Card
  const handleClick = () => {
    navigate(`/producto/${producto.id}`);
  };

  return (
    <div className='card-container' onClick={handleClick}> {/* Agrega el evento onClick aquí */}
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${producto.imagen}`} alt={`${producto.nombre}`} style={{ width: "100%", height: "80%" }} />
        <Card.Body>
          <Card.Title style={{ fontWeight: '600' }}>{producto.nombre}</Card.Title>
          <Card.Text>
            Precio: ${producto.precio}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCard;