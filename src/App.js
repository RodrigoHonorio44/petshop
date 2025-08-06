// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import TosaEBanho from './screens/TosaEbanho';
import Contato from './screens/Contato';
import Veterinario from './screens/Veterinario';

import ProdutosGeral from './screens/ProdutosGeral';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/servicos" element={<TosaEBanho />} />
        <Route path="/Produtos" element={<ProdutosGeral/>} />
        <Route path="/Veterinario" element={<Veterinario/>} />
      </Routes>
    </Router>
  );
}

export default App;
