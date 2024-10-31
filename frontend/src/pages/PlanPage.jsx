import React, { useState } from 'react';

const PlansPage = () => {
	const [expanded, setExpanded] = useState(null);

	const toggleAccordion = (index) => {
		setExpanded(expanded === index ? null : index);
	};

	return (
		<div className="plans-page">
			{/* Background overlay */}
			<div className="background-image"></div>

			{/* Content container */}
			<div className="content-container">
				<header className="page-header">
					<h1>Yalie Plan - Semester Summary</h1>
				</header>

				<section className="accordion-container">
					{['Month 1', 'Month 2', 'Month 3', 'Month 4'].map((month, index) => (
						<div key={index} className="accordion-item">
							<button className="accordion-header" onClick={() => toggleAccordion(index)}>
								{month}
								<span className={`arrow ${expanded === index ? 'expanded' : ''}`}>&#9660;</span>
							</button>
							{expanded === index && (
								<div className="accordion-content">
									<p>
										{/* Example of data that would be displayed for each month */}
										Summary of goals, events, and activities for {month}. Discover study plans,
										recommended hobbies, skill development opportunities, and more.
									</p>
								</div>
							)}
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default PlansPage;
