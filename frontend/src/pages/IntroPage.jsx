import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
	const navigate = useNavigate();

	const handleSurveyStart = () => {
		navigate('/survey');
	};

	return (
		<div
			className="relative min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover"
			style={{ backgroundImage: "url('../assets/yale-background.jpg')" }}
		>
			{/* Overlay for reduced opacity background */}
			<div className="absolute inset-0 bg-black opacity-40"></div>

			{/* Content container */}
			<div className="relative bg-gray-100 bg-opacity-80 w-full max-w-3xl p-8 md:p-12 rounded-lg shadow-lg text-center space-y-6">
				<h1 className="text-3xl md:text-4xl font-bold text-gray-800">
					To give you a perfect year at Yale, we need your input!
				</h1>
				
				<p className="text-lg text-gray-600 mb-4">
          			Complete a survey highlighting:
        		</p>
        
				{/* Highlights section */}
				<div className="flex flex-wrap justify-center gap-3 text-base md:text-lg font-medium text-gray-700">
					<span className="bg-gray-200 py-2 px-4 rounded-full">
						Academic Goals
					</span>
					<span className="bg-gray-200 py-2 px-4 rounded-full">
						Hobbies & Interests
					</span>
					<span className="bg-gray-200 py-2 px-4 rounded-full">
						Sports & Skills
					</span>
					<span className="bg-gray-200 py-2 px-4 rounded-full">
						Social Connections
					</span>
					<span className="bg-gray-200 py-2 px-4 rounded-full">
						Personal Growth
					</span>
					<span className="bg-gray-200 py-2 px-4 rounded-full">
						Literally Anything Else
					</span>
				</div>

				{/* CTA Button */}
				<a
					href="/survey"
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
					onClick={handleSurveyStart}
				>
					Start Now
				</a>
			</div>
		</div>
	);
};

export default IntroPage;
