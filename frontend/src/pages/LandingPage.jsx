import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
	const [error] = useState(null);
	const navigate = useNavigate();


	return (
		<div className="landing-page-container landing-page-flex-row">
			<div className="left-section">
				<h1 className="welcome-title">
					Welcome to Yalie Plan
				</h1>

				<p className="cta-text">
					Discover your academic goals, hobbies, skills, and more to craft your ideal Yale experience.
				</p>
				<button
					className='cta-button'
					onClick={() => navigate('/intro')}
				>
					Let's Get to Know You Better
				</button>
				{ error && <p className="error-message">{ error }</p>}
			</div>
			<div className="right-section">
				<img src={`/assets/yale-logo.png`} alt="Yale Logo" className="yale-logo" />
			</div>
		</div>
	);
};

export default LandingPage;