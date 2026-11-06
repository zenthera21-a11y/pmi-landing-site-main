import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import {
	IconArrowLeft,
	IconArrowRight,
	IconChevronRight,
	IconChevronsLeft,
	IconChevronsRight,
	IconSearch,
} from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/blog/")({
	component: RouteComponent,
});

interface BlogPost {
	badge: string;
	date: string;
	description: string;
	href: string;
	image?: string;
	title: string;
}

const LATEST_IMAGE_POSTS: BlogPost[] = [
	{
		badge: "Blog",
		date: "24 June 2026",
		description:
			"Jim Highsmith explains why AI upskilling must preserve human judgment to strengthen adaptive capacity, decision quality and enterprise agility.",
		href: "/blog/adaptive-capacity-ai-decision-making",
		image: "/images/blog/adaptive-capacity.jpg",
		title: "Judgment Builds Adaptive Capacity",
	},
	{
		badge: "Blog",
		date: "2 June 2026",
		description:
			"Discover how PMI Nigeria Chapter and PMIEF are helping young people build confidence, leadership, and project management skills through impactful community training programs.",
		href: "/blog/how-pmi-nigeria-empowers-young-people-project-management-skills",
		image: "/images/blog/nigeria-impact.png",
		title:
			"How PMI Is Driving Social Impact by Empowering Young People in Nigeria",
	},
];

const LATEST_TEXT_POSTS: BlogPost[] = [
	{
		badge: "Blog",
		date: "5 June 2026",
		description:
			"Build skills for artificial intelligence by balancing fast-changing tools, durable methods and human capabilities that compound over time.",
		href: "/blog/ai-skills-perishable-durable-enduring",
		title: "Build AI Skills That Last",
	},
	{
		badge: "Blog",
		date: "9 June 2026",
		description:
			"Enterprise PMO capability helps organizations improve strategy execution, decision-making, and value delivery at scale.",
		href: "/blog/pmo-reinvention-leading-the-shift",
		title: "The PMO Is Being Reinvented. Are You Leading or Lagging?",
	},
];

interface TopicTab {
	label: string;
	posts: BlogPost[];
	viewAllHref: string;
}

const TOPIC_TABS: TopicTab[] = [
	{
		label: "Project Management Playbook",
		viewAllHref: "/blog/project-management-playbook",
		posts: [
			{
				badge: "Blog",
				date: "9 May 2025",
				description:
					"Learn how top PMOs drive business transformation through strategic partnership, agile integration, digital transformation, and more.",
				href: "/blog/how-award-winning-pmos-drive-business-transformation",
				title: "How Top PMOs Drive Business Transformation",
			},
			{
				badge: "Blog",
				date: "8 April 2025",
				description:
					"Project success isn't just about metrics—stakeholder perceptions shape whether a project is seen as valuable. Learn how to manage and align perceptions for better outcomes.",
				href: "/blog/managing-perceptions-for-project-success",
				title: "Managing Perceptions for Project Success",
			},
			{
				badge: "Blog",
				date: "10 June 2024",
				description:
					"No project runs exactly to plan, but a strong risk management approach will help project teams navigate the challenges and maximize rewards.",
				href: "/blog/manage-risk-and-maximize-reward",
				title: "5 Ways to Manage Risk and Maximize Rewards",
			},
			{
				badge: "Blog",
				date: "25 September 2024",
				description:
					"Status meetings are how project leaders keep their fingers on the pulse. Here's some time-tested advice to get your status meetings beating to a unified purpose.",
				href: "/blog/run-an-effective-status-meeting",
				title: "How to Run a Better Status Meeting",
			},
		],
	},
	{
		label: "Career Advancement",
		viewAllHref: "/blog/career-advancement",
		posts: [
			{
				badge: "Blog",
				date: "18 May 2026",
				description:
					"Learn how to strengthen your resume for project management roles with practical tips on summaries, keywords, certifications, and measurable results.",
				href: "/blog/how-to-build-a-resume-that-stands-out-for-project-roles",
				title: "How to Build a Resume That Stands Out for Project Roles",
			},
			{
				badge: "Blog",
				date: "12 April 2026",
				description:
					"Thinking about making the leap into project management? Explore the skills you need, the certifications that matter, and how to make a confident transition.",
				href: "/blog/navigating-a-career-change-into-project-management",
				title: "Navigating a Career Change into Project Management",
			},
			{
				badge: "Blog",
				date: "28 February 2026",
				description:
					"Salary negotiations can feel daunting, but project managers who advocate for themselves earn significantly more. Here's how to approach the conversation.",
				href: "/blog/how-to-negotiate-your-project-manager-salary",
				title: "How to Negotiate Your Project Manager Salary",
			},
			{
				badge: "Blog",
				date: "15 January 2026",
				description:
					"Your personal brand is what people say about you when you leave the room. Learn how to shape your professional reputation in the project management field.",
				href: "/blog/building-a-personal-brand-as-a-project-professional",
				title: "Building a Personal Brand as a Project Professional",
			},
		],
	},
	{
		label: "Project Inspiration",
		viewAllHref: "/blog/project-inspiration",
		posts: [
			{
				badge: "Blog",
				date: "5 May 2026",
				description:
					"Servant leaders create high-performing agile teams by putting people first. Discover how this leadership style drives engagement, trust, and results.",
				href: "/blog/power-of-servant-leadership-in-agile-teams",
				title: "The Power of Servant Leadership in Agile Teams",
			},
			{
				badge: "Blog",
				date: "22 March 2026",
				description:
					"In complex projects, simplicity is not a shortcut—it's a strategic advantage. Learn how to cut noise and focus your team on what truly drives value.",
				href: "/blog/when-simplicity-is-the-strategy",
				title: "When Simplicity Is the Strategy",
			},
			{
				badge: "Blog",
				date: "10 February 2026",
				description:
					"Uncertainty is constant in project work. Discover proven techniques that help project leaders keep their teams motivated, aligned, and moving forward.",
				href: "/blog/how-to-keep-your-team-motivated-through-uncertainty",
				title: "How to Keep Your Team Motivated Through Uncertainty",
			},
			{
				badge: "Blog",
				date: "4 January 2026",
				description:
					"Effective stakeholder communication can make or break a project. Explore frameworks and practices that help you align stakeholders from kickoff to close.",
				href: "/blog/the-art-of-stakeholder-communication",
				title: "The Art of Stakeholder Communication",
			},
		],
	},
	{
		label: "PMIxAI",
		viewAllHref: "/blog/pmi-x-ai",
		posts: [
			{
				badge: "Blog",
				date: "5 June 2026",
				description:
					"Build skills for artificial intelligence by balancing fast-changing tools, durable methods and human capabilities that compound over time.",
				href: "/blog/ai-skills-perishable-durable-enduring",
				title: "Build AI Skills That Last",
			},
			{
				badge: "Blog",
				date: "20 May 2026",
				description:
					"Move beyond one-off prompts to more structured, reliable AI interactions. Reusable prompt structures improve decision-making, team alignment, and real-world project results.",
				href: "/blog/modular-prompting-better-ai-results-project-managers",
				title:
					"Modular Prompting in Practice: Better AI Results for Project Managers",
			},
			{
				badge: "Blog",
				date: "3 April 2026",
				description:
					"AI is reshaping how project teams identify, assess, and respond to risk. Discover how to integrate AI tools into your risk management practice.",
				href: "/blog/how-ai-is-changing-risk-management",
				title: "How AI Is Changing Risk Management",
			},
			{
				badge: "Blog",
				date: "14 March 2026",
				description:
					"Project managers are uniquely positioned to lead AI implementation in organizations. Here's how to embrace the role of AI champion on your team.",
				href: "/blog/project-managers-as-ai-champions",
				title: "Project Managers as AI Champions",
			},
		],
	},
	{
		label: "Leader Insight",
		viewAllHref: "/blog/leader-insight",
		posts: [
			{
				badge: "Blog",
				date: "24 June 2026",
				description:
					"Jim Highsmith explains why AI upskilling must preserve human judgment to strengthen adaptive capacity, decision quality and enterprise agility.",
				href: "/blog/adaptive-capacity-ai-decision-making",
				title: "Judgment Builds Adaptive Capacity",
			},
			{
				badge: "Blog",
				date: "9 June 2026",
				description:
					"As complexity rises, organizations need more than project oversight. They need PMO capability that connects strategy to execution and delivers business value at scale.",
				href: "/blog/pmo-reinvention-leading-the-shift",
				title: "PMO Reinvention: Leading the Shift",
			},
			{
				badge: "Blog",
				date: "13 May 2026",
				description:
					"In this episode of The Shift Code Podcast, host Pierre Le Manh is joined by Julia Dhar of BCG to discuss why most change initiatives stall.",
				href: "/blog/why-change-efforts-stall-bcg",
				title: "Why Change Efforts Stall",
			},
			{
				badge: "Blog",
				date: "1 March 2026",
				description:
					"The most effective PMOs act as strategic partners, not just project monitors. Discover what separates a strategic PMO from an administrative one.",
				href: "/blog/the-strategic-pmo",
				title: "The Strategic PMO",
			},
		],
	},
];

interface AllBlogPost extends BlogPost {
	longDescription: string;
}

const ALL_BLOG_POSTS: AllBlogPost[] = [
	{
		badge: "Blog",
		date: "1 May 2026",
		description:
			"Across industries, organizations that deliver consistently invest in shared language, governance, and project leadership capability so teams can move faster without losing alignment.",
		href: "/blog/strategy-only-matters-if-teams-can-execute-together",
		image: "/images/blog/strategy-execute-together.jpg",
		longDescription:
			"Across industries, organizations that deliver consistently invest in shared language, governance, and project leadership capability so teams can move faster without losing alignment.",
		title: "Strategy Only Matters If Your Teams Can Execute Together",
	},
	{
		badge: "Blog",
		date: "20 April 2026",
		description:
			"The PMP exam changes on 9 July 2026, with updated prep resources available from 14 April. Learn what's changing, why it matters, and how to choose the right version based on your timeline.",
		href: "/blog/pmp-exam-change",
		image: "/images/blog/pmp-exam-change.jpg",
		longDescription:
			"The PMP exam changes on 9 July 2026, with updated prep resources available from 14 April. Learn what's changing, why it matters, and how to choose the right version based on your timeline.",
		title: "PMP Exam Change",
	},
	{
		badge: "Blog",
		date: "13 April 2026",
		description:
			"Thinking about pursuing PMP certification? This guide covers what the PMP represents, who it's designed for, and how to decide if the timing is right for your career.",
		href: "/blog/pmp-certification",
		image: "/images/blog/pmp-certification.jpg",
		longDescription:
			"Thinking about pursuing PMP certification? This guide covers what the PMP represents, who it's designed for, and how to decide if the timing is right for your career.",
		title: "Is PMP Certification Right for You?",
	},
	{
		badge: "Blog",
		date: "10 April 2026",
		description:
			"This guide highlights the top events for project managers in 2026 from PMI, including virtual and in-person experiences designed to help professionals expand their networks and build future-ready skills.",
		href: "/blog/best-pmi-events",
		image: "/images/blog/best-pmi-events.jpg",
		longDescription:
			"This guide highlights the top events for project managers in 2026 from PMI, including virtual and in-person experiences designed to help professionals expand their networks and build future-ready skills. From PMXPO™ to PMI® Global Summit and regional events, explore events that align with your career goals.",
		title: "Best PMI Events 2026",
	},
	{
		badge: "Blog",
		date: "3 April 2026",
		description:
			"The gap between leadership decisions and organizational reality is where transformations break down. PMI's Manifesto for Enterprise Agility provides four leadership values that close the gap.",
		href: "/blog/enterprise-agility-transformation-leadership",
		image: "/images/blog/enterprise-agility.png",
		longDescription:
			"The gap between leadership decisions and organizational reality is where transformations break down. BCG calls this 'change distance.' PMI's Manifesto for Enterprise Agility provides four leadership values that close the gap so organizations can deliver outcomes, not just launch change.",
		title: "The Manifesto for Enterprise Agility",
	},
	{
		badge: "Blog",
		date: "27 March 2026",
		description:
			"Early exposure to project management skills can shape students' future success. Learn how one student developed these skills through the PMI Educational Foundation, leading to success at Caltech and a NASA mission project.",
		href: "/blog/how-project-skills-led-student-to-caltech",
		image: "/images/blog/project-skills-caltech.png",
		longDescription:
			"Early exposure to project management skills can shape students' future success. Learn how one student developed these skills through the PMI Educational Foundation, leading to success at Caltech and a NASA mission project—and how project-based learning empowers youth to solve real-world challenges.",
		title: "Project Skills for Student Success",
	},
	{
		badge: "Blog",
		date: "26 March 2026",
		description:
			'In this episode of "The Shift Code" podcast, host Pierre Le Manh is joined by Roger Martella of GE Vernova to unpack a practical approach to transformation.',
		href: "/blog/ge-vernova-powering-growth-decarbonizing-world",
		image: "/images/blog/ge-vernova.png",
		longDescription:
			'In this episode of "The Shift Code" podcast, host Pierre Le Manh is joined by Roger Martella of GE Vernova to unpack a practical approach to transformation: simplify to execute, align incentives to accelerate change and stay disciplined when results take time.',
		title: "How GE Vernova Is Powering Growth in a Decarbonizing World",
	},
	{
		badge: "Blog",
		date: "17 March 2026",
		description:
			"Preparing for the PMP exam takes more than memorization. Certified project professionals share study strategies, preparation tips, and recommended resources.",
		href: "/blog/pmp-exam-study-strategies",
		image: "/images/blog/pmp-exam-study.jpg",
		longDescription:
			"Preparing for the PMP exam takes more than memorization. Certified project professionals share study strategies, preparation tips, and recommended resources—from building a study plan to using practice exams—that can help candidates approach the PMP exam with confidence.",
		title: "PMP Exam Study Strategies from Certified PMs",
	},
];

function OutlineBadge({ label }: { label: string }) {
	return (
		<span className="inline-block rounded-full border border-[#200f3b]/40 px-4 py-1 font-medium text-[#200f3b] text-sm">
			{label}
		</span>
	);
}

function ImageCard({ post }: { post: BlogPost }) {
	return (
		<div
			className="relative overflow-hidden rounded-2xl border border-[#200f3b]/20"
			style={{ height: "30rem" }}
		>
			<div
				className="h-1/2 overflow-hidden"
				style={{
					WebkitMask: "linear-gradient(#000, #0000)",
					mask: "linear-gradient(#000, #0000)",
				}}
			>
				<img
					alt={post.title}
					className="h-full w-full object-cover"
					height={320}
					src={post.image}
					width={640}
				/>
			</div>
			<div className="absolute top-8 left-6">
				<span className="inline-block rounded-full border border-[#200f3b]/30 bg-white/90 px-4 py-1 font-medium text-[#200f3b] text-sm backdrop-blur-sm">
					{post.badge}
				</span>
			</div>
			<div className="absolute inset-0 flex flex-col justify-end gap-3 px-6 pb-8">
				<h3 className="font-bold text-[#200f3b] text-lg leading-snug sm:text-xl">
					{post.title}
				</h3>
				<div className="line-clamp-3 text-gray-600 text-sm">
					<p className="mb-1 font-bold text-[#200f3b]">{post.date}</p>
					{post.description}
				</div>
				<Link
					className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-6 py-2.5 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
					to={post.href as never}
				>
					Read Post
				</Link>
			</div>
		</div>
	);
}

function HalfCard({ post }: { post: BlogPost }) {
	return (
		<div className="flex min-h-[272px] cursor-pointer flex-col justify-between gap-4 rounded-2xl border border-[#200f3b]/20 px-6 py-8">
			<OutlineBadge label={post.badge} />
			<div className="flex-1">
				<h3 className="mb-3 font-bold text-[#200f3b] text-lg leading-snug sm:text-xl">
					{post.title}
				</h3>
				<p className="mb-2 font-bold text-[#200f3b] text-sm">{post.date}</p>
				<p className="line-clamp-4 text-gray-600 text-sm leading-relaxed">
					{post.description}
				</p>
			</div>
			<Link
				className="inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-6 py-2.5 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
				to={post.href as never}
			>
				Read Post
			</Link>
		</div>
	);
}

function TopicTabContent({ tab }: { tab: TopicTab }) {
	return (
		<div>
			<div className="grid gap-4 sm:grid-cols-2">
				{tab.posts.map((post) => (
					<HalfCard key={post.title} post={post} />
				))}
			</div>
			<div className="mt-6 flex items-center justify-between">
				<Link
					className="inline-flex items-center gap-2 rounded-full border-2 border-[#200f3b] px-6 py-2.5 font-semibold text-[#200f3b] text-sm transition hover:bg-[#200f3b] hover:text-white"
					to={tab.viewAllHref as never}
				>
					View All Posts for This Topic
					<IconArrowRight className="size-4" />
				</Link>
				<div className="flex items-center gap-2">
					<button
						aria-label="Previous"
						className="flex size-10 items-center justify-center rounded-full border border-[#200f3b]/30 text-[#200f3b] transition hover:bg-[#200f3b]/10"
						type="button"
					>
						<IconArrowLeft className="size-4" />
					</button>
					<button
						aria-label="Next"
						className="flex size-10 items-center justify-center rounded-full border border-[#200f3b]/30 text-[#200f3b] transition hover:bg-[#200f3b]/10"
						type="button"
					>
						<IconArrowRight className="size-4" />
					</button>
				</div>
			</div>
		</div>
	);
}

function BlogListRow({ post }: { post: AllBlogPost }) {
	return (
		<div className="border-gray-200 border-t py-8">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-12 sm:gap-6">
				<div className="sm:col-span-3">
					<p className="mb-2 text-[#200f3b]/60 text-sm">{post.date}</p>
					<h3 className="font-bold text-[#200f3b] text-lg leading-snug">
						{post.title}
					</h3>
				</div>
				<div className="sm:col-span-6">
					<p className="mb-4 text-gray-600 text-sm leading-relaxed">
						{post.longDescription}
					</p>
					<Link
						className="inline-flex items-center gap-1 font-semibold text-[#200f3b] text-sm hover:underline"
						to={post.href as never}
					>
						Read Post
						<IconChevronRight className="size-4" />
					</Link>
				</div>
				<div className="sm:col-span-3">
					{post.image && (
						<img
							alt={post.title}
							className="aspect-video w-full rounded-xl object-cover"
							height={360}
							loading="lazy"
							src={post.image}
							width={640}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

function RouteComponent() {
	const [activeTab, setActiveTab] = useState(0);
	const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);

	return (
		<main className="overflow-x-hidden">
			{/* ── Hero ── */}
			<section style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-screen-xl px-6 pt-10 lg:px-4 lg:pt-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-[#200f3b]/70 hover:text-[#200f3b]"
									render={<Link to="/" />}
								>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-[#200f3b]/50" />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-[#200f3b]">
									The PMI Blog
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-4xl px-6 pt-16 pb-16 text-center sm:pt-20 sm:pb-20">
					<h1 className="mb-5 font-bold text-4xl text-[#200f3b] sm:text-5xl lg:text-6xl">
						The PMI Blog
					</h1>
					<p className="text-[#200f3b]/70 text-lg sm:text-xl">
						Insights and inspiration for project leaders.
					</p>
				</div>
			</section>

			{/* ── Latest Posts ── */}
			<section style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-screen-xl px-6 pb-10 lg:px-4 lg:pb-20">
					<h2 className="mb-8 text-center font-bold text-2xl text-[#200f3b] sm:text-3xl">
						Latest Posts
					</h2>
					<div className="grid gap-2 lg:grid-cols-2">
						<div className="flex flex-col gap-2">
							<ImageCard post={LATEST_IMAGE_POSTS[0]} />
							<HalfCard post={LATEST_TEXT_POSTS[0]} />
						</div>
						<div className="flex flex-col gap-2">
							<HalfCard post={LATEST_TEXT_POSTS[1]} />
							<ImageCard post={LATEST_IMAGE_POSTS[1]} />
						</div>
					</div>
				</div>
			</section>

			{/* ── Explore by Topic ── */}
			<section className="bg-white py-16 lg:py-24">
				<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
					<div className="mb-10 text-center">
						<h2 className="mb-3 font-bold text-2xl text-[#200f3b] sm:text-3xl lg:text-4xl">
							Explore by topic
						</h2>
						<p className="text-gray-600 text-lg">
							Find posts based on your interests and expertise.
						</p>
					</div>

					{/* Desktop tabs */}
					<div className="hidden lg:block">
						<div className="flex border-gray-200 border-b">
							{TOPIC_TABS.map((tab, i) => (
								<button
									className={`whitespace-nowrap px-5 py-3 font-semibold text-sm transition-colors ${
										activeTab === i
											? "border-[#200f3b] border-b-2 text-[#200f3b]"
											: "text-gray-500 hover:text-[#200f3b]"
									}`}
									key={tab.label}
									onClick={() => setActiveTab(i)}
									type="button"
								>
									{tab.label}
								</button>
							))}
						</div>
						<div className="pt-8">
							<TopicTabContent tab={TOPIC_TABS[activeTab]} />
						</div>
					</div>

					{/* Mobile accordion */}
					<div className="flex flex-col lg:hidden">
						{TOPIC_TABS.map((tab, i) => {
							const isOpen = mobileExpanded === i;
							return (
								<div className="border-gray-100 border-b" key={tab.label}>
									<button
										className="flex w-full items-center justify-between bg-[#f5f0e8] px-5 py-4 text-left font-bold text-[#200f3b] text-sm"
										onClick={() => setMobileExpanded(isOpen ? null : i)}
										type="button"
									>
										{tab.label}
										<span
											className={`text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}
										>
											+
										</span>
									</button>
									{isOpen && (
										<div className="px-4 py-4">
											<TopicTabContent tab={tab} />
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* ── All Blog Posts ── */}
			<section className="border-gray-200 border-t bg-white py-16 lg:py-24">
				<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
					<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<h2 className="font-bold text-2xl text-[#200f3b] sm:text-3xl">
							All Blog Posts
						</h2>
						<div className="flex items-center gap-2 text-sm">
							<span className="text-gray-500">Sort by:</span>
							<select className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-[#200f3b] text-sm">
								<option>Date — newest first</option>
								<option>Date — oldest first</option>
								<option>Most popular</option>
							</select>
						</div>
					</div>

					<div>
						{ALL_BLOG_POSTS.map((post) => (
							<BlogListRow key={post.title} post={post} />
						))}
					</div>

					{/* Pagination */}
					<div className="mt-12 flex flex-col items-center gap-6">
						<nav
							aria-label="Blog pagination"
							className="flex items-center gap-1"
						>
							<button
								aria-label="First page"
								className="flex size-9 items-center justify-center rounded-full text-[#200f3b]/50 hover:text-[#200f3b]"
								type="button"
							>
								<IconChevronsLeft className="size-4" />
							</button>
							<button
								aria-label="Previous page"
								className="flex size-9 items-center justify-center rounded-full text-[#200f3b]/50 hover:text-[#200f3b]"
								type="button"
							>
								<IconArrowLeft className="size-4" />
							</button>
							{[1, 2, 3, 4, 5].map((page) => (
								<button
									aria-current={page === 1 ? "page" : undefined}
									className={`flex size-9 items-center justify-center rounded-full font-semibold text-sm transition ${
										page === 1
											? "bg-[#200f3b] text-white"
											: "text-[#200f3b] hover:bg-[#200f3b]/10"
									}`}
									key={page}
									type="button"
								>
									{page}
								</button>
							))}
							<button
								aria-label="Next page"
								className="flex size-9 items-center justify-center rounded-full text-[#200f3b]/50 hover:text-[#200f3b]"
								type="button"
							>
								<IconArrowRight className="size-4" />
							</button>
							<button
								aria-label="Last page"
								className="flex size-9 items-center justify-center rounded-full text-[#200f3b]/50 hover:text-[#200f3b]"
								type="button"
							>
								<IconChevronsRight className="size-4" />
							</button>
						</nav>
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-8 py-3 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
							to="/blog/"
						>
							<IconSearch className="size-4" />
							Search All Blog Posts
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
