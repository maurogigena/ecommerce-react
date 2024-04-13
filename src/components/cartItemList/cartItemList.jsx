import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext.jsx";
import { CartItem } from "../cartItem/cartItem.jsx";
import "./cartItemList.css";

export const CartItemList = () => {
	const { cartItems, totalCartValue, emptyCart } = useContext(CartContext);

	return (
		<div className="ItemOnCartContainerList">
			{cartItems.map((product) => (
				<div
					key={product.id + "onCart"}
					className="ItemOnCartContainerProduct">
					<CartItem
						id={product.id}
						imagen={product.imagen}
						nombre={product.nombre}
						quantity={product.quantity}
						precio={product.precio}
					/>
				</div>
			))}
			<div className="TotalCartPrice">Total: ${totalCartValue}</div>
			<button className="EmptyCartButton" onClick={emptyCart}>
				Vaciar Carrito
			</button>
			<Link
				to="/checkout"
				className="FinishCartButton">
				Terminar Compra
			</Link>
		</div>
	);
};