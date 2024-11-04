// frontend/src/quiz.test.js
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { SurveyProvider } from './context/surveyContext';
import QuizPage from './pages/QuizPage';
import { questions } from './data/surveyQuestions';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => jest.fn(),
}));

const renderQuizPage = () => {
	return render(
		<SurveyProvider>
			<QuizPage />
		</SurveyProvider>
	);
};

describe('Quiz Component', () => {
	test('renders the first question', () => {
		renderQuizPage();
		const questionElement = screen.getByText(questions[0].question);
		expect(questionElement).toBeInTheDocument();
	});

	test('moves to the next question when "Next" button is clicked', () => {
		renderQuizPage();
		const firstOption = screen.getByLabelText(questions[0].options[0]);
		fireEvent.click(firstOption);
		fireEvent.click(screen.getByText('Next'));
		const nextQuestionElement = screen.getByText(questions[1].question);
		expect(nextQuestionElement).toBeInTheDocument();
	});

	test('stores response for radio input', () => {
		renderQuizPage();
		const firstOption = screen.getByLabelText(questions[0].options[0]);
		fireEvent.click(firstOption);
		expect(firstOption).toBeChecked();
	});

	test('changes button label to "Finish" for non-varsity athletes on varsity question', () => {
		renderQuizPage();
		// Navigate to the varsity question (assuming it's not the first question)
		questions.slice(0, -2).forEach((_, index) => {
			const option = screen.getByLabelText(questions[index].options[0]);
			fireEvent.click(option);
			fireEvent.click(screen.getByText('Next'));
		});

		// Now we should be on the varsity question
		const varsityQuestion = questions.find((q) => q.id === 'varsityTeam');
		expect(screen.getByText(varsityQuestion.question)).toBeInTheDocument();

		// Select "No" for varsity team
		const noOption = screen.getByLabelText('No');
		fireEvent.click(noOption);

		// Check if the button label changed to "Finish"
		expect(screen.getByText('Finish')).toBeInTheDocument();
	});

	test('keeps button label as "Next" for varsity athletes on varsity question', () => {
		renderQuizPage();
		// Navigate to the varsity question
		questions.slice(0, -2).forEach((_, index) => {
			const option = screen.getByLabelText(questions[index].options[0]);
			fireEvent.click(option);
			fireEvent.click(screen.getByText('Next'));
		});

		// Select "Yes" for varsity team
		const yesOption = screen.getByLabelText('Yes');
		fireEvent.click(yesOption);

		// Check if the button label is still "Next"
		expect(screen.getByText('Next')).toBeInTheDocument();
	});

	test('navigates to plan page after completing the survey', () => {
		const mockNavigate = jest.fn();
		jest.spyOn(require('react-router-dom'), 'useNavigate').mockImplementation(() => mockNavigate);

		renderQuizPage();

		// Complete all questions
		questions.forEach((question, index) => {
			const option = screen.getByLabelText(question.options[0]);
			fireEvent.click(option);
			const buttonText = index === questions.length - 1 ? 'Finish' : 'Next';
			fireEvent.click(screen.getByText(buttonText));
		});

		// Check if navigate was called with '/plan'
		expect(mockNavigate).toHaveBeenCalledWith('/plan');
	});
});
