import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/events/speaking-opportunities")({
	component: RouteComponent,
});

const HD = "#1a2c5b";
const DARK_BG = "#200f3b";
const CYAN = "#05bfe0";
const ORANGE = "#d4500a";
const VIOLET = "#4f17a8";
const CREAM = "#f5f0ea";

const PAGE_TABS = [
	{ id: "presentations", label: "Call for Presentations" },
	{ id: "where", label: "Where You Can Speak" },
	{ id: "topics", label: "Topics, Tracks & M.O.R.E." },
	{ id: "submit", label: "How to Submit" },
];

const WHERE_CARDS = [
	{
		title: "PMI Global Summit 2026 Detroit: Built to Move",
		body: "Our signature in-person event of the year for Project Professionals and the ultimate destination to speak, learn new skills, connect, and turn momentum into movement.",
		link: {
			label: "Explore Global Summit Opportunities",
			href: "/events/pmxpo",
			external: false,
		},
		img: "/images/events/speaker-opportunities/gss-detroit.jpg",
		imgAlt: "PMI GSS event location",
	},
	{
		title: "PMI® Leadership Institute Meetings",
		body: "PMI Leadership Institute Meetings are in-person regional events offering strategic alignment, collaborative learning, and leadership development for PMI chapter leaders across the world, speaking opportunities are reserved exclusively for active chapter leaders.",
		link: {
			label: "Explore LIM Opportunities",
			href: "/events/speaking-opportunities",
			external: true,
		},
		img: "/images/events/speaker-opportunities/lim.jpg",
		imgAlt: "Speaker with rapt audience",
	},
	{
		title: "PMI® Training",
		body: "PMI Training sessions are small, interactive, and practice-focused (hosted online and in-person), designed for hands-on learning and real application.",
		link: {
			label: "Submit a Training Idea",
			href: "https://forms.monday.com/forms/872341cccd5436574f2842175f0bd76b?r=use1",
			external: true,
		},
		img: "/images/events/speaker-opportunities/training.jpg",
		imgAlt: "Trainer guiding a learner",
	},
	{
		title: "Digital Community",
		body: "ProjectManagement.com thrives on shared knowledge. We welcome submissions for webinars, white papers, templates, articles, and more.",
		link: {
			label: "Visit ProjectManagement.com",
			href: "https://www.projectmanagement.com/pages/192846/contribute-content-to-projectmanagement-com",
			external: true,
		},
		img: "/images/events/speaker-opportunities/pmdotcom.jpg",
		imgAlt: "ProjectManagement.com opportunities",
	},
];

const EVENTS_2026 = [
	{
		name: "PMI Events in Seoul",
		location: "Seoul, South Korea",
		dates: "10 – 14 June",
	},
	{
		name: "PMI® Agile 2026",
		location: "National Harbor, MD, USA",
		dates: "26 – 28 July",
	},
	{
		name: "PMI Events in Cape Town",
		location: "Cape Town, South Africa",
		dates: "11 – 15 September",
	},
	{
		name: "PMI Global Summit 2026 Detroit: Built to Move",
		location: "Detroit, MI, USA",
		dates: "21 – 24 October",
	},
];

const MORE_PILLARS = [
	{
		letter: "M",
		title: "Manage Perceptions",
		tagline:
			"Show how project teams build shared understanding, shape stakeholder expectations, and communicate value clearly and credibly.",
		practices: [
			<>
				Clearly map how each <strong>stakeholder's needs</strong> will be
				addressed
			</>,
			<>
				Maintain a register to <strong>track project benefits</strong>
			</>,
			<>
				Keep project participants focused on <strong>maximizing value</strong>
			</>,
		],
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="28"
				viewBox="0 0 24 24"
				width="28"
			>
				<path
					d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7zm-1 18h2v1a1 1 0 0 1-2 0v-1z"
					stroke={HD}
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		letter: "O",
		title: "Own Success",
		tagline:
			"Go beyond requirements. Demonstrate how Project Professionals take accountability for outcomes, alignment, and stakeholder value.",
		practices: [
			<>
				Collaborate with stakeholders to{" "}
				<strong>achieve overall purpose</strong>
			</>,
			<>
				Adopt <strong>ownership mindset</strong> that motivates visible,
				concrete actions
			</>,
			<>
				Ensure project outcomes are aligned to broader{" "}
				<strong>organizational goals</strong>
			</>,
		],
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="28"
				viewBox="0 0 24 24"
				width="28"
			>
				<path
					d="M12 2l2.4 5 5.6.8-4 3.9.9 5.6L12 15l-4.9 2.3.9-5.6L4 7.8l5.6-.8L12 2z"
					stroke={HD}
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		letter: "R",
		title: "Relentlessly Reassess",
		tagline:
			"Share strategies for leading through change, navigating uncertainty, and adapting plans to deliver the greatest impact.",
		practices: [
			<>
				Monitor changes in environment to identify{" "}
				<strong>emerging risks or opportunities</strong>
			</>,
			<>
				Continually look to better utilize <strong>technology</strong>
			</>,
			<>
				Evaluate whether <strong>project success</strong> remains visible
			</>,
		],
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="28"
				viewBox="0 0 24 24"
				width="28"
			>
				<path
					d="M1 4v6h6M23 20v-6h-6"
					stroke={HD}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"
					stroke={HD}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		letter: "E",
		title: "Expand Perspective",
		tagline:
			"Explore the broader context–enterprise priorities, industry shifts, community impact, and the wider world.",
		practices: [
			<>
				Champion and repurpose <strong>learning across projects</strong>
			</>,
			<>
				Explore implications for the achievement of{" "}
				<strong>organization-wide goals</strong>
			</>,
			<>
				Explore implications to <strong>broader society</strong>
			</>,
		],
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="28"
				viewBox="0 0 24 24"
				width="28"
			>
				<circle cx="11" cy="11" r="8" stroke={HD} strokeWidth="1.5" />
				<path
					d="M21 21l-4.35-4.35"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
];

const PRIORITY_TOPICS = [
	{
		label: "Artificial Intelligence",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<rect
					height="18"
					rx="2"
					stroke={HD}
					strokeWidth="1.5"
					width="18"
					x="3"
					y="3"
				/>
				<path
					d="M9 9h6M9 12h6M9 15h4"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: "Agile",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<rect
					height="7"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="7"
					x="3"
					y="3"
				/>
				<rect
					height="7"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="7"
					x="14"
					y="3"
				/>
				<rect
					height="7"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="7"
					x="3"
					y="14"
				/>
				<rect
					height="7"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="7"
					x="14"
					y="14"
				/>
			</svg>
		),
	},
	{
		label: "Change Management",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<path
					d="M16 3l5 5-5 5M8 21l-5-5 5-5"
					stroke={HD}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
				<path
					d="M21 8H8a5 5 0 0 0-5 5"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<path
					d="M3 16h13a5 5 0 0 0 5-5"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: "Giga Projects",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<path
					d="M3 21h18M9 21V7l6-4v18M3 21V12l6-5"
					stroke={HD}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: "PMO",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<circle cx="12" cy="5" r="2" stroke={HD} strokeWidth="1.5" />
				<circle cx="5" cy="19" r="2" stroke={HD} strokeWidth="1.5" />
				<circle cx="19" cy="19" r="2" stroke={HD} strokeWidth="1.5" />
				<path
					d="M12 7v4M12 11l-7 6M12 11l7 6"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: "Product Management",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<rect
					height="4"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="6"
					x="9"
					y="2"
				/>
				<rect
					height="4"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="6"
					x="2"
					y="10"
				/>
				<rect
					height="4"
					rx="1"
					stroke={HD}
					strokeWidth="1.5"
					width="6"
					x="16"
					y="10"
				/>
				<path
					d="M12 6v4M5 14v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: "Social Impact",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<circle cx="9" cy="7" r="3" stroke={HD} strokeWidth="1.5" />
				<path
					d="M3 21v-1a6 6 0 0 1 6-6"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
				<circle cx="17" cy="10" r="2.5" stroke={HD} strokeWidth="1.5" />
				<path
					d="M12 21v-1a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v1"
					stroke={HD}
					strokeLinecap="round"
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
	{
		label: "Sustainability",
		icon: (
			<svg
				aria-hidden={true}
				fill="none"
				height="24"
				viewBox="0 0 24 24"
				width="24"
			>
				<circle cx="12" cy="12" r="9" stroke={HD} strokeWidth="1.5" />
				<path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke={HD} strokeWidth="1.5" />
				<path
					d="M12 3c-2.5 3-4 5.6-4 9s1.5 6 4 9M12 3c2.5 3 4 5.6 4 9s-1.5 6-4 9"
					stroke={HD}
					strokeWidth="1.5"
				/>
			</svg>
		),
	},
];

const ADD_THEMES_COLS = [
	[
		"Leadership and power skills",
		"Organizational culture",
		"Portfolio program and project delivery",
		"Ways of working (hybrid, predictive, adaptive)",
	],
	[
		"Team performance",
		"Risk, complexity and uncertainty",
		"Value realization and benefits management",
		"Data fluency and decision-making",
	],
	[
		"Using PMI Standards and guides",
		"Industry-specific best practices",
		"Communications and stakeholder engagement",
	],
];

const FOCUS_TRACKS = [
	{
		n: "1",
		title: "Accelerate Your Career",
		body: "Unlock new skills, tools, and opportunities to advance your career with sessions on power skills, certifications, early leadership, stakeholder communication, delivery fundamentals, confidence, and credibility.",
	},
	{
		n: "2",
		title: "Get Future Ready",
		body: "Explore emerging trends, technologies, and innovative practices shaping the future of project management. Topics include AI, data, innovation, digital transformation, new delivery models, emerging tools, and future skills.",
	},
	{
		n: "3",
		title: "Lead the Way",
		body: "Discover strategies, insights, and leadership tools to drive organizational success, inspire teams, and lead transformation. Explore enterprise leadership, strategy execution, transformation, culture, portfolio leadership, PMO evolution, and influence.",
	},
	{
		n: "4",
		title: "Make an Impact",
		body: "Learn how to drive positive outcomes for organizations, communities, and the world through project management. Focus on social impact, sustainability, ESG, community projects, purpose-driven work, and responsible innovation.",
	},
];

const TIPS = [
	{
		title: "Specific",
		body: "Clearly outline what participants will learn. Avoid generic descriptions or proposals without detail.",
	},
	{
		title: "Audience-centered",
		body: "Tailor your session to Project Professionals at specific stages or roles.",
	},
	{
		title: "Practical",
		body: "Provide takeaways, tools, frameworks, or examples that can be applied immediately.",
	},
	{
		title: "Impact-oriented",
		body: "Show how your content helps others deliver better outcomes and greater value.",
	},
];

const CHEVRON_R = (
	<svg
		aria-hidden="true"
		fill="none"
		height="18"
		viewBox="0 0 32 32"
		width="18"
	>
		<path
			clipRule="evenodd"
			d="M14.1389 11.0238L20.9756 19L14.1389 26.9762L11.8611 25.0238L17.0244 19L11.8611 12.9762L14.1389 11.0238Z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

const ARROW_R = (
	<svg
		aria-hidden="true"
		fill="none"
		height="16"
		viewBox="0 0 32 32"
		width="16"
	>
		<path
			d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z"
			fill="currentColor"
		/>
	</svg>
);

function CalendarIcon() {
	return (
		<svg
			aria-hidden={true}
			fill="none"
			height="22"
			viewBox="0 0 24 24"
			width="22"
		>
			<rect
				height="18"
				rx="2"
				stroke="white"
				strokeWidth="1.5"
				width="18"
				x="3"
				y="4"
			/>
			<path
				d="M3 9h18M8 2v4M16 2v4"
				stroke="white"
				strokeLinecap="round"
				strokeWidth="1.5"
			/>
		</svg>
	);
}

function RouteComponent() {
	const [activeTab, setActiveTab] = useState("presentations");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						setActiveTab(e.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: 0 }
		);
		for (const t of PAGE_TABS) {
			const el = document.getElementById(t.id);
			if (el) {
				observer.observe(el);
			}
		}
		return () => observer.disconnect();
	}, []);

	function scrollTo(id: string) {
		document
			.getElementById(id)
			?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<div className="w-full" style={{ background: DARK_BG }}>
				<div className="mx-auto max-w-screen-xl px-4 pt-24 pb-20 lg:pt-28 lg:pb-24">
					<nav aria-label="Breadcrumb" className="mb-8">
						<ol className="flex items-center gap-2 font-aeonik text-sm text-white/60">
							<li>
								<Link className="hover:text-white" to="/">
									Home
								</Link>
							</li>
							<li className="text-white/40">/</li>
							<li>
								<Link className="hover:text-white" to={"/events" as never}>
									Attend Events
								</Link>
							</li>
							<li className="text-white/40">/</li>
							<li className="text-white/80">Speaking Opportunities</li>
						</ol>
					</nav>
					<h1 className="mb-8 font-aeonik font-medium text-5xl text-white leading-tight lg:text-6xl">
						Share your ideas with a global audience
					</h1>
					<p className="mb-4 max-w-3xl font-aeonik text-white/80 text-xl leading-8">
						PMI brings together bold thinkers, practitioners, innovators, and
						leaders who are redefining what project success looks like. Our Call
						for Presentations invites you to contribute your voice, your
						experience, and your ideas to a global community of project
						professionals.
					</p>
					<p className="mb-10 max-w-3xl font-aeonik text-white/80 text-xl leading-8">
						Whether you're driving transformation, spearheading innovation, or
						leading teams through complexity, we want to hear from you.
					</p>
					<button
						className="inline-flex h-14 items-center gap-2 rounded-full bg-white px-8 font-aeonik font-semibold text-base transition hover:bg-gray-100"
						onClick={() => scrollTo("where")}
						style={{ color: HD }}
						type="button"
					>
						Explore Speaker Opportunities
						<svg
							aria-hidden="true"
							fill="none"
							height="20"
							viewBox="0 0 32 32"
							width="20"
						>
							<path
								d="M14.5 23.66V4H17.5V23.66L24 17.88L26 20.12L16 29L6 20.12L8 17.88L14.5 23.66Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>

			{/* ── Light content ────────────────────────────────────────────── */}
			<div
				className="relative w-full overflow-hidden bg-white"
				style={{ borderRadius: "24px 24px 0 0", marginTop: "-24px" }}
			>
				{/* ── Sticky nav ───────────────────────────────────────────── */}
				<div className="sticky top-0 z-20 w-full border-gray-200 border-b bg-white pt-10">
					<div className="mx-auto max-w-screen-xl px-4">
						<ul className="flex list-none items-center justify-center">
							{PAGE_TABS.map((tab) => (
								<li key={tab.id}>
									<button
										className="flex flex-col items-center border-transparent border-b-2 px-5 pb-6 font-aeonik text-sm transition"
										onClick={() => scrollTo(tab.id)}
										style={{
											color: activeTab === tab.id ? HD : "#6b7280",
											borderColor: activeTab === tab.id ? HD : "transparent",
											fontWeight: activeTab === tab.id ? 600 : 400,
										}}
										type="button"
									>
										{tab.label}
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* ── #presentations ───────────────────────────────────────── */}
				<div
					className="scroll-mt-20 bg-white"
					id="presentations"
					style={{ scrollMarginTop: "80px" }}
				>
					<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-10 lg:pt-20">
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-medium text-3xl lg:text-4xl"
								style={{ color: HD }}
							>
								Call for Presentations
							</h2>
							<div>
								<p
									className="mb-5 font-aeonik font-semibold text-xl leading-8"
									style={{ color: CYAN }}
								>
									Our Global Summit 2026 Detroit, Global Summit Series, and
									Leadership Institute Meetings{" "}
									<strong>Calls for Presentations</strong> are now open.
								</p>
								<p className="mb-4 font-aeonik text-base text-gray-700 leading-7">
									From emerging AI trends and essential leadership strategies to
									practical tools and techniques, PMI's{" "}
									<strong>Call for Presentations</strong> is open to both our
									community and industry experts with a unique perspective on
									leading projects and people.
								</p>
								<p className="mb-4 font-aeonik text-base text-gray-700 leading-7">
									Use this page to shape your submission by exploring the
									learning journeys your session can support, the practices
									behind high-impact project success, and the key topic areas
									shaping the future of the profession.
								</p>
								<p className="mb-8 font-aeonik text-base text-gray-700 leading-7">
									Then review the event locations below and submit to the event
									that best fits your content and audience.
								</p>
								<div className="overflow-hidden rounded-2xl">
									<img
										alt="Call for Presentations — conference crowd"
										className="h-auto w-full"
										height={675}
										loading="lazy"
										src="/images/events/speaker-opportunities/cfp.png"
										width={1200}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Dark callout */}
					<div className="mt-10 w-full" style={{ background: DARK_BG }}>
						<div className="mx-auto max-w-screen-xl px-4 py-14 text-center">
							<p
								className="mb-3 font-aeonik font-medium text-3xl lg:text-4xl"
								style={{ color: CYAN }}
							>
								2026 Call For Presentations&nbsp;Now Open
							</p>
							<p className="font-aeonik text-white/70 text-xl">
								Shape your submission
							</p>
						</div>
						<div className="mx-auto grid max-w-screen-xl grid-cols-1 border-white/10 border-t px-4 pb-14 lg:grid-cols-2 lg:divide-x lg:divide-white/10">
							<div className="pt-10 pr-0 lg:pr-16">
								<p
									className="mb-3 font-aeonik font-semibold text-2xl"
									style={{ color: CYAN }}
								>
									Explore learning journeys your session can support
								</p>
								<p className="font-aeonik font-medium text-base text-white/60 leading-7">
									Speak to practices behind impactful project success, and the
									key topic areas shaping our profession
								</p>
							</div>
							<div className="pt-10 pl-0 lg:pl-16">
								<p
									className="mb-3 font-aeonik font-semibold text-2xl"
									style={{ color: CYAN }}
								>
									Review the events and locations
								</p>
								<p className="font-aeonik font-medium text-base text-white/60 leading-7">
									Submit to the event that best fits your content and audience
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* ── #where ───────────────────────────────────────────────── */}
				<div
					className="scroll-mt-20 bg-white"
					id="where"
					style={{ scrollMarginTop: "80px" }}
				>
					<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-4 lg:pt-20 lg:pb-6">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-medium text-3xl lg:text-4xl"
								style={{ color: HD }}
							>
								Where You Can Speak
							</h2>
							<p className="font-aeonik text-base text-gray-600 leading-7">
								PMI offers opportunities across global, regional, and virtual
								platforms–reaching hundreds of thousands of Project
								Professionals worldwide.
							</p>
						</div>
					</div>
					<div className="mx-auto max-w-screen-xl px-4 pb-16 lg:pb-20">
						{WHERE_CARDS.map((card, i) => (
							<div key={card.title}>
								{i > 0 && <div className="h-px bg-gray-200" />}
								<div
									className="grid grid-cols-1 items-start gap-y-5 py-8"
									style={{
										gridTemplateColumns: "1fr 1fr 256px",
										columnGap: "2.5rem",
									}}
								>
									<h3
										className="font-aeonik font-medium text-2xl lg:text-3xl"
										style={{ color: HD }}
									>
										{card.title}
									</h3>
									<div className="flex flex-col gap-4">
										<p className="font-aeonik text-base text-gray-600 leading-7">
											{card.body}
										</p>
										{card.link.external ? (
											<a
												className="inline-flex items-center gap-0.5 font-aeonik font-semibold text-base hover:underline"
												href={card.link.href}
												rel="noreferrer"
												style={{ color: HD }}
												target="_blank"
											>
												{card.link.label} {CHEVRON_R}
											</a>
										) : (
											<Link
												className="inline-flex items-center gap-0.5 font-aeonik font-semibold text-base hover:underline"
												style={{ color: HD }}
												to={card.link.href as never}
											>
												{card.link.label} {CHEVRON_R}
											</Link>
										)}
									</div>
									<div
										className="overflow-hidden rounded-xl"
										style={{ aspectRatio: "16/9" }}
									>
										<img
											alt={card.imgAlt}
											className="h-full w-full object-cover"
											height={900}
											loading="lazy"
											src={card.img}
											width={1600}
										/>
									</div>
								</div>
							</div>
						))}
					</div>

					{/* 2026 Events */}
					<div style={{ background: DARK_BG }}>
						<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
							<div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h2 className="font-aeonik font-medium text-3xl text-white lg:text-4xl">
									2026 Events
								</h2>
								<div>
									<p className="mb-4 font-aeonik font-semibold text-white text-xl leading-8">
										We're gearing up for an exciting 2026, uniting our global
										community for fresh insights, meaningful connections, and
										transformative learning.
									</p>
									<p className="font-aeonik text-base text-white/70 leading-7">
										With events planned worldwide, we're committed to creating
										experiences that spark collaboration and innovation as we
										look forward to shaping the future of the project profession
										together.
									</p>
								</div>
							</div>
							<div className="grid grid-cols-1 gap-0 md:grid-cols-2">
								{EVENTS_2026.map((ev, i) => (
									<div
										className="border-white/20 border-t py-6"
										key={ev.name}
										style={{
											paddingRight: i % 2 === 0 ? "3rem" : "0",
											paddingLeft: i % 2 === 1 ? "3rem" : "0",
										}}
									>
										<div className="mb-3 flex items-center gap-3">
											<CalendarIcon />
											<h3 className="font-aeonik font-semibold text-lg text-white">
												{ev.name}
											</h3>
										</div>
										<p className="font-aeonik text-base text-white/60">
											{ev.location} | {ev.dates}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* ── #topics ──────────────────────────────────────────────── */}
				<div
					className="scroll-mt-20"
					id="topics"
					style={{ scrollMarginTop: "80px", background: CREAM }}
				>
					{/* Introducing M.O.R.E. */}
					<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-10 lg:pt-20">
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-medium text-3xl lg:text-4xl"
								style={{ color: HD }}
							>
								Introducing M.O.R.E.
							</h2>
							<div>
								<p
									className="mb-4 font-aeonik font-semibold text-xl leading-7"
									style={{ color: ORANGE }}
								>
									Shape the future of the project profession
								</p>
								<p className="mb-4 font-aeonik text-base text-gray-700 leading-7">
									As the world becomes more complex and interconnected, project
									success is no longer defined solely by timelines or budgets -
									it's defined by value. PMI's vision for the profession,{" "}
									<strong>M.O.R.E.</strong>, guides how we think about project
									leadership and the topics we elevate on our stages.
								</p>
								<p className="font-aeonik text-base text-gray-700 leading-7">
									We're seeking proposals that reflect the four pillars of
									M.O.R.E.
								</p>
							</div>
						</div>
					</div>

					{/* 4 M.O.R.E. pillars */}
					{MORE_PILLARS.map((pillar) => (
						<div className="border-gray-200 border-t" key={pillar.letter}>
							<div className="mx-auto max-w-screen-xl px-4 py-12 lg:py-14">
								<div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
									<h3
										className="font-aeonik font-medium text-3xl lg:text-4xl"
										style={{ color: HD }}
									>
										<span style={{ color: ORANGE }}>{pillar.letter}</span>
										{pillar.title.slice(1)}
									</h3>
									<div>
										<div className="mb-6 flex items-start gap-4">
											<div className="mt-0.5 flex-shrink-0">{pillar.icon}</div>
											<p
												className="font-aeonik font-semibold text-xl leading-7"
												style={{ color: HD }}
											>
												{pillar.tagline}
											</p>
										</div>
										<div className="mb-5 h-px bg-gray-300" />
										<p className="mb-4 font-aeonik font-medium text-gray-400 text-sm uppercase tracking-wide">
											Example Practices
										</p>
										<ul className="space-y-3">
											{pillar.practices.map((practice, j) => (
												<li
													className="flex items-start gap-3 font-aeonik text-base text-gray-700"
													// biome-ignore lint/suspicious/noArrayIndexKey: static ordered practices, no stable id
													key={j}
												>
													<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
													{practice}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Priority Topics */}
				<div className="bg-white">
					<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-10 lg:pt-20">
						<div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-medium text-3xl lg:text-4xl"
								style={{ color: HD }}
							>
								Priority Topics
							</h2>
							<div>
								<p
									className="mb-3 font-aeonik font-semibold text-xl leading-7"
									style={{ color: VIOLET }}
								>
									Our programming reflects where the profession is heading.
								</p>
								<p className="font-aeonik text-base text-gray-700 leading-7">
									We prioritize proposals connected to PMI's eight{" "}
									<strong>Content and Innovation Platforms</strong> and other
									critical areas of practice:
								</p>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
							{PRIORITY_TOPICS.map((topic, i) => (
								<div
									className="flex items-center gap-4 border-gray-200 border-t py-5"
									key={topic.label}
									style={{ borderLeft: i % 3 === 0 ? undefined : "none" }}
								>
									<div className="flex-shrink-0 opacity-70">{topic.icon}</div>
									<span
										className="font-aeonik font-medium text-lg"
										style={{ color: HD }}
									>
										{topic.label}
									</span>
								</div>
							))}
						</div>
					</div>

					{/* Additional High-Demand Themes */}
					<div style={{ background: CREAM }}>
						<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
							<div className="mb-10 grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h2
									className="font-aeonik font-medium text-2xl lg:text-3xl"
									style={{ color: HD }}
								>
									Additional High-Demand Themes
								</h2>
								<p className="font-aeonik text-base text-gray-700 leading-7">
									If your topic aligns with these strategic focus
									areas—especially with a clear tie to tangible impact—we
									encourage you to submit.
								</p>
							</div>
							<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{ADD_THEMES_COLS.map((col) => (
									<ul className="space-y-3" key={col[0]}>
										{col.map((item) => (
											<li
												className="flex items-start gap-3 font-aeonik text-base text-gray-700"
												key={item}
											>
												<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
												{item}
											</li>
										))}
									</ul>
								))}
							</div>
						</div>
					</div>

					{/* Focus Tracks */}
					<div className="bg-white">
						<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
							<div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h2
									className="font-aeonik font-medium text-3xl lg:text-4xl"
									style={{ color: HD }}
								>
									Focus Tracks
								</h2>
								<div>
									<p
										className="mb-3 font-aeonik font-semibold text-xl leading-7"
										style={{ color: CYAN }}
									>
										The Learning Journey
									</p>
									<p className="mb-3 font-aeonik text-base text-gray-700 leading-7">
										All PMI event content is organized around four Focus Tracks,
										aligned to audience needs and career stages.
									</p>
									<p className="font-aeonik font-semibold text-base text-gray-700">
										Every proposal should clearly align to at least one of these
										tracks:
									</p>
								</div>
							</div>
							<div className="space-y-0 divide-y divide-gray-200 lg:ml-[calc(5/12*100%+4rem)]">
								{FOCUS_TRACKS.map((track) => (
									<div className="flex items-start gap-6 py-6" key={track.n}>
										<div
											className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-aeonik font-bold text-lg text-white"
											style={{ background: HD }}
										>
											{track.n}
										</div>
										<div>
											<h3
												className="mb-2 font-aeonik font-semibold text-xl"
												style={{ color: HD }}
											>
												{track.title}
											</h3>
											<p className="font-aeonik text-base text-gray-600 leading-7">
												{track.body}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* ── #submit ──────────────────────────────────────────────── */}
				<div
					className="scroll-mt-20 bg-white"
					id="submit"
					style={{ scrollMarginTop: "80px" }}
				>
					<div className="mx-auto max-w-screen-xl px-4 pt-16 pb-10 lg:pt-20">
						<div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-medium text-3xl lg:text-4xl"
								style={{ color: HD }}
							>
								How to Submit
							</h2>
							<div>
								<p className="mb-1 font-aeonik font-semibold text-gray-800 text-xl">
									Want to join in our mission?
								</p>
								<p
									className="mb-6 font-aeonik font-semibold text-xl"
									style={{ color: VIOLET }}
								>
									Speak at a PMI event in 2026!
								</p>
								<p className="mb-4 font-aeonik text-base text-gray-700 leading-7">
									Current and aspiring Project Professionals are our focus,
									driving us to constantly develop new, exciting events that
									challenge our audiences and expand their horizons.
								</p>
								<p className="font-aeonik text-base text-gray-700 leading-7">
									Events like PMI Global Summit Series, Leadership Institute
									Meetings, and PMI Global Summit feature engaging and
									educational programs for Project Professionals, rising
									leaders, and those looking to begin their career in project
									management.
								</p>
							</div>
						</div>
					</div>
					<div className="mx-auto max-w-screen-xl px-4 pb-10">
						<div className="overflow-hidden rounded-2xl lg:ml-[calc(5/12*100%+4rem)]">
							<img
								alt="PMI event attendees"
								className="h-auto w-full"
								height={400}
								loading="lazy"
								src="/images/events/speaker-opportunities/submit-event.jpg"
								style={{ maxHeight: "400px", objectFit: "cover" }}
								width={1200}
							/>
						</div>
					</div>

					<div className="mx-auto max-w-screen-xl px-4 pb-14">
						<div className="lg:ml-[calc(5/12*100%+4rem)]">
							<p className="mb-6 font-aeonik font-semibold text-base text-gray-800">
								Learn more about each event type, timelines and next steps in
								their submission processes.
							</p>
							<div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
								<a
									className="inline-flex h-14 items-center justify-between gap-4 rounded-full border-2 px-8 font-aeonik font-semibold text-base transition hover:bg-gray-50"
									href="/events/speaking-opportunities"
									rel="noreferrer"
									style={{ borderColor: HD, color: HD }}
									target="_blank"
								>
									Explore Global Summit Series Opportunities {ARROW_R}
								</a>
								<a
									className="inline-flex h-14 items-center justify-between gap-4 rounded-full border-2 px-8 font-aeonik font-semibold text-base transition hover:bg-gray-50"
									href="/events/speaking-opportunities"
									rel="noreferrer"
									style={{ borderColor: HD, color: HD }}
									target="_blank"
								>
									Explore Leadership Institute Opportunities {ARROW_R}
								</a>
							</div>
						</div>
					</div>

					{/* Submission Tips */}
					<div className="border-gray-200 border-t">
						<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
							<div className="grid grid-cols-1 gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h2
									className="font-aeonik font-medium text-3xl lg:text-4xl"
									style={{ color: HD }}
								>
									Submission Tips
								</h2>
								<div>
									<p className="mb-8 font-aeonik font-semibold text-base text-gray-800">
										A strong proposal is:
									</p>
									<div className="space-y-0 divide-y divide-gray-200">
										{TIPS.map((tip) => (
											<div className="py-6" key={tip.title}>
												<h3
													className="mb-2 font-aeonik font-semibold text-2xl"
													style={{ color: VIOLET }}
												>
													{tip.title}
												</h3>
												<p className="font-aeonik text-base text-gray-500 leading-7">
													{tip.body}
												</p>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
