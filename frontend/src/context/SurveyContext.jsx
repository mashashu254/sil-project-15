import React, { createContext, useContext, useState } from 'react';
import { questions } from '../data/questions';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState({});
	const [isCompleted, setIsCompleted] = useState(false);

	const currentQuesiton = questions[currentQuestionIndex];
	const totalQuestions = questions.length;

	const handleAnswer = (quesitonId, answer) => {
		setAnswers(prevAnswers => ({
			...prevAnswers,
			[quesitonId]: answer
		}));
	}

	// Handle response changes
	const handleInputChange = (event) => {
		const { name, value, type } = event.target;
		if (type === 'checkbox') {
		setAnswers((prevResponses) => ({
			...prevResponses,
			[name]: prevResponses[name] ? [...prevResponses[name], value] : [value],
		}));
		} else {
		setAnswers((prevResponses) => ({ ...prevResponses, [name]: value }));
		}
  };

	const goToPreviousQuestion = () => {
		if (currentQuestionIndex > 0) {
			setCurrentQuestionIndex(currentQuestionIndex - 1);
		}
	}

	const goToNextQuestion = () => {
		if (currentQuestionIndex < totalQuestions - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		}
	}

	const calculateProgress = () => {
		return ((currentQuestionIndex + 1) / totalQuestions) * 100;	
	}

    return (
		<SurveyContext.Provider value={{
			currentQuestionIndex,
			currentQuesiton,
			totalQuestions, 
			answers,
			isCompleted,
			handleAnswer,
			handleInputChange,
			goToPreviousQuestion,
			goToNextQuestion,
			calculateProgress
		}}>
            {children}
        </SurveyContext.Provider>
    );
};

export const useSurveyContext = () => useContext(SurveyContext);
