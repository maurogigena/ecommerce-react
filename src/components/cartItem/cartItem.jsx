import { useContext } from "react";
import { CartContext } from "../../context/cartContext.jsx";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./cartItem.css";
import "../../data/data.js"

export const CartItem = ({ id, imagen, nombre, quantity, precio }) => {
    const { removeProduct } = useContext(CartContext);

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="flex-shrink-0">
                        <Card.Img style={{ width:"100px", height:"auto" }} variant="top" src={imagen} alt="producto a comprar" className="ItemOnCartContainerProductImg"/>
                    </div>
                    <div style={{ fontSize: "medium", lineHeight:"1" }} className="flex-grow-1 ms-3">
                        <Card.Text>{nombre}</Card.Text>
                        <Card.Text>
                            Precio: US$ {precio}
                        </Card.Text>
                        <Card.Text>
                            Cantidad: {quantity}
                        </Card.Text>
                        <Card.Text>
                            Total: US$ {(precio * quantity).toFixed(2)}
                        </Card.Text>
						<Button variant="danger" onClick={() => removeProduct(id)}>Eliminar</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};
