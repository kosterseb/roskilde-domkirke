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
					<InfoDot top="32%" left="40.2%">
						Equation 1 info...
					</InfoDot>

					<InfoDot top="60%" left="65%">
						Equation 2 info...
					</InfoDot>

					<InfoDot top="89%" left="60%">
						Equation 3 info...
					</InfoDot>
					<p>
						Welcome to the second set of equations! Solve these to continue your
						adventure.
					</p>
					<ul>
						<li>Solve for x: 2x + 3 = 11</li>
						<li>Solve for y: 5y - 4 = 16</li>
						<li>Solve for z: 3z + 2 = 14</li>
					</ul>
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
