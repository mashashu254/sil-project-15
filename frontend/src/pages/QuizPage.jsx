/*
- display the questions, collect answers or responses and allow navigation
- in essence, the front desk hahaha
- currently underachieving; no displaying of quesitons, collecting answers or handling navigation 
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
		isFirstQuestion,
		isLastQuestion,
		isVarsityQuestion,
		isLastQuestionForNonVarsity
	} = useSurveyData();

	const navigate = useNavigate();
	
	if(!currentQuestion) return <div>Loading...</div>

	const handleNext = () => {
		if (isLastQuestion || isLastQuestionForNonVarsity()) {
			navigate('/plan');
		} else {
			goToNextQuestion();
		}
	};

	const getNextButtonLabel = () => {
		if (isLastQuestion) return 'Finish';
		if (isVarsityQuestion()) {
			return responses[currentQuestion.id] === 'No' ? "Finish" : "Next";
		}
		return "Next";
	}


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
					label={getNextButtonLabel()}
					onClick={handleNext}
					disabled={!responses[currentQuestion.id]}
				/>
			</div>
		</div>
		)
};

export default QuizPage;
