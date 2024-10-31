import React from 'react';

const SurveyButton = ({ label, onClick, disabled }) => (
    <button 
        onClick={onClick} 
        disabled={disabled} 
        className={`survey-button ${disabled ? 'survey-button-disabled' : 'survey-button-enabled'}`}
    >
        {label}
    </button>
);

export default SurveyButton;
