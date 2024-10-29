import React from 'react';

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4 mb-6">
            <div 
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
