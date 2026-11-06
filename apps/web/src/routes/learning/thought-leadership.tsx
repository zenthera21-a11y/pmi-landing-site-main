import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/learning/thought-leadership")({
	component: RouteComponent,
});

const trendingInsights = [
	{
		badge: "eBook",
		description:
			"Discover GenAI benefits, best practices, and what factors facilitate optimum GenAI adoption.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Leadership That Lasts",
		subtitle: "Building Sustainable Value in a Changing World",
	},
	{
		badge: "Report",
		description:
			"PMI research surfaces a 42-point confidence gap between sustainability executives and PMO leaders, and six friction points where strategy weakens.",
		href: "/certifications/sustainability-cspp",
		subtitle: "Six friction points between vision and delivery",
		title: "Executing Sustainability Strategy: When Ambition Meets Reality",
	},
];

const deeperDiveInsights = [
	{
		badge: "Report",
		description:
			"This year's Pulse of the Profession explores complexity: its origin, impact, and how proactive project professionals can navigate it.",
		href: "/certifications/project-management-pmp",
		subtitle: "From Navigating Tasks to Navigating Systems",
		title: "Pulse of the Profession® 2026: Driving Success in Complex Projects",
	},
	{
		badge: "Report",
		description:
			"Build your M.O.R.E. capability to move beyond managing projects to delivering value and increasing project success.",
		href: "/certifications/project-management-pmp",
		subtitle: "A Playbook to Apply M.O.R.E.",
		title: "From Vision to Practice",
	},
	{
		badge: "Report",
		description:
			"Discover how to close construction's growing project management talent gap and learn the key skills, barriers, and actions needed to stay competitive.",
		href: "/certifications/construction",
		subtitle: "Needs, Challenges and Opportunities",
		title: "The Construction Project Management Talent Gap",
	},
	{
		badge: "Report",
		description:
			"PMI's research reveals how Project Management Offices can deliver greater strategic value and spotlights the critical PMO capabilities driving real impact.",
		href: "/certifications/pmo-certified-professional-pmi-pmocp",
		subtitle: "What must-have capabilities elevate PMO performance?",
		title:
			"Bridging the Gap: Positioning PMOs as Indispensable Partners in Strategy Execution",
	},
	{
		badge: "Report",
		description:
			"PMI's new research reveals what today's project professionals must do to drive success in a dynamic project landscape, and how they can amplify their impact.",
		href: "/certifications/project-management-pmp",
		subtitle: "Unlock transformative value for your teams and organization",
		title: "Step Up: Redefining the Path to Project Success with M.O.R.E.",
	},
	{
		badge: "Report",
		description:
			"Our latest research reveals how GenAI can enhance authentic agility, drive breakthroughs, and help teams collaborate for real business impact.",
		href: "/certifications/agile-acp",
		subtitle: "How AI unlocks agility's true business value",
		title: "GenAI and Agile: Amplifying Human-Centered Collaboration",
	},
	{
		badge: "Report",
		description:
			"Project Managers are more vital than ever. New research highlights growing global demand for project management, shaping the future of work.",
		href: "/certifications/project-management-pmp",
		subtitle: "Up to 30 million project professionals needed by 2035",
		title: "Global Project Management Talent Gap",
	},
	{
		badge: "Report",
		description:
			"Diverse, inclusive teams deliver stronger innovation, retention, and results. See evidence, real-world examples, and practical steps to enhance performance.",
		href: "/certifications/project-management-pmp",
		subtitle: "Unlock the value of inclusive, diverse teams",
		title: "Broader Perspectives, Stronger Outcomes",
	},
	{
		badge: "Article",
		description:
			"Access GenAI's full value by moving beyond pilots and building the support structures and culture needed for lasting impact.",
		href: "/certifications/ai-project-management-cpmai",
		subtitle: "The need for organizational support",
		title: "Enabling Project Management Transformation with GenAI",
	},
	{
		badge: "Report",
		description:
			"Explore how organizations are transforming sustainability initiatives with AI. Learn why leadership, data, and strategic alignment are essential to scaling global impact and performance.",
		href: "/certifications/sustainability-cspp",
		subtitle: "How sustainability benefits from AI integration",
		title: "Sustainability in the Age of AI: The Integration Imperative",
	},
	{
		badge: "Report",
		description:
			"Enterprise agility is a must-have for organizations to survive and thrive in today's increasingly volatile, constantly changing business environment.",
		href: "/certifications/agile-acp",
		subtitle: "Enterprise agility is your competitive advantage",
		title: "A New Era for Enterprise Agility",
	},
	{
		badge: "Report",
		description:
			"Sustainability is realized at the project level. Assess current state, build capacity, and scale context-based practices to deliver real impact.",
		href: "/certifications/sustainability-cspp",
		subtitle: "As Part of PMI-GPM Joint Venture",
		title: "The Project Sustainability Reporting Guide",
	},
	{
		badge: "Report",
		badgeSub: "Free",
		description:
			"Explore our innovative insights creating a shared definition of project success, emphasizing value and impact — not just execution — to drive sustainable growth and elevate the project profession.",
		href: "/certifications/project-management-pmp",
		subtitle: "",
		title: "Maximizing Project Success",
	},
	{
		badge: "Report",
		description:
			"Our latest report reveals the critical need for project and product management cohesion to drive success.",
		href: "/certifications/project-management-pmp",
		subtitle: "In Partnership with Agile Alliance",
		title: "Collaborations Between Project and Product Management",
	},
	{
		badge: "Report",
		description:
			"Discover how business acumen transforms you from tactical troubleshooter to strategic value creator, elevating projects beyond scope, budget, and schedule.",
		href: "/certifications/project-management-pmp",
		subtitle: "Empowering Project Professionals as Strategic Partners",
		title: "Pulse Report 2025: Boosting Business Acumen",
	},
	{
		badge: "Report",
		description:
			"Move beyond the basics of AI. Learn how project professionals are using Generative AI to drive smarter decisions, improve efficiency, and lead strategic transformation.",
		href: "/certifications/ai-project-management-cpmai",
		subtitle: "From Quick Wins to Leading the Transformation",
		title: "The Project Professional's GenAI Journey",
	},
	{
		badge: "Report",
		badgeSub: "Free for Members",
		description:
			"Take a data-driven look at how AI Trailblazers are sparking innovation, boosting productivity, and reshaping organizations.",
		href: "/certifications/ai-project-management-cpmai",
		subtitle: "",
		title: "Transforming Project Management with Gen-Al Innovation",
	},
];

const publications = [
	{
		badge: "Publication",
		badgeSub: "Free for Members",
		description:
			"A peer-reviewed academic publication on project management techniques, research, theories and applications.",
		href: "/learning/project-management-journal",
		title: "Project Management Journal®",
	},
	{
		badge: "Publication",
		description:
			"PMI-sponsored academic research offers industry insights and trends, enabling stakeholders to make informed decisions.",
		href: "/learning/academic-sponsored-research",
		title: "Academic Sponsored Research",
	},
];

function HeroSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h1
					className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
					style={{ color: "#200f3b" }}
				>
					Stay ahead with the latest PMI thought leadership
				</h1>
				<p
					className="max-w-3xl text-lg leading-relaxed md:text-xl"
					style={{ color: "#6b5b7b" }}
				>
					The latest research and insights from PMI on current and future trends
					in project management
				</p>
			</div>
		</section>
	);
}

function TrendingSection() {
	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2
					className="mb-12 font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
					style={{ color: "#200f3b" }}
				>
					What's trending
				</h2>

				<div className="grid gap-8 lg:grid-cols-2">
					{trendingInsights.map((insight) => (
						<div
							className="flex flex-col gap-4 rounded-2xl border border-[#d4cbc3] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
							key={insight.title}
						>
							<span
								className="inline-flex w-fit rounded-full px-3 py-1 font-medium text-xs"
								style={{
									backgroundColor: "#200f3b",
									color: "#f8f5f0",
								}}
							>
								{insight.badge}
							</span>
							<h3
								className="font-bold font-heading text-xl leading-tight md:text-2xl"
								style={{ color: "#200f3b" }}
							>
								{insight.title}
							</h3>
							{insight.subtitle && (
								<p
									className="font-semibold text-sm leading-snug"
									style={{ color: "#6b5b7b" }}
								>
									{insight.subtitle}
								</p>
							)}
							<p
								className="text-sm leading-relaxed"
								style={{ color: "#6b5b7b" }}
							>
								{insight.description}
							</p>
							<Link
								className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
								resetScroll
								to={insight.href}
							>
								Learn More
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function SalarySurveySection() {
	return (
		<section className="bg-[#f8f5f0] pb-16 md:pb-20 lg:pb-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2 md:gap-0">
					<div className="flex flex-col gap-6 p-8 md:p-12 lg:p-16">
						<h2
							className="font-bold font-heading text-3xl leading-tight md:text-4xl"
							style={{ color: "#200f3b" }}
						>
							Earning Power: Project Management Salary Survey—Fourteenth Edition
						</h2>
						<p
							className="text-base leading-relaxed md:text-lg"
							style={{ color: "#6b5b7b" }}
						>
							Project management continues to offer strong earning potential
							globally. And certification continues to hold value, with PMP®
							holders earning 17% more in 21 countries.
						</p>
						<p className="text-sm leading-relaxed" style={{ color: "#6b5b7b" }}>
							PMI members get exclusive access to all the data in our
							interactive Salary Survey Tool.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90"
								resetScroll
								to="/membership"
							>
								Explore PMI Membership
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="order-first md:order-last">
						<img
							alt="Earning Power Salary Survey"
							className="h-64 w-full object-cover md:h-full md:min-h-[420px]"
							height={420}
							src="https://www.pmi.org/-/media/pmi/headless-images/learning/salary-survey/earning-power-promo-version.png"
							width={520}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function DeeperDiveSection() {
	return (
		<section className="bg-white py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2
					className="mb-12 font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
					style={{ color: "#200f3b" }}
				>
					Take a deeper dive
				</h2>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{deeperDiveInsights.map((insight) => (
						<div
							className="flex flex-col gap-4 rounded-2xl border border-[#d4cbc3] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
							key={insight.title}
						>
							<div className="flex flex-wrap gap-2">
								<span
									className="inline-flex w-fit rounded-full border border-[#d4cbc3] bg-white px-3 py-1 font-medium text-[#1d1d35] text-xs"
									style={{ color: "#200f3b" }}
								>
									{insight.badge}
								</span>
								{insight.badgeSub && (
									<span
										className="inline-flex w-fit rounded-full px-3 py-1 font-medium text-xs"
										style={{
											backgroundColor: "#200f3b",
											color: "#f8f5f0",
										}}
									>
										{insight.badgeSub}
									</span>
								)}
							</div>
							<h3
								className="font-bold font-heading text-lg leading-snug"
								style={{ color: "#200f3b" }}
							>
								{insight.title}
							</h3>
							{insight.subtitle && (
								<p
									className="font-medium text-xs leading-snug"
									style={{ color: "#6b5b7b" }}
								>
									{insight.subtitle}
								</p>
							)}
							<p
								className="text-sm leading-relaxed"
								style={{ color: "#6b5b7b" }}
							>
								{insight.description}
							</p>
							<Link
								className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
								resetScroll
								to={insight.href}
							>
								Learn More
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function PublicationsSection() {
	return (
		<section className="bg-[#f8f5f0] py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2
					className="mb-12 font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
					style={{ color: "#200f3b" }}
				>
					Publications
				</h2>

				<div className="grid gap-8 md:grid-cols-2">
					{publications.map((pub) => (
						<div
							className="flex flex-col gap-4 rounded-2xl border border-[#d4cbc3] bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
							key={pub.title}
						>
							<div className="flex flex-wrap gap-2">
								<span
									className="inline-flex w-fit rounded-full border border-[#d4cbc3] bg-white px-3 py-1 font-medium text-[#1d1d35] text-xs"
									style={{ color: "#200f3b" }}
								>
									{pub.badge}
								</span>
								{pub.badgeSub && (
									<span
										className="inline-flex w-fit rounded-full px-3 py-1 font-medium text-xs"
										style={{
											backgroundColor: "#200f3b",
											color: "#f8f5f0",
										}}
									>
										{pub.badgeSub}
									</span>
								)}
							</div>
							<h3
								className="font-bold font-heading text-xl leading-tight md:text-2xl"
								style={{ color: "#200f3b" }}
							>
								{pub.title}
							</h3>
							<p
								className="text-sm leading-relaxed"
								style={{ color: "#6b5b7b" }}
							>
								{pub.description}
							</p>
							<Link
								className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
								resetScroll
								to={pub.href}
							>
								Learn More
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function BrightlineSection() {
	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0 bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage:
						"linear-gradient(160deg, #061828 0%, #0c2a3d 45%, #0a2233 100%)",
				}}
			/>
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-overlay"
				height={800}
				src="/assets/shared/grainy-texture.webp"
				width={1200}
			/>
			<div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
				<div className="flex flex-col items-center gap-6 text-center">
					<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-[2.75rem]">
						Transform your organization's vision into reality with Brightline®
					</h2>
					<p className="max-w-2xl text-base text-white/85 leading-relaxed md:text-lg">
						Brightline provides insights and solutions to help leaders
						effectively turn their organization's vision into reality through
						strategic initiative management. Learn how to better close the
						strategy-execution gap.
					</p>
					<div>
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/learning/brightline"
						>
							Visit Brightline
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<HeroSection />
			<TrendingSection />
			<SalarySurveySection />
			<DeeperDiveSection />
			<PublicationsSection />
			<BrightlineSection />
		</main>
	);
}
