import React, { useState } from 'react';
import useSurveyData from '../hooks/useSurveyData.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import PlanDisplay from '../components/PlanDisplay.jsx';
import AdviceSection from '../components/AdviceSection.jsx';


const QuizPage = () => {
	const {
		currentQuestion,
		answers,
		isCompleted,
		generatedPlan,
		adviceOutput,
		handleAnswer,
		goToNextQuestion,
		goToPreviousQuestion,
		totalQuestions,
		calculateProgress,
		requestAdvice,
		revisePlan
	} = useSurveyData()

	const [reviseInput, setReviseInput] = useState('');

	

	if (!isCompleted) {
		return (
			<div className='survey-container'>
				<ProgressBar progress={calculateProgress()} />
				<QuestionCard
					question={currentQuestion}
					selectedOption = {answers[currentQuestion.id]}
					onAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
				/>
				<button onClick={goToNextQuestion} className="capitalize">
					{currentQuestion.id === totalQuestions - 1 ? 'Submit' : 'Next'}
				</button>
			</div>

			
		)
	} else {
		// To render completion page or generate plan
		return (
			<div className="results-container">
			<PlanDisplay plan={generatedPlan} />
			<div className='revise-plan'>
				<h3>
					Revise Your Plan
				</h3>
				<input
					type='text'
					value={reviseInput}
					onChange={(e) => setReviseInput(e.target.value)}
					placeholder='Enter revision request...'
				/>
				<button onClick={() => revisePlan(reviseInput)}>
					Revise Plan
				</button>
			</div>

			<AdviceSection
				adviceOutput={adviceOutput}
				requestAdvice={requestAdvice}
			/>
		</div>
		)
	}
};

export default QuizPage;
