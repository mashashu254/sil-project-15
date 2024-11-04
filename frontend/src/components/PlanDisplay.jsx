import React, { useState } from 'react';
import { useSurveyContext } from '../context/surveyContext.js';
import { useAIAdvice } from '../hooks/useAIAdvice';



const PlanDisplay = ({ plan }) => {
	const { responses } = useSurveyContext() || {};
	const { generatePlan, generatedPlan, setGeneratedPlan } = useAIAdvice();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null); 

	const handleGeneratePlan = async () => {
		setIsLoading(true);
		setError(null);

		try {
			const plan = await generatePlan(responses);
			setGeneratedPlan(plan);
		} catch (error) {
			setError('Failed to generate plan. Please try again.');	
		} finally {
			setIsLoading(false);
		}

	}


	return (
		<div className="plan-display">
			<h2>
				A Plan For You 
			</h2>
			<button
				onClick={handleGeneratePlan} disabled={isLoading}
			>
				{isLoading ? 'Generating...' : 'Generate Plan'}
			</button>
			{error && <p className='error'>{error}</p>}
			{generatedPlan && <div dangerouslySetInnerHTML={{ __html: generatedPlan }}/>}
		</div>
	);
};

export default PlanDisplay;
