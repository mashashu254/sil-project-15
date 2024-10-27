import '../../App.css';
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { questions } from './questions.js';
import { API_KEY } from '../../api_key.js';
import {
	academicLinks,
	careerGuides,
	varsityResources,
	socialLifeOptions,
	extracurricularClubs,
} from '../../temp_plan.js'; // Import the rules

const apiKey = API_KEY || 'dummy_key';


const Quiz = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [responses, setResponses] = useState({});
	const [generatedPlan, setGeneratedPlan] = useState('');
	const [showAdvice, setShowAdvice] = useState(false);
	const [adviceOutput, setAdviceOutput] = useState('');
	const [reviseInput, setReviseInput] = useState('');
	const [error, setError] = useState('');

	// Move to the next question
	const nextQuestion = () => {
		const currentQuestion = questions[currentQuestionIndex];

		// Check if the user answered "No" to the varsity question
		if (currentQuestion.id === 'varsity' && responses['varsity'] === 'No') {
			// Jump to the thank you page directly
			displayThankYou();
			return;
		}

		// Move to the next question
		setCurrentQuestionIndex((prevIndex) => {
			// If the current question is conditional and the response is not valid, skip it
			if (currentQuestion.conditional && responses['varsity'] === 'Yes') {
				return prevIndex + 1;
			}
			return prevIndex + 1;
		});

		// Check if the current question index is at the end of the questions
		if (currentQuestionIndex >= questions.length - 1) {
			displayThankYou();
		}
	};

	// Store responses
	const handleInputChange = (event) => {
		const { name, value, type } = event.target;
		if (type === 'checkbox') {
			setResponses((prevResponses) => ({
				...prevResponses,
				[name]: prevResponses[name] ? [...prevResponses[name], value] : [value],
			}));
		} else {
			setResponses((prevResponses) => ({ ...prevResponses, [name]: value }));
		}
	};

	// Display questions dynamically
	const renderQuestion = () => {
		const currentQuestion = questions[currentQuestionIndex];
		if (!currentQuestion) return null;

		return (
			<div>
				<p>{currentQuestion.question}</p>
				<div className="questions" id="answer-container">
					{currentQuestion.type === 'radio' &&
						currentQuestion.options.map((option) => (
							<label key={option}>
								<input
									type="radio"
									name={currentQuestion.id}
									value={option}
									onChange={handleInputChange}
								/>
								{option}
							</label>
						))}
					{currentQuestion.type === 'checkbox' &&
						currentQuestion.options.map((option) => (
							<label key={option}>
								<input
									type="checkbox"
									name={currentQuestion.id}
									value={option}
									onChange={handleInputChange}
								/>
								{option}
							</label>
						))}
				</div>
			</div>
		);
	};

	const generatePlan = () => {
		let plan = '';

		// Top Priority Section
		if (responses.priority) {
			plan += `<h2>Top Priority: ${responses.priority}</h2>`;
			plan += `<p>Based on your top priority being <strong>${responses.priority}</strong>, we have tailored this plan to highlight the most relevant areas for you.</p>`;
		}

		// Academic Interests (if "Courses" or "Extracurriculars" is the top priority)
		if (
			(responses.priority === 'Courses' || responses.priority === 'Extracurriculars') &&
			responses.academic_interests &&
			responses.academic_interests.length > 0
		) {
			plan += `<h3>Academic Interests</h3>`;
			responses.academic_interests.forEach((broadCategory) => {
				if (academicLinks[broadCategory]) {
					// Provide brief description of the category
					plan += `<p><strong>${broadCategory}</strong>: ${academicLinks[broadCategory].description}</p>`;

					// list majors within that category
					plan += `<p>Here are some majors you might consider:</p>`;
					plan += `<ul>`;
					for (const [major, link] of Object.entries(academicLinks[broadCategory].majors)) {
						plan += `<li><strong>${major}</strong>: Learn more <a href="${link}" target="_blank">here</a>.</li>`;
					}
					plan += `</ul>`;
				}
			});
		}

		// Career Goals (Detailed if "Recruiting/Career Preparation" is the top priority)
		if (responses.career) {
			const career = responses.career;

			// If "Recruiting/Career Preparation" is the top priority
			if (responses.priority === 'Recruiting/Career Preparation') {
				if (careerGuides[career]) {
					plan += `<p>For a career in <strong>${career}</strong>, check out our detailed <a href="${careerGuides[career]}" target="_blank">guide</a>.</p>`;
				}
			}
			// if not the top priority
			else {
				plan += `<h3>Career Goals</h3>`;
				plan += `<p>Even though <strong>${responses.priority}</strong> is your top priority, it's still important to plan for your future career. Here’s a quick guide based on your interest in <strong>${career}</strong>:</p>`;
				if (careerGuides[career]) {
					plan += `<p>Check out this resource for <strong>${career}</strong>: <a href="${careerGuides[career]}" target="_blank">Career Guide</a>.</p>`;
				}
			}
		}

		// Varsity Athlete Resources (If "Yes" to Varsity)
		if (responses.varsity === 'Yes') {
			plan += `<h3>Varsity Athlete Resources</h3>`;
			plan += `<p>We know being a student-athlete can be challenging. Here's a <a href="${varsityResources.guide}" target="_blank">guide</a> for managing your time effectively.</p>`;
			plan += `<p>You can also download these templates to plan your week and month:</p>`;
			plan += `<ul>${varsityResources.templates
				.map((template) => `<li><a href="${template}" target="_blank">Example Template Link</a></li>`)
				.join('')}</ul>`;

			// Include team-specific advice if applicable
			if (responses.varsity_team) {
				plan += `<p>As a member of the <strong>${responses.varsity_team}</strong> team, consider connecting with upperclassmen for additional support and guidance.</p>`;
			}
		}

		// Social Life and Events (If "Social life" is the top priority)
		if (
			responses.priority === 'Social life' &&
			responses.social_interests &&
			responses.social_interests.length > 0
		) {
			plan += `<h3>Social Life and Events</h3>`;
			responses.social_interests.forEach((interest) => {
				if (socialLifeOptions[interest]) {
					plan += `<p>${socialLifeOptions[interest]}</p>`;
				}
			});
		}

		// Extracurricular Recommendations (If "Extracurriculars" is the top priority)
		if (responses.priority === 'Extracurriculars' && responses.hobbies && responses.hobbies.length > 0) {
			plan += `<h3>Extracurricular Recommendations</h3>`;
			plan += `<p>Based on your interests in <strong>${responses.hobbies.join(
				', '
			)}</strong>, we recommend the following clubs and organizations:</p>`;

			// Display clubs based on each selected hobby category
			responses.hobbies.forEach((hobbyCategory) => {
				if (extracurricularClubs[hobbyCategory]) {
					plan += `<h4>${hobbyCategory} Clubs</h4>`;
					plan += `<ul>${extracurricularClubs[hobbyCategory]
						.map((club) => `<li><strong>${club.name}</strong>: ${club.description}</li>`)
						.join('')}</ul>`;
				}
			});
		}

		// Always include hobbies and other interests, even if not prioritized
		if (responses.hobbies && responses.hobbies.length > 0) {
			const uniqueHobbies = [...new Set(responses.hobbies)]; // Remove duplicates
			plan += `<h3>Secondary Interests</h3>`;
			plan += `<p>While your top priority is ${responses.priority}, don't forget to explore other interests when you have the time! Here are some clubs based on your hobbies:</p>`;

			uniqueHobbies.forEach((hobbyCategory) => {
				if (extracurricularClubs[hobbyCategory]) {
					// Shuffle the array to get random clubs
					const shuffledClubs = extracurricularClubs[hobbyCategory].sort(() => 0.5 - Math.random());

					// Select the first 2 clubs from the shuffled array
					const selectedClubs = shuffledClubs.slice(0, 2);

					plan += `<h4>${hobbyCategory} Clubs</h4>`;
					plan += `<ul>${selectedClubs
						.map((club) => `<li><strong>${club.name}</strong>: ${club.description}</li>`)
						.join('')}</ul>`;
				}
			});
		}

		// Summary
		if (responses.priority) {
			plan += `<h3>Summary</h3>`;
			switch (responses.priority) {
				case 'Courses':
					plan += `<p>Since your priority is courses, we recommend focusing on getting the best academic experiences and taking advantage of department resources.</p>`;
					break;
				case 'Recruiting/Career Preparation':
					plan += `<p>With career preparation as your focus, use our career guides and network with professionals to gain insights into your desired field.</p>`;
					break;
				case 'Social life':
					plan += `<p>Since social life is a priority for you, explore various student organizations and attend events to build connections and friendships.</p>`;
					break;
				case 'Extracurriculars':
					plan += `<p>For someone focused on extracurriculars, we encourage you to join multiple clubs and take on leadership positions to expand your experiences.</p>`;
					break;
				default:
					break;
			}
		}

		// Set the generated plan
		setGeneratedPlan(plan);
	};

	// Display the final thank you message and generated plan
	const displayThankYou = () => {
		// setGeneratedPlan(tempPlan);
		generatePlan();
		setShowAdvice(true);
		setCurrentQuestionIndex(questions.length); // Move to the end to prevent further questions
	};

	// AI advice generation function
	const requestAdvice = async () => {
		const topPriority = responses['priority'];
		const academicInterests = responses['academic_interests'];
		const desiredCareer = responses['career'];
		const hobbies = responses['hobbies'];
		const inputText = `
      Give detailed, personalized advice to an undergraduate student at Yale whose 
      top priority is ${topPriority}, whose academic interests are ${academicInterests},
      who wants to pursue a career in ${desiredCareer}, whose hobbies are ${hobbies}.
      Output NO MORE THAN SEVEN SENTENCES.
    `;

		try {
			const genAI = new GoogleGenerativeAI(apiKey);
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

			const result = await model.generateContent(inputText);
			const response = await result.response;
			const text = await response.text();
			// Format the advice output as a single HTML string
			const formattedAdviceOutput = `<ul>${text
				.split('.')
				.filter((sentence) => sentence.trim().length > 0)
				.map((sentence) => `<li>${sentence.trim()}</li>`)
				.join('')}</ul>`;
			setAdviceOutput(formattedAdviceOutput);
			setShowAdvice(true);
		} catch (error) {
			console.error('Error:', error);
			setAdviceOutput('<p>An error occurred. Please check your API key.</p>');
		}
	};

	// Revise the generated plan based on user input
	const revisePlan = async () => {
		const inputText = `
      Update the plan below based on the user's revision request, without changing
      the formatting of the plan and without removing newlines. Return the new plan.
      Request: ${reviseInput}
      Plan: ${generatedPlan}
    `;

		try {
			const genAI = new GoogleGenerativeAI(apiKey);
			const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

			const result = await model.generateContent(inputText);
			const response = await result.response;
			const revisedText = await response.text();

			// const parsedRevisedPlan = revisedText
			//   .split('• ')
			//   .filter(bullet => bullet.length > 0)
			//   .map(bullet => bullet.trim());
			// // Map over parsed advice output to create JSX elements
			// const formattedRevisedPlan = parsedRevisedPlan.map((sentence, index) => (
			//   <div key={index}>• {sentence}</div> // Each sentence is wrapped in a <div>
			// ));
			setGeneratedPlan(revisedText);
		} catch (error) {
			console.error('Error:', error);
			setError('An error occurred. Please check your API key.');
		}
	};

	return (
		<div className="container">
			{/* Survey Section */}
			{currentQuestionIndex < questions.length && renderQuestion()}
			{currentQuestionIndex < questions.length && <button onClick={nextQuestion}>Next</button>}

			{/* Generated Plan */}
			{generatedPlan && (
				<div className="generated_plan">
					<h3>Your YaliePlan:</h3>
					{/* Render the generated plan as HTML */}
					<div className="plan" dangerouslySetInnerHTML={{ __html: generatedPlan }} />

					{/* Revise Plan Section */}
					<div className="revise-plan">
						<h3>Revise Your Plan</h3>
						<input
							type="text"
							value={reviseInput}
							onChange={(e) => setReviseInput(e.target.value)}
							placeholder="Enter revision request..."
						/>
						<button onClick={revisePlan}>Revise Plan</button>
						{error && <p style={{ color: 'red' }}>{error}</p>}
					</div>
				</div>
			)}

			{/* Advice Section */}
			{showAdvice && (
				<div className="advice-section">
					<button onClick={requestAdvice}>Get AI-generated personalized advice</button>
					<div className="advice" dangerouslySetInnerHTML={{ __html: adviceOutput }} />
				</div>
			)}
		</div>
	);
};

export default Quiz;
