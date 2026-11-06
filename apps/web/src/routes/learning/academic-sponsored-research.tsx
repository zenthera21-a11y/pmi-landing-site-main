import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/learning/academic-sponsored-research")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col bg-white">
			<HeroSection />
			<PublishedResearchSection />
			<PastResearchSection />
			<ThesisStudiesSection />
			<FundingSection />
			<NetworkSection />
		</div>
	);
}

function HeroSection() {
	return (
		<section
			className="relative w-full bg-center bg-cover bg-no-repeat"
			style={{ backgroundColor: "#1e0a45" }}
		>
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center md:gap-10 md:px-10 md:py-24 lg:py-28">
				<h1 className="font-bold font-heading text-4xl text-white leading-[1.15] md:text-5xl lg:text-6xl">
					Stay on the leading edge of theory and practice with PMI academic
					research
				</h1>
				<p className="max-w-3xl text-lg text-white/75 leading-relaxed md:text-xl">
					Since 1997, PMI has sponsored academic research to advance knowledge
					and innovation in the field. Explore published research, opportunities
					to get involved in ongoing research, and funding programs.
				</p>
			</div>
		</section>
	);
}

function PublishedResearchSection() {
	const featuredResearch = [
		{
			type: "White Paper",
			title: "Managing Diversity for Project Performance",
			description:
				"As project teams become more diverse, effective project management requires cross-cultural, cross-disciplinary collaboration.",
		},
		{
			type: "White Paper",
			title: "Managing Diversity for Project Performance - Short Version",
		},
		{
			type: "White Paper",
			title:
				"Embedding Sustainability in Project Portfolios: Drivers, Barriers, and Learning Mechanisms in the Extractive Sector",
		},
		{
			type: "White Paper",
			title:
				"Developing Effective Interventions for Gender Equality in Project-Based Organizations",
		},
	];

	return (
		<section className="bg-white px-6 py-16 md:px-10">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-4 font-bold text-3xl text-gray-900">
					Published Research
				</h2>
				<p className="mb-12 text-gray-600 text-lg">
					Discover PMI-sponsored academic research for the latest project
					management insights. Inform your decision-making, assess industry
					trends, and stay on the leading edge of theory and practice.
				</p>

				<div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
					<div>
						<h3 className="mb-6 font-semibold text-gray-900 text-xl">
							Featured Research
						</h3>
						<div className="grid gap-6 sm:grid-cols-2">
							{featuredResearch.map((item, i) => (
								<div
									className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
									key={i}
								>
									<span className="mb-2 font-semibold text-blue-600 text-sm">
										{item.type}
									</span>
									<h4 className="mb-2 font-semibold text-gray-900 leading-tight">
										{item.title}
									</h4>
									{item.description && (
										<p className="mt-auto text-gray-600 text-sm">
											{item.description}
										</p>
									)}
								</div>
							))}
						</div>
					</div>

					<div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
						<h3 className="mb-4 font-semibold text-gray-900 text-xl">
							Explore PMJ®
						</h3>
						<p className="mb-6 text-gray-600">
							<em>Project Management Journal®</em> features state-of-the-art
							research, theories, and applications in project management. Free
							for PMI members. Authors are invited to submit papers for special
							editions.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function PastResearchSection() {
	const years = [
		{
			year: "2024",
			studies: [
				"Influence of gender equality on organizational performance",
				"Navigating Project Complexity to Build Resilience in International Development Projects",
				"Achieving Project Success in Organizations Operating Under Extreme Resource Scarcity",
			],
		},
		{
			year: "2023",
			studies: [
				"Innovation Champions in Infrastructure Megaprojects in the United Kingdom",
				"Improving Anticorruption Codes of Conduct in Project-Based Organizations",
				"The Future of Project Work: What Motivates Young Professionals to Pursue a Project Career",
			],
		},
		{
			year: "2021",
			studies: ["Knowing When to Embrace Ambiguity and When to Fear It"],
		},
	];

	return (
		<section className="border-gray-200 border-t bg-gray-50 px-6 py-16 md:px-10">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-4 font-bold text-3xl text-gray-900">Past Research</h2>
				<p className="mb-8 text-gray-600 text-lg">
					Explore PMI-supported research organized by year published. Bite-sized
					summaries and webinar content are available for certain papers as
					indicated.
				</p>

				<div className="flex flex-col gap-6">
					{years.map((yearData) => (
						<Accordion
							key={yearData.year}
							studies={yearData.studies}
							year={yearData.year}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function Accordion({ year, studies }: { year: string; studies: string[] }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="rounded-lg border border-gray-200 bg-white">
			<button
				className="flex w-full items-center justify-between p-6 text-left"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h3 className="font-bold text-2xl text-gray-900">{year}</h3>
				<span className="text-blue-600 text-sm">
					{isOpen ? "Collapse All" : "Expand All"}
				</span>
			</button>

			{isOpen && (
				<div className="border-gray-200 border-t p-6">
					<ul className="flex flex-col gap-4">
						{studies.map((study, i) => (
							<li className="flex items-start gap-3" key={i}>
								<span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs">
									{i + 1}
								</span>
								<span className="text-gray-700">{study}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

function ThesisStudiesSection() {
	return (
		<section className="border-gray-200 border-t bg-white px-6 py-16 md:px-10">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-4 font-bold text-3xl text-gray-900">
					Current Thesis Studies
				</h2>
				<p className="mb-6 text-gray-600 text-lg">
					PMI supports current thesis studies on topics of interest to the
					project management community.
				</p>

				<div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
					<p className="text-gray-600 text-sm italic">
						Access to the specific thesis details is available to PMI members.
					</p>
				</div>
			</div>
		</section>
	);
}

function FundingSection() {
	return (
		<section className="border-gray-200 border-t bg-gray-50 px-6 py-16 md:px-10">
			<div className="mx-auto max-w-6xl">
				<h2 className="mb-4 font-bold text-3xl text-gray-900">
					Research Funding Opportunities
				</h2>
				<p className="mb-8 text-gray-600 text-lg">
					PMI provides funding opportunities for research that is relevant to
					the project management profession.
				</p>

				<div className="grid gap-8 md:grid-cols-2">
					<div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
						<h3 className="mb-4 font-bold text-gray-900 text-xl">
							PMI Research Awards
						</h3>
						<p className="mb-6 text-gray-600">
							Applications open each spring/summer for the next award cycle.
						</p>
					</div>

					<div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
						<h3 className="mb-4 font-bold text-gray-900 text-xl">
							PMI Targeted Research
						</h3>
						<p className="mb-4 text-gray-600">
							Targeted research aims to address major project management themes
							and issues and comprises the largest of PMI-funded academic
							research grants.
						</p>
						<p className="text-gray-500 text-sm italic">
							Currently there are no tenders. Announcements regarding Targeted
							Research will be featured in the Academic Network newsletter.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function NetworkSection() {
	return (
		<section className="bg-[#1e0a45] px-6 py-16 text-center md:px-10">
			<div className="mx-auto flex max-w-3xl flex-col items-center">
				<h2 className="mb-4 font-bold text-3xl text-white">
					Join the Academic Network
				</h2>
				<p className="mb-8 text-lg text-white/80">
					Calling project management faculty and scholars! Join the PMI Academic
					Network for industry updates to enhance your work, teaching and
					research delivered monthly in the Academic Network Newsletter from
					PMI.
				</p>
				<a
					className="rounded-md bg-white px-8 py-3 font-bold text-[#1e0a45] text-sm transition-colors hover:bg-gray-100"
					href="/contact"
				>
					Sign Up
				</a>
			</div>
		</section>
	);
}
