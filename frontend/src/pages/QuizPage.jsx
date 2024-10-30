/*
- display the questions, collect answers or responses and allow navigation
- in essence, the front desk hahaha
- currently underachieving; no displaying of quesitons, collecting answers or handling navigation 
*/


import React from 'react';
import useSurveyData from '../hooks/useSurveyData';
import QuestionCard from '../components/QuestionCard.jsx';
import ProgressBar from '../components/ProgressBar.jsx';
import SurveyButton from '../components/SurveyButton.jsx';


const QuizPage = () => {
	const {
		currentQuestion,
		responses,
		handleResponse,
		goToPreviousQuestion,
		goToNextQuestion,
		isLastQuestion,
		isFirstQuestion
		// calculateProgress
	} = useSurveyData()
	
	return (
		<div className='survey-container'>
			<ProgressBar />
			<QuestionCard
				question={currentQuestion}
				selectedOption = {responses[currentQuestion.id]}
				onAnswerChange={handleResponse}
				currentResponse={responses}
			/>
			<div className="navigation-buttons">
				<SurveyButton
				label="Previous"
				onClick={goToPreviousQuestion}
				disabled={isFirstQuestion}
				/>
				<SurveyButton
				label={isLastQuestion ? "Finish" : "Next"}
				onClick={goToNextQuestion}
				disabled={!responses[currentQuestion.id]}
				/>
			</div>
		</div>
		)
};

export default QuizPage;
