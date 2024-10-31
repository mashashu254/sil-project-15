import React from 'react';

const LandingPage = () => {
	return (
		<div className="landing-page-container landing-page-flex-row">
			<div className="left-section">
				{/* <img src="../assets/oct-calender.webp" alt="Calendar Icon" className="calendar-image" /> */}
				<h1 className="welcome-title">
					Welcome to Yalie Plan
				</h1>
			

				<p className="cta-text">
					Discover your academic goals, hobbies, skills, and more to craft your ideal Yale experience.
				</p>
				<a href="/intro" className="cta-button">
					Let's Get To Know You Better
				</a>
			</div>
			<div className="right-section">
				<img src="../assets/yale-logo.jpg" alt="Yale Logo" className="yale-logo" />
			</div>
		</div>
	);
};

export default LandingPage;
