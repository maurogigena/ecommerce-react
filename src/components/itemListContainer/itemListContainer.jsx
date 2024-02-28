import React from 'react';
import './itemListContainer.css'

class ItemListContainer extends React.Component {
  render() {
    return (
      <div>
        <h5 className='itemlistcontent'>Estamos trabajando para tener la mejor pagina de Pilcha Posta.</h5>
        <p className='itemlistcontent'>Hood'99 &copy; 2024</p>
        {/* Acá va a ir la lógica para mostrar el catálogo de productos */}
      </div>
    );
  }
}

export default ItemListContainer;
