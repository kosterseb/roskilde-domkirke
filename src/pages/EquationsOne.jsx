import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import InfoDot from '../components/InfoDot.jsx'; // Import the new component
import { Link } from 'react-router';
import './EquationsOne.sass';

export default function EquationsOne() {
	return (
		<>
			<HeaderNav />
			<div className="equations-one-page">
				<h1>Equations One</h1>
				<div className="equations-one-page__calculation-container">
					<InfoDot top="30%" left="20%">
						Equation 1 info...
					</InfoDot>

					<InfoDot top="50%" left="50%">
						Equation 2 info...
					</InfoDot>

					<InfoDot top="70%" left="80%">
						Equation 3 info...
					</InfoDot>
				</div>
				<p>Once you've solved these, click below to continue your adventure!</p>
				<Link to="/equationstwo" className="continue-button">
					Continue to Equations Two
				</Link>
			</div>
		</>
	);
}
