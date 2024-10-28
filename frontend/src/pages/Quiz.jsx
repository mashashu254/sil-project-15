import React, { useState } from 'react';
import useSurveyData from '../hooks/useSurveyData.js';
import QuestionCard from '../components/QuestionCard.jsx';
import PlanDisplay from '../components/PlanDisplay.jsx';
import AdviceSection from '../components/AdviceSection.jsx';


import {
	academicLinks,
	careerGuides,
	varsityResources,
	socialLifeOptions,
	extracurricularClubs,
} from '../../temp_plan.js'; // Import the rules



const Quiz = () => {
	const {
		currentQuestion,
		answers,
		isCompleted,
		generatePlan,
		generatedPlan,
		adviceOutput,
		handleAnswer,
		goToNextQuestion,
		requestAdvice,
		revisePlan
	} = useSurveyData()

	const [reviseInput, setReviseInput] = useState('');

	if (!isCompleted) {
		return (
			<div className='survey-container'>
				<QuestionCard
					currentQuestion={currentQuestion}
					answers={answers}
					onAnswer={handleAnswer}
				/>
				<button onClick={ goToNextQuestion } className="capitalize"> next </button>
			</div>
		)
	}


	// Display questions dynamically
	const renderQuestion = () => {
		const currentQuestion = questions[currentQuestionIndex];
		if (!currentQuestion) return null;

		return (
			<div>
				<p>{currentQuestion.question}</p>
				<div className="questions" id="answer-container">
					{currentQuestion.type === 'radio' &&
						currentQuestion.options.map((option) => (
							<label key={option}>
								<input
									type="radio"
									name={currentQuestion.id}
									value={option}
									onChange={handleInputChange}
								/>
								{option}
							</label>
						))}
					{currentQuestion.type === 'checkbox' &&
						currentQuestion.options.map((option) => (
							<label key={option}>
								<input
									type="checkbox"
									name={currentQuestion.id}
									value={option}
									onChange={handleInputChange}
								/>
								{option}
							</label>
						))}
				</div>
			</div>
		);
	};


	// Move to the next question
	const nextQuestion = () => {
		const currentQuestion = questions[currentQuestionIndex];

		// Check if the user answered "No" to the varsity question
		if (currentQuestion.id === 'varsity' && responses['varsity'] === 'No') {
			// Jump to the thank you page directly
			displayThankYou();
			return;
		}

		// Move to the next question
		setCurrentQuestionIndex((prevIndex) => {
			// If the current question is conditional and the response is not valid, skip it
			if (currentQuestion.conditional && responses['varsity'] === 'Yes') {
				return prevIndex + 1;
			}
			return prevIndex + 1;
		});

		// Check if the current question index is at the end of the questions
		if (currentQuestionIndex >= questions.length - 1) {
			displayThankYou();
		}
	};

	// Store responses
	const handleInputChange = (event) => {
		const { name, value, type } = event.target;
		if (type === 'checkbox') {
			setResponses((prevResponses) => ({
				...prevResponses,
				[name]: prevResponses[name] ? [...prevResponses[name], value] : [value],
			}));
		} else {
			setResponses((prevResponses) => ({ ...prevResponses, [name]: value }));
		}
	};
	


	// Display the final thank you message and generated plan
	const displayThankYou = () => {
		// setGeneratedPlan(tempPlan);
		generatePlan();
		setShowAdvice(true);
		setCurrentQuestionIndex(questions.length); // Move to the end to prevent further questions
	};

	

	// Revise the generated plan based on user input
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
	);
};

export default Quiz;
