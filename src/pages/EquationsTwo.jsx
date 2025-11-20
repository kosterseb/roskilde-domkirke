import React from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';
import InfoDot from '../components/InfoDot.jsx'; // Import the new component
import './EquationsTwo.sass';

export default function EquationsTwo() {
	return (
		<>
			<HeaderNav />
			<div className="equations-two-page">
				<h1>Equations Two</h1>
				<div className="equations-two-page__calculation-container">
					<InfoDot top="33.5%" left="55%">
						<p>Solve for x: 2x + 3 = 11</p>
					</InfoDot>

					<InfoDot top="55%" left="65%">
						<p>Solve for y: 5y - 4 = 16</p>
					</InfoDot>

					<InfoDot top="40%" left="80%">
						<p>Solve for z: 3z + 2 = 14</p>
					</InfoDot>
					<p>
						Welcome to the second set of equations! Solve these to continue your
						adventure.
					</p>
				</div>

				<p>
					Once you've solved these, click below to proceed to the end of your
					journey!
				</p>
				<Link to="/end" className="continue-button">
					Continue to End
				</Link>
			</div>
		</>
	);
}
