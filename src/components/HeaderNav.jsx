import React from 'react';
import './HeaderNav.sass';

export default function HeaderNav() {
    return (
        <header className="header-nav">
        <nav className='navbar'>
            <ul className='nav-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/story">Story</a></li>
            <li><a href="/equationsone">Example one</a></li>
            <li><a href="/equationstwo">Example Two</a></li>
            <li><a href="/end">End</a></li>
            </ul>
        </nav>
        </header>
    )
};
