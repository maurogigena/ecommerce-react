import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => useContext(CartContext);

// Implementación del provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addProduct = (product, quantity) => {
    setCartItems(prevItems => {
      // Verificar si el producto ya está en el carrito
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        // Actualizar cantidad si el producto ya está en el carrito
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Agregar nuevo producto al carrito
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeProduct = productId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const totalCartValue = cartItems.reduce((total, item) => {
    return total + item.precio * item.quantity;
  }, 0);

  const cartQuantity = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addProduct, removeProduct, emptyCart, totalCartValue }}>
      {children}
    </CartContext.Provider>
  );
};
