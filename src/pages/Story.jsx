import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router-dom';

export default function Story() {
    return (
        <>
        <HeaderNav />
        <div className="story-page">
            <h1>The Adventure Begins</h1>
            <p>Welcome to the thrilling world of math adventures! In this story, you'll embark on a journey filled with exciting challenges and intriguing puzzles. Get ready to explore the wonders of mathematics as you navigate through various scenarios and solve problems along the way.</p>
            <p>Your first challenge awaits! Are you ready to dive into the world of equations and uncover the secrets they hold? Click the button below to proceed to your first math challenge.</p>
            <Link to="/equationsone" className="next-button">Proceed to Equations Challenge</Link>
        </div>
        </>
    )
}