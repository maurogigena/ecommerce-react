import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { productos } from '../data/data'; 

function ItemDetailContainer() {
  const { productoId } = useParams(); // Obtiene el id del producto de la URL
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  useEffect(() => {
    // Busca el producto en el array basado en el ID
    const productoEncontrado = productos.find(prod => prod.id.toString() === productoId);
    setProducto(productoEncontrado);
  }, [productoId]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  // Sweetalert a la adición de productos al carrito
  const agregarAlCarrito = () => {
    Swal.fire({
      title: 'Producto agregado',
      text: `Has agregado ${contador} ${contador > 1 ? 'productos' : 'producto'} al carrito correctamente`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };

  if (!producto) return <div>Cargando...</div>;

  return (
    <div className="container" style={{ marginTop: '100px', justifyContent: 'center', paddingRight: '25px', paddingLeft: '25px' }}>
      <div className="row">
        <div className="col-lg-6">
          <img src={producto.imagen || 'https://via.placeholder.com/400'} alt="Producto" className="img-fluid" />
        </div>
        <div className="col-lg-6 mt-3 mt-lg-0">
          <Card style={{ maxWidth: '30rem', width: '100%', justifyContent: 'center' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '2rem' }}>{producto.nombre}</Card.Title>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                {producto.descripcion}
              </Card.Text>
              <Card.Text style={{ fontSize: '1.5rem' }}>
                Precio: ${producto.precio}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button variant="secondary" size="lg" onClick={decrementar}>-</Button>
                <span style={{ fontSize: '2rem' }}>{contador}</span>
                <Button variant="secondary" size="lg" onClick={incrementar}>+</Button>
              </div>
              <Button variant="primary" size="lg" onClick={agregarAlCarrito}>Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;