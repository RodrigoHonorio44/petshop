// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import TosaEBanho from './screens/TosaEbanho';
import Contato from './screens/Contato';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/servicos" element={<TosaEBanho />} />
      </Routes>
    </Router>
  );
}

export default App;
