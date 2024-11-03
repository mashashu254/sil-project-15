/*
- the middle manager for handling survey data operations
- ensures QuizPage gets the right information in a user-friendly format
*/

import { useSurveyContext } from '../context/surveyContext';

const useSurveyData = () => {
	const {
		currentQuestion,
		currentQuestionIndex,
		responses,
		setResponse,
		goToPreviousQuestion,
		goToNextQuestion,
		isFirstQuestion,
		isLastQuestion,
		totalQuestions
	} = useSurveyContext();

	const handleResponse = (questionId, answer) => {
		setResponse(questionId, answer)
	}

	const isVarsityQuestion = () => {
		return currentQuestion?.id === 'varsity';
	}

	const isLastQuestionForNonVarsity = () => {
		return isVarsityQuestion() && responses['varsity'] === 'No';
	}

	return {
		currentQuestionIndex,
		currentQuestion,
		responses,
		handleResponse,
		totalQuestions,
		goToPreviousQuestion,
		goToNextQuestion,
		isFirstQuestion,
		isLastQuestion,
		isVarsityQuestion,
		isLastQuestionForNonVarsity
	};
};

export default useSurveyData;
