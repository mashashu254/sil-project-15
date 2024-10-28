import React, { useState, useEffect } from 'react';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Handle scroll event
	useEffect(() => {
		const handleScroll = () => {
			// Check if the user has scrolled down
			setIsScrolled(window.scrollY > 0);"/path-to-yale-logo.png"
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener on component unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header>
			{/* Mobile view: Centered logo that disappears when scrolled */}
			<div
				className={`sm:hidden fixed top-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
					isScrolled ? 'opacity-0' : 'opacity-100'
				}`}
			>
				<img
					src="../assets/yale-logo.jpg" // Replace with the actual path to the logo
					alt="Yale Logo"
					className="w-8 h-8" // Adjust the size as needed
				/>
			</div>

			{/* Tablet and Desktop view: Top-left logo, always visible */}
			<div className="hidden sm:block fixed top-2 left-2 md:left-4 transition-all duration-300">
				<img
					src="../assets/yale-logo.jpg"
					alt="Yale Logo"
					className="w-4 h-4 md:w-6 md:h-6" // 15px on mobile (w-4, h-4), larger on md screens
				/>
			</div>
		</header>
	);
};

export default Header;
