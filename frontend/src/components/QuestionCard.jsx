import React from 'react';
import useSurveyData from '../hooks/useSurveyData.js';

const QuestionCard = ({ question, onAnswerChange, currentResponse = {} }) => {
	const { responses, handleResponse } = useSurveyData(); 
	if (!question) {
		return null;
	}

	const isOptionSelected = (option) => {
		if (question.type === 'radio') {
			return responses[question.id] === option;
		} else if (question.type === 'checkbox') {
			return responses[question.id]?.includes(option) || false;
		}
		return false;
	}	

	const handleOptionChange = (option) => {
		if (question.type === 'radio') {
			handleResponse(question.id, option);
		} else if (question.type === 'checkbox') {
			const currentResponses = responses[question.id] || [];
			if (currentResponses.includes(option)) {
				handleResponse(question.id, currentResponses.filter((item) => item !== option));
			} else {
				handleResponse(question.id, [...currentResponses, option]);
			}
		}
	}

	return (
		<div className="question-card">
			{/* Main Question */}
			<h4 className="main-question">
				{question.question}
			</h4>

			{/* Options */}
			<div className="answer-container" id="answer-container">
				{question.options.map((option) => (
					<span key={option} className="option-label">
						<label key={option} className="option-label">
							<input
								type={question.type}
								name={question.id}
								value={option}
								checked={isOptionSelected(option)}
								onChange={() => handleOptionChange(option)}
								className={ `form-${question.type}`}
							/>
							<span className="option-text">
								{ option }
							</span>
						</label>
					</span>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;