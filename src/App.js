import React from 'react';
import NavBar from './components/navBar/navBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.jsx'; 

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ItemListContainer />
      </div>
    );
  }
}

export default App;