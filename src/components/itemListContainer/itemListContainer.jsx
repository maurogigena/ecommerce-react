import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../services/firebase.js';
import ItemList from '../itemList/itemList.jsx';
import brand from '../../assets/brand.png';
import bgImg from '../../assets/img-index.jpg';
import './itemListContainer.css'

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { idcategory } = useParams();

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
  }, [idcategory]);

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
        <img src={brand} style={{ marginTop:"40px" }} className="brand-img animate__animated animate__fadeIn" alt="Hood'99 Brand." />
        <img src={bgImg} style={{ width: '100%', opacity: 0.3, marginTop:"80px" }} fluid alt="Foto ilustrativa." />
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px', fontWeight:'600' }}>
        {idcategory ? `${idcategory}` : 'Our Collection'}
      </h2>
      <ItemList productos={items} />
    </div>
  );
}

export default ItemListContainer;
