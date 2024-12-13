import React from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav id='Menu'>
            <ul id='Menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;