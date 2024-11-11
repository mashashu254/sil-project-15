import React, { useState} from 'react';
import { useSurveyContext } from '../context/surveyContext';
import { useAIAdvice } from '../hooks/useAIAdvice';

const PlanPage = () => {
	const { responses } = useSurveyContext() || {};
	const { generatePlan, generatedPlan } = useAIAdvice();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleGeneratePlan = () => { 
		setIsLoading(true);
		setError(null);
		try {
			generatePlan(responses);
		} catch (error) {
			setError('An error occurred during plan generation. Please try again.');
			console.error('Plan generation error:\n', error);
		} finally {
			setIsLoading(false);
		}
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
						{generatedPlan && <div className='generated-plan' dangerouslySetInnerHTML={{__html: generatedPlan}}/>}
						<button
							onClick={handleGeneratePlan}
							disabled={isLoading}
							className='cta-button'
						>
							{isLoading ? 'Generating...' : 'Generate Plan'}
						</button>
					
						{error && <p className='error'>{error}</p>}
				</div>
			</div>
		</div>
	);
};

export default PlanPage;
