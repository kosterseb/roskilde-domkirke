import React, { useState } from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import { Link } from 'react-router';
import InfoDot from '../components/InfoDot.jsx'; // Import the new component
import './EquationsTwo.sass';

export default function EquationsTwo() {
	const [ep1Message, setEp1Message] = useState('');

	function handleSubmitEq1(event) {
		event.preventDefault();
		const answer = event.target.answerInput.value;
		if (answer === '5') {
			setEp1Message(
				'Correct! - Fun fact: The cathedral consists of approximately 2.5 million red bricks.'
			);
		} else {
			setEp1Message('Incorrect, please try again.');
		}
	}
	return (
		<>
			<HeaderNav />
			<div className="equations-two-page">
				<h1>Equations Two</h1>
				<div className="equations-two-page__calculation-container">
					<InfoDot top="33.5%" left="55%">
						<p>Find the hypotenuse of the triangle?</p>
						<p>Given: A right triangle with legs (a & b) of 3m and 4m</p>
						<p>
							Find the hypotenuse using the Pythagorean theorem. a² + b² = c²
						</p>
						<form onSubmit={handleSubmitEq1}>
							<input
								type="text"
								placeholder="Your answer here"
								className="input"
								name="answerInput"
							/>
							<input type="submit" value="Submit" className="submitBtn" />
						</form>
						{ep1Message && <p className="feedback-message">{ep1Message}</p>}
					</InfoDot>

					<InfoDot top="55%" left="65%">
						<p>
							The amazing roof structure is built from 350m³ of timber. Mostly
							douglas fir but also oak.
						</p>
					</InfoDot>

					<InfoDot top="40%" left="80%">
						<p>
							The Cathedral is one of the most important monuments in Denmark.
						</p>
						<p>The Cathedral was built in the 12th and 13th centuries</p>
						<p>
							-and has been the burial church of the royal family for centuries.
						</p>
					</InfoDot>
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
