/*
- the storage room for holding all the survey data
- making it available globally, ensuring consistent state across the app
*/
import React, { createContext, useContext, useState } from 'react';
import { questions } from '../data/surveyQuestions';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [responses, setResponses] = useState({});


	const goToPreviousQuestion = () => setCurrentQuestionIndex(prevIndex => Math.max(prevIndex - 1, 0));
	const goToNextQuestion = () => setCurrentQuestionIndex(prevIndex => Math.min(prevIndex + 1, questions.length - 1));
	const setResponse = (questionId, response) => {setResponses(prevResponses => ({...prevResponses, [questionId]: response }))};
	const value = {
		currentQuestionIndex,
		currentQuestion: questions[currentQuestionIndex],
		responses,
		setResponse,
		totalQuestions: questions.length,
		goToPreviousQuestion,
		goToNextQuestion,
		isLastQuestion: currentQuestionIndex === questions.length - 1,
		isFirstQuestion: currentQuestionIndex === 0,
 	}

	return (
		<SurveyContext.Provider value={value}>
			{children}
		</SurveyContext.Provider>
	);
};
export const useSurveyContext = () => useContext(SurveyContext);
