import React, { useState } from 'react';

const AdviceSection = ({ adviceOutput, requestAdvice, revisePlan }) => {
	const [reviseInput, setReviseInput] = useState('');

	const handleRevise = () => {
		revisePlan(reviseInput);
		setReviseInput('');
	};

	return (
		<div className="advice-section">
			<button onClick={requestAdvice}>
				Get AI-generated Personalized Advice
			</button>
			{adviceOutput && (
				<div className="advice" dangerouslySetInnerHTML={{ __html: adviceOutput }} />
			)}
			<div className="revise-plan">
				<h3>Revise Your Plan</h3>
				<input
					type="text"
					value={reviseInput}
					onChange={(e) => setReviseInput(e.target.value)}
					placeholder="Enter revision request..."
				/>
				<button onClick={handleRevise}>Revise Plan</button>
			</div>
		</div>
	);
};

export default AdviceSection;