import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/historia">História</Link></li>
            <li><Link to="/contato">contato</Link></li>  
      </ul>
    );
}

export default Menu;