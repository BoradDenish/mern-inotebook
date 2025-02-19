import { useState } from 'react'
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';

function App() {

  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </NoteState>
    </>
  )
}

export default App
