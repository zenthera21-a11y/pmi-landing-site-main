import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learning/exam-prep")({
	component: RouteComponent,
});

interface ExamItem {
	description: string;
	freeForMembers: boolean;
	image: string | null;
	link: string;
	title: string;
	type: string;
}

interface ExamSubsection {
	description?: string;
	id: string;
	items: ExamItem[];
	title: string;
}

interface ExamSection {
	description: string;
	id: string;
	items?: ExamItem[];
	subsections?: ExamSubsection[];
	title: string;
}

const EXAM_PREP_DATA: ExamSection[] = [
	{
		id: "pmp-capm",
		title: "PMP & CAPM Exam Prep",
		description:
			"Prepare effectively with PMI-authorized courses, guides, and tools. Build the knowledge to not only ace your exam, but grow your career.",
		subsections: [
			{
				id: "current-pmp",
				title: "Preparing for the current PMP® exam (before 8 July 2026)",
				description:
					"From our self-paced online PMP prep course to in-person training, we offer so many ways to get you ready for your PMP exam.",
				items: [
					{
						type: "eLearning",
						title: "PMP® Practice Exam",
						description:
							"Test your knowledge. Build your confidence. Get ready for exam-day.",
						link: "/learning/online-courses",
						image: "/assets/shared/card-star-bg-image.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMP® Exam Prep Course",
						description:
							"Developed and validated by PMP certification holders, this official prep course advances your project management skills and prepares you for the PMP Exam.",
						link: "/learning/online-courses",
						image: "/assets/shared/card-star-bg-image.webp",
						freeForMembers: false,
					},
					{
						type: "Online Tools",
						title: "PMP® PMI Study Hall® Essentials (Subscription)",
						description:
							"PMI Study Hall® is a digital learning tool that contains practice questions and exams and gamified activities to make studying effective and enjoyable.",
						link: "/learning/online-courses",
						image: "/assets/shared/card-star-bg-image.webp",
						freeForMembers: false,
					},
				],
			},
			{
				id: "updated-pmp",
				title: "Preparing for the updated PMP exam (from 9 July 2026)",
				description:
					"A range of updated learning resources is now available to help you prepare for the new PMP exam launching 9 July 2026.",
				items: [
					{
						type: "eLearning",
						title: "PMP® Exam Prep Course",
						description:
							"Build the skills and confidence needed to succeed in modern project management and excel on the PMP® exam.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "Online Tools",
						title: "PMP® PMI Study Hall® Essentials (Subscription)",
						description:
							"Your all-in-one study companion. Prepare for the PMP® exam with learning refreshers, practice exams and tools that build confidence.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMP® Practice Exam",
						description:
							"A realistic, full-length simulation exam designed to help you assess readiness and prepare for the PMP® certification.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
				],
			},
		],
	},
	{
		id: "capm",
		title: "Preparing for the CAPM® exam?",
		description:
			"CAPM distinguishes your skills and empowers you to build the project management career of your dreams. Luckily, we know a thing or two about the most effective ways to prepare for the big day.",
		items: [
			{
				type: "Online Tools",
				title:
					"Certified Associate in Project Management (CAPM)® PMI Study Hall®",
				description:
					"Your all-in-one study companion. Practice, sharpen your skills, and build your readiness for the CAPM® exam.",
				link: "/learning/online-courses",
				image: "/assets/shared/shape-triangle-in-circle.webp",
				freeForMembers: false,
			},
			{
				type: "eLearning",
				title: "CAPM® Exam Prep Course",
				description:
					"The official prep course for the CAPM exam and fulfills the 23 hours needed to complete the application",
				link: "/learning/online-courses",
				image: "/assets/shared/shape-triangle-in-circle.webp",
				freeForMembers: false,
			},
			{
				type: "eLearning",
				title: "CAPM® Practice Exam",
				description:
					"Test your knowledge. Build your confidence. And get exam-day ready.",
				link: "/learning/online-courses",
				image: "/assets/shared/shape-triangle-in-circle.webp",
				freeForMembers: false,
			},
		],
	},
	{
		id: "pgmp-pfmp",
		title: "Preparing for PgMP® or PfMP® exams?",
		description:
			"Even if you have advanced program or portfolio management experience, exam prep is essential to earning your certification. Be sure to study the PMI standards, all free for PMI members.",
		items: [
			{
				type: "Publication",
				title: "The Standard for Program Management – Fifth Edition",
				description:
					"A comprehensive and powerful resource for program, portfolio and senior managers, as well as potential and active PgMP and PfMP certification holders.",
				link: "/standards/pmbok",
				image: null,
				freeForMembers: true,
			},
			{
				type: "Publication",
				title: "PMBOK® Guide",
				description:
					"The PMBOK® Guide—our flagship publication, now in its seventh edition—has evolved to meet your needs.",
				link: "/standards/pmbok",
				image: null,
				freeForMembers: true,
			},
		],
	},
	{
		id: "specialized",
		title: "Taking a specialized exam?",
		description:
			"Earning a specialized certification takes specialized knowledge. Find your exam to explore the eLearning courses, online tools, standards, and study aids that will get you exam day ready.",
		subsections: [
			{
				id: "pmi-acp",
				title: "PMI-ACP® Exam Prep",
				description: "Agile Certified Practitioner exam preparation",
				items: [
					{
						type: "eLearning",
						title: "PMI-ACP® Exam Prep Course",
						description:
							"This official course advances your agile leadership skills and prepares you for the ACP Exam. Validated by PMI-ACPs.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "Online Tools",
						title: "PMI-ACP® PMI Study Hall®",
						description:
							"PMI Study Hall® is a digital learning tool that contains content-specific lessons to provide certification candidates with a thorough overview of what to expect on exam day.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMI-ACP® Practice Exam",
						description:
							"Developed by agile leaders, this official practice exam will help you prepare to sit for the PMI-ACP exam.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
				],
			},
			{
				id: "pmi-pmocp",
				title: "PMI-PMOCP™ Exam Prep",
				description: "PMO Certified Professional exam preparation",
				items: [
					{
						type: "eLearning",
						title: "PMI-PMOCP™ Exam Prep Course",
						description:
							"Enhance your PMO leadership and prepare for the PMI-PMOCP Exam with this expert-developed prep course.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMI-PMOCP™ Practice Exam",
						description:
							"Assess your readiness and strengthen your preparation with a timed practice exam built to reflect the PMI-PMOCP™ exam experience.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
				],
			},
			{
				id: "pmi-cp",
				title: "PMI-CP™ Prerequisites",
				description:
					"Start your PMI-CP™ journey by completing all four foundational courses in any order. Each self-paced module is a 6-10 hour commitment.",
				items: [
					{
						type: "eLearning",
						title: "PMI-CP™ Project Communications",
						description:
							"Today's large engineering and construction projects are incredibly complex, raising the requirements for effective communication.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMI-CP™ Interface Management",
						description:
							"Get the required skills to transform the global construction industry and bring large, complex projects to life.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMI-CP™ Scope & Change Order Mgmt",
						description:
							"Solve the challenges of scope creep and change order.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMI-CP™ Contract & Risk Management",
						description:
							"This course will help you nail down new contract and risk management skills.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
				],
			},
			{
				id: "pmi-rmp",
				title: "PMI-RMP® Exam Prep",
				description: "Risk Management Professional exam preparation",
				items: [
					{
						type: "eLearning",
						title: "PMI-RMP® Exam Prep Course",
						description:
							"Developed and validated by risk management professionals, this official prep course advances your risk management skills and prepares you for the PMI-RMP® exam.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
					{
						type: "eLearning",
						title: "PMI Risk Management Professional (PMI-RMP)® Practice Exam",
						description:
							"Sharpen your skills and reduce exam-day stress with the official PMI-RMP® Practice Exam.",
						link: "/learning/online-courses",
						image: "/assets/shared/shape-triangle-in-circle.webp",
						freeForMembers: false,
					},
				],
			},
		],
	},
];

function ExamCard({ item }: { item: ExamItem }) {
	return (
		<div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg">
			{item.image && (
				<div className="h-48 overflow-hidden bg-gray-100">
					<img
						alt={item.title}
						className="h-full w-full object-cover"
						height={192}
						src={item.image}
						width={400}
					/>
				</div>
			)}
			<div className="flex flex-1 flex-col p-6">
				<div className="mb-2 flex items-center gap-2">
					<span className="font-semibold text-blue-600 text-xs uppercase tracking-wide">
						{item.type}
					</span>
					{item.freeForMembers && (
						<span className="rounded-full bg-green-100 px-2 py-0.5 font-semibold text-green-600 text-xs">
							Free for Members
						</span>
					)}
				</div>
				<h3 className="mb-2 font-bold text-gray-900 text-lg">{item.title}</h3>
				<p className="mb-4 flex-1 text-gray-600 text-sm">{item.description}</p>
			</div>
		</div>
	);
}

function RouteComponent() {
	return (
		<div className="min-h-screen bg-white">
			{/* Hero */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h1 className="mb-4 font-bold text-4xl md:text-5xl lg:text-6xl">
						Conquer exam day with confidence
					</h1>
					<p className="max-w-3xl text-xl opacity-90">
						Prepare effectively with PMI-authorized courses, guides, and tools.
						Build the knowledge to not only ace your exam, but grow your career.
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-12">
					{EXAM_PREP_DATA.map((section) => (
						<div key={section.id}>
							<div className="mb-6">
								<h2 className="mb-2 font-bold text-3xl text-gray-900 md:text-4xl">
									{section.title}
								</h2>
								<p className="max-w-4xl text-gray-600 text-lg">
									{section.description}
								</p>
							</div>

							{section.subsections ? (
								<div className="space-y-8">
									{section.subsections.map((subsection) => (
										<div key={subsection.id}>
											<h3 className="mb-4 font-bold text-gray-900 text-xl">
												{subsection.title}
											</h3>
											{subsection.description && (
												<p className="mb-4 text-gray-600">
													{subsection.description}
												</p>
											)}
											<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
												{subsection.items.map((item) => (
													<ExamCard item={item} key={item.title} />
												))}
											</div>
										</div>
									))}
								</div>
							) : (
								section.items && (
									<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
										{section.items.map((item) => (
											<ExamCard item={item} key={item.title} />
										))}
									</div>
								)
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
