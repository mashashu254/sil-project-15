import React from 'react';

const ProgressBar = ({ progress }) => {
	return (
		<div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
			<div className="bg-blue-600 h-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
		</div>
	);
};

export default ProgressBar;
