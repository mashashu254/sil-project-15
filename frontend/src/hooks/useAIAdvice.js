import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY } from '../api_key';
import {
	academicLinks,
	careerGuides,
	varsityResources,
	socialLifeOptions,
	extracurricularClubs,
} from '../data/planGenerationData';

const apiKey = API_KEY || 'dummy_key';

export const useAIAdvice = () => {
	const [responses] = useState({});
	const [generatedPlan, setGeneratedPlan] = useState('');
	const [adviceOutput, setAdviceOutput] = useState('');
	const [reviseInput, setReviseInput] = useState('');
	const [isRevising, setIsRevising] = useState(false);
	const [setShowAdvice] = useState(false);

	// Personalize Plan from survey responses
	const generatePlan = (responses) => {
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
				plan += `<p>Even though <strong>${responses.priority}</strong> is your top priority, it's still important to plan for your future career. Here is a quick guide based on your interest in <strong>${career}</strong>:</p>`;
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

	// AI advice generation function
	const requestAdvice = async () => {
		const topPriority = responses['priority'];
		const academicInterests = responses['academic_interests'];
		const desiredCareer = responses['career'];
		const hobbies = responses['hobbies'];
		const inputText = `
			Give a detailed, personalized advice to an undergraduate student at Yale whose 
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
			const formattedAdviceOutput = `
				<ul>
					${text
						.split('.')
						.filter((sentence) => sentence.trim().length > 0)
						.map((sentence) => `<li> ${sentence.trim()} </li>`)
						.join('')}
				</ul>`;
			setAdviceOutput(formattedAdviceOutput);
			setShowAdvice(true);
		} catch (error) {
			console.error('Error:', error);
			setAdviceOutput('<p> An error occurred. Please check your API key. </p>');
		}
	};

	// Revise the generated plan based on user inp
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
			console.error('Error revising plan:', error);
			// would set some error state in here
			// setError('An error occurred. Please check your API key.');
		} finally {
			setIsRevising(false);
			// clear the revision input after use
			setReviseInput('');
		}
	};

	return {
		generatePlan,
		generatedPlan,
		requestAdvice,
		adviceOutput,
		revisePlan,
		reviseInput,
		setReviseInput,
		isRevising,
	};
};
