import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import './itemDetail.css';
import { useCount } from '../hooks/useCount.jsx';
import { useCart } from '../../context/cartContext.jsx';
import { getOneProduct } from '../../services/firebase.js';  // Importa la función de Firebase

function ItemDetailContainer() {
  const { productoId } = useParams();  // Obtiene el ID del producto desde la URL
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  const { count, increment, decrement } = useCount(1);
  const { addProduct } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setCargando(true);
      const productoEncontrado = await getOneProduct(productoId);
      setProducto(productoEncontrado);
      setCargando(false);
    };
    fetchProduct();
  }, [productoId]);

  const agregarAlCarrito = () => {
    addProduct(producto, count);
    Swal.fire({
      title: 'Producto agregado',
      text: `Has agregado ${count} ${count > 1 ? 'productos' : 'producto'} al carrito correctamente`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };

  if (cargando) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  if (!producto) return <div>No se encontró el producto</div>;

  return (
    <div className="container" style={{ marginTop: '120px', justifyContent: 'center', paddingRight: '25px', paddingLeft: '25px', marginBottom: '20px' }}>
      <div className="row">
        <div className="img-itemdetail col-lg-6">
          <img src={producto.imagen} alt={producto.nombre} className="img-fluid" style={{ width: "70%", height: "100%", opacity:"1" }} />
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
              <Card.Text style={{ fontSize: '1.5rem', color: producto.stock > 0 ? 'inherit' : 'red' }}>
                {producto.stock > 0 ? 'Hay stock' : 'No hay stock'}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <Button variant="secondary" size="lg" onClick={decrement}>-</Button>
                <span style={{ fontSize: '2rem' }}>{count}</span>
                <Button variant="secondary" size="lg" onClick={increment}>+</Button>
              </div>
              <Button variant="primary" size="lg" onClick={agregarAlCarrito} disabled={producto.stock <= 0} style={{ backgroundColor: producto.stock > 0 ? '' : 'grey', borderColor: producto.stock > 0 ? '' : '#f8f9fa' }}>Agregar al Carrito</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
