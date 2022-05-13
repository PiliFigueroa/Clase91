import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
        <nav>
            <h2>Logo</h2>
            <div className="links">
                <a href="#">Celulares</a>
                <a href="#">Tablets</a>
                <a href="#">Ayuda</a>
            </div>
        </nav>
    )
}

export { Navbar }