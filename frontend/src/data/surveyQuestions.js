export const questions = [
		{
			question: "If you had to choose, what is your top priority?",
			type: "radio",
			options: ["Courses", "Extracurriculars", "Recruiting/Career Preparation", "Social life"],
			id: "topPriority",
		},
		{
			question: "What are your academic interests? Please select all that apply.",
			type: "checkbox",
			options: [
				"Biological Sciences",
				"Engineering",
				"Humanities and the Arts",
				"Physical Sciences",
				"Social Sciences"
			],
			id: "academicInterests",
		},
		{
			question: "What is your desired career?",
			type: "radio",
			options: [
				"Academia", 
				"Biotechnology", 
				"Consulting", 
				"Education",
				"Finance", 
				"Law", 
				"Medicine", 
				"Technology"
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
				"Comedy",
				"Community Outreach",
				"Cultural",
				"Dance",
				"Entrepreneurship",
				"Engineering",
				"Music",
				"Outdoors",
				"Politics & Government",
				"Publications",
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
			id: "varsityTeam",
			conditional: true, // This will only show if "Yes" is selected in the previous question
		}
	];