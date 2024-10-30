import React, { useState } from 'react';

const PlanDisplay = ({ plan }) => {
	const [expanded, setExpanded] = useState(null);

	const toggleAccordion = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	// Assuming the plan is structured as an array of monthly plans
	const monthlyPlans = [
		{ title: 'Month 1', content: plan.month1 },
		{ title: 'Month 2', content: plan.month2 },
		{ title: 'Month 3', content: plan.month3 },
		{ title: 'Month 4', content: plan.month4 },
	];

	return (
		<section className="accordion-container">
			{monthlyPlans.map((month, index) => (
				<div key={index} className="accordion-item">
					<button className="accordion-header" onClick={() => toggleAccordion(index)}>
						{month.title}
						<span className={`arrow ${expanded === index ? 'expanded' : ''}`}>
							&#9660;
						</span>
					</button>
					{expanded === index && (
						<div className="accordion-content">
							<div dangerouslySetInnerHTML={{ __html: month.content }} />
						</div>
					)}
				</div>
			))}
		</section>
	);
};

export default PlanDisplay;
