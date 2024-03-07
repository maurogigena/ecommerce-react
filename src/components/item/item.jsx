
function Item({ id, nombre, descripcion, precio, stock }) {
    return (
      <div>
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        <p>Precio: ${precio}</p>
        <p>Stock: {stock}</p>
      </div>
    );
  }
  
export default Item;
  