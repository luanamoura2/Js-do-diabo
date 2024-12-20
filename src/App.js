import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
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
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery" element={<Gallery/>} />

        </Routes>
      </div>
      <Rodape />
    </div>
   </Router>
    
  );
}

export default App;
