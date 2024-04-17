import React from 'react';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import { CartProvider } from './context/cartContext.jsx'; 
import { CartItemList } from './components/cartItemList/cartItemList.jsx';
import { Checkout } from './components/checkout/checkout.jsx';
import  CheckoutForm from './components/checkoutForm/checkoutForm.jsx';
import './index.css'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
            <Route path="/category/:idcategory" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartItemList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-form" element={<CheckoutForm />} />
            <Route path='*' element={<>ERROR 404</>} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
