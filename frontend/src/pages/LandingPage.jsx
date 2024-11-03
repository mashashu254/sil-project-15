import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkYaleAuthentication } from '../services/authService';
const LandingPage = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleAuthentication = async () => {
		setIsLoading(true);
		setError(null)
		try {
			const isAuthenticated = await checkYaleAuthentication();
			if (isAuthenticated) {
				navigate('/intro')
			} else {
				navigate('/login')
			}
		} catch (err) {
			setError('An error occurred during authentication. Please try again.');
			console.error('Authentication error:', err);
		} finally {
			setIsLoading(false);
		}
	};


	return (
		<div className="landing-page-container landing-page-flex-row">
			<div className="left-section">
				<img src="/assets/oct-calender.webp" alt="Calendar Icon" className="calendar-image" />
				<h1 className="welcome-title">
					Welcome to Yalie Plan
				</h1>

				<p className="cta-text">
					Discover your academic goals, hobbies, skills, and more to craft your ideal Yale experience.
				</p>
				<button
					onClick={handleAuthentication}
					disabled={isLoading}
					className="cta-button"
				>
					{isLoading ? 'Authenticating...' : "Let's Get to Know You Better"}
				</button>
				{error && <p className="error-message">{error}</p>}
			</div>
			<div className="right-section">
				<img src="/assets/yale-logo.jpg" alt="Yale Logo" className="yale-logo" />
			</div>
		</div>
	);
};

export default LandingPage;
