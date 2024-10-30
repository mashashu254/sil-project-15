import React, { useState } from 'react';
import AdviceSection from '../components/AdviceSection.jsx';
import PlanDisplay from '../components/PlanDisplay.jsx';
import { useAIAdvice } from '../hooks/useAIAdvice';

const PlanPage = () => {
	const { adviceOutput, requestAdvice, revisePlan, generatedPlan } = useAIAdvice();

	const [expanded, setExpanded] = useState(null);

	const toggleAccordion = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<div className="plans-page">
			{/* Background overlay */}
			<div className="background-image"></div>

			{/* Content container */}
			<div className="content-container">
				<header className="page-header">
					<h1>Your Yalie Plan - Semester Summary</h1>
				</header>

				<PlanDisplay plan={generatedPlan} />

				<AdviceSection
					adviceOutput={adviceOutput}
					requestAdvice={requestAdvice}
					revisePlan={revisePlan}
				/>
			</div>
		</div>
	);
};

export default PlanPage;
