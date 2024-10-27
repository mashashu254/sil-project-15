import React from 'react';

// If using an image, import it directly for cache benefits
import backgroundImage from '../assets/yale-logo.jpg'; // update path as needed
// Uncomment below if using React Router for better navigation
// import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-blue-900 to-gray-100">

			{/* Content Section */}
			<div className="flex flex-col justify-center p-8 md:w-1/2 text-center md:text-left">
				<h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Yale Students</h1>
				<p className="text-lg text-gray-600 mb-6">
					Connect, explore, and discover all that Yale has to offer. Dive into your academic pursuits and
					passions, and get personalized recommendations tailored for you.
				</p>
				{/* Use Link for SPA navigation if using React Router */}
				<a
					href="/survey"
					aria-label="Get Started with Yale Survey"
					className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
				>
					Get Started
				</a>
			</div>

			{/* Image Section */}
			<div
				className="hidden md:block md:w-1/2 bg-cover bg-center"
				style={{ backgroundImage: `url(${backgroundImage})` }}
				role="img"
				aria-label="Yale Logo" // Provides a description for screen readers
			>
				{/* Ensure to replace 'backgroundImage' with the correct imported variable */}
			</div>
		</div>
	);
};

export default LandingPage;
