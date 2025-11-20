import React from 'react';
import { Link } from 'react-router';
import './HeaderNav.sass';

export default function HeaderNav() {
    return (
        <header className="header-nav">
            <div className='logo'>
                <Link to="/">
                <img src="./src/assets/crown-icon.png" alt="" />
                </Link>
            </div>
        <nav className='navbar'>
            <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/equationsone">Example one</Link></li>
            <li><Link to="/equationstwo">Example Two</Link></li>
            <li><Link to="/end">End</Link></li>
            </ul>
        </nav>
        </header>
    )
};
