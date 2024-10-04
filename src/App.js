import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';
import ProductSearch from './ProductSearch';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
    setShowWelcome(false); // Hide welcome message when switching components
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Scanner & Product Search</h1>
      </header>
      <div className="nav-buttons">
        <button
          className="nav-button"
          onClick={() => {
            setActiveComponent(null);
            setShowWelcome(true); // Show welcome message
          }}
        >
          Home
        </button>
        <button
          className="nav-button"
          onClick={() => handleButtonClick('barcode')}
        >
          Open QR Scanner
        </button>
        <button
          className="nav-button"
          onClick={() => handleButtonClick('search')}
        >
          Open Product Search
        </button>
      </div>
      
      <main className="App-main">
        <div className="component-container">
          {showWelcome && <h2>Welcome to the Online Store</h2>}
          {activeComponent === 'barcode' && <BarcodeScanner />}
          {activeComponent === 'search' && <ProductSearch />}
        </div>
      </main>
    </div>  
  );
}

export default App;