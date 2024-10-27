import { render, screen, fireEvent } from "@testing-library/react";
import Quiz from "./components/quiz/quiz";
import { questions } from "./components/quiz/questions";
import React, { act } from "react";

describe("Quiz Component", () => {
  test("renders the first question", () => {
    act(() => {
      render(<Quiz />);
    });
    const questionElement = screen.getByText(questions[0].question);
    expect(questionElement).toBeInTheDocument();
  });

  test('moves to the next question when "Next" button is clicked', () => {
    act(() => {
      render(<Quiz />);
    });
    fireEvent.click(screen.getByLabelText(questions[0].options[0])); // Select first option
    fireEvent.click(screen.getByText("Next"));
    const nextQuestionElement = screen.getByText(questions[1].question);
    expect(nextQuestionElement).toBeInTheDocument();
  });

  test("stores response for radio input", () => {
    act(() => {
      render(<Quiz />);
    });
    fireEvent.click(screen.getByLabelText(questions[0].options[0])); // Click first radio option
    expect(screen.getByLabelText(questions[0].options[0]).checked).toBe(true);
  });

  test("displays thank you message and generated plan after answering questions", () => {
    act(() => {
      render(<Quiz />);
    });

    // Complete all questions to reach the thank you message
    fireEvent.click(screen.getByLabelText(questions[0].options[0])); // First question
    fireEvent.click(screen.getByText("Next"));

    fireEvent.click(screen.getByLabelText(questions[1].options[0])); // Second question
    fireEvent.click(screen.getByText("Next"));

    fireEvent.click(screen.getByLabelText(questions[2].options[0])); // Third question
    fireEvent.click(screen.getByText("Next"));

    fireEvent.click(screen.getByLabelText(questions[3].options[0])); // Fourth question
    fireEvent.click(screen.getByText("Next"));

    fireEvent.click(screen.getByLabelText(questions[4].options[1])); // Fifth question
    fireEvent.click(screen.getByText("Next"));

    // Check for the thank you message
    expect(screen.getByText("Your YaliePlan:")).toBeInTheDocument();
  });
});
