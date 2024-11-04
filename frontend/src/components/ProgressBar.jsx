import React from 'react';
import useSurveyData from '../hooks/useSurveyData';

const ProgressBar = () => {
    const { currentQuestionIndex, totalQuestions } = useSurveyData();

      // Ensure currentQuestionIndex and totalQuestions are numbers
  const safeCurrentIndex = Number(currentQuestionIndex) || 0;
  const safeTotalQuestions = Number(totalQuestions) || 1;

    const progress = ((safeCurrentIndex + 1) / safeTotalQuestions) * 100;
    return (
        <div className="progress-bar-container">
            <div 
                className="progress-bar"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
