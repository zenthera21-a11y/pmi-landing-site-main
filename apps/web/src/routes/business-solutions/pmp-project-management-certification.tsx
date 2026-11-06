import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute(
	"/business-solutions/pmp-project-management-certification"
)({
	component: RouteComponent,
});

const VIOLET = "#4f17a8";
const DARK_BG = "#200f3b";
const CREAM = "#f5f0ea";

const NAV_TABS = [
	{ id: "about", label: "About PMP® Certification" },
	{ id: "contact", label: "Contact Us" },
	{ id: "case-studies", label: "Business Case Studies" },
];

const DELIVERS = [
	{
		title: "Make quality decisions under pressure",
		body: "The PMP is experience-based leadership grounded in consistent and shared execution discipline. Whether decisions are informed by dashboards, predictive analytics or AI-generated recommendations, PMP certified leaders provide escalation paths that keep decisions grounded.",
		icon: (
			<svg
				aria-hidden="true"
				className="h-8 w-8 shrink-0"
				fill="none"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25 15.9249V8C25 7.44772 24.5523 7 24 7L7 7L7 24C7 24.5523 7.44771 25 8 25H12.7273V28H8C5.79086 28 4 26.2091 4 24V4H24C26.2091 4 28 5.79086 28 8V15.9249H25Z"
					fill="currentColor"
				/>
				<path
					d="M21.1942 9.47266L9.08685 9.47266V12.4727L21.1942 12.4727L21.1942 9.47266Z"
					fill="currentColor"
				/>
				<path
					d="M16 14.0745L9.08685 14.0745V17.0745L16 17.0745V14.0745Z"
					fill="currentColor"
				/>
				<path
					d="M14.538 23.3267L16.6593 21.2054L19.3326 23.8787L25.729 17.4823L27.8504 19.6036L19.3327 28.1214L14.538 23.3267Z"
					fill="currentColor"
				/>
			</svg>
		),
	},
	{
		title: "Align teams, functions, and priorities",
		body: "PMP certified teams use shared terminology, standard artifacts, and common processes, which reduces miscommunication, accelerates handoffs, and improves alignment.",
		icon: (
			<svg
				aria-hidden="true"
				className="h-8 w-8 shrink-0"
				fill="none"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.75 11.5C8.74456 11.5 9.69839 11.1049 10.4017 10.4017C11.1049 9.69839 11.5 8.74456 11.5 7.75C11.5 6.75544 11.1049 5.80161 10.4017 5.09835C9.69839 4.39509 8.74456 4 7.75 4C6.75544 4 5.80161 4.39509 5.09835 5.09835C4.39509 5.80161 4 6.75544 4 7.75C4 8.74456 4.39509 9.69839 5.09835 10.4017C5.80161 11.1049 6.75544 11.5 7.75 11.5ZM25 11.5C25.9946 11.5 26.9484 11.1049 27.6516 10.4017C28.3549 9.69839 28.75 8.74456 28.75 7.75C28.75 6.75544 28.3549 5.80161 27.6516 5.09835C26.9484 4.39509 25.9946 4 25 4C24.0054 4 23.0516 4.39509 22.3484 5.09835C21.6451 5.80161 21.25 6.75544 21.25 7.75C21.25 8.74456 21.6451 9.69839 22.3484 10.4017C23.0516 11.1049 24.0054 11.5 25 11.5ZM3.25 13L1 19H12.0297C10.7828 17.8984 10 16.2906 10 14.5C10 13.9844 10.0656 13.4781 10.1875 13H3.25ZM31 19L28.75 13H21.8125C21.9344 13.4781 22 13.9844 22 14.5C22 16.2906 21.2125 17.8984 19.9703 19H31ZM16 12.25C16.2955 12.25 16.5881 12.3082 16.861 12.4213C17.134 12.5343 17.3821 12.7001 17.591 12.909C17.7999 13.1179 17.9657 13.366 18.0787 13.639C18.1918 13.9119 18.25 14.2045 18.25 14.5C18.25 14.7955 18.1918 15.0881 18.0787 15.361C17.9657 15.634 17.7999 15.8821 17.591 16.091C17.3821 16.2999 17.134 16.4657 16.861 16.5787C16.5881 16.6918 16.2955 16.75 16 16.75C15.7045 16.75 15.4119 16.6918 15.139 16.5787C14.866 16.4657 14.6179 16.2999 14.409 16.091C14.2001 15.8821 14.0343 15.634 13.9213 15.361C13.8082 15.0881 13.75 14.7955 13.75 14.5C13.75 14.2045 13.8082 13.9119 13.9213 13.639C14.0343 13.366 14.2001 13.1179 14.409 12.909C14.6179 12.7001 14.866 12.5343 15.139 12.4213C15.4119 12.3082 15.7045 12.25 16 12.25ZM16 19C16.5909 19 17.1761 18.8836 17.7221 18.6575C18.268 18.4313 18.7641 18.0998 19.182 17.682C19.5998 17.2641 19.9313 16.768 20.1575 16.2221C20.3836 15.6761 20.5 15.0909 20.5 14.5C20.5 13.9091 20.3836 13.3239 20.1575 12.7779C19.9313 12.232 19.5998 11.7359 19.182 11.318C18.7641 10.9002 18.268 10.5687 17.7221 10.3425C17.1761 10.1164 16.5909 10 16 10C15.4091 10 14.8239 10.1164 14.2779 10.3425C13.732 10.5687 13.2359 10.9002 12.818 11.318C12.4002 11.7359 12.0687 12.232 11.8425 12.7779C11.6164 13.3239 11.5 13.9091 11.5 14.5C11.5 15.0909 11.6164 15.6761 11.8425 16.2221C12.0687 16.768 12.4002 17.2641 12.818 17.682C13.2359 18.0998 13.732 18.4313 14.2779 18.6575C14.8239 18.8836 15.4091 19 16 19ZM10.9234 22.75H21.0766L21.9766 25.75H10.0234L10.9234 22.75ZM22.75 20.5H9.25L7.675 25.75L7 28H9.34844H22.6516H25L24.325 25.75L22.75 20.5Z"
					fill="currentColor"
				/>
			</svg>
		),
	},
	{
		title: "Focus on value delivery, not just task completion",
		body: "PMP certified teams prioritize work that contributes to strategic objectives instead of simply completing activities or following rigid plans.",
		icon: (
			<svg
				aria-hidden="true"
				className="h-8 w-8 shrink-0"
				fill="none"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					clipRule="evenodd"
					d="M8 4V7.5H6.5C4.567 7.5 3 9.067 3 11V15C3 16.933 4.567 18.5 6.5 18.5H9.38468C10.5562 20.2188 12.38 21.4575 14.5 21.8596V25.5H10V28.5H22V25.5H17.5V21.8596C19.62 21.4575 21.4438 20.2188 22.6153 18.5H25.5C27.433 18.5 29 16.933 29 15V11C29 9.067 27.433 7.5 25.5 7.5H24V4H8ZM21 7H11V14C11 16.7614 13.2386 19 16 19C18.7614 19 21 16.7614 21 14V7ZM24 10.5V14C24 14.5127 23.9518 15.0141 23.8596 15.5H25.5C25.7761 15.5 26 15.2761 26 15V11C26 10.7239 25.7761 10.5 25.5 10.5H24ZM6.5 10.5H8V14C8 14.5127 8.04823 15.0141 8.1404 15.5H6.5C6.22386 15.5 6 15.2761 6 15V11C6 10.7239 6.22386 10.5 6.5 10.5Z"
					fill="currentColor"
					fillRule="evenodd"
				/>
			</svg>
		),
	},
	{
		title: "Build adaptability into day-to-day execution",
		body: "The PMP equips leaders to consistently choose the right delivery approach as conditions change. Predictive, agile and hybrid applicability is built in, so teams adapt without retooling or re-training. They can also decide where AI-enabled tools fit into different delivery approaches.",
		icon: (
			<svg
				aria-hidden="true"
				className="h-8 w-8 shrink-0"
				fill="none"
				viewBox="0 0 32 32"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M7.9 12.555C9.24 9.40505 12.365 7.20005 16 7.20005C17.985 7.20005 19.89 7.99005 21.295 9.39505L23.905 12H21.2H20V14.4H21.2H26.8H28V13.2V7.60005V6.40005H25.6V7.60005V10.305L22.995 7.69505C21.14 5.84005 18.625 4.80005 16 4.80005C11.37 4.80005 7.395 7.61005 5.69 11.615L7.9 12.555ZM6.4 21.695L9.005 24.3C10.86 26.16 13.375 27.2 16 27.2C20.625 27.2 24.59 24.4 26.3 20.405L24.095 19.46C22.75 22.605 19.63 24.8 16 24.8C14.015 24.8 12.11 24.01 10.705 22.605L8.095 20H10.8H12V17.6H10.8H5.2H4V18.8V24.4V25.6H6.4V24.4V21.695Z"
					fill="currentColor"
				/>
			</svg>
		),
	},
];

const TESTIMONIALS = [
	{
		img: "/images/business-solutions/pmp/lisa-laflotte.png",
		alt: "Lisa Laflotte",
		quote:
			"We incorporate globally recognized industry certifications as a part of our professional program...it's key to make sure folks understand certifications will be a part of gaining the experience they need, and the qualifications to be able to serve our customers.",
		name: "Lisa Laflotte",
		role: "Vice President, Global Project Delivery Excellence, Kyndryl",
	},
	{
		img: "/images/business-solutions/pmp/janelle-delaney.png",
		alt: "Janelle Delaney",
		quote:
			"The PMP sets a foundation and makes sure you understand the basics of project management and beyond. It's also recognized across the industry. Everybody knows what it means and what level you are at, so I think it's actually very important.",
		name: "Janelle Delaney",
		role: "Delivery Excellence Executive, IBM",
	},
];

const WHY_INVEST = [
	{
		title: "Consistency",
		bullets: [
			"PMP certification establishes a shared project language, standards and execution expectations",
			"Aligns delivery across teams, functions, and priorities",
			"Provides a stable framework for introducing AI into workflows",
		],
	},
	{
		title: "Scalability",
		bullets: [
			"With PMP certified teams, organizations can scale delivery capability without reinventing processes",
			"Reduced reliance on individual high performers",
			"When AI capabilities are added, standardized practices make it easier to roll out these tools across portfolios in a controlled, repeatable way",
		],
	},
	{
		title: "Quality Decisions Under Pressure",
		bullets: [
			"PMP certification delivers improved decision quality in complex, fast-moving environments",
			"Risk reduction through internal capability",
		],
	},
	{
		title: "Stronger Global Market Signaling and Stakeholder Confidence",
		bullets: [
			"A workforce with PMP certified teams signal execution maturity to customers, partners, regulators and procurement teams",
			"Highlighting PMP certification signifies complex projects will be handled with discipline, consistency, and accountability",
			"Improved trust, support, competitiveness in bids, renewals and long-term partnerships",
		],
	},
];

const CASE_STUDIES = [
	{
		title:
			"Deloitte: Applying PMI Standards and Certifications for Consistent Global Delivery",
		body: "Deloitte leverages PMI standards and PMP certified professionals to align project practices across countries, service lines, and clients. This supports predictable delivery quality at scale.",
		img: "/images/business-solutions/atp.jpg",
	},
	{
		title: "Mayo Clinic Expansion: Scaling Capacity and Technology Safely",
		body: "A shared playbook for governance, risk management, and hybrid delivery enabled Mayo Clinic to expand its hospital and technology.",
		img: "/images/business-solutions/government-advocacy-business-solutions.jpg",
	},
	{
		title:
			"Ontario Power Generation: and the PMO: Setting Up Mega Projects for Success",
		body: "Anchored by PMP certification pathways, mentoring, and cross-project experience, OPG established a comprehensive talent development framework.",
		imgBg: "#c0440a",
		imgText:
			"Ontario Power Generation\nand the PMO\n\nSetting up Megaprojects\nfor Success",
	},
];

const LEARN_MORE = [
	{
		title: "Investing in PMP-Certified Teams Strengthens Performance",
		body: "See how PMP certification directly connects to business outcomes such as speed, quality, and risk reduction.",
		img: "/images/business-solutions/agile.jpg",
		href: "/certifications/project-management-pmp",
	},
	{
		title: "How Organizations Can Elevate Project Management Training",
		body: "Explore proven approaches to building scalable, modern project management learning programs for your organization.",
		img: "/images/business-solutions/knowledge-networking.jpg",
		href: "/learning/pmi-training",
	},
	{
		title: "Validating Workforce Skill When Hiring",
		body: "Certifications like PMP help organizations assess and validate project management skills in candidates.",
		img: "/images/business-solutions/talent-management-business-solutions.jpg",
		href: "/certifications",
	},
];

const COUNTRIES = [
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"India",
	"Germany",
	"France",
	"Brazil",
	"Japan",
	"China",
	"Mexico",
	"South Africa",
	"Singapore",
	"UAE",
	"Other",
];

function RouteComponent() {
	const [activeTab, setActiveTab] = useState("about");
	const [testimonialIdx, setTestimonialIdx] = useState(0);
	const [marketingConsent, setMarketingConsent] = useState(true);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const sections = NAV_TABS.map((t) => document.getElementById(t.id)).filter(
			Boolean
		) as HTMLElement[];
		if (!sections.length) {
			return;
		}
		const obs = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveTab(entry.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -50% 0px", threshold: 0 }
		);
		for (const s of sections) {
			obs.observe(s);
		}
		return () => obs.disconnect();
	}, []);

	function scrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
		}
	}

	const t = TESTIMONIALS[testimonialIdx];

	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<div className="w-full" style={{ background: DARK_BG }}>
				<div className="mx-auto grid max-w-screen-xl grid-cols-1 items-center gap-8 px-4 pt-24 pb-20 lg:grid-cols-12 lg:gap-14">
					{/* Left: circular image */}
					<div className="flex items-center justify-center lg:col-span-5">
						<div
							className="overflow-hidden"
							style={{
								borderRadius: "50%",
								width: 420,
								height: 420,
								maxWidth: "90vw",
							}}
						>
							<img
								alt="Certified PMP professionals climbing stairs"
								className="h-full w-full object-cover"
								height={600}
								src="/images/business-solutions/pmp/b2b-landing-page_hero.png"
								width={800}
							/>
						</div>
					</div>
					{/* Right: text */}
					<div className="lg:col-span-7">
						<nav aria-label="Breadcrumb" className="mb-6">
							<ol className="flex items-center gap-2 text-sm text-white/60">
								<li>
									<Link className="hover:text-white" to="/">
										Home
									</Link>
								</li>
								<li className="text-white/40">/</li>
								<li>
									<Link className="hover:text-white" to="/business-solutions">
										PMI for Organizations
									</Link>
								</li>
								<li className="text-white/40">/</li>
								<li className="text-white/80">
									PMP Project Management Certification
								</li>
							</ol>
						</nav>
						<h1 className="mb-6 font-aeonik font-medium text-5xl text-white leading-tight lg:text-6xl">
							Certified skill building
						</h1>
						<p className="mb-8 text-lg text-white/70 leading-relaxed">
							Build a stronger organization with PMP® certified teams that
							deliver results. Explore different enterprise options for learning
							and certification that fit your team when you connect with a
							specialist.
						</p>
						<button
							className="inline-flex h-12 items-center gap-2 rounded-full px-7 font-semibold text-base text-white transition hover:opacity-90"
							onClick={() => scrollTo("contact")}
							style={{ background: "#111" }}
							type="button"
						>
							Contact Us
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
							<svg
								fill="none"
								height="20"
								viewBox="0 0 32 32"
								width="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.5 23.66L14.5 4H17.5L17.5 23.66L24 17.88L26 20.12L16 29L6 20.12L8 17.88L14.5 23.66Z"
									fill="currentColor"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* ── Sticky nav ───────────────────────────────────────────────── */}
			<div
				className="sticky top-0 z-30 w-full border-gray-200 border-b bg-white"
				ref={navRef}
			>
				<div className="mx-auto flex max-w-screen-xl items-center justify-center gap-0 overflow-x-auto px-4">
					{NAV_TABS.map((tab) => (
						<button
							className="flex h-20 max-w-44 flex-shrink-0 flex-col items-center justify-end whitespace-nowrap pb-6 text-center font-semibold text-sm transition"
							key={tab.id}
							onClick={() => scrollTo(tab.id)}
							style={{
								color: activeTab === tab.id ? "#111" : "#888",
								borderBottom:
									activeTab === tab.id
										? "3px solid #111"
										: "3px solid transparent",
								paddingLeft: "1.5rem",
								paddingRight: "1.5rem",
							}}
							type="button"
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			{/* ── #about: What PMP delivers ────────────────────────────────── */}
			<div
				className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20"
				id="about"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<h2
							className="font-aeonik font-medium text-4xl leading-tight lg:text-5xl"
							style={{ color: VIOLET }}
						>
							What PMP® certification delivers to organizations
						</h2>
					</div>
					<div className="lg:col-span-7">
						<p className="mb-6 text-base text-gray-700 leading-relaxed">
							The Project Management Professional (PMP)® certification is global
							execution discipline for the AI era. It's designed for experienced
							leaders managing real organizational complexity to ensure strategy
							is delivered consistently.
						</p>
						<p className="mb-6 font-semibold text-gray-900">
							PMP certified teams help organizations:
						</p>
						<ul className="space-y-6">
							{DELIVERS.map((item) => (
								<li key={item.title}>
									<div className="flex gap-6">
										<div style={{ color: "#333" }}>{item.icon}</div>
										<div>
											<h3 className="mb-2 font-semibold text-base text-gray-900">
												{item.title}
											</h3>
											<p className="text-gray-600 text-sm leading-relaxed">
												{item.body}
											</p>
										</div>
									</div>
									<div className="mt-6 h-px bg-gray-200" />
								</li>
							))}
						</ul>
						<div className="mt-8">
							<button
								className="inline-flex h-12 items-center gap-2 rounded-full border-2 px-7 font-semibold text-base transition hover:bg-gray-50"
								onClick={() => scrollTo("contact")}
								style={{ borderColor: "#111", color: "#111" }}
								type="button"
							>
								Contact Us
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
								<svg
									fill="none"
									height="20"
									viewBox="0 0 32 32"
									width="20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14.5 23.66L14.5 4H17.5L17.5 23.66L24 17.88L26 20.12L16 29L6 20.12L8 17.88L14.5 23.66Z"
										fill="currentColor"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* ── Testimonial carousel ─────────────────────────────────────── */}
			<div className="w-full py-16" style={{ background: DARK_BG }}>
				<div className="mx-auto max-w-screen-xl px-4">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_1fr]">
						{/* Image */}
						<div
							className="overflow-hidden rounded-xl"
							style={{ aspectRatio: "16/9" }}
						>
							<img
								alt={t.alt}
								className="h-full w-full object-cover transition-all duration-500"
								height={450}
								src={t.img}
								width={800}
							/>
						</div>
						{/* Quote */}
						<div className="flex flex-col gap-4">
							<blockquote
								className="relative pl-3 font-aeonik font-medium text-lg text-white leading-relaxed before:absolute before:top-0 before:left-0 before:text-4xl before:text-white/40 before:content-['“'] after:content-['”']"
								style={{ color: "white" }}
							>
								{t.quote}
							</blockquote>
							<div>
								<p className="font-semibold text-white">{t.name}</p>
								<p className="text-sm text-white/60">{t.role}</p>
							</div>
						</div>
					</div>
					{/* Nav dots + arrows */}
					<div className="mt-10 flex items-center justify-between">
						<div className="flex gap-2">
							{TESTIMONIALS.map((t, i) => (
								<button
									className="h-1.5 rounded-full transition-all"
									key={t.name}
									onClick={() => setTestimonialIdx(i)}
									style={{
										width: i === testimonialIdx ? 32 : 8,
										background:
											i === testimonialIdx ? "white" : "rgba(255,255,255,0.3)",
									}}
									type="button"
								/>
							))}
						</div>
						<div className="flex gap-3">
							<button
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
								onClick={() =>
									setTestimonialIdx(
										(testimonialIdx - 1 + TESTIMONIALS.length) %
											TESTIMONIALS.length
									)
								}
								type="button"
							>
								←
							</button>
							<button
								className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
								onClick={() =>
									setTestimonialIdx((testimonialIdx + 1) % TESTIMONIALS.length)
								}
								type="button"
							>
								→
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* ── Why organizations invest ─────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<h2 className="font-aeonik font-bold text-3xl text-gray-900 lg:text-4xl">
							Why organizations invest in PMP certified teams
						</h2>
					</div>
					<div className="lg:col-span-7">
						<p className="mb-8 text-gray-500 leading-relaxed">
							Organizations invest in PMP certification to empower leadership
							and teams with shared execution and delivery systems that help
							projects run smoothly.
						</p>
						<div className="space-y-0">
							{WHY_INVEST.map((section, i) => (
								<div key={section.title}>
									<h3
										className="mb-4 font-semibold text-xl"
										style={{ color: VIOLET }}
									>
										{section.title}
									</h3>
									<ul className="mb-6 space-y-2">
										{section.bullets.map((bullet) => (
											<li
												className="flex items-start gap-3 text-gray-700 text-sm"
												key={bullet}
											>
												<span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
												{bullet}
											</li>
										))}
									</ul>
									{i < WHY_INVEST.length - 1 && (
										<div className="mb-6 h-px bg-gray-200" />
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* ── Stats banner ─────────────────────────────────────────────── */}
			<div className="w-full py-20 text-center" style={{ background: DARK_BG }}>
				<div className="mx-auto max-w-2xl px-4">
					<h2 className="mb-4 font-aeonik font-bold text-3xl text-white lg:text-4xl">
						Business impact of inconsistent execution
					</h2>
					<p className="mb-10 text-white/70">
						Poorly structured work, conflicting priorities, and unclear
						accountability are major drivers of disengagement.
					</p>
					<div className="mb-3 font-aeonik font-bold text-5xl text-white lg:text-6xl">
						USD $438 billion
					</div>
					<p className="text-white/60">
						Estimated annual cost of employee disengagement globally
						<sup>1</sup>
					</p>
				</div>
			</div>

			{/* ── #contact: Let's talk ─────────────────────────────────────── */}
			<div
				className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20"
				id="contact"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mb-10 text-center">
					<h2 className="mb-4 font-aeonik font-bold text-4xl text-gray-900 lg:text-5xl">
						Let's talk about your teams
					</h2>
					<p className="text-gray-500 text-lg leading-relaxed">
						Complete this form and we'll help you explore how PMP certification
						can support stronger delivery, better alignment, and more consistent
						results across your teams.
					</p>
				</div>
				<div className="mx-auto max-w-xl">
					<p className="mb-6 text-center text-gray-600 text-sm">
						If you are an individual needing support from PMI, please contact{" "}
						<strong>Customer Care</strong>.
					</p>
					<div className="mb-8 h-px bg-gray-200" />
					<form
						className="space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
							console.warn(
								"Thank you for reaching out. A PMI specialist will contact you within 2–3 business days."
							);
						}}
					>
						<div className="flex flex-col gap-1.5">
							<label
								className="font-semibold text-gray-800 text-sm"
								htmlFor="pmp-org"
							>
								Organization <span className="text-red-500">*</span>
							</label>
							<input
								className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
								id="pmp-org"
								placeholder="Organization Name"
								required
								type="text"
							/>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-gray-800 text-sm"
									htmlFor="pmp-fname"
								>
									First Name <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
									id="pmp-fname"
									placeholder="First Name"
									required
									type="text"
								/>
							</div>
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-gray-800 text-sm"
									htmlFor="pmp-lname"
								>
									Last (Family) Name <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
									id="pmp-lname"
									placeholder="Last Name"
									required
									type="text"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-1.5">
							<label
								className="font-semibold text-gray-800 text-sm"
								htmlFor="pmp-email"
							>
								Work Email <span className="text-red-500">*</span>
							</label>
							<input
								className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
								id="pmp-email"
								placeholder="Email"
								required
								type="email"
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<label
								className="font-semibold text-gray-800 text-sm"
								htmlFor="pmp-jobtitle"
							>
								Job Title <span className="text-red-500">*</span>
							</label>
							<input
								className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
								id="pmp-jobtitle"
								placeholder="Job Title"
								required
								type="text"
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<label
								className="font-semibold text-gray-800 text-sm"
								htmlFor="pmp-country"
							>
								Country <span className="text-red-500">*</span>
							</label>
							<select
								className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
								id="pmp-country"
								required
							>
								<option value="">Choose country</option>
								{COUNTRIES.map((c) => (
									<option key={c}>{c}</option>
								))}
							</select>
						</div>
						<div className="flex flex-col gap-1.5">
							<label
								className="font-semibold text-gray-800 text-sm"
								htmlFor="pmp-employees"
							>
								Number of Employees to be Certified
							</label>
							<input
								className="w-full rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
								id="pmp-employees"
								min="1"
								placeholder="No. of Employees"
								type="number"
							/>
						</div>
						<div className="flex flex-col gap-1.5">
							<label
								className="font-semibold text-gray-800 text-sm"
								htmlFor="pmp-request"
							>
								Please describe your request{" "}
								<span className="text-red-500">*</span>
							</label>
							<textarea
								className="w-full resize-y rounded border border-gray-300 bg-white px-3 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
								id="pmp-request"
								placeholder="Additional Information"
								required
								rows={4}
							/>
						</div>
						<p className="text-gray-500 text-sm leading-5">
							By submitting this form, you agree to the PMI Privacy Policy and
							Terms of Use.{" "}
							<a
								className="underline"
								href="/privacy"
								rel="noreferrer"
								style={{ color: VIOLET }}
								target="_blank"
							>
								View our privacy policy
							</a>
							.
						</p>
						<label className="flex cursor-pointer items-start gap-3">
							<input
								className="mt-0.5 h-4 w-4 flex-shrink-0 accent-violet-700"
								required
								type="checkbox"
							/>
							<span className="text-gray-700 text-sm">
								Privacy Policy &amp; Terms of Use Acknowledged{" "}
								<span className="text-red-500">*</span>
							</span>
						</label>
						<label className="flex cursor-pointer items-start gap-3">
							<input
								checked={marketingConsent}
								className="mt-0.5 h-4 w-4 flex-shrink-0 accent-violet-700"
								onChange={(e) => setMarketingConsent(e.target.checked)}
								type="checkbox"
							/>
							<span className="text-gray-700 text-sm">
								By checking this box, you grant PMI permission to contact you
								about your inquiry and send occasional offers and promotional
								emails. You can unsubscribe at any time.
							</span>
						</label>
						{/* reCAPTCHA mock */}
						<div className="flex justify-center">
							<div className="flex w-72 items-center justify-between rounded border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm">
								<label className="flex cursor-pointer items-center gap-3">
									<input className="h-5 w-5" type="checkbox" />
									<span className="text-gray-700 text-sm">I'm not a robot</span>
								</label>
								<div className="flex flex-col items-center gap-0.5">
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
									<svg
										className="h-10 w-10"
										fill="none"
										viewBox="0 0 48 48"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="24" cy="24" fill="#4A90D9" r="20" />
										<path
											d="M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S31.7 10 24 10zm0 4c2.2 0 4.2.7 5.9 1.8L14.8 29.9C13.7 28.2 13 26.2 13 24c0-6.1 4.9-11 11-11zm0 22c-2.2 0-4.2-.7-5.9-1.8l15.1-14.1c1.1 1.7 1.8 3.7 1.8 5.9 0 6.1-4.9 11-11 11z"
											fill="white"
										/>
									</svg>
									<span className="text-[9px] text-gray-400">reCAPTCHA</span>
								</div>
							</div>
						</div>
						<div className="text-center">
							<button
								className="inline-flex h-12 items-center justify-center rounded px-12 font-semibold text-white transition hover:opacity-90"
								style={{ background: "#2266e3", minWidth: 120 }}
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
					<div className="mt-10 h-px bg-gray-200" />
				</div>
			</div>

			{/* ── Why business leaders trust PMI + video ───────────────────── */}
			<div className="pb-0">
				<div className="py-12 text-center">
					<h2 className="mb-4 font-aeonik font-bold text-4xl text-gray-900 lg:text-5xl">
						Why business leaders trust PMI
					</h2>
					<p className="mx-auto max-w-2xl text-gray-500 text-lg leading-relaxed">
						See why business leaders rely on PMI standards, certifications and
						resources to strengthen how their teams deliver projects and
						strategic initiatives.
					</p>
				</div>
				{/* Video section */}
				<div
					className="relative w-full overflow-hidden"
					style={{ background: "#0a0415", minHeight: 480 }}
				>
					<div
						className="absolute inset-0 overflow-hidden"
						style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
					>
						<img
							alt="PMI video"
							className="h-full w-full object-cover object-center opacity-80"
							height={600}
							src="/images/business-solutions/pmp/b2b-landing-page_hero.png"
							width={800}
						/>
					</div>
					<div className="relative z-10 flex min-h-[480px] items-center justify-center">
						<button
							className="flex h-20 w-20 items-center justify-center rounded-full transition hover:scale-105"
							style={{ background: VIOLET }}
							type="button"
						>
							{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
							<svg fill="white" height="32" viewBox="0 0 24 24" width="32">
								<path d="M8 5v14l11-7z" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* ── #case-studies ────────────────────────────────────────────── */}
			<div id="case-studies" style={{ background: CREAM, scrollMarginTop: 80 }}>
				<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-aeonik font-bold text-4xl text-gray-900 lg:text-5xl">
							How organizations use PMP certifications and partnerships
						</h2>
						<p className="text-gray-500 text-lg">
							See how leading organizations use PMI standards and PMP
							certification to strengthen delivery.
						</p>
					</div>
					<div className="space-y-0 divide-y divide-gray-200">
						{CASE_STUDIES.map((cs) => (
							<div
								className="grid grid-cols-1 items-start gap-8 py-10 lg:grid-cols-3"
								key={cs.title}
							>
								<h3 className="font-bold text-gray-900 text-xl leading-snug">
									{cs.title}
								</h3>
								<div>
									<p className="mb-4 text-gray-600 text-sm leading-relaxed">
										{cs.body}
									</p>
								</div>
								{cs.img ? (
									<div className="overflow-hidden rounded-xl">
										<img
											alt={cs.title}
											className="h-40 w-full object-cover"
											height={160}
											src={cs.img}
											width={800}
										/>
									</div>
								) : (
									<div
										className="flex h-40 items-start justify-start overflow-hidden rounded-xl p-4"
										style={{ background: cs.imgBg }}
									>
										<p className="whitespace-pre-line font-semibold text-white/90 text-xs leading-5">
											{cs.imgText}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Learn more ───────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
				<h2 className="mb-10 text-center font-aeonik font-bold text-3xl text-gray-900 lg:text-4xl">
					Learn more about building project capability
				</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
					{LEARN_MORE.map((card) => (
						<div className="flex flex-col" key={card.title}>
							<div className="mb-4 overflow-hidden rounded-xl">
								<img
									alt={card.title}
									className="h-48 w-full object-cover"
									height={192}
									src={card.img}
									width={800}
								/>
							</div>
							<h3 className="mb-2 font-bold text-base text-gray-900 leading-snug">
								{card.title}
							</h3>
							<p className="mb-3 flex-1 text-gray-600 text-sm leading-relaxed">
								{card.body}
							</p>
							<Link
								className="inline-flex items-center gap-1 font-semibold text-gray-900 text-sm hover:underline"
								resetScroll
								to={card.href}
							>
								Learn More
								{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
								<svg
									fill="none"
									height="16"
									stroke="currentColor"
									strokeWidth="2"
									viewBox="0 0 24 24"
									width="16"
								>
									<path d="M9 18l6-6-6-6" />
								</svg>
							</Link>
						</div>
					))}
				</div>
				<div className="mt-16 h-px bg-gray-200" />
			</div>

			{/* ── Footnote ─────────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-4 pb-12">
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-[200px_1fr]">
					<h3 className="font-bold text-gray-900 text-lg">Footnote</h3>
					<p className="text-gray-600 text-sm">
						Gallup,{" "}
						<span className="underline">State of the Global Workplace</span>.
					</p>
				</div>
			</div>
		</main>
	);
}
