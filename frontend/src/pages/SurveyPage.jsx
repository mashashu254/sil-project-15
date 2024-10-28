import React, { useState } from 'react';
import { questions } from '../data/questions'; // Import your JSON file
import SurveyCard from '../components/QuestionCard';

const SurveyPage = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [answers, setAnswers] = useState({});

	const handleAnswer = (answer) => {
		setAnswers({ ...answers, [questions[currentQuestionIndex].id]: answer });
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
		} else {
			console.log(answers);
		}
	};

	const currentQuestion = questions[currentQuestionIndex];

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 md:px-0">
			<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 md:p-12">
				<h1 className="text-2xl font-bold mb-4">Survey</h1>
				{/* Progress Indicator */}
				<div className="flex justify-between items-center mb-8">
					<button className="text-gray-500 hover:text-gray-700 text-sm">← Previous</button>
					<div className="flex space-x-2 w-3/4">
						<div className="w-1/6 h-1 bg-yellow-500 rounded-full"></div>
						<div className="w-1/6 h-1 bg-yellow-500 rounded-full"></div>
						<div className="w-1/6 h-1 bg-gray-300 rounded-full"></div>
						<div className="w-1/6 h-1 bg-gray-300 rounded-full"></div>
						<div className="w-1/6 h-1 bg-gray-300 rounded-full"></div>
						<div className="w-1/6 h-1 bg-gray-300 rounded-full"></div>
					</div>
					<div className="text-blue-500 font-bold">Hobbies</div>
				</div>

				{/* Question */}

				{currentQuestion && (
					<SurveyCard
						question={currentQuestion.question}
						options={currentQuestion.options}
						onAnswer={handleAnswer}
					/>
				)}

				<div className="mt-4 text-sm text-gray-500">
					Question {currentQuestionIndex + 1} of {questions.length}
				</div>

				{/* Next Question Button */}
				<div className="mt-8 text-center">
					<button
						className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
						onClick={() => alert('Proceed to the next question!')}
					>
						Next Question →
					</button>
				</div>
			</div>
		</div>
	);
};

export default SurveyPage;
