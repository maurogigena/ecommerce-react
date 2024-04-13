import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext.jsx";
import { createBuyOrder } from "../../services/firebase";
import "./checkoutForm.css";

export const CheckoutForm = () => {
	const { cart, cartQuantity, emptyCart } = useContext(CartContext);
	const [loading, setLoading] = useState(false);
	const [idOrder, setIdOrder] = useState();
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		items: "",
		date: "",
	});

	const handleChange = (event) => {
		const inputValue = event.target.value;
		const inputName = event.target.name;
		setUserData({ ...userData, [inputName]: inputValue });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (userData.name === "" || userData.email === "") return;

		let order = {
			name: userData.name,
			email: userData.email,
			items: cart,
			date: new Date(),
		};

		console.log("Enviando data al backend");
		console.table(order);
		setLoading(true);
		createBuyOrder(order)
			.then((data) => {
				setIdOrder(data);
				emptyCart();
			})
			.finally(() => {
				setLoading(false);
				setUserData({
					name: "",
					email: "",
				});
			});
	};

	if (idOrder)
		return (
			<div className="container--orderid">
				<div className="container--orderid--text">su Orden es</div>
				<div className="container--orderid--id">{idOrder}</div>
			</div>
		);

	if (cartQuantity === 0)
		return (
			<div className="MessageCartEmpty">
				Carrito Vacio 🤔 <br />{" "}
				<Link className="MessageCartEmptyButton" to="/">
					Ir a comprar
				</Link>
			</div>
		);

	return (
		<div className="form--container">
			<form className="form" onSubmit={handleSubmit}>
				<label className="label">
					Nombre
					<input
						className="input"
						type="text"
						placeholder="Ingrese su nombre"
						name="name"
						value={userData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<label className="label">
					Email
					<input
						className="input"
						type="email"
						placeholder="Ingrese su apellido"
						name="email"
						value={userData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<button type="submit" className="custom-btn btn-3">
					<span>Enviar</span>
				</button>
			</form>
		</div>
	);
};