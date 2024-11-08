
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SolarSavingCalculator from './pages/SolarSavingCalculator';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
 // Import the Popup component

import './App.css';
import mainLogo from "./cropped-logo-1.png";
import Popup from './pages/Popup';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); 

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); 

    return () => clearTimeout(popupTimer); 
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <img src={mainLogo} className='mainLogo' alt="Main Logo"/>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/solar-saving-calculator" element={<SolarSavingCalculator />} />
          </Routes>

          {showPopup && <Popup onClose={() => setShowPopup(false)} />} {/* Show Popup */}
        </>
      )}
    </>
  );
}

export default App;

