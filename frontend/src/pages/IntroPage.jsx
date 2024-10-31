import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
	const navigate = useNavigate();

	const handleSurveyStart = () => {
		navigate('/survey');
	};

	return (
		<div className="intro-page-container">
			{/* Overlay for reduced opacity background */}
			<div className="overlay"></div>

			{/* Content container */}
			<div className="content-container">
				<h1 className="intro-title">
					For a Perfect Year at Yale, We Need Your Input
				</h1>

				<p className="subtitle">Complete a survey highlighting:</p>

				{/* Highlights section */}
				<div className="highlights-container">
					<span className="highlight-item">Academic Goals</span>
					<span className="highlight-item">Hobbies & Interests</span>
					<span className="highlight-item">Sports & Skills</span>
					<span className="highlight-item">Social Connections</span>
					<span className="highlight-item">Personal Growth</span>
					<span className="highlight-item">Literally Anything Else</span>
				</div>

				{/* CTA Button */}
				<button className="cta-button" onClick={handleSurveyStart}>
					Gimme That Survey
				</button>
			</div>
		</div>
	);
};

export default IntroPage;
