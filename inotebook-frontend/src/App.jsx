import { useState } from 'react'
import './index.css';
import Navbar from './assets/components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './assets/components/Home';
import About from './assets/components/About';

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
