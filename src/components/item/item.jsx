function Item({ id, imagen, nombre, descripcion, precio, stock }) {
  return (
    <div>
      <img alt="{`${nombre}`}" style={{ width: "100px", height: "100px" }}>{imagen}</img>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default Item;