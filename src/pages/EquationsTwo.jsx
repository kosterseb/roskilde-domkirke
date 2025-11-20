import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';

export default function EquationsTwo() {
    return (
        <>
        <HeaderNav />
        <div className="equations-two-page">
            <h1>Equations Two</h1>
            <p>Welcome to the second set of equations! Solve these to continue your adventure.</p>
            <ul>
                <li>Solve for x: 2x + 3 = 11</li>
                <li>Solve for y: 5y - 4 = 16</li>
                <li>Solve for z: 3z + 2 = 14</li>
            </ul>
            <p>Once you've solved these, click below to proceed to the end of your journey!</p>
            <Link to="/end" className="continue-button">Continue to End</Link>
        </div>
        </>
    )
}