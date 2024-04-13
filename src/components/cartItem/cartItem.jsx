import { useContext } from "react";
import { CartContext } from "../../context/cartContext.jsx";
import "./cartItem.css";
import "../../data/data.js"

export const CartItem = ({ id, imagen, nombre, quantity, precio }) => {
	const { removeProduct } = useContext(CartContext);

	return (
		<>
			<div className="ItemOnCartContainerProductImgContainer">
				<img
					className="ItemOnCartContainerProductImg"
					src={imagen}
					alt="producto a comprar"
				/>
			</div>
			<div className="ItemOnCartContainerProductInfo">
				<p className="ItemOnCartContainerProductTitle">{nombre}</p>
				<p className="ItemOnCartContainerProductPrecio">
					Precio: US$ {precio}
				</p>
				<p className="ItemOnCartContainerProductCantidad">
					Cantidad: {quantity}
				</p>
				<p className="ItemOnCartContainerProductPrecio">
					Total: US$ {(precio * quantity).toFixed(2)}
				</p>
			</div>
			<div className="ItemOnCartContainerProductDelete">
				<div
					className="ItemOnCartContainerProductDeleteIcon"
					onClick={() => removeProduct(id)}>
					❌
				</div>
			</div>
		</>
	);
};