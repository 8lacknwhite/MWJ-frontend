import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './bootstrap.min.css'

import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './components/Footer';

import Resources from './views/Resources';
import Services from './views/Services';
import Donate from './views/Donate';
import Navigator from './components/Navbar';
function App() {
  return (
    <>
    <Navigator/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes> 
      <Footer />
    </>
  );
};

export default App;