import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute(
	"/learning/foundations-of-project-management"
)({
	component: RouteComponent,
});

type TabKey =
	| "overview"
	| "what-youll-learn"
	| "pdu-breakdown"
	| "you-may-also-like";

const tabs: { key: TabKey; label: string }[] = [
	{ key: "overview", label: "Overview" },
	{ key: "what-youll-learn", label: "What You'll Learn" },
	{ key: "pdu-breakdown", label: "PDU Breakdown" },
	{ key: "you-may-also-like", label: "You May Also Like" },
];

const relatedCourses = [
	{
		badge: "eLearning",
		title: "CAPM® Exam Prep Course",
		description:
			"On-demand training from PMI that covers predictive, agile, and business analysis frameworks—all aligned to current exam objectives.",
		href: "/certifications/certified-associate-in-project-management-capm",
	},
	{
		badge: "eLearning",
		title: "PMP® Exam Prep Course",
		description:
			"Developed and validated by PMP certification holders, this official prep course advances your project management skills and prepares you for the PMP Exam.",
		href: "/certifications/project-management-pmp",
	},
	{
		badge: "eLearning",
		title: "PMI-ACP® Exam Prep Course",
		description:
			"This official course advances your agile leadership skills and prepares you for the ACP Exam. Validated by PMI-ACPs.",
		href: "/certifications/agile-acp",
	},
];

function TabContent({ activeTab }: { activeTab: TabKey }) {
	if (activeTab === "overview") {
		return (
			<div className="prose max-w-none">
				<p className="mb-6 text-[#4a4a6a] text-base leading-relaxed md:text-lg">
					PMI® Foundations of Project Management is designed for anyone looking
					to step into the world of project management—no prior experience
					required. This course provides a structured, accessible introduction
					to the core principles and practices that drive successful projects.
				</p>
				<p className="mb-6 text-[#4a4a6a] text-base leading-relaxed md:text-lg">
					Whether you're a student, a career changer, or simply curious about
					project management, this course will equip you with the language,
					tools, and frameworks used by project professionals around the world.
				</p>
				<h3 className="mb-4 font-bold font-heading text-[#200f3b] text-xl">
					Who this course is for
				</h3>
				<ul className="mb-6 space-y-2 text-[#4a4a6a] text-base">
					{[
						"Aspiring project managers with no formal experience",
						"Professionals pivoting into a project management role",
						"Team members who want to better understand PM methodologies",
						"Students preparing for CAPM® certification",
					].map((item) => (
						<li className="flex items-start gap-2" key={item}>
							<span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#200f3b]" />
							{item}
						</li>
					))}
				</ul>
				<h3 className="mb-4 font-bold font-heading text-[#200f3b] text-xl">
					Prerequisites
				</h3>
				<p className="text-[#4a4a6a] text-base leading-relaxed">
					No prior project management experience is required. A secondary degree
					(high school diploma or equivalent) is recommended.
				</p>
			</div>
		);
	}

	if (activeTab === "what-youll-learn") {
		const modules = [
			{
				number: "01",
				title: "Introduction to Project Management",
				topics: [
					"What is a project?",
					"The role of a project manager",
					"Project life cycle overview",
				],
			},
			{
				number: "02",
				title: "Project Initiation",
				topics: [
					"Defining project scope",
					"Identifying stakeholders",
					"Creating a project charter",
				],
			},
			{
				number: "03",
				title: "Project Planning",
				topics: [
					"Work breakdown structures",
					"Scheduling and timeline management",
					"Budget fundamentals",
				],
			},
			{
				number: "04",
				title: "Project Execution & Control",
				topics: [
					"Managing project teams",
					"Risk identification and response",
					"Monitoring progress and KPIs",
				],
			},
			{
				number: "05",
				title: "Project Closeout",
				topics: [
					"Formal project closure steps",
					"Lessons learned",
					"Transitioning deliverables",
				],
			},
		];

		return (
			<div className="space-y-6">
				{modules.map((mod) => (
					<div
						className="flex gap-6 rounded-2xl border border-[#e8e0d8] bg-white p-6"
						key={mod.number}
					>
						<span className="shrink-0 font-bold font-heading text-4xl text-[#d4cbc3] leading-none">
							{mod.number}
						</span>
						<div>
							<h3 className="mb-3 font-bold font-heading text-[#200f3b] text-lg">
								{mod.title}
							</h3>
							<ul className="space-y-1.5">
								{mod.topics.map((topic) => (
									<li
										className="flex items-center gap-2 text-[#4a4a6a] text-sm"
										key={topic}
									>
										<IconArrowRight
											aria-hidden="true"
											className="size-3.5 shrink-0 text-[#200f3b]"
										/>
										{topic}
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		);
	}

	if (activeTab === "pdu-breakdown") {
		const breakdown = [
			{
				category: "Ways of Working",
				pdus: 4,
				color: "#200f3b",
				description:
					"Covers predictive, agile, and hybrid methodologies used across real-world projects.",
			},
			{
				category: "Power Skills",
				pdus: 2,
				color: "#6b5b7b",
				description:
					"Develops leadership, communication, and collaborative problem-solving capabilities.",
			},
			{
				category: "Business Acumen",
				pdus: 2,
				color: "#0a4a5c",
				description:
					"Builds strategic awareness and organizational alignment for project professionals.",
			},
		];

		return (
			<div>
				<div className="mb-8 flex items-center gap-4 rounded-2xl border border-[#e8e0d8] bg-[#f8f5f0] p-6">
					<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#200f3b]">
						<span className="font-bold font-heading text-2xl text-white">
							8
						</span>
					</div>
					<div>
						<p className="font-bold text-[#200f3b] text-lg">Total PDUs</p>
						<p className="text-[#6b5b7b] text-sm">
							Aligned to the PMI Talent Triangle®
						</p>
					</div>
				</div>
				<div className="space-y-4">
					{breakdown.map((item) => (
						<div
							className="flex flex-col gap-3 rounded-2xl border border-[#e8e0d8] bg-white p-6 sm:flex-row sm:items-center sm:gap-6"
							key={item.category}
						>
							<div
								className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
								style={{ backgroundColor: item.color }}
							>
								<span className="font-bold text-lg">{item.pdus}</span>
							</div>
							<div>
								<p
									className="font-bold text-base"
									style={{ color: item.color }}
								>
									{item.category}
								</p>
								<p className="mt-1 text-[#4a4a6a] text-sm leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{relatedCourses.map((course) => (
				<div
					className="flex flex-col gap-4 rounded-2xl border border-[#e8e0d8] bg-white p-6"
					key={course.title}
				>
					<span className="inline-flex w-fit rounded-full border border-[#d4cbc3] px-3 py-1 font-medium text-[#200f3b] text-xs">
						{course.badge}
					</span>
					<h3 className="font-bold font-heading text-[#200f3b] text-lg leading-snug">
						{course.title}
					</h3>
					<p className="flex-1 text-[#4a4a6a] text-sm leading-relaxed">
						{course.description}
					</p>
					<Link
						className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-5 py-2 font-medium text-sm text-white transition-opacity hover:opacity-90"
						to={course.href}
					>
						Learn More
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			))}
		</div>
	);
}

function RouteComponent() {
	const [activeTab, setActiveTab] = useState<TabKey>("overview");

	return (
		<main className="overflow-x-hidden">
			{/* Breadcrumb */}
			<div className="border-[#e8e0d8] border-b bg-white">
				<div className="mx-auto max-w-6xl px-6 py-3 md:px-10">
					<nav className="flex items-center gap-1.5 text-[#6b5b7b] text-sm">
						<Link
							className="hover:text-[#200f3b] hover:underline"
							to="/learning/online-courses"
						>
							eLearning
						</Link>
						<IconChevronRight
							aria-hidden="true"
							className="size-3.5 shrink-0"
						/>
						<span className="text-[#200f3b]">
							PMI® Foundations of Project Management
						</span>
					</nav>
				</div>
			</div>

			{/* Hero */}
			<section className="relative overflow-hidden bg-[#f0ebe4]">
				<img
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
					height={800}
					src="/assets/shared/shape-inverted-triangle.webp"
					style={{ objectPosition: "-10% center" }}
					width={1200}
				/>
				<div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16 lg:py-20">
					<div className="ml-auto max-w-xl">
						<span className="mb-4 inline-flex rounded-full border border-[#200f3b]/30 px-4 py-1 font-medium text-[#200f3b] text-sm">
							eLearning
						</span>
						<h1 className="mb-2 font-bold font-heading text-3xl text-[#200f3b] leading-tight md:text-4xl lg:text-[2.75rem]">
							PMI<sup>®</sup> Foundations of Project Management
						</h1>
						<p className="mb-1 text-[#6b5b7b] text-sm">Offered by PMI</p>
						<p className="mb-6 text-[#4a4a6a] text-base leading-relaxed">
							Step into project management. Learn the fundamentals, build
							in-demand skills and stand out from day one.
						</p>

						<hr className="mb-6 border-[#d4cbc3]" />

						{/* Pricing */}
						<div className="mb-4 flex flex-wrap items-center gap-6">
							<div>
								<p className="font-bold text-[#200f3b] text-xs uppercase tracking-wide">
									Member Price
								</p>
								<p className="font-bold font-heading text-2xl text-[#200f3b]">
									₹5,115
								</p>
							</div>
							<div>
								<p className="font-bold text-[#6b5b7b] text-xs uppercase tracking-wide">
									Full Price
								</p>
								<p className="font-heading text-2xl text-[#6b5b7b] line-through">
									₹6,417
								</p>
							</div>
							<Link
								className="ml-auto inline-flex items-center rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90"
								to="/contact"
							>
								Add To Cart
							</Link>
						</div>

						<Link
							className="mb-8 inline-flex items-center gap-1 font-medium text-[#200f3b] text-sm hover:underline"
							to="/membership"
						>
							Learn More About Membership
							<IconChevronRight aria-hidden="true" className="size-4" />
						</Link>

						<hr className="mb-6 border-[#d4cbc3]" />

						{/* Meta */}
						<div className="flex gap-12">
							<div>
								<p className="mb-0.5 font-bold text-[#200f3b] text-sm">PDUs</p>
								<p className="font-bold font-heading text-[#200f3b] text-xl">
									8
								</p>
							</div>
							<div className="w-px bg-[#d4cbc3]" />
							<div>
								<p className="mb-0.5 font-bold text-[#200f3b] text-sm">
									Course Duration
								</p>
								<p className="font-bold font-heading text-[#200f3b] text-xl">
									8-12 hours
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Tabs */}
			<div className="sticky top-0 z-20 border-[#e8e0d8] border-b bg-white">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="flex overflow-x-auto">
						{tabs.map((tab) => (
							<button
								className={`shrink-0 border-b-2 px-5 py-5 font-medium text-sm transition-colors md:text-base ${
									activeTab === tab.key
										? "border-[#200f3b] text-[#200f3b]"
										: "border-transparent text-[#6b5b7b] hover:text-[#200f3b]"
								}`}
								key={tab.key}
								onClick={() => setActiveTab(tab.key)}
								type="button"
							>
								{tab.label}
							</button>
						))}
					</div>
				</div>
			</div>

			{/* Tab Content */}
			<section className="bg-[#f8f5f0] py-12 md:py-16">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<TabContent activeTab={activeTab} />
				</div>
			</section>

			{/* CTA */}
			<section className="bg-[#200f3b] py-14 md:py-20">
				<div className="mx-auto max-w-6xl px-6 text-center md:px-10">
					<h2 className="mb-4 font-bold font-heading text-3xl text-white md:text-4xl">
						Ready to get started?
					</h2>
					<p className="mx-auto mb-8 max-w-xl text-base text-white/80 leading-relaxed">
						PMI members save on this course and get access to thousands of
						additional resources. Join today to unlock your full potential.
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
							to="/contact"
						>
							Add To Cart
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
						<Link
							className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
							to="/membership"
						>
							Explore Membership
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
