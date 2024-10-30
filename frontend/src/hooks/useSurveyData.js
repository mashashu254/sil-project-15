/*
- the middle manager for handling survey data operations
- ensures QuizPage gets the right information in a user-friendly format
*/


import { useState } from 'react';
import {
	// SurveyProvider,
	useSurveyContext
} from '../context/surveyContext';


// const localStorageKey = 'userSurveyData';

const useSurveyData = () => {
	
	const [
		// currentQuestionIndex,
		setCurrentQuestionIndex
	] = useState(0);
	const [
		// responses,
		setResponses
	] = useState({});
	const [setIsCompleted] = useState(false);
	// const [generatedPlan, setGeneratedPlan] = useState('');
	// const [welcomeBack, setWelcomeBack] = useState(false);
	const { context } = useSurveyContext();

	// Load saved answers from localStorage
	// useEffect(() => {
	// 	const savedData = localStorage.getItem(localStorageKey);
	// 	const savedQuestionIndex = localStorage.getItem('currentQuestionIndex');
	// 	if (savedData) {
	// 		setResponses(savedData.responses || {});
	// 		setCurrentQuestionIndex(savedData.savedQuestionIndex || 0);
	// 		setGeneratedPlan(savedData.generatedPlan || '');
	// 		setWelcomeBack(true);
	// 	}
	// }, []);

	// Save progress to localStorage whenever responses or currentQuestionIndex change
	// useEffect(() => {
	// 	const dataToSave = {
	// 		responses,
	// 		currentQuestionIndex,
	// 		generatedPlan,
	// 	};
	// 	localStorage.setItem(localStorageKey, JSON.stringify(dataToSave));
	// }, [responses, currentQuestionIndex, generatedPlan]);

	// Move to the next question
	// const nextQuestion = () => {
	// 	const currentQuestion = questions[currentQuestionIndex];
	// 	if (currentQuestion.id === 'varsity' && responses['varsity'] === 'No') {
	// 		displayThankYou();
	// 		return;
	// 	}

	// 	setCurrentQuestionIndex((prevIndex) => {
	// 		if (currentQuestion.conditional && responses['varsity'] === 'Yes') {
	// 			return prevIndex + 1;
	// 		}
	// 		return prevIndex + 1;
	// 	});

	// 	if (currentQuestionIndex >= questions.length - 1) {
	// 		displayThankYou();
	// 	}
	// };

	const handleResponse = (response) => {
		context.setResponse(context.currentQuestion.id, response)
	}



	// Not so sure where this might be needed... But oh well
	const resetSurvey = () => {
		setCurrentQuestionIndex(0);
		setResponses({});
		setIsCompleted(false);
		localStorage.removeItem('surveyAnswers');
	};

	return {
		currentQuestion: context.currentQuestion,
		responses: context.responses,
		handleResponse,
		goToPreviousQuestion: context.goToPreviousQuestion,
		goToNextQuestion: context.goToNextQuestion,
		isLastQuestion: context.isLastQuestion,
		isFirstQuestion: context.isFirstQuestion,
		// generatedPlan,
		// welcomeBack,
		resetSurvey,
		// calculateProgress,
	};
};

export default useSurveyData;
