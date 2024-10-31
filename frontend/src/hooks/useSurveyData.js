/*
- the middle manager for handling survey data operations
- ensures QuizPage gets the right information in a user-friendly format
*/



import { useSurveyContext } from '../context/surveyContext.js';


// const localStorageKey = 'userSurveyData';

const useSurveyData = () => {
	const context  = useSurveyContext();

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

	return {
		currentQuestion: context.currentQuestion,
		responses: context.responses,
		handleResponse,
		goToPreviousQuestion: context.goToPreviousQuestion,
		goToNextQuestion: context.goToNextQuestion,
		isLastQuestion: context.isLastQuestion,
		isFirstQuestion: context.isFirstQuestion
	};
};

export default useSurveyData;
