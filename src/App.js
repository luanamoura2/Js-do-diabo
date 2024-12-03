import './App.css';
import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Sobre from './Sobre';

function App() {
  return (
   <Router>
    <div>
      <Menu />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
      </div>
    </div>
   </Router>
    
  );
}

export default App;
