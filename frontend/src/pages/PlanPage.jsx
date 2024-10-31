import React, { useState, useEffect } from 'react';
import { useAIAdvice } from '../hooks/useAIAdvice';
import { useSurveyContext } from '../context/surveyContext.js';
import PlanDisplay from '../components/PlanDisplay.jsx';

const PlanPage = () => {
	const context = useSurveyContext();
	const { responses } = context || {};
	const {
		generatePlan,
		generatedPlan,
		requestAdvice,
		adviceOutput,
		revisePlan,
		reviseInput,
		setReviseInput,
		isRevising
	} = useAIAdvice();
	const [isLoading, setIsLoading] = useState(true);


	useEffect(() => {
		const loadPlanAndAdvice = async () => {
			setIsLoading(true);
			try {
				if(generatePlan) await generatePlan(responses);
				if(requestAdvice) await requestAdvice(responses);
			} catch (error) {
				console.error('Error generating plan or advice:\n', error);
			} finally {
				setIsLoading(false);
			}
		}
		loadPlanAndAdvice();
	}, [responses, generatePlan, requestAdvice])

	const handleRevision = async (e) => {
			e.preventDefault();
			await revisePlan();
  	};

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
					{generatedPlan && <PlanDisplay plan={generatedPlan} additionalAdvice={adviceOutput} />}

					<div className="revision-section">
						<h2>Need changes? Revise your plan:</h2>
						<form onSubmit={handleRevision}>
						<textarea
							value={reviseInput}
							onChange={(e) => setReviseInput(e.target.value)}
							placeholder="Enter your revision request here..."
						/>
						<button type="submit" disabled={isRevising || !reviseInput.trim()}>
							{isRevising ? 'Revising...' : 'Revise Plan'}
						</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanPage;
