import React from 'react';

const PlanDisplay = ({ plan, additionalAdvice }) => {
	return (
		<div className="plan-display">
			<h2>
				A Plan For You 
			</h2>
			<div dangerouslySetInnerHTML={{ __html: plan }} />

			{additionalAdvice && (
				<div className="additional-advice">
					<h3>
						Bonus Plan Advice
					</h3>
					<div dangerouslySetInnerHTML={{ __html: additionalAdvice }} />
				</div>
			)}
		</div>
	);
};

export default PlanDisplay;
