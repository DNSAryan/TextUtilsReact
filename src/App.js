import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggle = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = "React - Light Mode";
    } else {
      setMode('dark');
      document.body.style.background = '#031024';
      showAlert('Dark mode has been enabled', 'success');
      document.title = "React - Dark Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="ReactApp" Heading="About" mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Textform showAlert={showAlert} heading="Text Analysis" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
