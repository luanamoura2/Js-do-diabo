import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Historia from './Historia';
import Contato from './Contato';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

function App() {
  return (
   <Router>
    <div>
      <Cabecalho />
      <div id= 'Conteudo'> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/historia" element={<Historia/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>
      </div>
      <Rodape />
    </div>
   </Router>
    
  );
}

export default App;
