/*
- the middle manager for handling survey data operations
- ensures QuizPage gets the right information in a user-friendly format
*/

import { useSurveyContext } from '../context/surveyContext';

const useSurveyData = () => {
	const context  = useSurveyContext();


	const handleResponse = (answer) => {
		context.setResponse(context.currentQuestion.id, answer)
	}

	return {
		currentQuestionIndex: context.currentQuestionIndex,
		currentQuestion: context.currentQuestion,
		responses: context.responses,
		handleResponse,
		totalQuestions: context.totalQuestions,
		goToPreviousQuestion: context.goToPreviousQuestion,
		goToNextQuestion: context.goToNextQuestion,
		isLastQuestion: context.isLastQuestion,
		isFirstQuestion: context.isFirstQuestion
	};
};

export default useSurveyData;
