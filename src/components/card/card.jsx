import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { getOneProduct } from '../../services/firebase.js';
import './card.css';

function ItemCard({ productId }) {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      if (productId) {
        const product = await getOneProduct(productId);
        setProducto(product);
      }
      setIsLoading(false);
    };
    fetchProduct();
  }, [productId]);

  const handleClick = () => {
    if (productId) {
      navigate(`/producto/${productId}`);
    }
  };

  if (!productId || isLoading || !producto) {
    return null;
  }

  return (
    <div className='card-container' onClick={handleClick}> 
      <Card className='card' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`${producto.imagen}`} alt={`${producto.nombre}`} style={{ width: "100%", height: "310px", objectFit: "cover" }} />
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
