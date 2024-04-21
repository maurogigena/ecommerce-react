import React, { useState, useEffect, useCallback } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory, createSubscriber } from '../../services/firebase.js';
import ItemList from '../itemList/itemList.jsx';
import brand from '../../assets/brand.png';
import bgImg from '../../assets/img-index.jpg';
import './itemListContainer.css';
import Swal from 'sweetalert2';

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idcategory } = useParams();

  const showSubscriptionForm = useCallback(() => {
    Swal.fire({
      title: 'Suscríbete a nuestro Newsletter',
      html: '<input id="swal-input1" class="swal2-input" placeholder="Email">',
      showCancelButton: true,
      confirmButtonText: 'Suscribirme',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const email = document.getElementById('swal-input1').value;
        return createSubscriber(email)
          .then(() => {
            Swal.fire('¡Gracias por suscribirte!', '', 'success');
          })
          .catch((error) => {
            Swal.fire('¡Error!', error.message, 'error');
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });
  }, []);

  const showSubscriptionAlert = useCallback(() => {
    Swal.fire({
      title: '¿Te gustaría suscribirte a nuestro newsletter?',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No / Ya estoy suscrito',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        showSubscriptionForm();
      }
    });
  }, [showSubscriptionForm]);

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      let products;
      if (idcategory) {
        products = await getProductsByCategory(idcategory);
      } else {
        products = await getProducts();
      }
      setItems(products);
      setIsLoading(false);
    };
    fetchProducts();

    // Show subscription alert only once using localStorage
    const showAlert = localStorage.getItem('showAlert') !== 'false';
    if (showAlert) {
      setTimeout(() => {
        showSubscriptionAlert();
        localStorage.setItem('showAlert', 'false'); // Set this flag as false once the alert has been shown
      }, 1600);
    }
  }, [idcategory, showSubscriptionAlert]); // Add dependencies here

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '10%' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-img">
        <img src={brand} style={{ marginTop: "40px" }} className="brand-img animate__animated animate__fadeIn" alt="Hood'99 Brand." />
        <img src={bgImg} style={{ width: '100%', opacity: 0.3, marginTop: "80px" }} fluid alt="Foto ilustrativa." />
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px', fontWeight: '600' }}>
        {idcategory ? `${idcategory}` : 'Our Collection'}
      </h2>
      <ItemList productos={items} />
    </div>
  );
}

export default ItemListContainer;
