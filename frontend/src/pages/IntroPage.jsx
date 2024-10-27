import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
	const navigate = useNavigate();

	const handleSurveyStart = () => {
		navigate('/survey');
	}

	return (
		<div className="h-screen flex justify-center items-center bg-gray-100">
			<div className="max-w-lg text-center">
				<h1 className="text-4xl font-bold mb-4">Take our survey and help us improve!</h1>
				<p className="text-lg mb-8">
					By taking our survey, you'll be helping us understand what matters most to you.
					Your input will help us create a better experience for everyone.
				</p>
				<button
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 animate-pulse hover:animate-none hover:shadow-glow"
					onClick={handleSurveyStart}
				>
					Gimme that survey now!
				</button>
			</div>
		</div>
	);
};

export default IntroPage;
