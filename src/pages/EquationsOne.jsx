import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';

export default function EquationsOne() {
    return (
        <>
        <HeaderNav />
        <div className="equations-one-page">
            <h1>Equations One</h1>
            
            <p>Once you've solved these, click below to continue your adventure!</p>
            <Link to="/equationstwo" className="continue-button">Continue to Equations Two</Link>
        </div>
        </>
    )
}