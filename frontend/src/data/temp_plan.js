// This is a static placeholder plan. We can use this file to write the code
// to use the rules-based algorithm to generate the plans
export const tempPlan =
`
Yale has many exciting opportunities someone whose top priority is extracurriculars.
Tailored to you interest in majoring the Arts, here are some clubs you might want to 
get involved in:
\n• The Yale Film Society (link)
\n• Y Fashion House (link)
\n• Yale Anime Society (link)
\n• Yale Art Society (link)
\n• Yale Cinematic Productions - A Student Alliance (link)
`

// Academic interests and major links
const academicLinks = {
	"Humanities and the Arts": {
		majors: {
			"English": "https://english.yale.edu/",
			"History": "https://history.yale.edu/",
			"Philosophy": "https://philosophy.yale.edu/",
			"Music": "https://yalemusic.yale.edu/",
			"Theater and Performance Studies": "https://theaterstudies.yale.edu/",
			"Art": "https://art.yale.edu/",
		},
		description: "Explore these majors if you are passionate about the humanities, literature, and the arts.",
	},
	"Social Sciences": {
		majors: {
			"Economics": "https://economics.yale.edu/",
			"Political Science": "https://politicalscience.yale.edu/",
			"Psychology": "https://psychology.yale.edu/",
			"Sociology": "https://sociology.yale.edu/",
			"Anthropology": "https://anthropology.yale.edu/",
			"Global Affairs": "https://jackson.yale.edu/",
		},
		description: "If you are fascinated by society, behavior, and global issues, consider these majors in the social sciences.",
	},
	"Biological Sciences": {
		majors: {
			"Molecular, Cellular, and Developmental Biology": "https://mcdb.yale.edu/",
			"Neuroscience": "https://medicine.yale.edu/neuroscience/",
			"Ecology and Evolutionary Biology": "https://eeb.yale.edu/",
			"Biomedical Engineering": "https://seas.yale.edu/departments/biomedical-engineering",
		},
		description: "These majors are ideal for students who want to explore living organisms, genetics, and biological systems.",
	},
	"Physical Sciences": {
		majors: {
			"Physics": "https://physics.yale.edu/",
			"Chemistry": "https://chem.yale.edu/",
			"Astronomy": "https://astronomy.yale.edu/",
			"Geology and Geophysics": "https://gandg.yale.edu/",
		},
		description: "For students interested in understanding the natural world through quantitative science, explore these physical science majors.",
	},
	"Engineering": {
		majors: {
			"Computer Science": "https://cpsc.yale.edu/",
			"Electrical Engineering": "https://seas.yale.edu/departments/electrical-engineering",
			"Mechanical Engineering": "https://seas.yale.edu/departments/mechanical-engineering-materials-science",
			"Chemical and Environmental Engineering": "https://seas.yale.edu/departments/chemical-environmental-engineering",
		},
		description: "Engineering majors are perfect for students who want to solve real-world problems using technology and design.",
	},
};

	
	// Career Preparation
	const careerGuides = {
		"Software Engineering": "https://example.com/swe-guide",
		"Finance": "https://example.com/finance-guide",
		"Consulting": "https://example.com/consulting-guide",
		"Law": "https://example.com/pre-law-guide",
		"Medicine": "https://example.com/pre-med-guide",
		"Technology" : "https://example.com/technology-guide",
		"Biotechnology" : "https://example.com/biotechnology-guide",
		"Education" : "https://example.com/education-guide",
};
	
	// Popular courses in each department
	// const popularCourses = {
	//   "Computer Science": ["CS50: Introduction to Computer Science", "CS323: Introduction to Systems Programming"],
	//   "Economics": ["ECON110: Principles of Economics", "ECON115: Intermediate Microeconomics"],
	// };
	
	// Varsity Team resources
	const varsityResources = {
		guide: "https://example.com/varsity-guide",
		templates: [
			"https://example.com/schedule-template-week.pdf",
			"https://example.com/schedule-template-month.pdf"
		],
	};

		// Social Life Options
		const socialLifeOptions = {
				"Greek Life": "Yale has a variety of fraternities and sororities, each with its own unique community and activities. Consider joining one to expand your social circle.",
				"Performances": "Yale's rich performance arts scene includes events such as the YSO Halloween Show, a cappella concerts, and Yale Dramat performances.",
				"Nightlife": "Yale's nightlife offers events like Woads, themed parties, and student-run events. Make sure to check out the latest schedule of events."
		};

	// A Cappella Clubs
const aCappellaClubs = [
	{ name: "Baker's Dozen", description: "One of Yale's oldest and most popular a cappella groups, known for their unique arrangements and rich history." },
	{ name: "Cadence of Yale", description: "A student-run co-ed a cappella group with a diverse repertoire ranging from pop to jazz." },
	{ name: "Doox of Yale", description: "Yale's premier lower-voiced a cappella group, specializing in complex harmonies and creative arrangements." },
	{ name: "Magevet", description: "An internationally acclaimed Jewish a cappella group that sings a mix of traditional, liturgical, and popular music." },
	{ name: "Mixed Company of Yale", description: "A popular co-ed group known for its engaging performances and eclectic song choices." },
	{ name: "Out of the Blue", description: "One of Yale's award-winning a cappella groups, known for its energetic performances and unique sound." },
	{ name: "Pitches and Tones", description: "A diverse group of students sharing a love of music, focusing on a cappella styles that range from contemporary to classical." }
];

// Academic Clubs
const academicClubs = [
	{ name: "Club Geo", description: "A club dedicated to exploring geography and its various applications." },
	{ name: "Light and Truth", description: "A student organization focused on philosophical discussions and debates." },
	{ name: "Mock Trial Association", description: "Yale's premier competitive mock trial team, where students can simulate real-world legal cases." },
	{ name: "Society of Physics Students", description: "A club for students passionate about physics, offering talks, lab tours, and networking events." },
	{ name: "Undergraduate Women in Science at Yale", description: "A support network for women pursuing careers in STEM fields." },
	{ name: "Yale College Chess Club", description: "Yale's club for chess enthusiasts of all levels, offering weekly meetings and tournaments." },
	{ name: "Yale Debate Association", description: "A club for students interested in competitive debate, focusing on both policy and parliamentary formats." },
	{ name: "Yale Student Academic Competitions", description: "An organization that hosts academic competitions across a variety of subjects." },
	{ name: "Yale Undergraduate Economics Association", description: "A forum for students interested in economics to discuss current issues and network with professionals." },
	{ name: "Yale Undergraduate Math Society", description: "A club for math enthusiasts to share their passion for problem-solving and mathematical exploration." }
];

// Arts Clubs
const artsClubs = [
	{ name: "The Yale Film Society", description: "A student-run group dedicated to showcasing films from a wide range of genres and eras." },
	{ name: "Y Fashion House", description: "Yale's fashion club, offering workshops, runway shows, and industry talks." },
	{ name: "Yale Anime Society", description: "A club for anime enthusiasts, featuring weekly screenings, discussions, and trips to conventions." },
	{ name: "Yale Art Society", description: "A group that hosts art workshops, gallery tours, and student art shows." },
	{ name: "Yale Cinematic Productions - A Student Alliance", description: "A student organization focused on film production, providing opportunities to write, direct, and produce films." }
];

// Athletics Clubs
const athleticsClubs = [
	{ name: "Club Badminton", description: "An inclusive club for students who enjoy playing badminton, from beginners to advanced players." },
	{ name: "Club Basketball (Men's)", description: "A competitive club for male students interested in playing basketball at a high level." },
	{ name: "Club Basketball (Women's)", description: "A competitive club for female students looking to continue playing basketball in college." },
	{ name: "Club Cricket", description: "Yale's club for cricket enthusiasts, featuring both competitive matches and casual games." },
	{ name: "Club Field Hockey", description: "An inclusive club for students of all levels to practice and compete in field hockey." },
	{ name: "Club Golf", description: "A club for students who want to practice golf in a relaxed and supportive environment." },
	{ name: "Club Ice Hockey", description: "A club for students who want to continue playing hockey in a competitive yet fun setting." },
	{ name: "Club Men's Soccer", description: "A club for male students interested in playing soccer at a competitive level." },
	{ name: "Club Polo", description: "A club dedicated to the sport of polo, offering training and competitive opportunities." },
	{ name: "Club Rugby Football (Men's)", description: "A competitive rugby club for male students looking to engage in the sport at a high level." },
	{ name: "Club Rugby Football (Women's)", description: "A competitive rugby club for female students to participate in rugby at Yale." },
	{ name: "Club Soccer (Women's)", description: "A club for female students interested in playing soccer in a supportive environment." },
	{ name: "Club Tennis", description: "A club for tennis enthusiasts to practice, compete, and connect with other players." },
	{ name: "Club Volleyball (Men's)", description: "A club for male students who are passionate about volleyball, offering both practice and competitive matches." },
	{ name: "Club Volleyball (Women's)", description: "A club for female students to play volleyball and develop their skills." },
	{ name: "Club Water Polo (Men's)", description: "A club for male students interested in playing water polo at a competitive level." },
	{ name: "Club Water Polo (Women's)", description: "A club for female students interested in playing water polo." },
	{ name: "Undergraduate Sports Analytics Group", description: "A group for students interested in sports statistics and analytics." },
	{ name: "Varsity Sports", description: "Yale's official varsity sports teams." },
	{ name: "Wushu and Chinese Kung-Fu", description: "A club dedicated to the martial arts of Wushu and Chinese Kung-Fu, offering training and performances." },
	{ name: "Yale Cycling Team", description: "A competitive cycling team for students interested in road, mountain, and cyclocross racing." },
	{ name: "Yale Equestrian Team", description: "Yale's club for equestrian sports, offering training and competitive opportunities." },
	{ name: "Yale Intramural Sports", description: "Intramural sports program offering a variety of sports for students to participate in." },
	{ name: "Yogis at Yale", description: "A club for students to practice and learn yoga in a supportive environment." }
];

// Business & Entrepreneurship Clubs
const businessClubs = [
	{ name: "Eli Ventures", description: "A student-run venture capital group supporting student entrepreneurs." },
	{ name: "Yale Entrepreneurial Society", description: "A club dedicated to fostering entrepreneurship through events and networking." },
	{ name: "Yale Net Impact", description: "A club focusing on the social impact of business ventures." },
	{ name: "Yale Startup Consulting Group", description: "A consulting group providing services to startups and small businesses." },
	{ name: "The Elmseed Enterprise Fund", description: "A microfinance group providing resources to student entrepreneurs and small business owners." },
	{ name: "Yale Women In Business", description: "A support network for women pursuing careers in business and entrepreneurship." },
	{ name: "China Economic Forum", description: "A forum dedicated to discussing the Chinese economy and its impact on global markets." }
];

// Comedy Clubs
const comedyClubs = [
	{ name: "Just Add Water", description: "Yale's sketch comedy group known for its creative and humorous performances." },
	{ name: "Red Hot Poker", description: "An improvisational comedy group performing regularly on campus." },
	{ name: "The Cucumber", description: "A student-run satire publication offering a humorous take on campus life." },
	{ name: "The Fifth Humour", description: "Yale's comedy group focused on stand-up and sketch comedy." },
	{ name: "The Good Show", description: "A comedy troupe known for its inclusive and diverse performances." },
	{ name: "The Odd Ducks", description: "An experimental comedy group pushing the boundaries of traditional humor." },
	{ name: "The Purple Crayon", description: "One of Yale's oldest and most renowned improvisation groups." },
	{ name: "The Sphincter Troupe", description: "A sketch and improv comedy group with a focus on creative and offbeat humor." },
	{ name: "The Viola Question", description: "A musical comedy group combining humor and musical talent." },
	{ name: "The Yale Exit Players", description: "Yale's oldest improv comedy group, performing on- and off-campus." }
];

// Culinary Clubs
const culinaryClubs = [
	{ name: "Chocolate And Confectionary Artisans Organization", description: "A club dedicated to the art of making chocolates and confections." },
	{ name: "Spoon University", description: "Yale's chapter of the popular food blog and cooking club." },
	{ name: "Yale Pop Up", description: "A group focused on creating and organizing pop-up dining experiences around campus." }
];

// Cultural Clubs
const culturalClubs = [
	{ name: "Afro-American Cultural Center", description: "A cultural center providing support and programming for Black students at Yale." },
	{ name: "ALIVE - A Learning and Interactive Vietnamese Experience", description: "A club celebrating Vietnamese culture and heritage through events and activities." },
	{ name: "Arab Students Association", description: "A club for students of Arab descent and those interested in Arab culture." },
	{ name: "Asian American Cultural Center", description: "A center supporting Asian American students through events and resources." },
	{ name: "Association of Native Americans At Yale", description: "A club supporting Native American students at Yale." },
	{ name: "Black Solidarity Conference", description: "An annual conference focused on issues facing the Black community." },
	{ name: "Black Student Alliance at Yale", description: "A student-run organization dedicated to fostering community among Black students." },
	{ name: "Black Women's Coalition", description: "A group dedicated to supporting Black women at Yale." },
	{ name: "Despierta Boricua", description: "Yale's Puerto Rican student association." },
	{ name: "Japanese American Students Union", description: "A group dedicated to celebrating and promoting Japanese culture." },
	{ name: "KASAMA: The Filipino Club", description: "A club celebrating Filipino culture through events and community activities." },
	{ name: "Korean American Students of Yale", description: "A group focused on celebrating and promoting Korean American culture." },
	{ name: "La Casa Cultural", description: "A cultural center supporting Latinx students through events and resources." },
	{ name: "Latin American Student Organization", description: "A club promoting Latin American culture and heritage." },
	{ name: "Malaysian and Singaporean Association", description: "A group focused on the culture and traditions of Malaysia and Singapore." },
	{ name: "Native American Cultural Center", description: "A cultural center providing support and programming for Native American students." },
	{ name: "Polish Students Society", description: "A group dedicated to celebrating and promoting Polish culture." },
	{ name: "South Asian Society", description: "A club focused on celebrating South Asian culture through events and community activities." },
	{ name: "Vietnamese Students Association", description: "A group dedicated to promoting Vietnamese culture and heritage at Yale." }
];

// Dance Clubs
const danceClubs = [
	{ name: "A Different Drum", description: "A student-run dance group known for its creative performances." },
	{ name: "Alliance for Dance at Yale", description: "A group supporting dance performances and collaboration at Yale." },
	{ name: "Ballet Folklorico Mexicano de Yale", description: "A group dedicated to traditional Mexican folk dance." },
	{ name: "Damhsa Yale Irish Dancers", description: "A group celebrating Irish dance through performance and competition." },
	{ name: "Danceworks", description: "An all-student-run dance group that performs a variety of dance styles and hosts showcases throughout the year." },
	{ name: "Dzana", description: "Yale's contemporary dance group with a focus on modern choreography and creative expression." },
	{ name: "Groove", description: "Yale's hip-hop and street dance group, known for its high-energy performances." },
	{ name: "Kalaa", description: "A South Asian classical dance group promoting traditional and contemporary Indian dance styles." },
	{ name: "MonstRAASity", description: "A Raas-Garba team bringing vibrant, high-energy Indian dance to Yale's campus." },
	{ name: "Phoenix Dance Troupe", description: "A diverse group performing various styles from jazz to contemporary." },
	{ name: "Rangeela: Undergraduate Fusion Dance Group", description: "A group dedicated to blending different dance styles into cohesive performances." },
	{ name: "Rhythmic Blue", description: "A contemporary and hip-hop fusion dance group." },
	{ name: "Sabrosura", description: "Yale's Latin dance group, specializing in salsa, bachata, and merengue." },
	{ name: "Shaka", description: "A dance troupe focused on celebrating and performing traditional Polynesian dance styles." },
	{ name: "Steppin' Out", description: "Yale's step team, bringing rhythmic step and dance performances to the stage." },
	{ name: "Taps", description: "Yale's tap dance group, showcasing classic and modern tap performances." },
	{ name: "Yale Ballroom Dance Team", description: "A competitive ballroom dance team participating in collegiate competitions." },
	{ name: "Yale Belly Dance Society", description: "A group dedicated to celebrating and teaching the art of belly dance." },
	{ name: "Yale Breakers", description: "A breakdancing group known for its performances and competitions." },
	{ name: "Yale Dance Theater", description: "A theater-based dance group combining storytelling and dance performance." },
	{ name: "Yale Jashan Bhangra", description: "A high-energy bhangra dance team performing traditional and modern bhangra." },
	{ name: "Yale Movement", description: "An experimental dance group focusing on the fluidity of body movement." },
	{ name: "Yale Swing, Blues, and Fusion", description: "A social dance group dedicated to swing, blues, and fusion styles." },
	{ name: "Yale Tango Club", description: "A club dedicated to teaching and performing Argentine tango." },
	{ name: "Yale Undergraduate Ballet Company", description: "A ballet company performing classical and contemporary ballet." },
	{ name: "Yaledancers", description: "A group focused on showcasing a variety of dance styles and promoting dance on campus." }
];

const genderClubs = [
	{ name: "LGBTQ Co-Op", description: "A group for LGBTQ students to connect, advocate, and support one another." },
	{ name: "Not So Straight Frosh", description: "A support group for first-year LGBTQ students adjusting to life at Yale." },
	{ name: "Office of LGBTQ Resources", description: "A resource center providing support and programming for LGBTQ students." },
	{ name: "oSTEM", description: "Out in Science, Technology, Engineering, and Mathematics—a group supporting LGBTQ students in STEM fields." },
	{ name: "PRISM", description: "A student group for LGBTQ+ students of color." },
	{ name: "Sappho", description: "A student organization providing a space for queer women and non-binary students." },
	{ name: "Trans@Yale", description: "A support and advocacy group for transgender and non-binary students." },
	{ name: "Voke Spoken Word", description: "A group dedicated to amplifying voices through spoken word performances and events." },
	{ name: "Yale Queer + Asian", description: "A student organization focused on the intersection of queer and Asian identities." },
	{ name: "Yale Women's Center", description: "A center advocating for gender equality and providing resources for women and gender minorities." }
];


const healthClubs = [
	{ name: "AIDS Walk New Haven", description: "An annual walk to raise awareness and funds for HIV/AIDS research." },
	{ name: "American Red Cross at Yale", description: "Yale's chapter of the Red Cross, promoting blood donation and health services." },
	{ name: "Association for Health Equity And Development", description: "A student group advocating for health equity and development initiatives." },
	{ name: "Community Health Educators", description: "A group dedicated to teaching health education to local youth." },
	{ name: "Emergency Medical Services", description: "A student-run EMS team providing emergency services on campus." },
	{ name: "HAPPY", description: "Health Advocacy and Public Policy group promoting health education." },
	{ name: "Mind Matters", description: "A mental health advocacy group raising awareness about mental health issues." },
	{ name: "Public Health Coalition", description: "An organization focused on addressing public health challenges." },
	{ name: "Unite For Sight", description: "A group dedicated to global health, focusing on eye care and education." },
	{ name: "Walden Peer Counseling", description: "A peer counseling service for students seeking support." },
	{ name: "Yale Undergraduates at Connecticut Hospice", description: "A group providing support and companionship to hospice patients." },
	{ name: "Yogis at Yale", description: "A club promoting physical and mental wellness through yoga practice." }
];


const internationalClubs = [
	{ name: "AIESEC at Yale", description: "A chapter of the global youth leadership development organization." },
	{ name: "Club of Argentine Students at Yale", description: "A student group celebrating Argentine culture and heritage." },
	{ name: "Portuguese Association", description: "A group promoting Portuguese language and culture." },
	{ name: "Yale African Students Association", description: "A community for students of African descent and those interested in African culture." },
	{ name: "Yale European Undergraduates", description: "A group fostering connections between European students and those interested in European culture." },
	{ name: "Yale Friends of Israel", description: "A student group promoting dialogue and understanding about Israel." },
	{ name: "Yale International Relations Association", description: "A group dedicated to the study and practice of international relations." },
	{ name: "Yale Undergraduate Association for African Peace and Development", description: "A group focused on promoting peace and development in Africa." }
];

const religiousClubs = [
	{ name: "Athletes in Action", description: "A faith-based organization supporting Christian athletes in their spiritual growth." },
	{ name: "Chabad at Yale", description: "Yale's chapter of the global Chabad network, offering Jewish programming and support." },
	{ name: "Chi Alpha", description: "A Christian fellowship group providing a community for students to explore and deepen their faith." },
	{ name: "Episcopal Church at Yale", description: "An Episcopal student community offering worship, fellowship, and service." },
	{ name: "Hindu Students Council", description: "A group dedicated to celebrating and promoting Hindu culture and faith." },
	{ name: "Jews and Muslims at Yale", description: "A group fostering interfaith dialogue between Jewish and Muslim students." },
	{ name: "Latter-Day Saints Student Association", description: "A community for Latter-Day Saints students to connect and worship." },
	{ name: "Living Water", description: "A student ministry providing support and fellowship to Christian students." },
	{ name: "Logos", description: "A student-led Bible study group promoting Christian fellowship and community." },
	{ name: "Meor at Yale", description: "An organization providing Jewish learning opportunities for students." },
	{ name: "Muslim Student Association", description: "A group supporting Muslim students through events, worship, and community." },
	{ name: "Saint Thomas More Catholic Center and Chapel", description: "Yale's Catholic student center offering worship, fellowship, and service." },
	{ name: "The Black Church at Yale", description: "A Christian fellowship serving Black students and promoting worship and community." },
	{ name: "University Church in Yale", description: "An inclusive Christian community welcoming all students for worship and service." },
	{ name: "Yale Buddhist Sangha", description: "A student group offering Buddhist meditation and practice sessions." },
	{ name: "Yale Hillel", description: "A student-run organization providing Jewish religious, cultural, and social programming." },
	{ name: "Yale Humanist Community", description: "A group for students interested in humanism, ethics, and non-religious perspectives." },
	{ name: "Yale Luther House", description: "A Lutheran student community offering worship, service, and fellowship." },
	{ name: "Yale Students for Christ", description: "A student-led ministry focused on Christian fellowship and discipleship." },
	{ name: "Young Israel House at Yale", description: "An Orthodox Jewish community providing worship, study, and social activities." }
];

const scienceEngineeringClubs = [
	{ name: "American Indian Science and Engineering Society", description: "A group supporting Native American students in STEM fields." },
	{ name: "American Society of Mechanical Engineers", description: "Yale's chapter of the national ASME organization, supporting mechanical engineering students." },
	{ name: "Biomedical Engineering Society", description: "A group promoting biomedical engineering through projects, talks, and research." },
	{ name: "Bulldogs Racing Team", description: "A team dedicated to building and racing vehicles in competitive events." },
	{ name: "DEMOS", description: "An outreach program promoting STEM education to local schools." },
	{ name: "Engineering World Health", description: "A group dedicated to using engineering to improve global health." },
	{ name: "Engineers Without Borders", description: "An organization focusing on engineering solutions to international development challenges." },
	{ name: "Float Yale", description: "A student group focused on the science and engineering of flotation and water-based design." },
	{ name: "MATHCOUNTS Outreach", description: "An outreach program promoting math education in local schools." },
	{ name: "Medical Professions Outreach", description: "A group offering pre-medical students resources and support." },
	{ name: "Minority Association of Pre-Medical Students", description: "An organization supporting minority students pursuing careers in medicine." },
	{ name: "National Society of Black Engineers", description: "A group providing resources and support for Black engineering students." },
	{ name: "SheCode", description: "A group promoting the inclusion and success of women in coding and tech." },
	{ name: "Society for the Biological Sciences", description: "A student group supporting research and exploration in biological sciences." },
	{ name: "The Yale Drop Team", description: "A group focused on physics experiments in microgravity environments." },
	{ name: "Thinkspaces", description: "A collaborative space for students interested in design and innovation." },
	{ name: "Ventures in Science", description: "A group promoting student research and scientific exploration." },
	{ name: "Women in Physics", description: "A support network for women studying and researching physics." },
	{ name: "Women in Science at Yale", description: "A group supporting the development of women in science fields." },
	{ name: "Yale Data Science", description: "A group promoting data science through talks, projects, and networking." },
	{ name: "Yale Helix Group", description: "A community of students interested in synthetic biology and genetic engineering." },
	{ name: "Yale iGEM", description: "Yale's team competing in the International Genetically Engineered Machine competition." },
	{ name: "Yale Scientific Magazine", description: "A publication dedicated to communicating scientific research and discoveries." },
	{ name: "Yale Society of Physics Students", description: "A club offering resources and support for physics students." },
	{ name: "Yale Undergraduate Aerospace Association", description: "A group for students interested in aerospace engineering and design." },
	{ name: "Yale Undergraduate Science Olympiad", description: "A group organizing and competing in national Science Olympiad events." },
	{ name: "YHack", description: "Yale's annual hackathon, attracting students from around the world to solve real-world problems." }
];


const serviceOutreachClubs = [
	{ name: "A Leg Even", description: "A student organization supporting first-generation and low-income students at Yale." },
	{ name: "Circle of Women at Yale", description: "A group focused on empowering women through education initiatives." },
	{ name: "Matriculate at Yale", description: "A mentoring program helping low-income students navigate the college application process." },
	{ name: "1vyG", description: "An organization supporting first-generation college students across Ivy League institutions." },
	{ name: "American Civil Liberties Union", description: "Yale's chapter advocating for civil rights and liberties." },
	{ name: "Amnesty International", description: "A student group promoting human rights through advocacy and education." },
	{ name: "Best Buddies", description: "A club fostering friendships with individuals with intellectual and developmental disabilities." },
	{ name: "Bridges", description: "A mentoring program for local youth, pairing Yale students with middle and high school students." },
	{ name: "Camp Kesem", description: "A camp providing support for children whose parents have cancer." },
	{ name: "Chinese Adopted Siblings Program for Youth", description: "A mentoring program for adopted Chinese children in the New Haven area." },
	{ name: "Choose Life at Yale", description: "A pro-life student group advocating for the dignity of human life." },
	{ name: "Design for America", description: "A design organization using creativity to solve social challenges." },
	{ name: "Dwight Hall", description: "Yale's center for public service and social justice." },
	{ name: "Global Brigades", description: "A group organizing service trips to provide health and development aid globally." },
	{ name: "Habitat for Humanity", description: "A group building affordable housing for families in need." },
	{ name: "Math and Science (MAS) Familias", description: "A group supporting Latinx students in math and science fields." },
	{ name: "MEChA", description: "A Chicano student movement promoting Latinx empowerment and social justice." },
	{ name: "PALS Tutoring and Mentoring", description: "A tutoring and mentoring program for local students." },
	{ name: "Splash at Yale", description: "A program offering local middle and high school students the chance to learn from Yale students." },
	{ name: "Squash Haven", description: "An after-school program combining squash, academics, and mentoring for local youth." },
	{ name: "TEDxYale", description: "Yale's chapter of the TED organization, hosting annual TEDx events." },
	{ name: "Urban Debate League", description: "A group promoting debate and public speaking for underserved students." },
	{ name: "Women's Leadership Initiative", description: "A group empowering women leaders on Yale's campus and beyond." },
	{ name: "Yale Animal Welfare Alliance", description: "A group advocating for animal rights and welfare." },
	{ name: "Yale Children's Theater", description: "A group producing and performing plays for young audiences." },
	{ name: "Yale Hunger & Homelessness Action Project", description: "An organization addressing issues of hunger and homelessness through service and advocacy." },
	{ name: "Yale Migration Alliance", description: "A group supporting immigrants and advocating for immigrant rights." },
	{ name: "Yale Sight Savers Program", description: "An organization providing eye health education and screening services." },
	{ name: "Yale Student Environmental Coalition", description: "A group promoting environmental sustainability and advocacy." },
	{ name: "Yale Undergraduate Students for UNICEF", description: "A group supporting UNICEF's mission to help children worldwide." }
];

const musicClubs = [
	{ name: "Berkeley College Orchestra", description: "A student-run orchestra offering musicians the chance to perform a diverse repertoire." },
	{ name: "C-Sharp", description: "A group dedicated to performing and arranging classical and contemporary pieces for strings." },
	{ name: "Coup de Brass", description: "An ensemble focused on exploring the beauty and versatility of brass music." },
	{ name: "Davenport Pops Orchestra", description: "A student orchestra performing pop music arrangements and contemporary pieces." },
	{ name: "Guild of Carillonneurs", description: "Yale's bell-ringing group, providing performances on the Harkness Tower carillon." },
	{ name: "Low Strung Cello Choir", description: "A unique cello choir performing a mix of classical, rock, and pop music." },
	{ name: "Tangled Up in Blue", description: "Yale's premier folk music group, offering a wide repertoire of folk and bluegrass songs." },
	{ name: "Timothy Dwight Community Chamber Orchestra", description: "A small ensemble providing Timothy Dwight College students an opportunity to perform chamber music." },
	{ name: "Yale Concert Band", description: "Yale's concert band, performing a variety of pieces, from classical to modern." },
	{ name: "Yale Glee Club", description: "Yale's oldest and most prestigious choral group, performing a diverse range of choral music." },
	{ name: "Yale Gospel Choir", description: "A group celebrating gospel music and providing a platform for students to share their faith through song." },
	{ name: "Yale Jazz Ensemble", description: "A group focused on performing jazz standards and contemporary jazz compositions." },
	{ name: "Yale Precision Marching Band", description: "Yale's official marching band, known for its lively performances and halftime shows." },
	{ name: "Yale Symphony Orchestra", description: "A full orchestra performing major symphonic works, from classical to contemporary." },
	{ name: "Yale Undergraduate Jazz Collective", description: "A student organization promoting jazz education and performance through events and jam sessions." }
];


const outdoorsClubs = [
	{ name: "First-Year Outdoor Orientation Trips (FOOT)", description: "An outdoor program for incoming first-years, offering hiking trips to build community." },
	{ name: "Harvest", description: "An outdoor orientation program focusing on sustainable agriculture and community building at Yale Farm." },
	{ name: "Yale Farm", description: "A space for students interested in sustainable agriculture, providing opportunities for learning and volunteering." },
	{ name: "Yale Mountaineering Club", description: "A group promoting climbing, hiking, and mountaineering trips for students of all skill levels." },
	{ name: "Yale Outdoors", description: "A student organization supporting a variety of outdoor activities, including hiking, kayaking, and camping." }
];

const politicsGovernmentClubs = [
	{ name: "Ivy Council", description: "A student organization promoting collaboration and dialogue among Ivy League student governments." },
	{ name: "Model Congress Association", description: "A group simulating the workings of the U.S. Congress through events and competitions." },
	{ name: "Party of the Left", description: "A political party within the Yale Political Union promoting progressive and left-wing ideals." },
	{ name: "The Conservative Party", description: "A political party within the Yale Political Union advocating for conservative values." },
	{ name: "The Federalist Party", description: "A political party focusing on traditionalist and federalist views within the Yale Political Union." },
	{ name: "The Independent Party", description: "Yale's largest debate society, promoting a variety of political views and perspectives." },
	{ name: "The Liberal Party", description: "A political party advocating for liberal ideals within the Yale Political Union." },
	{ name: "The Tory Party", description: "A political party within the Yale Political Union advocating for monarchism and conservative ideas." },
	{ name: "William F. Buckley, Jr. Program", description: "A program promoting intellectual diversity and political discourse on campus." },
	{ name: "Yale College Council", description: "Yale's student government, representing the undergraduate student body and advocating for student interests." },
	{ name: "Yale College Democrats", description: "A group promoting Democratic values and organizing campaigns, events, and debates." },
	{ name: "Yale College Republicans", description: "A group promoting Republican values and organizing events, debates, and speaker series." },
	{ name: "Yale Model United Nations", description: "An organization promoting global awareness through Model UN simulations and conferences." },
	{ name: "Yale Political Union", description: "Yale's oldest and largest political society, offering a platform for debate and discussion." },
	{ name: "Yale Undergraduate Moot Court", description: "A group offering students the chance to engage in simulated court proceedings and competitions." }
];

const publicationsClubs = [
	{ name: "Accent Multilingual Magazine", description: "A magazine celebrating multilingualism and global perspectives." },
	{ name: "Broad Recognition", description: "Yale's feminist publication, offering a platform for voices and stories of women and gender minorities." },
	{ name: "China Hands Magazine", description: "A publication dedicated to exploring Chinese culture, politics, and international relations." },
	{ name: "DOWN Magazine", description: "A student-run magazine focused on urban culture, fashion, and creative expression." },
	{ name: "Kalliope", description: "Yale's premier undergraduate literary magazine, featuring fiction, poetry, and creative non-fiction." },
	{ name: "Rumpus Magazine", description: "A humor and satire magazine known for its witty and irreverent takes on campus life." },
	{ name: "The Boola", description: "A student-run online platform offering news and entertainment content for the Yale community." },
	{ name: "The New Journal", description: "A long-standing magazine featuring investigative journalism and narrative non-fiction." },
	{ name: "The Yale Globalist", description: "A publication focusing on global affairs and international issues." },
	{ name: "The Yale Herald", description: "A student newspaper offering news, commentary, and opinion pieces on campus issues." },
	{ name: "The Yale Historical Review", description: "A journal featuring original research and articles on historical topics." },
	{ name: "The Yale Literary Magazine", description: "Yale's oldest literary publication, featuring poetry, fiction, and visual art." },
	{ name: "The Yale Politic", description: "Yale's political magazine, offering analysis and commentary on domestic and international issues." },
	{ name: "Yale Daily News", description: "Yale's oldest daily newspaper, covering campus and local news." },
	{ name: "Yale Daily News Magazine", description: "The magazine supplement to the Yale Daily News, featuring long-form journalism and creative writing." },
	{ name: "Yale Economic Review", description: "A publication focusing on economics, finance, and business analysis." },
	{ name: "Yale Global Health Review", description: "A journal offering perspectives on global health issues and policy." },
	{ name: "Yale Record", description: "The oldest college humor magazine in the U.S., offering satire and comedic takes on student life." },
	{ name: "Yale Review of Psychology", description: "A journal featuring undergraduate research and articles on psychology." },
	{ name: "Yale Undergraduate Journal of Economics and Politics", description: "A journal publishing undergraduate research in economics and political science." }
];



//for remaining categories...

const extracurricularClubs = {
	"Acapella": aCappellaClubs,
	"Academic": academicClubs,
	"Arts": artsClubs,
	"Athletics": athleticsClubs,
	"Entrepreneurship": businessClubs,
	"Comedy": comedyClubs,
	"Culinary": culinaryClubs,
	"Cultural": culturalClubs,
	"Dance": danceClubs,
	"Gender": genderClubs,
	"Health": healthClubs,
	"International": internationalClubs,
	"Religious": religiousClubs,
	"Engineering": scienceEngineeringClubs,
	"Community Outreach": serviceOutreachClubs,
	"Music": musicClubs,
	"Outdoors": outdoorsClubs,
	"Politics": politicsGovernmentClubs,
	"Publications": publicationsClubs,
};



export { academicLinks, careerGuides, varsityResources, socialLifeOptions, extracurricularClubs };
	





