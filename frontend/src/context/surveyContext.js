/*
- the storage room for holding all the survey data
- making it available globally, ensuring consistent state across the app
*/
import React, { createContext, useContext, useState } from 'react';
import { questions } from '../data/surveyQuestions';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [responses, setResponse] = useState({});

	const value = {
		currentQuestion: questions[currentQuestionIndex],
		responses,
		setResponse: (questionId, response) => {
			setResponse((prevResponses) => ({
				...prevResponses, [questionId]: response
			}))
		},
		goToPreviousQuestion: () => setCurrentQuestionIndex(prevResponses => Math.max(prevResponses - 1, 0)),
		goToNextQuestion: () => setCurrentQuestionIndex(prevResponses => Math.min(prevResponses + 1, questions.length - 1)),
		isLastQuestion: currentQuestionIndex === questions.length - 1,
		isFirstQuestion: currentQuestionIndex === 0,
 	}

	return (
		<SurveyContext.Provider value={value}>{ children }</SurveyContext.Provider>
	);
};
export const useSurveyContext = () => useContext(SurveyContext);
