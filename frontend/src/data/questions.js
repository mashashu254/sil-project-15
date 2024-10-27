export const questions = [
		{
			question: "If you had to choose, what is your top priority?",
			type: "radio",
			options: ["Courses", "Recruiting/Career Preparation", "Social life", "Extracurriculars"],
			id: "priority",
		},
		{
			question: "What are your academic interests? Please select all that apply.",
			type: "checkbox",
			options: [
				"Humanities and the Arts",
				"Social Sciences",
				"Biological Sciences",
				"Physical Sciences",
				"Engineering"
			],
			id: "academic_interests",
		},
		{
			question: "What is your desired career?",
			type: "radio",
			options: [
				"Technology", 
				"Biotechnology", 
				"Finance", 
				"Consulting", 
				"Academia", 
				"Law", 
				"Medicine", 
				"Education"
			],
			id: "career",
		},
		{
			question: "What are your hobbies outside of academics? Please select all that apply.",
			type: "checkbox",
			options: [
				"Acappella",
				"Arts",
				"Athletics (not varsity)",
				"Entrepreneurship",
				"Comedy",
				"Cultural",
				"Dance",
				"Music",
				"Outdoors",
				"Politics & Government",
				"Publications",
				"Engineering",
				"Community Outreach",
				"Theater"
			],
			id: "hobbies",
		},
		{
			question: "Are you on a varsity team?",
			type: "radio",
			options: ["Yes", "No"],
			id: "varsity",
		},
		{
			question: "Which varsity team are you on?",
			type: "radio",
			options: [
				"Baseball",
				"Basketball",
				"Crew (Heavyweight)",
				"Crew (Lightweight)",
				"Cross Country",
				"Fencing",
				"Football",
				"Golf",
				"Ice Hockey",
				"Lacrosse",
				"Sailing (Coed)",
				"Soccer",
				"Squash",
				"Swimming & Diving",
				"Tennis",
				"Track & Field"
			],
			id: "varsity_team",
			conditional: true, // This will only show if "Yes" is selected in the previous question
		}
	];