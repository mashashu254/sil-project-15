import React, { useState, useEffect } from 'react';
import { useAIAdvice } from '../hooks/useAIAdvice';
import { useSurveyContext } from '../context/surveyContext.js';
import PlanDisplay from '../components/PlanDisplay.jsx';

const PlanPage = () => {
	const { responses } = useSurveyContext();
	const [generatePlan, generatedPlan, requestAdvice, adviceOutput] = useAIAdvice();
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		const loadPlanAndAdvice = async () => {
			setIsLoading(true);
			try {
				await generatePlan(responses);
				await requestAdvice(responses);
				// assuming requestAdice is also called here if needed
			} catch (error) {
				console.error('Error generating plan:\n', error);
			} finally {
				setIsLoading(false);
			}
		}
		loadPlanAndAdvice();
	}, [responses, generatePlan, requestAdvice])

	if(isLoading) {
		return <div>Getting your personalized semester plan...</div>;
	}

	return (
		<div className="plan-page">
			{/* Background overlay */}
			<div className="background-image"></div>

			{/* Content container */}
			<div className="content-container">
				<header className="page-header">
					<h1>Your Yalie Semester Plan</h1>
				</header>

				<div className="page-content">
					<PlanDisplay plan={generatedPlan} additionalAdvice={adviceOutput} />
				</div>
			</div>
		</div>
	);
};

export default PlanPage;
