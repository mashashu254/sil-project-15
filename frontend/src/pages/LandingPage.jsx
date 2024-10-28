import React from 'react';
import '../App.css';
import Header from '../components/Header';

const LandingPage = () => {
	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-100 to-white p-8">

			<Header />
			{/* Left Content Section */}
			<div className="flex flex-col items-start justify-center md:w-1/2 text-center md:text-left space-y-6">
				

				{/* Welcome Message */}
				<h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Welcome to Yalie Plan</h1>

				{/* Calendar Image */}
				<img src="../assets/oct-calender.webp" alt="Calendar Icon" className="w-40 h-40 mx-auto md:ml-0" />

				{/* CTA Text */}
				<p className="text-lg md:text-xl text-gray-600 mt-4 max-w-md">
					Discover your academic goals, hobbies, skills, and more to craft your ideal Yale experience.
				</p>

				{/* CTA Button */}
				<a
					href="/survey"
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg transition duration-300 ease-in-out transform hover:scale-105"
				>
					Let's Get To Know You Better
				</a>
			</div>

			{/* Right Content Section with Yale Y logo */}
			<div className="flex items-center justify-center md:w-1/2 p-4">
				<img src="../assets/yale-logo.jpg" alt="Yale Logo" className="w-32 h-32 hidden md:block" />
			</div>
		</div>
	);
};

export default LandingPage;
