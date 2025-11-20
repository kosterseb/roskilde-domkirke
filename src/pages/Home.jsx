import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';
import './Home.sass';

export default function Home() {
    return (
        <>
            <HeaderNav />
            <div className="home-page">
                <h1>Roskilde Domkirke</h1>
                <div>
                    <h2>A journey through time</h2>
                    <p>Embark on a journey through exciting stories about the amazing tales of our time,
                        a royal institution with history and architecturial wonders. <br /><br />

                        In this showcase we will go through some history about <span className='highlight'>Roskilde
                            Domkirke</span> and what needed to be rebuild and how.</p>

                    <p className="disclaimer">*This is for educational purposes only*</p>
                    <Link to="/story" className="start-button">Start Your Adventure →</Link>
                </div>
            </div>
        </>
    )
}