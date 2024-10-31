import React from 'react';

const PlanDisplay = ({ plan }) => (
	<div className="generated_plan">
		<h3>Your YaliePlan:</h3>
		<div className="plan" dangerouslySetInnerHTML={{ __html: plan }} />
	</div>
);

export default PlanDisplay;
