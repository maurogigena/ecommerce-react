import React from 'react';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsRouter } from 'react-icons/bs';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:productoId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>  
    );
  }
}

export default App;