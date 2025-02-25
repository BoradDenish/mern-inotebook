import { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import { ThemeProvider } from "./context/ThemeContext";
import Notes from './components/Notes';
import Alert from './components/Alert';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type) => {
    setAlert({ message: `This is a ${type} alert!`, type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <>
    <ThemeProvider>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {alert && <Alert message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}
          <Routes>
            <Route path="/home" element={<Home showAlert={showAlert} />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Notes showAlert={showAlert} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </ThemeProvider>
    </>
  )
}

export default App
