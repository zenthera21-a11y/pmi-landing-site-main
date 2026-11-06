import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { Button } from "@pmi-south-asia/ui/components/button";
import { cn } from "@pmi-south-asia/ui/lib/utils";
import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/career-resources")({
	component: RouteComponent,
});

const STATS = [
	{
		value: "+30 Million",
		description:
			"More Project Professionals needed by 2035 to fill the global talent gap",
	},
	{
		value: "1.7 Million+",
		description:
			"PMI certification holders worldwide, making PMI the leader in the field since 1969",
	},
	{
		value: "17%",
		description:
			"of PMP® holders reported higher median salaries than those without in our latest salary survey",
	},
];

const PROMO_CARDS = [
	{
		number: "1",
		title: "Find your next opportunity",
		description:
			"Search thousands of vetted, accurate project management job listings on the PMI Job Board. Plus, PMI members get early access to new opportunities three days before they go public.",
		cta: "Search the PMI Job Board",
		imageOnLeft: true,
	},
	{
		number: "2",
		title: "Personalize your path",
		description:
			"The PMI Career Navigator tool can help propel your career forward. Based on your interests and goals, creates personalized action plan to match you with the perfect growth opportunities.",
		cta: "Start Your FREE Assessment",
		imageOnLeft: false,
	},
	{
		number: "3",
		title: "Prove your expertise",
		description:
			"Demonstrate your expertise at any skill level with a PMI gold standard project management certification. No matter what your professional goals, we have a certification that will position you to stand out from the crowd.",
		cta: "Explore Certification",
		imageOnLeft: true,
	},
];

const TAB_DATA = [
	{
		label: "Career Advancement",
		featured: {
			badge: "Blog",
			title: "PMP® vs CAPM® Certification: Which is Best for Your Career?",
			description:
				"Both certifications can boost your project management career, but which one is right for you? Compare requirements, costs, and career impact.",
			cta: "Read Now",
		},
		secondary: {
			badge: "Podcast",
			title: "What to Expect: A Guide for Project Professionals",
			cta: "Listen Now",
		},
		simple: [
			{ badge: "Blog", title: "7 Essential Skills for AI Project Managers" },
			{ badge: "Blog", title: "7 Ways to Kick-Start Your Professional Growth" },
		],
	},
	{
		label: "Career Paths",
		featured: {
			badge: "Blog",
			title: "How to Become a Project Manager",
			description:
				"A comprehensive guide to entering the project management field, including education, certifications, and practical experience you need.",
			cta: "Read Now",
		},
		secondary: {
			badge: "Podcast",
			title: "Starting a Project Management Career",
			cta: "Listen Now",
		},
		simple: [
			{ badge: "Article", title: "What is a Project Manager?" },
			{ badge: "Blog", title: "How to Gain Project Management Experience" },
		],
	},
	{
		label: "Hiring Trends",
		featured: {
			badge: "Report",
			title: "Global Project Management Talent Gap",
			description:
				"Our research reveals the growing demand for project professionals and the opportunities it creates for your career.",
			cta: "Read Now",
		},
		secondary: {
			badge: "Report",
			title: "Earning Power: Project Management Salary Survey Tool",
			cta: "Read Now",
			memberOnly: true,
		},
		simple: [
			{ badge: "Podcast", title: "Career Change – Moving to a New Sector" },
			{ badge: "Online Tool", title: "Project Management Job Board" },
		],
	},
];

function StatItem({
	value,
	description,
}: {
	value: string;
	description: string;
}) {
	return (
		<div className="py-6">
			<p className="font-aeonik font-bold text-4xl text-[#FF610F] lg:text-5xl">
				{value}
			</p>
			<p className="mt-3 text-base text-gray-600 lg:text-lg">{description}</p>
		</div>
	);
}

function _PromoCard({
	number,
	title,
	description,
	cta,
	imageOnLeft,
}: (typeof PROMO_CARDS)[number]) {
	const imageEl = (
		<div className="aspect-[5/4] w-full flex-shrink-0 rounded-2xl bg-gray-700 lg:max-w-[536px]" />
	);
	const textEl = (
		<div className="flex flex-1 flex-col justify-center gap-4">
			<h3 className="font-aeonik font-medium text-2xl text-white lg:text-3xl">
				{number} — {title}
			</h3>
			<p className="text-base text-gray-300 lg:text-lg">{description}</p>
			<div>
				<Button
					className="rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] hover:bg-gray-100"
					size="lg"
				>
					{cta}
				</Button>
			</div>
		</div>
	);

	return (
		<div
			className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 lg:flex-row lg:gap-14 lg:px-4 lg:py-16"
			style={{ background: "#200f3b" }}
		>
			{imageOnLeft ? (
				<>
					{imageEl}
					{textEl}
				</>
			) : (
				<>
					{textEl}
					{imageEl}
				</>
			)}
		</div>
	);
}

function TabContent({ data }: { data: (typeof TAB_DATA)[number] }) {
	return (
		<div className="grid gap-6 lg:grid-cols-2">
			{/* Featured card */}
			<div
				className="flex min-h-[400px] flex-col justify-end rounded-2xl border border-gray-200 bg-center bg-cover bg-gray-900 p-6 lg:min-h-[480px] lg:p-8"
				style={{
					backgroundImage:
						"linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
				}}
			>
				<span className="mb-4 w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 font-medium text-white text-xs backdrop-blur-sm">
					{data.featured.badge}
				</span>
				<h4 className="font-aeonik font-medium text-2xl text-white lg:text-3xl">
					{data.featured.title}
				</h4>
				<p className="mt-3 text-gray-300 text-sm lg:text-base">
					{data.featured.description}
				</p>
			</div>

			{/* Right column */}
			<div className="flex flex-col gap-6">
				{/* Secondary card */}
				<div
					className="flex min-h-[280px] flex-col justify-end rounded-2xl border border-gray-200 bg-center bg-cover bg-gray-800 p-6 lg:min-h-[320px] lg:p-8"
					style={{
						backgroundImage:
							"linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.1))",
					}}
				>
					<span className="mb-4 w-fit rounded-full border border-white/30 bg-white/10 px-3 py-1 font-medium text-white text-xs backdrop-blur-sm">
						{data.secondary.badge}
					</span>
					<h4 className="font-aeonik font-medium text-white text-xl lg:text-2xl">
						{data.secondary.title}
					</h4>
					{data.secondary.memberOnly && (
						<span className="mt-3 inline-block bg-linear-to-r from-[#4f17a8] via-[#7C3AED] to-[#FF610F] bg-clip-text font-semibold text-sm text-transparent">
							★ Free for Members
						</span>
					)}
				</div>

				{/* Simple cards */}
				{data.simple.map((card) => (
					<div
						className="group flex cursor-pointer items-center justify-between border-gray-200 border-b py-4"
						key={card.title}
					>
						<div className="flex flex-col gap-1">
							<span className="font-medium text-gray-500 text-xs">
								{card.badge}
							</span>
							<h5 className="font-aeonik font-medium text-[#200f3b] text-base lg:text-lg">
								{card.title}
							</h5>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

function RouteComponent() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<main className="overflow-x-hidden">
			{/* Hero */}
			<section
				className="relative w-full overflow-hidden"
				style={{
					backgroundImage: "url('/images/careers/hero.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					minHeight: "500px",
				}}
			>
				<div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/70" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 pt-6 lg:px-4">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink
									render={<Link to="/learning/academic-programs" />}
								>
									Learning
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Career Resources</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-36 text-center sm:pt-40">
					<h1 className="font-aeonik font-bold text-4xl text-white lg:text-6xl">
						Grow your career in project management
					</h1>
					<p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 lg:text-xl">
						From a curated project management job board to gold standard
						certifications that make your resume stand out, explore resources to
						level up your career.
					</p>
				</div>
			</section>

			{/* Key Data */}
			<section
				className="scroll-mt-12 bg-pmi-surface-primary py-16 lg:py-24"
				id="data"
			>
				<div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-4">
					<div className="lg:col-span-5">
						<h2 className="font-aeonik font-medium text-3xl text-[#200f3b] lg:text-4xl">
							Key Data
						</h2>
					</div>
					<div className="lg:col-span-7">
						{STATS.map((stat, i) => (
							<div key={stat.value}>
								{i > 0 && <div className="h-px w-full bg-gray-200" />}
								<StatItem description={stat.description} value={stat.value} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Career Insights */}
			<section
				className="scroll-mt-12 py-16 lg:py-24"
				id="career"
				style={{ background: "#f8f5f0" }}
			>
				<div className="mx-auto max-w-3xl px-6 text-center lg:px-4">
					<h2 className="font-aeonik font-bold text-3xl text-[#200f3b] lg:text-4xl">
						Insight on Project Management Careers
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
						Our proprietary research and unique perspective on careers in
						project management can help you decide where to take your career
						next.
					</p>
				</div>

				{/* Tabs - Desktop */}
				<div className="mx-auto mt-12 max-w-7xl px-6 lg:mt-16 lg:px-4">
					<div className="hidden border-gray-200 border-b lg:flex">
						{TAB_DATA.map((tab, i) => (
							<button
								className={cn(
									"relative px-6 py-3 font-medium text-sm transition-colors",
									activeTab === i
										? "border-[#200f3b] border-b-2 text-[#200f3b]"
										: "text-gray-500 hover:text-gray-700"
								)}
								key={tab.label}
								onClick={() => setActiveTab(i)}
								type="button"
							>
								{tab.label}
							</button>
						))}
					</div>
					<div className="hidden pt-8 lg:block">
						<TabContent data={TAB_DATA[activeTab]} />
					</div>

					{/* Accordion - Mobile */}
					<div className="flex flex-col gap-4 lg:hidden">
						{TAB_DATA.map((tab, i) => (
							<div
								className="rounded-xl border border-gray-200"
								key={tab.label}
							>
								<button
									className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-[#200f3b]"
									onClick={() => setActiveTab(activeTab === i ? -1 : i)}
									type="button"
								>
									{tab.label}
									<span
										className={cn(
											"text-2xl transition-transform",
											activeTab === i && "rotate-45"
										)}
									>
										+
									</span>
								</button>
								{activeTab === i && (
									<div className="border-gray-200 border-t px-5 py-6">
										<TabContent data={tab} />
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Community Perspectives */}
			<section className="scroll-mt-12 py-16 lg:py-24" id="community">
				<div className="mx-auto max-w-5xl px-6 lg:px-4">
					<h2 className="mb-10 text-center font-aeonik font-bold text-3xl text-[#200f3b] lg:mb-12 lg:text-4xl">
						Perspectives from Our Community
					</h2>
					<div className="flex aspect-video items-center justify-center rounded-2xl bg-gray-900">
						<button
							aria-label="Play video"
							className="flex size-16 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-110 lg:size-20"
							type="button"
						>
							<IconPlayerPlay className="size-8 text-[#200f3b] lg:size-10" />
						</button>
					</div>
				</div>
			</section>

			{/* Search Career Resources CTA */}
			<section className="border-gray-200 border-t py-16 lg:py-24">
				<div className="mx-auto max-w-3xl px-6 text-center lg:px-4">
					<h2 className="font-aeonik font-bold text-3xl text-[#200f3b] lg:text-4xl">
						Search Career Resources
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
						No matter where you are in your professional journey, PMI is here to
						support you and your career.
					</p>
					<div className="mt-8">
						<Button
							className="rounded-full border-2 border-[#200f3b] px-8 py-3 text-[#200f3b] hover:bg-[#200f3b] hover:text-white"
							size="lg"
							variant="outline"
						>
							More Career Resources
							<IconArrowRight className="ml-2 size-5" />
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
