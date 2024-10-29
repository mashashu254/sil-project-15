import React from 'react';

const SurveyButton = ({ label, onClick, disabled }) => (
    <button 
        onClick={onClick} 
        disabled={disabled} 
        className={`px-4 py-2 text-white rounded-lg 
            ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} 
            transition duration-200 ease-in-out`}
    >
        {label}
    </button>
);

export default SurveyButton;
