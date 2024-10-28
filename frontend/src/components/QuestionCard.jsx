import React from 'react';

const QuestionCard = ({ question, selectedOption, onAnswer }) => {
	return (
		<div>
			<p>{question.question}</p>
			<div className="questions" id="answer-container">
				{question.type === 'checkbox' && question.options.map((option) => (
						<label key={option}>
							<input
								type="radio"
								name={question.id}
								value={option}
								onChange={selectedOption === option}
							/>
							{option}
						</label>
					))}
				{question.type === 'checkbox' &&
					question.options.map((option) => (
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

export default QuestionCard;
