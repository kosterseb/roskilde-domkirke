import React from 'react';
import './InfoDot.sass';

export default function InfoDot({ top, left, children }) {
	return (
		<div className="info-dot" style={{ top, left }}>
			<div className="info-dot__tooltip">{children}</div>
		</div>
	);
}
