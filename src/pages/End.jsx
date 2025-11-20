import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';

export default function End() {
    return (
        <>
        <HeaderNav />
        <div className="end-page">
            <h1>Congratulations!</h1>
            <p>You've completed the adventure through Roskilde-Domkirke's math challenges. Well done!</p>
            <Link to="/" className="home-button">Return to Home</Link>
        </div>
        </>
    )
}