import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <HeaderNav />
        <div className="home-page">
            <h1>Roskilde-Domkirke</h1>
            <p>Embark on a journey through exciting math challenges and stories.</p>
            <Link to="/story" className="start-button">Start Your Adventure</Link>
        </div>
        </>
    )
}