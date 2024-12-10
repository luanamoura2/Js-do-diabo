import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav id='Menu'>
            <ul id='Menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/historia">História</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;