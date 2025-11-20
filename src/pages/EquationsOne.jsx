import React, { useState } from 'react';
import HeaderNav from '../components/HeaderNav.jsx';
import InfoDot from '../components/InfoDot.jsx'; // Import the new component
import { Link } from 'react-router';
import './EquationsOne.sass';

export default function EquationsOne() {
	const [ep1Message, setEp1Message] = useState('');
	const [ep2Message, setEp2Message] = useState('');
	const [ep3Message, setEp3Message] = useState('');

	function handleSubmitEq1(event) {
		event.preventDefault();
		const answer = event.target.answerInput.value;
		if (answer === '0.12') {
			setEp1Message(
				'Correct! - Fun fact: All the beams are made from Douglas fir.'
			);
		} else {
			setEp1Message('Incorrect, please try again.');
		}
	}

	function handleSubmitEq2(event) {
		event.preventDefault();
		const answer = event.target.answerInput.value;
		if (answer === '35') {
			setEp2Message(
				'Correct! - Fun fact: 38 kings and queens are buried here. Including Harald Bluetooth.'
			);
		} else {
			setEp2Message('Incorrect, please try again.');
		}
	}

	function handleSubmitEq3(event) {
		event.preventDefault();
		const answer = event.target.answerInput.value;
		if (answer === '135') {
			setEp3Message(
				'Correct! - Fun fact: The beams attached to the walls are called flying buttresses.'
			);
		} else {
			setEp3Message('Incorrect, please try again.');
		}
	}

	return (
		<>
			<HeaderNav />
			<div className="equations-one-page">
				<h1>Equations One</h1>
				<div className="equations-one-page__calculation-container">
					<InfoDot top="21%" left="20%">
						<p>What is the volume of the wooden beam?</p>
						<p>V = l * b * h</p>
						<p>Given: l = 2m, b = 0.2m, h = 0.3m</p>
						<p>Calculate the volume using the formula above.</p>
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

					<InfoDot top="50%" left="51%">
						<p>What is the angle of C & B?</p>
						<p>
							Given: triangle ABC is isosceles, and that the angle opposite the
							base is 110°.
						</p>
						<p>We know that the sum of the angles in a triangle is 180°.</p>
						<form onSubmit={handleSubmitEq2}>
							<input
								type="text"
								placeholder="Your answer here"
								className="input"
								name="answerInput"
							/>
							<input type="submit" value="Submit" className="submitBtn" />
						</form>
						{ep2Message && <p className="feedback-message">{ep2Message}</p>}
					</InfoDot>

					<InfoDot top="75%" left="80%">
						<p>What is the weight of the wooden beam?</p>
						<p>Given: Height 30cm Width 15cm Length 5m density 530kg/m</p>
						<p>
							Use the following formula to calculate volume: Length x Width x
							Height.
						</p>
						<p>
							Then calculate weight using density Weight = Density * Volume.
						</p>
						<form onSubmit={handleSubmitEq3}>
							<input
								type="text"
								placeholder="Your answer here"
								className="input"
								name="answerInput"
							/>
							<input type="submit" value="Submit" className="submitBtn" />
						</form>
						{ep3Message && <p className="feedback-message">{ep3Message}</p>}
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
