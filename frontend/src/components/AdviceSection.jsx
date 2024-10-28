import React from 'react';

const AdviceSection = ({ adviceOutput, requestAdvice }) => (
	<div className="advice-section">
		<button onClick={requestAdvice}>Get AI-generated personalized advice</button>
		<div className="advice" dangerouslySetInnerHTML={{ __html: adviceOutput }} />
	</div>
);

export default AdviceSection;