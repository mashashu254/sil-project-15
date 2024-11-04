import React from 'react';
import PlanDisplay from '../components/PlanDisplay.jsx';


const PlanPage = () => {
	return (
		<div className="plan-page">
			{/* Background overlay */}
			<div className="background-image"></div>

			{/* Content container */}
			<div className="content-container">
				<header className="page-header">
					<h1>Your Yalie Semester Plan</h1>
				</header>

				<div className="page-content">
					<PlanDisplay />
				</div>
			</div>
		</div>
	);
};

export default PlanPage;
