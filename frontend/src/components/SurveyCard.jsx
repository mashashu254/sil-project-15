import React from 'react';
import PropTypes from 'prop-types';

const SurveyCard = ({ question, options, onAnswer }) => {
	return (
		<div className="survey-card">
			<h3>{question}</h3>
			<div className="options">
				{options.map((option, index) => (
					<button key={index} onClick={() => onAnswer(option)}>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

SurveyCard.propTypes = {
	question: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onAnswer: PropTypes.func.isRequired,
};

export default SurveyCard;
