import React from 'react';

const QuestionCard = ({ question, onNext, welcomeBack, onAnswerChange, currentResponse = {} }) => {
	if (!question) {
		return null;
	}

	const isLastQuestion = question.id === totalQuestions - 1;

	return (
		<div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-xl mx-auto">
			{/* Welcome Back Message */}
			{welcomeBack && <p className="welcome-back">
				Welcome back! Let's pick up where you left off.
			</p>}


			{/* Main Question */}
			<h3 className='text-xl font-semibold mb-4 text-gray-800'>
				{question.question}
			</h3>

			{/* Options */}
			<div className="space-y-2" id="answer-container">
				{question.type === 'radio' && question.options.map((option) => (
					<span key={option} className="flex items-center">
						<label key={option} className='flex items-center w-full cursor-pointer'>
							<input
								type="radio"
								name={question.id}
								value={option}
								checked={currentResponse[question.id]=== option}
								onChange={(e) => onAnswerChange(e, question.id)}
								className='form-radio text-blue-600 h-4 w-4 mr-3'
							/>

							<span className='text-gray-700'>
								{option.length > 50 ? (
									<span title='option'>
										{ option.slice(0, 50)}...
									</span>
								) : (
									{option}
								)}
							</span>
						</label>
					</span>
				))}
				{question.type === 'checkbox' && question.options.map((option) => (
					<span key={option} className='flex items-center'>
						<label key={option} className='flex items-center w-full cursor-pointer'>
							<input
								type="checkbox"
								name={question.id}
								value={option}
								checked={Array.isArray(currentResponse[question.id]) && currentResponse[question.id].includes(option)}
								onChange={(e) => onAnswerChange(e.target, question.id, 'checkbox')}
								className='form-checkbox text-blue-600 h-4 w-4 mr-3'
							/>
							<span className='text-gray-700'>
								{option.length > 50 ? (
									<span title='option'>
										{ option.slice(0, 50)}...
									</span>
								) : (
									{option}
								)}
							</span>
						</label>
					</span>
				))}
			</div>

			 {/* Next or Submit Button */}
			<button onClick={onNext} className="capitalize">
				{isLastQuestion ? 'Submit' : 'Next'}
			</button>
		</div>
	);
};

export default QuestionCard;
