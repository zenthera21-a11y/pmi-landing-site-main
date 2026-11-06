export type CertificationPageType = {
	slug: string;
	maintainingCertification: {
		title: string;
		description: string;
		activities: string[];
		ctaText: string;
		ctaHref: string;
	};
	hero: {
		breadcrumb: { label: string; href?: string }[];
		certificationBadge: string;
		title: string;
		subtitle: string;
		description: string;
		pricing: {
			memberPrice: string;
			fullPrice: string;
		};
		applyButtonText: string;
		applyButtonHref: string;
		note: string;
		membershipLink: {
			text: string;
			href: string;
		};
		shapeImage: string;
		logoImage: string;
		logoAlt: string;
	};
	isRightForYou: {
		title: string;
		description: string;
		roles: string[];
		stats: {
			value: string;
			label: string;
			source?: string;
			sourceUrl?: string;
		}[];
	};
	examContentOutline: {
		title: string;
		description: string;
		languages: string[];
		downloadUrl: string;
	};
	aboutExam: {
		title: string;
		length: string;
		time: string;
		languages: string[];
	};
	pathToCertification: {
		title: string;
		steps: { number: number; label: string }[];
		tabs: {
			heading: string;
			sections: {
				title: string;
				content: string[];
				links?: { text: string; href: string }[];
				button?: { text: string; href: string };
			}[];
			note?: string;
		}[];
		faqsLink: { text: string; href: string };
	};
	examPrep: {
		title: string;
		description: string;
		ctaText: string;
		ctaHref: string;
		courses: {
			title: string;
			description: string;
			tags: string[];
			provider?: string;
			learnMoreHref: string;
			colorTheme: "blue" | "gold";
			image?: string;
		}[];
	};
};

export const certificationPagesData: CertificationPageType[] = [
	{
		slug: "project-management-pmp",
		maintainingCertification: {
			title: "Maintaining your PMP certification",
			description:
				"Earning your PMP certification is a big accomplishment—maintaining it shouldn't have to be. Continuous skill growth that extends beyond certification is critical to fueling your career and your impact. PMP holders are required to earn 60 professional development units (PDUs) in each 3-year cycle to maintain a PMP certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "Project Management Professional (PMP)®" },
			],
			certificationBadge: "Certification",
			title: "Project Management Professional (PMP)®",
			subtitle: "3+ Years of Experience Leading Projects",
			description:
				"Demonstrate your ability to lead projects in any industry with this globally recognized certification and open the door to a world of opportunities. The Project Management Professional® certification acknowledges candidates who are skilled at managing the people, processes, and business priorities of professional projects.",
			pricing: {
				memberPrice: "$425",
				fullPrice: "$675",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmp-logo.svg",
			logoAlt: "PMP Certification Logo",
		},
		isRightForYou: {
			title: "Is a PMP right for you?",
			description:
				"The PMP certification proves you have the project leadership and expertise in any way of working: predictive, hybrid or agile. It demonstrates your ability to lead projects without being tied to any specific industry or geographic location.",
			roles: [
				"Project Manager",
				"Senior Project Manager",
				"Program Manager",
				"Project Lead",
				"Project Coordinator",
				"Project Analyst",
				"IT Project Manager",
				"Construction Project Manager",
			],
			stats: [
				{
					value: "17%",
					label:
						"Those with a PMP certification report higher median salaries than those without PMP certification―17% higher on average across the 21 countries surveyed.",
					source: "PMI",
					sourceUrl: "/contact",
				},
				{
					value: "1.7M+",
					label:
						"Active PMP certification holders worldwide, with top countries including China, US, and Canada",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: [
				"English",
				"Arabic (U.A.E.)",
				"Chinese (Simplified, PRC)",
				"Chinese (Traditional, Taiwan)",
				"French (France)",
				"German (Germany)",
				"Hebrew (Israel)",
				"Indonesian (Indonesia)",
				"Italian (Italy)",
				"Japanese (Japan)",
				"Korean (Korea)",
				"Polish (Poland)",
				"Portuguese (Brazil)",
				"Russian (Russia)",
				"Spanish (Latin America)",
				"Spanish (Spain)",
				"Turkish (Turkey)",
			],
			downloadUrl: "/documents/pmp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "180 questions",
			time: "230 minutes",
			languages: [
				"English",
				"Arabic",
				"Brazilian Portuguese",
				"Chinese (Simplified)",
				"Chinese (Traditional)",
				"French",
				"German",
				"Hebrew",
				"Indonesian",
				"Italian",
				"Japanese",
				"Korean",
				"Polish",
				"Russian",
				"Spanish",
				"Turkish",
			],
		},
		pathToCertification: {
			title: "Path to a PMP certification",
			steps: [
				{ number: 1, label: "Check eligibility and prepare" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet one of the following sets of PMP certification requirements:",
					sections: [
						{
							title: "Set A requirements",
							content: [
								"High school or secondary school diploma",
								"Minimum 60 months/5 years experience leading and managing projects within the past eight years",
								"35 hours of project management education/training. You can also meet this requirement with:",
							],
							links: [
								{
									text: "CAPM® certification",
									href: "/certifications/certified-associate-in-project-management-capm",
								},
								{
									text: "PMP® Exam Prep Course",
									href: "/learning/exam-prep",
								},
								{
									text: "Instructor-Led PMP® course (Available Online and In-Person)",
									href: "/learning/instructor-led-training",
								},
							],
						},
						{
							title: "Set B requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent)",
								"36 months/3 years experience leading and managing projects within the past eight years",
								"35 hours of project management education/training. You can also meet this requirement with:",
							],
							links: [
								{
									text: "CAPM® certification",
									href: "/certifications/certified-associate-in-project-management-capm",
								},
								{
									text: "PMP® Exam Prep Course",
									href: "/learning/exam-prep",
								},
								{
									text: "Instructor-Led PMP® course (Available Online and In-Person)",
									href: "/learning/instructor-led-training",
								},
							],
						},
						{
							title: "Set C requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent) from a GAC accredited program",
								"24 months/2 years experience leading and managing projects within the past eight years",
								"35 hours of project management education/training (GAC core project management course work is pre-approved to fulfill this requirement)",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past projects and training:",
								"Projects you've led",
								"Where you've worked, your role and responsibilities, duration of projects",
								"Training you've completed",
								"Institutions attended, courses completed, qualifying hours",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Remember to register a PMI.org user account before moving forward with your application.",
								"Don't miss any requirements with the application checklist.",
								"Take your time. The application is save-as-you-go, so you can take a break if needed.",
								"Remember to focus on your role and responsibilities for the project, not as much on the project itself.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Verify your identity",
							content: [
								"PMI has partnered with Persona to verify the authenticity of certification candidates. You may need to capture a:",
								"Selfie",
								"Government-issued photo ID (Driver's license, Military ID, Passport, National identification card)",
							],
						},
						{
							title: "Schedule your PMP exam",
							content: [
								"After you pay, you can schedule your PMP exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for your PMP exam day.",
					sections: [
						{
							title: "",
							content: [
								"While PMI certifications validate your existing skills and experience, preparation and study is critical to passing the exam.",
								"Whether you're looking for in-person training, practice exams, or on-demand courses that allow you to go at your own pace, there are plenty of options for exam preparation.",
							],
							button: {
								text: "View PMP Exam Prep Resources",
								href: "#prep-resources",
							},
						},
					],
				},
				{
					heading: "Countdown to exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"230 minutes",
								"180 questions",
								"5 unscored pretest questions, 175 scored questions",
								"Offered in 16 languages",
							],
						},
						{
							title: "Associated exam content",
							content: ["People 42%", "Process 50%", "Business environment 8%"],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMP exam",
			description:
				"Project Professionals worldwide agree: PMP is the gold standard in project management certification and distinguishes you from other project professionals. Luckily, we know a thing or two about the most effective ways to prepare. PMI members receive exclusive savings on exam prep.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMP® Exam Prep Course",
					description:
						"Developed and validated by PMP certification holders, this official prep course advances your project management skills and prepares you for the PMP Exam.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Instructor-Led PMP® Exam Prep Courses",
					description:
						"Expert training backed by PMI. Get exam-ready with a PMI Authorized Training Partner. Choose online or in-person courses for structured guidance, real-time interaction, and accountability.",
					tags: ["Live Class"],
					provider: "Expert training backed by PMI",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMP® Practice Exam",
					description:
						"Test your knowledge. Build your confidence. Get ready for exam-day.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "PMP® PMI Study Hall® Essentials (Subscription)",
					description:
						"PMI Study Hall® is a digital learning tool that contains practice questions and exams and gamified activities to make studying effective and enjoyable.",
					tags: ["Online Tools"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMP® Exam Simulator",
					description:
						"Test your knowledge and readiness for the PMP certification exam with 175 practice exam questions. Dive into the rationale behind each answer.",
					tags: ["Online Tool"],
					learnMoreHref:
						"https://chat.openai.com/auth/login?next=%2Fg%2Fg-elRZlGQcX-pmi-infinity-pmp-exam-simulator",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
			],
		},
	},
	{
		slug: "certified-associate-in-project-management-capm",
		maintainingCertification: {
			title: "Maintaining your CAPM certification",
			description:
				"Earning your CAPM certification is a big achievement—we're here to help you maintain it. Continuous skill growth that extends beyond certification is critical to fueling your career and your impact. CAPM certification holders need to earn 15 Professional Development Units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More about Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "Certified Associate in Project Management (CAPM)®" },
			],
			certificationBadge: "Certification",
			title: "Certified Associate in Project Management (CAPM)®",
			subtitle: "No experience required",
			description:
				"Show the world that you possess the foundational knowledge and skills that project teams demand. The CAPM proves that you're ready to take on a wide range of projects—with ways of working that include predictive project management, agile principles and business analysis.",
			pricing: {
				memberPrice: "₹14694",
				fullPrice: "₹19530",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/capm-logo.svg",
			logoAlt: "CAPM Certification Logo",
		},
		isRightForYou: {
			title: "Is a CAPM right for you?",
			description:
				"The CAPM certification is ideal for aspiring project managers and team members who want to demonstrate their commitment to the profession and stand out in the job market.",
			roles: [
				"Assistant Project Manager",
				"Project Administrator",
				"Project Analyst",
				"Project Coordinator",
				"Project Manager",
				"PMI Technical Project Manager",
			],
			stats: [
				{
					value: "1.7M+",
					label:
						"PMI certification holders worldwide, making PMI the leader in the field since 1969.",
				},
				{
					value: "$70,000",
					label:
						"Average salary for CAPM-certified project managers in the United States.",
					source: "Forbes",
					sourceUrl: "https://www.forbes.com",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the CAPM Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English"],
			downloadUrl: "/documents/capm-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "150 questions",
			time: "180 minutes",
			languages: [
				"English",
				"French",
				"Japanese",
				"Chinese (Simplified)",
				"Arabic",
				"German",
				"Spanish",
				"Chinese (Traditional)",
				"Brazilian Portuguese",
				"Italian",
				"Korean",
			],
		},
		pathToCertification: {
			title: "Path to a CAPM certification",
			steps: [
				{ number: 1, label: "Check eligibility and prepare" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet the following CAPM certification requirements",
					sections: [
						{
							title: "Eligibility requirement",
							content: [
								"Secondary degree, such as a high school diploma, GED (general educational development), or global equivalent.",
								"At least 23 hours of project management education completed before the exam. You can also meet this requirement with:",
							],
							links: [
								{
									text: "PMI on-demand CAPM Exam Prep Course",
									href: "/learning/exam-prep",
								},
								{
									text: "Instructor-Led CAPM® course",
									href: "/learning/instructor-led-training",
								},
							],
						},
						{
							title: "Not ready for certifications?",
							content: [
								"Check out our professional development programs for other ways to build your skills.",
							],
							button: {
								text: "Explore Foundational Learning",
								href: "/learning/foundations-of-project-management",
							},
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Enter your academic education and 23 hours of professional education courses.",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Remember to register a PMI.org user account before moving forward with your application.",
								"Take your time. The application is save-as-you-go, so you can take a break if needed.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your CAPM exam",
							content: [
								"After you pay, you can schedule your CAPM exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for your CAPM exam day.",
					sections: [
						{
							title: "",
							content: [
								"While PMI certifications validate your existing skills and experience, preparation and study is critical to passing the exam.",
								"Whether you're looking for in-person training, practice exams, or on-demand courses that allow you to go at your own pace, there are plenty of options for exam preparation.",
							],
							button: {
								text: "View CAPM Exam Prep Resources Below",
								href: "#prep-resources",
							},
						},
					],
				},
				{
					heading: "Countdown to exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"180 minutes",
								"150 questions\n15 unscored pretest questions, 135 scored questions",
								"Offered in 8 languages",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Project Management Fundamentals and Core Concepts 36%",
								"Predictive, Plan-Based Methodologies 17%",
								"Agile Frameworks/Methodologies 20%",
								"Business Analysis Frameworks 27%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the CAPM exam",
			description:
				"PMI and its Authorized Training Partners offer world-class prep resources to help you gain the foundational knowledge to succeed. Choose self-paced eLearning, instructor-led classes, practice exams, or PMI study tools—whichever fits your learning style and schedule best.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "Online CAPM® Exam Prep with PMTraining™",
					description:
						"A comprehensive self-paced course that walks you through every domain of the CAPM Exam Content Outline, with practice questions and end-of-domain quizzes.",
					tags: ["eLearning", "Sponsored"],
					provider: "Premier Authorized Training Partner",
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title:
						"Certified Associate in Project Management (CAPM)® PMI Study Hall®",
					description:
						"PMI's official study resource with personalized study plans, practice exams, and progress tracking built around the CAPM Exam Content Outline.",
					tags: ["Online Tools"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "CAPM® Exam Prep Course",
					description:
						"On-demand training from PMI that covers predictive, agile, and business analysis frameworks—all aligned to current exam objectives.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "CAPM® Practice Exam",
					description:
						"Simulate real test-day conditions with a timed practice exam that mirrors the format, difficulty, and domain weighting of the live CAPM exam.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Instructor-Led CAPM® Exam Prep Courses",
					description:
						"Live virtual or in-person classes led by expert instructors, with structured lessons, discussions, and cohort-based study support.",
					tags: ["Live Class"],
					provider: "Expert training backed by PMI",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "PMBOK® Guide",
					description:
						"The globally recognized PMI standard for project management—foundational reading for every aspiring project professional.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "agile-acp",
		maintainingCertification: {
			title: "Maintaining your PMI-ACP certification",
			description:
				"Earning your PMI-ACP certification is a big accomplishment—maintaining it shouldn't have to be. Continuing education is core to PMI certification. PMI-ACP holders need to earn 30 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "PMI Agile Certified Practitioner (PMI-ACP)®" },
			],
			certificationBadge: "Certification",
			title: "PMI Agile Certified Practitioner (PMI-ACP)®",
			subtitle: "2+ years of experience",
			description:
				"The PMI-ACP certification highlights your agile expertise with the industry's only agnostic, experienced-based, ISO-accredited exam. It validates your ability to drive excellence across methodologies, including Scrum, Lean, Kanban, and more—with a truly agile and a team-centric approach, this certification is sure to make you stand out among peers, employers, and stakeholders alike.",
			pricing: {
				memberPrice: "$435",
				fullPrice: "$495",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-acp-logo.svg",
			logoAlt: "PMI-ACP Certification Logo",
		},
		isRightForYou: {
			title: "Is PMI-ACP right for you?",
			description:
				"Organizations that embrace agility and adaptability outperform their counterparts, resulting in increased value. With the demand for agile practitioners soaring, the PMI-ACP certification is more valuable than ever. Developed by agile leaders, this certification equips you with the mindset, tools and skills needed to collaborate effectively in any agile environment.",
			roles: [
				"Product Owner",
				"Scrum Master",
				"Agile Team Lead",
				"Developer",
				"Project Manager",
				"Agile Coach",
				"Product Manager",
			],
			stats: [
				{
					value: "86%",
					label: "of PMI-ACPs qualified for new opportunities",
				},
				{
					value: "84%",
					label: "of PMI-ACPs gained recognition for career advancement",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-ACP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: [
				"English",
				"Arabic (U.A.E.)",
				"Chinese (Simplified, PRC)",
				"Chinese (Traditional, Taiwan)",
				"French (France)",
				"German (Germany)",
				"Japanese (Japan)",
				"Korean (Korea)",
				"Portuguese (Brazil)",
				"Spanish (Latin America)",
			],
			downloadUrl: "/documents/pmi-acp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "120 questions",
			time: "180 minutes",
			languages: [
				"English",
				"Arabic",
				"Chinese (Simplified)",
				"Chinese (Traditional)",
				"French",
				"German",
				"Brazilian Portuguese",
				"Japanese",
				"Korean",
				"Spanish",
			],
		},
		pathToCertification: {
			title: "Path to a PMI-ACP certification",
			steps: [
				{ number: 1, label: "Check eligibility and prepare" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet the following PMI-ACP certification requirements:",
					sections: [
						{
							title: "Education requirement",
							content: [
								"High School (or Secondary School) Diploma or Higher",
								"You qualify with a high school diploma or international equivalent, such as GCSEs, a Secondary School Certificate, or GED.",
							],
						},
						{
							title: "Agile Experience",
							content: [
								"You must meet ONE of the following:",
								"2 years of agile experience (in the past 5 years)",
								"Degree from GAC-accredited program, plus 1 year of agile experience",
								"Third-party agile certification, plus 1 year of agile experience",
								"PMP® certification",
							],
						},
						{
							title: "Agile Training",
							content: [
								"You'll need 21 hours of formal training in agile practices, frameworks, and methodologies via ONE of the following:",
							],
							links: [
								{
									text: "PMI Authorized PMI-ACP Exam Prep Course",
									href: "/contact",
								},
								{
									text: "Authorized Training Partner Prep Course",
									href: "/contact",
								},
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your agile experience and training:",
								"Projects where you applied agile methodologies",
								"Your role and responsibilities on agile teams",
								"21 hours of agile training completed",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Remember to register a PMI.org user account before moving forward with your application.",
								"Take your time. The application is save-as-you-go, so you can take a break if needed.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your PMI-ACP exam",
							content: [
								"After you pay, you can schedule your PMI-ACP exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for your PMI-ACP exam day.",
					sections: [
						{
							title: "",
							content: [
								"While PMI certifications validate your existing skills and experience, preparation and study is critical to passing the exam.",
								"Whether you're looking for in-person training, practice exams, or on-demand courses that allow you to go at your own pace, there are plenty of options for exam preparation.",
							],
							button: {
								text: "View PMI-ACP Exam Prep Resources",
								href: "#prep-resources",
							},
						},
					],
				},
				{
					heading: "Countdown to exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"180 minutes",
								"120 questions",
								"Includes one 10-minute break",
								"Offered in 10 languages",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Mindset 28%",
								"Leadership 25%",
								"Product 19%",
								"Delivery 28%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMI-ACP exam",
			description:
				"Preparing for your PMI-ACP exam is key to passing. From a gamified Study Hall to an online practice exam, explore all the ways to get ready for the big day.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMI-ACP® Exam Prep Course",
					description:
						"This official course advances your agile leadership skills and prepares you for the ACP Exam. Validated by PMI-ACPs.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Instructor-Led PMI-ACP® Exam Prep Courses",
					description:
						"Expert training backed by PMI. Get exam-ready with a PMI Authorized Training Partner. Choose online or in-person courses for structured guidance, real-time interaction, and accountability.",
					tags: ["Live Class"],
					provider: "Expert training backed by PMI",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMI-ACP® PMI Study Hall®",
					description:
						"PMI Study Hall® is a digital learning tool that contains content-specific lessons to provide certification candidates with a thorough overview of what to expect on exam day.",
					tags: ["Online Tools"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMI-ACP® Practice Exam",
					description:
						"Developed by agile leaders, this official practice exam will help you prepare to sit for the PMI-ACP exam.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Agile Practice Guide",
					description:
						"A Disciplined Agile® Approach to Optimizing Your Way of Working. A pragmatic application of agile, lean, and traditional techniques for your enterprise-class environment.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "program-management-pgmp",
		maintainingCertification: {
			title: "Maintaining your PgMP certification",
			description:
				"Earning your certification is a big step - maintaining it shouldn't have to be. Continuing education is core to PMI certification. PgMP holders are required to earn 60 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "Program Management Professional (PgMP)®" },
			],
			certificationBadge: "Certification",
			title: "Program Management Professional (PgMP)®",
			subtitle: "4-7 years of experience",
			description:
				"The PgMP certification demonstrates an advanced level of expertise through managing multiple projects in a coordinated way. PgMP certification verifies that as a program management professional, you have the experience to navigate complexity and align to strategic objectives.",
			pricing: {
				memberPrice: "$800",
				fullPrice: "$1000",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pgmp-logo.svg",
			logoAlt: "PgMP Certification Logo",
		},
		isRightForYou: {
			title: "Is a PgMP right for you?",
			description:
				"If you have the proven ability to manage multiple, related projects and navigate complex activities that span functions, organizations, regions or cultures and to align results with organizational goals, then you're a potential PgMP. Advance your career and elevate your professional profile with the PgMP certification.",
			roles: [
				"Program Manager",
				"Senior Program Manager",
				"Director of Programs",
				"Program Director",
				"Portfolio Manager",
				"VP of Project Management",
				"Head of PMO",
			],
			stats: [
				{
					value: "42%",
					label:
						"Higher earnings for program managers with the PgMP certification than non-PgMP program professionals.",
				},
				{
					value: "23%",
					label:
						"Of surveyed PgMP holders globally reported a salary increase after becoming certified.",
				},
				{
					value: "1.5M+",
					label:
						"PMI Certification holders worldwide including PMP®, CAPM®, PgMP, and more.",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PgMP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English", "Chinese (Simplified, PRC)"],
			downloadUrl: "/documents/pgmp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "170 questions",
			time: "240 minutes",
			languages: ["English", "Chinese (Simplified)"],
		},
		pathToCertification: {
			title: "Path to a PgMP certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet one of the following sets of PgMP certification requirements:",
					sections: [
						{
							title: "Set A Requirements",
							content: [
								"High school or secondary school diploma (or global equivalent)",
								"48 months/4 years of project management experience or PMP within the past 15 years",
								"84 months/7 years of program management experience within the past 15 years",
							],
						},
						{
							title: "Set B Requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent)",
								"48 months/4 years of project management experience or PMP within the past 15 years",
								"48 months/4 years of program management experience within the past 15 years",
							],
						},
						{
							title: "Set C Requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent) from a GAC accredited program",
								"36 months/3 years project management experience or PMP within the past 15 years",
								"36 months/3 years of program management experience within the past 15 years",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past projects and programs:",
								"Project Management Experience: Where you've worked, your role and responsibilities, duration of projects.",
								"Program Management Experience: Program objectives, your role and responsibilities, projects that were part of the program",
								"Experience Summaries: Examples of your experience in Program Strategy, Program Governance and Program Leadership",
							],
						},
						{
							title: "Additional Tips",
							content: [
								"Remember to register a PMI.org user account before moving forward with your application.",
								"Don't miss any requirements with the application checklist.",
								"Take your time. The application is save-as-you-go, so you can take a break if needed.",
								"Review the handbook thoroughly before beginning the application.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Panel review and exam scheduling",
							content: [
								"After you pay, a panel of volunteer PgMP-certified program managers will assess your professional experience based on your summary responses on the PgMP panel assessment.",
								"Upon successfully completing the Panel Review Assessment, you can schedule your exam.",
								"You may attempt the exam up to three times in one year if you don't pass.",
							],
						},
					],
				},
				{
					heading: "Prepare for your PgMP exam day.",
					sections: [
						{
							title: "",
							content: [
								"While PMI certifications validate your existing skills and experience, preparation and study is critical to passing the exam.",
								"Whether you're looking for in-person training, practice exams, or on-demand courses that allow you to go at your own pace, there are plenty of options for exam preparation.",
							],
							button: {
								text: "View PgMP Exam Prep Resources Below",
								href: "#prep-resources",
							},
						},
					],
				},
				{
					heading: "Countdown to exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"240 minutes",
								"170 questions",
								"Offered in 2 languages",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Strategic Program Alignment 15%",
								"Program Life Cycle Management 44%",
								"Business Alignment 11%",
								"Stakeholder Engagement 16%",
								"Governance 14%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PgMP exam",
			description:
				"Effective PgMP exam prep is essential to earning your certification—even if you have advanced program management education or experience. Explore the multiple study aids we offer to get you exam day ready. PMI members receive exclusive savings on exam prep.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "The Standard for Program Management – Fifth Edition",
					description:
						"The Standard for Program Management - Fifth Edition continues to be a comprehensive and valued resource for PgMP candidates as well as active certification holders, and practitioners worldwide.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "portfolio-management-pfmp",
		maintainingCertification: {
			title: "Maintaining your PfMP certification",
			description:
				"Earning your PfMP certification is a big step — maintaining it shouldn't have to be. Continuing education is core to PMI certification. PfMP holders need to earn 60 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "Portfolio Management Professional (PfMP)®" },
			],
			certificationBadge: "Certification",
			title: "Portfolio Management Professional (PfMP)®",
			subtitle: "8+ years of experience",
			description:
				"Conduct a symphony of project portfolios. The PfMP certification proves you have the advanced skills to manage and align multiple projects, programs and operations with your organization's strategic goals. As a PfMP holder, you'll balance demands, oversee portfolio success, and allocate resources where they matter most.",
			pricing: {
				memberPrice: "$800",
				fullPrice: "$1000",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pfmp-logo.svg",
			logoAlt: "PfMP Certification Logo",
		},
		isRightForYou: {
			title: "Is a PfMP right for you?",
			description:
				'Your organization does the work right. But does it do the right work? As a portfolio manager, your role is essential to ensuring that the answer is "Yes." If you\'re an executive or senior-level practitioner managing a portfolio of projects, programs and operations aligned with organizational strategy and focused on doing the right work, then the PfMP is the right choice for you.',
			roles: [
				"Portfolio Manager",
				"Senior Portfolio Manager",
				"Director of Portfolio Management",
				"VP of Portfolio Management",
				"Portfolio Analyst",
				"Portfolio Governance Manager",
			],
			stats: [
				{
					value: "35%",
					label:
						"Organizations with mature project portfolio management practices complete 35 percent more of their programs successfully.",
				},
				{
					value: "1.5M+",
					label:
						"PMI Certification holders worldwide including PMP®, CAPM®, PfMP, and more.",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PfMP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English"],
			downloadUrl: "/documents/pfmp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "170 questions",
			time: "240 minutes",
			languages: ["English"],
		},
		pathToCertification: {
			title: "Path to a PfMP certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet one of the following sets of PfMP certification requirements:",
					sections: [
						{
							title: "Set A requirements",
							content: [
								"High school or secondary school diploma (or global equivalent)",
								"96 months/8 years of professional business experience within the past 15 years",
								"84 months/7 years of portfolio management experience within the past 15 years",
							],
						},
						{
							title: "Set B requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent)",
								"96 months/8 years of professional business experience within the past 15 years",
								"48 months/4 years of portfolio management experience within the past 15 years",
							],
						},
						{
							title: "Set C requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent) from a GAC accredited program",
								"96 months/8 years of professional business experience within the past 15 years",
								"36 months/3 years of portfolio management experience within the past 15 years",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past professional projects and training:",
								"Projects and programs you've led where you've worked, your role and responsibilities, duration of projects",
								"Training you've completed institutions attended, courses completed, qualifying hours",
								"Experience Summaries detailed descriptions regarding your professional portfolio management experience",
							],
						},
						{
							title: "Additional Tips",
							content: [
								"Remember to register a PMI.org user account before moving forward with your application.",
								"Take your time. The application is save-as-you-go, so you can take a break if needed.",
								"Review the handbook thoroughly before beginning the application.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Panel review and exam scheduling",
							content: [
								"After you pay, a panel of volunteers identified as subject matter experts in portfolio management will assess your professional experience based on your summary application responses.",
								"Upon successfully completing the Panel Review Assessment, you can schedule your exam.",
								"You may attempt the exam up to three times in one year if you don't pass.",
							],
						},
					],
				},
				{
					heading: "Prepare for your PfMP exam day.",
					sections: [
						{
							title: "",
							content: [
								"While PMI certifications validate your existing skills and experience, preparation and study is critical to passing the exam.",
								"Whether you're looking for in-person training, practice exams, or on-demand courses that allow you to go at your own pace, there are plenty of options for exam preparation.",
							],
							button: {
								text: "View PfMP Exam Prep Resources Below",
								href: "#prep-resources",
							},
						},
					],
				},
				{
					heading: "Countdown to exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"240 minutes",
								"170 questions",
								"Offered in English only",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Strategic Alignment 25%",
								"Governance 20%",
								"Portfolio Performance 25%",
								"Portfolio Risk Management 15%",
								"Communications Management 15%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PfMP exam",
			description:
				"Explore the multiple study aids we offer to get you exam day ready. PMI members receive exclusive savings on exam prep.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "The Standard for Portfolio Management – Fourth Edition",
					description:
						"An important reference for portfolio managers, as well as project and program managers—regardless of industry or project delivery approach. In today's environment of rapid change and constant disruption, highly-mature portfolio management practices have proven to be a vital tool to organizational success.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "construction",
		maintainingCertification: {
			title: "Maintaining your PMI-CP certification",
			description:
				"Earning your certification is a big step — maintaining it shouldn't have to be. Continuing education is core to PMI certification. PMI-CP holders need to earn 30 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "PMI Construction Professional (PMI-CP)™" },
			],
			certificationBadge: "Certification",
			title: "PMI Construction Professional (PMI-CP)™",
			subtitle: "3+ years of experience",
			description:
				"The PMI-CP is the only internationally recognized certification that offers an in-depth curriculum on the construction industry.",
			pricing: {
				memberPrice: "$399",
				fullPrice: "$499",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-cp-logo.svg",
			logoAlt: "PMI-CP Certification Logo",
		},
		isRightForYou: {
			title: "Is a PMI-CP right for you?",
			description:
				"The PMI-CP prepares construction project managers to lead, plan and manage contracts. It also equips you to navigate challenges and stay relevant in an ever-evolving field.",
			roles: [
				"Construction Project Manager",
				"Construction Manager",
				"Project Manager",
				"Program Manager",
				"Contract Manager",
				"Site Manager",
			],
			stats: [
				{
					value: "3+",
					label:
						"Years of on-the-job experience in construction projects or built environment projects required.",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-CP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: [
				"English",
				"Arabic (U.A.E.)",
				"Chinese (Simplified, PRC)",
				"Chinese (Traditional, Taiwan)",
				"French (France)",
				"German (Germany)",
				"Japanese (Japan)",
				"Korean (Korea)",
				"Portuguese (Brazil)",
				"Spanish (Latin America)",
			],
			downloadUrl: "/documents/pmi-cp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "120 questions",
			time: "230 minutes",
			languages: [
				"English",
				"Arabic",
				"Korean",
				"Brazilian Portuguese",
				"Chinese (Simplified)",
				"Chinese (Traditional)",
				"French",
				"German",
				"Japanese",
				"Spanish",
			],
		},
		pathToCertification: {
			title: "Path to a PMI-CP certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study and take exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet the following certification requirements:",
					sections: [
						{
							title: "Eligibility requirements",
							content: [
								"Complete the four course training modules",
								"3 years of on-the-job experience in construction projects or built environment projects",
								"Must be within the past 10 years",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past projects and training:",
								"Personal info: Email address, address, and phone number",
								"Experience: Construction project experience details",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Remember to register a PMI.org user account before moving forward with your application.",
								"Take your time. The application is save-as-you-go, so you can take a break if needed.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "Congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your PMI-CP exam",
							content: [
								"After you pay, you can schedule your PMI-CP exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for exam day.",
					sections: [
						{
							title: "At a glance:",
							content: ["230 minutes", "120 questions", "Offered in English"],
						},
						{
							title: "Associated exam content",
							content: [
								"Contracts Management 50%",
								"Stakeholder Engagement 30%",
								"Strategy & Scope Management 15%",
								"Project Governance 5%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMI-CP exam",
			description:
				"The PMI-CP foundational courses are self-paced and designed to meet your schedule. Each module is a 6-10 hour commitment. You can also complete the four required courses in live classes with expert instructors.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMI-CP™ Project Communications",
					description:
						"Today's large engineering and construction projects are incredibly complex, raising the requirements for effective communication.",
					tags: ["eLearning"],
					provider: "14 PDUs",
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "PMI-CP™ Interface Management",
					description:
						"Get the required skills to transform the global construction industry and bring large, complex projects to life.",
					tags: ["eLearning"],
					provider: "14 PDUs",
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "PMI-CP™ Scope & Change Order Mgmt",
					description: "Solve the challenges of scope creep and change order.",
					tags: ["eLearning"],
					provider: "14 PDUs",
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "PMI-CP™ Contract & Risk Mgmt",
					description:
						"This course will help you nail down new contract and risk management skills.",
					tags: ["eLearning"],
					provider: "14 PDUs",
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Instructor-Led PMI-CP® Courses",
					description:
						"You can also complete the four required courses in live classes with expert instructors. Our Authorized Training Partners offer PMI-accredited training online and in-person.",
					tags: ["Live Class"],
					provider: "Expert training backed by PMI",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "risk-management-rmp",
		maintainingCertification: {
			title: "Maintaining your PMI-RMP certification",
			description:
				"Earning your PMI-RMP certification is a big step - maintaining it shouldn't have to be. Continuing education is core to PMI certification. PMI-RMP holders need to earn 30 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "PMI Risk Management Professional (PMI-RMP)®" },
			],
			certificationBadge: "Certification",
			title: "PMI Risk Management Professional (PMI-RMP)®",
			subtitle: "3-5 years of experience",
			description:
				"Turn risks into rewards. Risk management is key to avoiding delays, extra costs, and project failures. With the PMI-RMP, you'll gain the expertise to spot problems early, master risk fundamentals, and enhance project outcomes for a competitive edge.",
			pricing: {
				memberPrice: "$520",
				fullPrice: "$670",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-rmp-logo.svg",
			logoAlt: "PMI-RMP Certification Logo",
		},
		isRightForYou: {
			title: "Is a PMI-RMP right for you?",
			description:
				"Project risk management is an essential practice that boosts the probability of success, alleviating anxiety for stakeholders. You can prove your advanced knowledge and experience in risk management—even for large projects in complex environments—and set yourself apart with PMI-RMP certification.",
			roles: [
				"Project Manager",
				"Risk Manager",
				"Functional Manager",
				"C-Suite Executive",
			],
			stats: [
				{
					value: "20%",
					label:
						"Experts say that earning relevant certifications can boost your salary by as much as 20%.",
					source: "Fortune",
				},
				{
					value: "36%",
					label:
						"Increase in risk management investment by organizations planned within the next two years.",
				},
				{
					value: "1.5M+",
					label:
						"PMI Certification holders worldwide including PMP®, CAPM®, PMI-RMP, and more.",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-RMP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English", "Arabic (U.A.E.)", "Chinese (Simplified, PRC)"],
			downloadUrl: "/documents/pmi-rmp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "115 questions",
			time: "150 minutes",
			languages: ["English", "Arabic", "Chinese (Simplified)"],
		},
		pathToCertification: {
			title: "Path to a PMI-RMP certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet one of the following sets of PMI-RMP certification requirements:",
					sections: [
						{
							title: "Set A requirements",
							content: [
								"High school or secondary school diploma (or global equivalent)",
								"36 months/3 years project risk management experience within the last 5 years",
								"40 hours of project risk management education",
							],
						},
						{
							title: "Set B requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent)",
								"24 months/2 years of project risk management experience within the last 5 years",
								"30 hours of project risk management education",
							],
						},
						{
							title: "Set C requirements",
							content: [
								"Bachelor's degree or higher (or global equivalent) from a GAC accredited program",
								"12 months/1 year of project risk management experience within the past 5 years",
								"30 hours of project risk management education",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past projects and training:",
								"Projects you've led",
								"Where you've worked, your role and responsibilities, duration of projects",
								"Training you've completed",
								"Institutions attended, courses completed, qualifying hours",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Take your time, or even a break. You can save the application as you go and come back to it whenever you're ready.",
								"Describe your role and responsibilities on the project, not the project itself.",
								"If you're selected for an eligibility audit, don't worry; it's part of the process.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your PMI-RMP exam",
							content: [
								"After you pay, you can schedule your PMI-RMP exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for your PMI-RMP exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"150 minutes",
								"115 questions",
								"Offered in 3 languages",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Risk Strategy and Planning 22%",
								"Risk Identification 23%",
								"Risk Analysis 23%",
								"Risk Response 13%",
								"Monitor and Close Risk 19%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMI-RMP exam",
			description:
				"Explore the multiple study aids we offer to get you exam day ready. PMI members receive exclusive savings on exam prep.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMI-RMP® Exam Prep Course",
					description:
						"Developed and validated by risk management professionals, this official prep course advances your risk management skills and prepares you for the PMI-RMP® exam.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Instructor-Led PMI-RMP® Exam Prep Courses",
					description:
						"Get exam-ready with a PMI Authorized Training Partner. Choose from online or in-person courses, gain expert instruction, and stay on track.",
					tags: ["Live Class"],
					provider: "Expert training backed by PMI",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMI-RMP® PMI Study Hall®",
					description:
						"PMI Study Hall® is a digital learning tool that contains content-specific lessons to provide certification candidates with a thorough overview of what to expect on exam day.",
					tags: ["Online Tools"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title:
						"Risk Management in Portfolios, Programs, and Projects: A Practice Guide",
					description:
						'Focuses on the "what" of risk management and applies risk management principles to the portfolio, program, and project domains.',
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMI Risk Management Professional (PMI-RMP)® Practice Exam",
					description:
						"Sharpen your skills and reduce exam-day stress with the official PMI-RMP® Practice Exam.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
			],
		},
	},
	{
		slug: "pmo-certified-professional-pmi-pmocp",
		maintainingCertification: {
			title: "Maintaining your PMI-PMOCP certification",
			description:
				"Earning your PMI-PMOCP certification is a big step — maintaining it shouldn't have to be. Continuing education is core to PMI certification. PMI-PMOCP holders need to earn 30 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{
					label:
						"PMI Project Management Office Certified Professional (PMI-PMOCP)™",
				},
			],
			certificationBadge: "Certification",
			title:
				"PMI Project Management Office Certified Professional (PMI-PMOCP)™",
			subtitle: "3+ years of experience",
			description:
				"The PMI-PMOCP certifies your expertise in leading and shaping Project Management Offices (PMOs), demonstrating your ability to drive strategic value. It shows you understand the unique needs, challenges, and culture of each organization in crafting an optimal PMO structure.",
			pricing: {
				memberPrice: "$520",
				fullPrice: "$700",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-pmocp-logo.svg",
			logoAlt: "PMI-PMOCP Certification Logo",
		},
		isRightForYou: {
			title: "Is PMI-PMOCP right for you?",
			description:
				"The PMI-PMOCP exam is designed to validate and elevate experienced project professionals into key roles within PMOs. Tailored for current and aspiring PMO professionals, this certification enhances your skills, maximizes your impact, and ensures value delivery within your organization.",
			roles: [
				"PMO Leader",
				"PMO Team Member",
				"Project Manager",
				"Project Coordinator",
			],
			stats: [],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-PMOCP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: [
				"English",
				"Arabic (U.A.E.)",
				"Chinese (Simplified, PRC)",
				"Chinese (Traditional, Taiwan)",
				"French (France)",
				"German (Germany)",
				"Japanese (Japan)",
				"Korean (Korea)",
				"Portuguese (Brazil)",
				"Portuguese (Portugal)",
				"Spanish (Latin America)",
			],
			downloadUrl: "/documents/pmi-pmocp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "120 questions",
			time: "165 minutes",
			languages: [
				"English",
				"Brazilian Portuguese",
				"Chinese (Simplified)",
				"Spanish",
				"Arabic",
				"French",
				"German",
				"Japanese",
				"Korean",
				"Chinese (Traditional)",
			],
		},
		pathToCertification: {
			title: "Path to a PMI-PMOCP certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet the following PMI-PMOCP certification requirements:",
					sections: [
						{
							title: "Requirements",
							content: [
								"Secondary degree, such as a high school diploma, GED (general educational development), or global equivalent",
								"3 years of project related experience within the last 8 years OR a PMP in good standing",
								"10 hours of PMO education",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your:",
								"Academic education",
								"Where you've worked, your role and responsibilities, duration of projects",
								"PMO education",
								"Project management experience: Where you've worked, your role and responsibilities, and duration of projects.",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Take your time, or even a break. You can save the application as you go and come back to it whenever you're ready.",
								"Describe your role and responsibilities on the project, not the project itself.",
								"If you're selected for an eligibility audit, don't worry; it's part of the process.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your PMI-PMOCP exam",
							content: [
								"After you pay, you can schedule your PMI-PMOCP exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for your PMI-PMOCP exam with confidence.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"165 minutes",
								"120 questions",
								"Offered in 4 languages",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Organizational Development and Alignment 16%",
								"PMO Strategic Elements 18%",
								"PMO Design and Structuring 18%",
								"PMO Operation and Performance 15%",
								"PMO Enhancement and Effectiveness 18%",
								"People 15%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMI-PMOCP exam",
			description:
				"Discover the various study resources we provide to help you prepare for exam day. PMI members receive exclusive savings on exam prep.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMI-PMOCP™ Exam Prep Course",
					description:
						"Enhance your PMO leadership and prepare for the PMI-PMOCP Exam with this expert-developed prep course.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Instructor-Led PMI-PMOCP™ Exam Prep Courses",
					description:
						"Expert training backed by PMI. Get exam-ready with a PMI Authorized Training Partner. Choose online or in-person courses for structured guidance, real-time interaction, and accountability.",
					tags: ["Live Class"],
					provider: "Expert training backed by PMI",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMI-PMOCP™ Practice Exam",
					description:
						"Assess your readiness and strengthen your preparation with a timed practice exam built to reflect the PMI-PMOCP™ exam experience.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Project Management Offices: A Practice Guide",
					description:
						"A vital resource for transforming PMOs into strategic, value-driven assets. Drawing on insights from global PMO experts, the guide addresses key challenges like aligning with organizational strategy, demonstrating value, and driving continuous improvement.",
					tags: ["Publication"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "business-analysis-pba",
		maintainingCertification: {
			title: "Maintaining your PMI-PBA certification",
			description:
				"Earning your PMI-PBA certification is a big step — maintaining it shouldn't have to be. Continuing education is core to PMI certification. PMI-PBA holders need to earn 60 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "PMI Professional in Business Analysis (PMI-PBA)®" },
			],
			certificationBadge: "Certification",
			title: "PMI Professional in Business Analysis (PMI-PBA)®",
			subtitle: "3-5 years of experience",
			description:
				"The PMI-PBA certification recognizes an individual's expertise in business analysis and uses these tools and techniques to improve the overall success of projects. The PMI-PBA certification carries a high level of professional credibility.",
			pricing: {
				memberPrice: "$405",
				fullPrice: "$555",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-pba-logo.svg",
			logoAlt: "PMI-PBA Certification Logo",
		},
		isRightForYou: {
			title: "Is a PMI-PBA right for you?",
			description:
				"Business analysis is a topic of growing importance to projects and programs. The marketplace reflects this importance, as practitioners increasingly embrace business analysis as a technique for uncovering business needs, managing requirements, and creating effective solutions to business problems.",
			roles: [
				"Business Analyst",
				"Requirements Manager",
				"Project Manager",
				"Product Owner",
				"Business Systems Analyst",
				"Process Analyst",
			],
			stats: [],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-PBA Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English"],
			downloadUrl: "/documents/pmi-pba-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "200 questions",
			time: "240 minutes",
			languages: ["English", "Chinese (Simplified)"],
		},
		pathToCertification: {
			title: "Path to a PMI-PBA certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet one of the following sets of PMI-PBA certification requirements:",
					sections: [
						{
							title: "Set A requirements",
							content: [
								"Secondary degree (High school diploma, associate's degree or global equivalent).",
								"60 months working as a practitioner of business analysis. This experience must have been earned in the last 8 years.",
								"35 contact hours earned in the topic of business analysis practices.",
							],
						},
						{
							title: "Set B requirements",
							content: [
								"Bachelor's degree or higher degree (or global equivalent).",
								"36 months working as a practitioner of business analysis. This experience must have been earned in the last 8 years.",
								"35 contact hours earned in the topic of business analysis practices.",
							],
						},
						{
							title: "Set C requirements",
							content: [
								"Bachelor's or postgraduate degree from a GAC accredited program (bachelor's or master's degree or global equivalent).",
								"Minimum two years/24 months unique nonoverlapping professional business analysis experience.",
								"35 contact hours of formal education.",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process:",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past projects and training:",
								"Projects you've led",
								"Where you've worked, your role and responsibilities, duration of projects",
								"Training you've completed",
								"Institutions attended, courses completed, qualifying hours",
							],
						},
						{
							title: "Additional tips",
							content: [
								"Take your time, or even a break. You can save the application as you go and come back to it whenever you're ready.",
								"Describe your role and responsibilities on the project, not the project itself.",
								"If you're selected for an eligibility audit, don't worry; it's part of the process.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your PMI-PBA exam",
							content: [
								"After you pay, you can schedule your PMI-PBA exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center (recommended) or securely online",
								"You may attempt the exam up to three times in one year if you don't pass",
							],
						},
					],
				},
				{
					heading: "Prepare for PMI-PBA exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"240 minutes",
								"200 questions",
								"Offered in 1 language",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Needs Assessment 18%",
								"Planning 22%",
								"Analysis 35%",
								"Traceability and Monitoring 15%",
								"Evaluation 10%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMI-PBA exam",
			description:
				"Explore the study aid we offer to get you exam day ready. PMI members receive exclusive savings on exam prep.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "scheduling-sp",
		maintainingCertification: {
			title: "Maintaining your PMI-SP certification",
			description:
				"Earning your PMI-SP certification is a big step — maintaining it shouldn't have to be. Continuing education is core to PMI certification. PMI-SP holders need to earn 30 professional development units (PDUs) in each 3-year cycle to maintain certification. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Content creating",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "PMI Scheduling Professional (PMI-SP)®" },
			],
			certificationBadge: "Certification",
			title: "PMI Scheduling Professional (PMI-SP)®",
			subtitle: "2-3 years of experience",
			description:
				"Stand out on the project team as a specialized expert with the PMI Scheduling Professional (PMI-SP)® certification. This certification demonstrates your ability to develop and maintain project schedules, manage complex timelines across global teams, and impact project outcomes with proven scheduling knowledge and skill.",
			pricing: {
				memberPrice: "$520",
				fullPrice: "$670",
			},
			applyButtonText: "Apply Now",
			applyButtonHref: "/contact",
			note: "Exam fee will only be required after your application has been accepted and you are ready to schedule your exam.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-sp-logo.svg",
			logoAlt: "PMI-SP Certification Logo",
		},
		isRightForYou: {
			title: "Is a PMI-SP right for you?",
			description:
				"Effective scheduling is critical to project success, especially in today's fast-paced, global work environment. The PMI-SP® certification proves you have the advanced knowledge to create, maintain, and analyze project schedules that align with strategic goals. It validates your ability to manage resources, mitigate risks, and adapt to shifting priorities, ensuring projects stay on track and deliver results.",
			roles: [
				"Project Scheduler",
				"Scheduling Manager",
				"Project Manager",
				"Program Scheduler",
				"Planning Manager",
			],
			stats: [
				{
					value: "1.6M+",
					label:
						"PMI certification holders worldwide including PMP®, CAPM®, PgMP®, and more.",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-SP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English"],
			downloadUrl: "/documents/pmi-sp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "170 multiple-choice questions",
			time: "210 minutes",
			languages: ["English"],
		},
		pathToCertification: {
			title: "Path to a PMI-SP certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Complete the application" },
				{ number: 3, label: "Pay and schedule the exam" },
				{ number: 4, label: "Study for the exam" },
				{ number: 5, label: "Take the exam" },
			],
			tabs: [
				{
					heading:
						"Before you apply, make sure you meet one of the following sets of PMI-SP certification requirements:",
					sections: [
						{
							title: "Set A requirements",
							content: [
								"Secondary degree",
								"40 months of project scheduling experience within the last 5 years",
								"40 hours of project scheduling education",
							],
						},
						{
							title: "Set B requirements",
							content: [
								"Four-year degree",
								"24 months of project scheduling experience within the last 5 years",
								"30 hours of project scheduling education",
							],
						},
						{
							title: "Set C requirements",
							content: [
								"Bachelor's or post-graduate degree from a GAC accredited program (bachelor's or master's degree or global equivalent)",
								"At least 12 months spent in the specialized area of professional project scheduling within the last five consecutive years",
								"30 contact hours of formal education in the specialized area of project scheduling",
							],
						},
					],
				},
				{
					heading: "Follow the steps below for a smooth application process.",
					sections: [
						{
							title: "Gather your application materials",
							content: [
								"Document your experience related to past projects and training:",
								"Projects you've led",
								"Where you've worked, your role and responsibilities, duration of projects",
								"Training you've completed",
								"Institutions attended, courses completed, qualifying hours",
							],
						},
						{
							title: "Additional Tips",
							content: [
								"Take your time, or even a break. You can save the application as you go and come back to it whenever you're ready.",
								"Describe your role and responsibilities on the project, not the project itself.",
							],
						},
					],
				},
				{
					heading: "Your application was accepted. What's next?",
					sections: [
						{
							title: "First, congratulations!",
							content: [
								"You're on the path toward career advancement. Once you verify your acceptance, the next step is to pay your exam fee.",
							],
						},
						{
							title: "Schedule your PMI-SP exam",
							content: [
								"After you pay, you can schedule your PMI-SP exam. Below are some helpful details about exam scheduling:",
								"You can take your exam at a Pearson Vue Testing Center.",
								"You may attempt the exam up to three times in one year if you don't pass.",
							],
						},
					],
				},
				{
					heading: "Prepare for PMI-SP exam day.",
					sections: [
						{
							title: "At a glance:",
							content: [
								"210 minutes",
								"170 questions",
								"20 unscored pretest questions, 150 scored questions",
							],
						},
						{
							title: "Associated exam content",
							content: [
								"Schedule Strategy 14%",
								"Schedule Planning and Development 31%",
								"Schedule Monitoring and Controlling 35%",
								"Schedule Closeout 6%",
								"Stakeholder Communications Management 14%",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "How to prepare for the PMI-SP exam",
			description:
				"The PMI Scheduling Professional (PMI-SP) exam validates your existing skills and experience, yet preparation and study are critical to passing the exam.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "PMBOK® Guide",
					description:
						"Backed by the authority of PMI and shaped by professionals worldwide, the PMBOK® Guide defines the global standard for project management.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Standard",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "Practice Standard for Scheduling - Third Edition",
					description:
						"This guide provides the latest thinking regarding good and accepted practices in the area of scheduling for a project.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Practice Guide",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "ai-project-management-cpmai",
		maintainingCertification: {
			title: "Maintaining your PMI-CPMAI certification",
			description:
				"Earning your PMI-CPMAI certification is a big step—maintaining it should be simple. Ongoing learning keeps your skills sharp and your expertise relevant in a constantly evolving field. To maintain certification, PMI-CPMAI holders must earn 30 professional development units (PDUs) every 3 years. Each PDU represents one hour spent:",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Creating content",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "PMI Certified Professional in Managing AI (PMI-CPMAI)™" },
			],
			certificationBadge: "Certification",
			title: "PMI Certified Professional in Managing AI (PMI-CPMAI)™",
			subtitle: "No experience required",
			description:
				"Your license to lead the future of AI. With PMI-CPMAI™, you'll gain the tools to build with AI effectively, giving you the playbook to secure AI success.",
			pricing: {
				memberPrice: "$699",
				fullPrice: "$899",
			},
			applyButtonText: "Buy the Bundle",
			applyButtonHref: "/contact",
			note: "Course and certification exam are included in the bundle.",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/pmi-cpmai-logo.svg",
			logoAlt: "PMI-CPMAI Certification Logo",
		},
		isRightForYou: {
			title: "Is PMI-CPMAI right for you?",
			description:
				"Whether you're already delivering AI initiatives or eager to start, this certification gives you the structure and credibility to turn innovation into measurable, lasting value. With PMI-CPMAI you'll learn how to turn bold AI visions into clear, achievable project plans, navigate fast-changing technologies, unite cross-functional teams, and deliver outcomes that are ethical, measurable, and built to withstand business scrutiny.",
			roles: [
				"Project Manager",
				"Technologist",
				"Data Expert",
				"Consultant",
				"AI Program Manager",
				"AI Project Lead",
			],
			stats: [
				{
					value: "19M+",
					label: "AI jobs projected globally by 2030.",
					source: "World Economic Forum",
					sourceUrl:
						"https://www.weforum.org/stories/2025/01/future-of-jobs-report-2025-the-fastest-growing-and-declining-jobs/",
				},
				{
					value: "$632B",
					label: "Estimated global AI spend by 2028.",
					source: "IDC Research",
					sourceUrl: "https://my.idc.com/getdoc.jsp?containerId=prUS52530724",
				},
				{
					value: "86%",
					label: "Enterprises ranking AI and big data as top-priority skills.",
					source: "Dremio",
					sourceUrl:
						"https://ai-techpark.com/survey-86-of-companies-focus-on-data-unification-for-ai/",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the PMI-CPMAI Exam Content Outline for details about the certification process and exam.",
			languages: [
				"English",
				"Arabic (U.A.E.)",
				"Chinese (Simplified, PRC)",
				"Chinese (Traditional, Taiwan)",
				"French (France)",
				"German (Germany)",
				"Japanese (Japan)",
				"Korean (Korea)",
				"Portuguese (Brazil)",
				"Spanish (Latin America)",
			],
			downloadUrl: "/documents/pmi-cpmai-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "120 questions",
			time: "160 minutes",
			languages: [
				"Arabic",
				"Brazilian Portuguese",
				"Chinese (Simplified)",
				"Chinese (Traditional)",
				"English",
				"French",
				"German",
				"Japanese",
				"Korean",
				"Spanish (LATAM)",
			],
		},
		pathToCertification: {
			title: "Path to a PMI-CPMAI certification",
			steps: [
				{ number: 1, label: "Check eligibility" },
				{ number: 2, label: "Confirm your details" },
				{ number: 3, label: "Schedule" },
				{ number: 4, label: "Study" },
				{ number: 5, label: "Earn" },
			],
			tabs: [
				{
					heading: "To earn PMI-CPMAI certification, you must:",
					sections: [
						{
							title: "Requirements",
							content: [
								"Be at least 18 years old",
								"Complete the PMI-CPMAI Exam Prep Course (included in the bundle) to understand the CPMAI methodology",
							],
						},
					],
				},
				{
					heading: "About the PMI-CPMAI Exam Prep Course",
					sections: [
						{
							title: "What you'll learn",
							content: [
								"Module 1: The Need for AI Project Management",
								"Module 2: Matching AI with Business Needs (Phase I)",
								"Module 3: Identifying Data Needs for AI Projects (Phase II)",
								"Module 4: Managing Data Preparation Needs for AI Projects (Phase III)",
								"Module 5: Iterating Development and Delivery of AI Projects (Phase IV)",
								"Module 6: Testing & Evaluating AI Systems (Phase V)",
								"Module 7: Operationalizing AI (Phase VI)",
							],
						},
						{
							title: "PDUs earned",
							content: [
								"7 PDUs Business Acumen",
								"11 PDUs Ways of Working",
								"3 PDUs Power Skills",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "Additional Resources",
			description:
				"Explore additional resources to help you get started, build your skills, or prepare for certification, wherever you are in your AI project management journey.",
			ctaText: "Explore Membership",
			ctaHref: "/membership",
			courses: [
				{
					title: "Free Introduction: PMI-CPMAI™",
					description:
						"Explore AI project management and the CPMAI™ methodology in this preview of the PMI-CPMAI™ certification path.",
					tags: ["eLearning", "Free"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Leading & Managing AI Projects Digital Guide",
					description:
						"Discover a step-by-step methodology to align AI with business goals, embed governance and ethics, and drive adoption across the enterprise.",
					tags: ["Publication", "Free for Members"],
					provider: "PMI Practice Guide",
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
				{
					title: "PMI-CPMAI™ Practice Exam",
					description:
						"Test your knowledge, track your progress, and feel confident walking into the PMI-CPMAI™ exam.",
					tags: ["eLearning"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title:
						"The Standard for Artificial Intelligence in Portfolio, Program and Project Management",
					description:
						"The first and only global AI Standard for Project Professionals, built to turn AI uncertainty into structured, responsible practice.",
					tags: ["Publication", "Free for Members"],
					learnMoreHref: "/contact",
					colorTheme: "gold",
					image: "/assets/shared/shape-triangle-in-circle.webp",
				},
			],
		},
	},
	{
		slug: "sustainability-cspp",
		maintainingCertification: {
			title: "Maintaining your CSPP certification",
			description:
				"Earning your CSPP certification is a big step—maintaining it should be simple. Ongoing learning keeps your skills sharp and your expertise relevant in a constantly evolving field. To maintain certification, CSPP holders must earn professional development units (PDUs) every 3 years.",
			activities: [
				"Learning",
				"Teaching others",
				"Presenting",
				"Reading",
				"Volunteering",
				"Creating content",
			],
			ctaText: "Learn More About Maintaining",
			ctaHref: "/certifications/certification-resources",
		},
		hero: {
			breadcrumb: [
				{ label: "Home", href: "/" },
				{ label: "Certifications", href: "/certifications" },
				{ label: "Certified Sustainable Project Professional (CSPP)™" },
			],
			certificationBadge: "Certification",
			title: "Certified Sustainable Project Professional (CSPP)™",
			subtitle: "Varies by bundle",
			description:
				"The Certified Sustainable Project Professional (CSPP)™ equips project leaders with the lens and toolkit to uncover hidden value, mitigate risk and build resilience into delivery. Lead future-ready projects that adapt to disruption and deliver measurable business impact.",
			pricing: {
				memberPrice: "Varies",
				fullPrice: "Varies",
			},
			applyButtonText: "Get Started Today",
			applyButtonHref: "/contact",
			note: "Two bundle options available: CSPP Bundle for Practitioners (requires existing PMI certification) or CSPP Bundle (no experience required).",
			membershipLink: {
				text: "Learn More About Membership",
				href: "/membership",
			},
			shapeImage: "/assets/shared/shape-circle.webp",
			logoImage: "/assets/shared/cspp-logo.svg",
			logoAlt: "CSPP Certification Logo",
		},
		isRightForYou: {
			title: "Is the CSPP right for you?",
			description:
				"Grounded in the globally recognized P5™ Standard and aligned with the United Nations Sustainable Development Goals, CSPP is built for professionals responsible for turning sustainability priorities into resilient, real-world project outcomes.",
			roles: [
				"Project Manager",
				"Program Manager",
				"Sustainability Manager",
				"Project Leader",
				"Portfolio Manager",
				"PMO Professional",
			],
			stats: [
				{
					value: "42%",
					label:
						"Confidence gap between sustainability executives and PMO leaders in meeting sustainability goals.",
					source: "PMI Thought Leadership (2026)",
					sourceUrl: "/contact",
				},
				{
					value: "59%",
					label:
						"Integration gap—most organizations haven't fully embedded sustainability across projects.",
					source: "PMI Thought Leadership (2026)",
					sourceUrl: "/contact",
				},
				{
					value: "1 in 5",
					label:
						"Only 20% of project professionals can confidently deliver sustainability outcomes today.",
					source: "PMI Thought Leadership (2026)",
					sourceUrl: "/contact",
				},
			],
		},
		examContentOutline: {
			title: "Exam Content Outline (ECO)",
			description:
				"Download the CSPP Exam Content Outline for details about the exam, eligibility requirements, and the application process.",
			languages: ["English"],
			downloadUrl: "/documents/cspp-eco.pdf",
		},
		aboutExam: {
			title: "About the Exam",
			length: "Exam details vary by bundle",
			time: "See exam content outline",
			languages: ["English"],
		},
		pathToCertification: {
			title: "Path to a CSPP certification",
			steps: [
				{ number: 1, label: "Choose your bundle" },
				{ number: 2, label: "Complete the course" },
				{ number: 3, label: "Submit your application" },
				{ number: 4, label: "Schedule and ace the exam" },
			],
			tabs: [
				{
					heading:
						"CSPP Bundle for Practitioners (requires existing PMI certification)",
					sections: [
						{
							title: "Requirements",
							content: [
								"You qualify if you have one of the following:",
								"An active CAPM®, PMP®, PgMP®, or PfMP® certification from PMI",
								"An active certification from another project management accrediting body",
								"Master's degree in Project or Program Management",
							],
						},
						{
							title: "Includes",
							content: [
								"12 hours of required sustainability training",
								"CSPP certification exam",
							],
						},
					],
				},
				{
					heading: "CSPP Bundle (no experience required)",
					sections: [
						{
							title: "Requirements",
							content: [
								"Secondary diploma (high school, GED, or global equivalent)",
							],
						},
						{
							title: "Includes",
							content: [
								"20 hours of required sustainability training",
								"CSPP certification exam",
							],
						},
					],
				},
			],
			faqsLink: { text: "View FAQs", href: "/contact" },
		},
		examPrep: {
			title: "What You'll Learn",
			description:
				"The CSPP certification covers sustainability management, adaptive governance, and project sustainability reporting.",
			ctaText: "Get Started Today",
			ctaHref: "/certifications/sustainability-cspp",
			courses: [
				{
					title: "The P5 Standard",
					description:
						"Apply five sustainability lenses across 52 impact areas to identify, measure and manage real project outcomes.",
					tags: ["Core Content"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Sustainability Management Plans",
					description:
						"Build audit-ready project documentation aligned to enterprise reporting and disclosure requirements.",
					tags: ["Core Content"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Adaptive Governance & Resiliency",
					description:
						"Turn disruption into opportunity with scenario planning, resilience indicators and adaptive delivery.",
					tags: ["Core Content"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
				{
					title: "Project Sustainability Reporting",
					description:
						"Bridge project work to enterprise reporting with frameworks aligned to GRI and ISSB standards.",
					tags: ["Core Content"],
					learnMoreHref: "/contact",
					colorTheme: "blue",
					image: "/assets/shared/card-star-bg-image.webp",
				},
			],
		},
	},
];

export function getCertificationBySlug(
	slug: string
): CertificationPageType | undefined {
	return certificationPagesData.find((cert) => cert.slug === slug);
}
