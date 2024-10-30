import React from 'react';
import useSurveyData from '../hooks/useSurveyData.js';

const QuestionCard = ({ question, onNext, welcomeBack, onAnswerChange, currentResponse = {} }) => {
	const { totalQuestions } = useSurveyData(); 
	if (!question) {
		return null;
	}

	const isLastQuestion = question.id === totalQuestions - 1;

	return (
		<div className="question-card">
			{/* Main Question */}
			<h3 className="main-question">
				{question.question}
			</h3>

			{/* Options */}
			<div className="answer-container" id="answer-container">
				{question.type === 'radio' && question.options.map((option) => (
					<span key={option} className="option-label">
						<label key={option} className="option-label">
							<input
								type="radio"
								name={question.id}
								value={option}
								checked={currentResponse[question.id] === option}
								onChange={(e) => onAnswerChange(e, question.id)}
								className="form-radio"
							/>
							<span className="option-text">
								{option.length > 50 ? (
									<span title="option">
										{ option.slice(0, 50)}...
									</span>
								) : (
									option
								)}
							</span>
						</label>
					</span>
				))}
				{question.type === 'checkbox' && question.options.map((option) => (
					<span key={option} className="option-label">
						<label key={option} className="option-label">
							<input
								type="checkbox"
								name={question.id}
								value={option}
								checked={Array.isArray(currentResponse[question.id]) && currentResponse[question.id].includes(option)}
								onChange={(e) => onAnswerChange(e.target, question.id, 'checkbox')}
								className="form-checkbox"
							/>
							<span className="option-text">
								{option.length > 50 ? (
									<span title="option">
										{ option.slice(0, 50)}...
									</span>
								) : (
									option
								)}
							</span>
						</label>
					</span>
				))}
			</div>

			{/* Next or Submit Button */}
			<button onClick={onNext} className="next-button">
				{isLastQuestion ? 'submit' : 'next'}
			</button>
		</div>
	);
};

export default QuestionCard;