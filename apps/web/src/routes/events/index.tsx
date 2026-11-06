import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/events/")({
	component: RouteComponent,
});

const HD = "#1a2c5b"; // heading dark
const HERO_BG = "#0c1e3c";
const WHY_BG = "#2a1750";
const CREAM = "#f5f0ea";

const PAGE_TABS = [
	{ id: "upcoming-events", label: "Upcoming Events" },
	{ id: "why-attend", label: "Why Attend" },
	{ id: "what-you-missed", label: "What You Missed" },
	{ id: "get-involved", label: "Get Involved" },
	{ id: "pmi-instructor-led-training", label: "PMI Instructor-Led Training" },
];

const UPCOMING = [
	{
		slug: "gs-seoul",
		img: "/images/events/gs-seoul.jpg",
		alt: "Global Summit Seoul",
		title: "PMI® Global Summit Series Seoul",
		date: "10–11 June 2026",
		href: "/events/gs-seoul",
	},
	{
		slug: "agile-2026",
		img: "/images/events/agile-2026.jpg",
		alt: "Agile 2026",
		title: "PMI® Agile 2026",
		date: "26–28 July 2026 | National Harbor, MD, USA",
		href: "/events/agile-2026",
	},
	{
		slug: "gs-capetown",
		img: "/images/events/gs-capetown.jpg",
		alt: "Global Summit Cape Town",
		title: "PMI® Global Summit Series Cape Town",
		date: "14–15 September 2026",
		href: "/events/gs-capetown",
	},
	{
		slug: "gs-detroit",
		img: "/images/events/gs-detroit.jpg",
		alt: "Global Summit Detroit",
		title: "PMI® Global Summit 2026",
		date: "October 21–24, 2026 | Detroit, MI, USA",
		href: "/events/gs-detroit",
	},
];

const TRAINING = [
	{
		date: "20–23 July 2026, Virtual Training",
		img: "/images/events/training/virtual.jpg",
	},
	{
		date: "29–30 July, National Harbor, MD",
		img: "/images/events/training/national-harbor.jpg",
	},
	{
		date: "3–6 August 2026, San Diego",
		img: "/images/events/training/san-diego.jpg",
	},
	{
		date: "14–30 August 2026, August Virtual: AI and Project Management",
		img: "/images/events/training/ai-virtual.jpg",
	},
	{
		date: "25–26 August 2026, Newtown Square, PA",
		img: "/images/events/training/newtown-meeting.jpg",
	},
	{
		date: "12–13 September 2026, Cape Town",
		img: "/images/events/training/cape-town.jpg",
	},
	{
		date: "14–17 September 2026, Denver",
		img: "/images/events/training/denver.jpg",
	},
	{
		date: "28–29 September 2026, Newtown Square, PA",
		img: "/images/events/training/classroom.jpg",
	},
	{
		date: "20–21 October 2026, Detroit",
		img: "/images/events/training/detroit.jpg",
	},
	{
		date: "26–29 October 2026, Washington DC",
		img: "/images/events/training/washington-dc.jpg",
	},
	{
		date: "16–19 November 2026, Virtual Training",
		img: "/images/events/training/virtual-2.jpg",
	},
	{
		date: "2–3 December 2026, December Virtual: AI and Project Management",
		img: "/images/events/training/dec-virtual.jpg",
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

function SectionTitle({
	children,
	light = false,
}: {
	children: React.ReactNode;
	light?: boolean;
}) {
	return (
		<h2
			className="mb-4 text-center font-aeonik font-medium text-3xl lg:text-4xl"
			style={{ color: light ? "white" : HD }}
		>
			{children}
		</h2>
	);
}

function RouteComponent() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoPlaying, setVideoPlaying] = useState(false);
	const [activeTab, setActiveTab] = useState("upcoming-events");
	const [trainingPage, setTrainingPage] = useState(0);

	const TRAINING_PER_PAGE = 6;
	const totalPages = Math.ceil(TRAINING.length / TRAINING_PER_PAGE);
	const visibleTraining = TRAINING.slice(
		trainingPage * TRAINING_PER_PAGE,
		(trainingPage + 1) * TRAINING_PER_PAGE
	);

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

	function startVideo() {
		setVideoPlaying(true);
		videoRef.current?.play();
	}

	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<div className="w-full" style={{ background: HERO_BG }}>
				<div className="mx-auto grid max-w-screen-xl items-center gap-14 px-4 pt-24 pb-20 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<img
							alt="Events hero"
							className="w-full max-w-[450px]"
							height={450}
							loading="lazy"
							src="/images/events/events-hero.png"
							width={450}
						/>
					</div>
					<div className="flex flex-col items-start justify-center lg:col-span-7">
						<nav aria-label="Breadcrumb" className="mb-6">
							<ol className="flex items-center gap-2 font-aeonik text-sm text-white/60">
								<li>
									<Link className="hover:text-white" to="/">
										Home
									</Link>
								</li>
								<li aria-hidden="true" className="text-white/40">
									/
								</li>
								<li className="text-white/80">Attend Events</li>
							</ol>
						</nav>
						<h1 className="mb-6 font-aeonik font-medium text-4xl text-white leading-tight lg:text-5xl">
							Join us at PMI events around the world
						</h1>
						<p className="font-aeonik text-lg text-white/70 leading-7">
							PMI events provide you with the skills, resources, and knowledge
							necessary to maximize project success. Join us to transform your
							project management journey and impact the world.
						</p>
					</div>
				</div>
			</div>

			{/* ── Light content ────────────────────────────────────────────── */}
			<div
				className="relative w-full overflow-hidden bg-white"
				style={{ borderRadius: "24px 24px 0 0", marginTop: "-24px" }}
			>
				{/* ── Sticky page nav ─────────────────────────────────────────── */}
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

				{/* ── Upcoming Events ──────────────────────────────────────────── */}
				<div
					className="scroll-mt-20 pt-14 pb-0"
					id="upcoming-events"
					style={{ scrollMarginTop: "80px" }}
				>
					<div className="mx-auto max-w-screen-xl px-4 pb-6 text-center">
						<SectionTitle>Upcoming Global Events</SectionTitle>
						<p className="mx-auto max-w-2xl font-aeonik text-base text-gray-600 leading-7">
							Connect with Project Professionals worldwide, expand your
							knowledge, sharpen your skills, and build lasting relationships
							while discovering how maximizing project success can elevate our
							world. Explore a variety of events designed to inspire and elevate
							your project success.
						</p>
					</div>

					{/* 3-col event cards */}
					<div className="mx-auto max-w-screen-xl px-4 pb-14">
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{UPCOMING.map((ev) => (
								<div className="flex flex-col" key={ev.slug}>
									<div
										className="mb-6 overflow-hidden rounded-xl"
										style={{ aspectRatio: "16/9" }}
									>
										<img
											alt={ev.alt}
											className="h-full w-full object-cover"
											height={900}
											loading="lazy"
											src={ev.img}
											width={1600}
										/>
									</div>
									<h3
										className="mb-4 font-aeonik font-medium text-2xl leading-7"
										style={{ color: HD }}
									>
										{ev.title}
									</h3>
									<p className="mb-4 font-aeonik text-base text-gray-600">
										{ev.date}
									</p>
									<Link
										className="mt-auto inline-flex items-center gap-0.5 font-aeonik font-medium text-lg hover:underline"
										resetScroll
										style={{ color: HD }}
										to={ev.href}
									>
										Register Now {CHEVRON_R}
									</Link>
								</div>
							))}
						</div>
					</div>

					{/* Video */}
					<div className="mx-auto max-w-screen-xl px-4 pb-14">
						<div
							className="relative overflow-hidden rounded-xl shadow-xl"
							style={{ minHeight: "400px" }}
						>
							{!videoPlaying && (
								<button
									className="absolute inset-0 z-10 h-full w-full"
									onClick={startVideo}
									type="button"
								>
									<img
										alt="PMI PMXPO Video"
										className="h-full w-full object-cover"
										height={400}
										src="/images/events/pmxpo/video-cover.webp"
										width={800}
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<div
											className="flex h-20 w-20 items-center justify-center rounded-full transition hover:scale-110"
											style={{ background: "rgba(79,23,168,0.85)" }}
										>
											<svg
												aria-hidden={true}
												className="ml-1"
												fill="white"
												height="30"
												viewBox="0 0 24 24"
												width="30"
											>
												<path d="M8 5v14l11-7z" />
											</svg>
										</div>
									</div>
								</button>
							)}
							<video
								className="h-full w-full object-cover"
								controls={videoPlaying}
								poster="/images/events/pmxpo/video-thumbnail.jpg"
								preload="metadata"
								ref={videoRef}
								style={{ display: "block", minHeight: "400px" }}
							>
								<source
									src="/images/events/pmxpo/pmxpo-2026.mp4"
									type="video/mp4"
								/>
								<track default kind="captions" label="English" src="" />
							</video>
						</div>
					</div>

					{/* PMXPO Featured row */}
					<div className="border-gray-100 border-t">
						<div className="mx-auto max-w-screen-xl px-4 py-16">
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h2
									className="font-aeonik font-medium text-3xl lg:text-4xl"
									style={{ color: HD }}
								>
									PMXPO™ 2026
								</h2>
								<div>
									<p className="mb-3 font-aeonik font-semibold text-gray-500 text-lg">
										On-Demand Virtual Event&nbsp;&nbsp;|&nbsp;&nbsp;12 PDUs
									</p>
									<p className="mb-8 font-aeonik text-base text-gray-600 leading-7">
										PMXPO is the world's premier free virtual event for Project
										Professionals and those exploring the field. Register for
										the on-demand experience to build skills, earn PDUs, and
										impact your projects.
									</p>
									<Link
										className="inline-flex h-12 items-center gap-2 rounded-full px-8 font-aeonik font-semibold text-base text-white transition hover:opacity-90"
										style={{ background: HD }}
										to={"/events/pmxpo" as never}
									>
										Learn More
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Bring your team */}
					<div style={{ background: CREAM }}>
						<div className="mx-auto max-w-screen-xl px-4 py-16">
							<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h2
									className="font-aeonik font-medium text-3xl lg:text-4xl"
									style={{ color: HD }}
								>
									Bring your team and grow together
								</h2>
								<div>
									<p className="mb-2 font-aeonik text-base text-gray-700 leading-7">
										Save with group registration for 10 or more team members.
									</p>
									<p className="mb-8 font-aeonik text-gray-500 text-sm italic">
										Note: PMI chapters are not eligible for group discount
										rates.
									</p>
									<Link
										className="inline-flex h-12 items-center gap-2 rounded-full border-2 px-8 font-aeonik font-semibold text-base transition hover:bg-white/40"
										resetScroll
										style={{ borderColor: HD, color: HD }}
										to="/events/events-group-registration"
									>
										Register Your Team {ARROW_R}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── Why Attend ──────────────────────────────────────────────── */}
				<div
					className="scroll-mt-20"
					id="why-attend"
					style={{ scrollMarginTop: "80px", background: WHY_BG }}
				>
					<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
						<SectionTitle light>Why attend PMI Events?</SectionTitle>
						<div className="mt-10 grid grid-cols-1 divide-y divide-white/20 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
							{[
								{
									title: "Connect Globally",
									body: "Meet Project Professionals from around the world, share experiences and build relationships that strengthen your career.",
								},
								{
									title: "Expand Your Expertise",
									body: "Expand your knowledge and sharpen your skills through events designed to inspire and elevate your project success.",
								},
								{
									title: "Lead with Purpose",
									body: "Discover how maximizing project success can drive meaningful impact for your teams, your organization, and the world.",
								},
							].map((item) => (
								<div className="px-8 py-8 lg:py-0" key={item.title}>
									<h3 className="mb-4 font-aeonik font-medium text-2xl text-white">
										{item.title}
									</h3>
									<p className="font-aeonik text-base text-white/70 leading-7">
										{item.body}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* ── What You Missed ─────────────────────────────────────────── */}
				<div
					className="scroll-mt-20 bg-white"
					id="what-you-missed"
					style={{ scrollMarginTop: "80px" }}
				>
					<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
						<div className="mb-12 text-center">
							<SectionTitle>What You Missed</SectionTitle>
							<p className="mx-auto max-w-2xl font-aeonik text-base text-gray-600 leading-7">
								Missed a live PMI event? Access on demand sessions and recaps to
								stay connected to the insights, conversations, and takeaways
								shaping the project profession.
							</p>
						</div>
						{/* Summit 2025 card */}
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_4fr_3fr] lg:gap-10">
							<div>
								<h3
									className="mb-4 font-aeonik font-medium text-2xl"
									style={{ color: HD }}
								>
									PMI Global Summit 2025
								</h3>
								<p className="mb-6 font-aeonik text-base text-gray-600 leading-7">
									Explore highlights and key takeaways from our signature global
									event, where Project Professionals from around the world came
									together to learn and connect.
								</p>
								<a
									className="inline-flex items-center gap-1 font-aeonik font-semibold text-base hover:underline"
									href="/events"
									rel="noreferrer"
									style={{ color: HD }}
									target="_blank"
								>
									Explore Event Highlights {CHEVRON_R}
								</a>
							</div>
							<div />
							<div
								className="overflow-hidden rounded-xl"
								style={{ aspectRatio: "4/3" }}
							>
								<img
									alt="PMI Global Summit 2025"
									className="h-full w-full object-cover"
									height={300}
									loading="lazy"
									src="/images/events/summit-2025.jpg"
									width={400}
								/>
							</div>
						</div>
					</div>
				</div>

				{/* ── Get Involved ─────────────────────────────────────────────── */}
				<div
					className="scroll-mt-20"
					id="get-involved"
					style={{ scrollMarginTop: "80px", background: CREAM }}
				>
					<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
						<div className="mb-12 text-center">
							<SectionTitle>Get Involved</SectionTitle>
							<p className="mx-auto max-w-xl font-aeonik text-base text-gray-600 leading-7">
								Discover opportunities to engage with PMI events beyond
								attending and make a meaningful impact.
							</p>
						</div>
						<div className="space-y-0 divide-y divide-gray-200">
							{/* Sponsorship */}
							<div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h3
									className="font-aeonik font-medium text-2xl lg:text-3xl"
									style={{ color: HD }}
								>
									Event Sponsorship Opportunities
								</h3>
								<div>
									<p className="mb-8 font-aeonik text-base text-gray-600 leading-7">
										Get direct access to more than 120,000 highly-engaged
										Project Professionals at PMI global events.
									</p>
									<Link
										className="inline-flex h-12 items-center gap-2 rounded-full border-2 px-8 font-aeonik font-semibold text-base transition hover:bg-white/60"
										resetScroll
										style={{ borderColor: HD, color: HD }}
										to="/contact"
									>
										View Sponsorship Opportunities {ARROW_R}
									</Link>
								</div>
							</div>
							{/* Speaking */}
							<div className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
								<h3
									className="font-aeonik font-medium text-2xl lg:text-3xl"
									style={{ color: HD }}
								>
									Interested in speaking at a PMI event?
								</h3>
								<div>
									<p className="mb-8 font-aeonik text-base text-gray-600 leading-7">
										Submit your topic/talk to our ongoing call for presentations
										for consideration for various PMI events.
									</p>
									<Link
										className="inline-flex h-12 items-center gap-2 rounded-full border-2 px-8 font-aeonik font-semibold text-base transition hover:bg-white/60"
										style={{ borderColor: HD, color: HD }}
										to={"/events/speaking-opportunities" as never}
									>
										Submit Your Idea {ARROW_R}
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ── PMI Instructor-Led Training ──────────────────────────────── */}
				<div
					className="scroll-mt-20 bg-white"
					id="pmi-instructor-led-training"
					style={{ scrollMarginTop: "80px" }}
				>
					<div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-20">
						<div className="mb-12 text-center">
							<SectionTitle>PMI Instructor-Led Training</SectionTitle>
							<p className="mx-auto mb-8 max-w-2xl font-aeonik text-base text-gray-600 leading-7">
								Advance your career with expert-led courses that help you boost
								leadership skills and enhance project management capabilities.
								Our trainings, created by project management experts, are
								available in-person and virtually.
							</p>
							<Link
								className="inline-flex h-12 items-center gap-2 rounded-full border-2 px-8 font-aeonik font-semibold text-base transition hover:bg-gray-50"
								resetScroll
								style={{ borderColor: HD, color: HD }}
								to="/learning/pmi-training"
							>
								Learn About PMI Training {ARROW_R}
							</Link>
						</div>

						{/* Training cards */}
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
							{visibleTraining.map((item) => (
								<div className="flex flex-col" key={item.date}>
									<div
										className="mb-5 overflow-hidden rounded-xl"
										style={{ aspectRatio: "16/9" }}
									>
										<img
											alt={item.date}
											className="h-full w-full object-cover"
											height={900}
											loading="lazy"
											src={item.img}
											width={1600}
										/>
									</div>
									<h3
										className="mb-3 font-aeonik font-medium text-xl leading-6"
										style={{ color: HD }}
									>
										{item.date}
									</h3>
								</div>
							))}
						</div>

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="mt-12 flex items-center justify-center gap-1">
								<button
									className="flex h-9 w-9 items-center justify-center rounded-full border text-sm disabled:opacity-30"
									disabled={trainingPage === 0}
									onClick={() => setTrainingPage(0)}
									type="button"
								>
									«
								</button>
								<button
									className="flex h-9 w-9 items-center justify-center rounded-full border text-sm disabled:opacity-30"
									disabled={trainingPage === 0}
									onClick={() => setTrainingPage((p) => p - 1)}
									type="button"
								>
									‹
								</button>
								{Array.from({ length: totalPages }, (_, i) => (
									<button
										className="flex h-9 w-9 items-center justify-center rounded-full border text-sm transition"
										// biome-ignore lint/suspicious/noArrayIndexKey: pagination buttons keyed by page index
										key={i}
										onClick={() => setTrainingPage(i)}
										style={
											trainingPage === i
												? { background: HD, color: "white", borderColor: HD }
												: { color: HD }
										}
										type="button"
									>
										{i + 1}
									</button>
								))}
								<button
									className="flex h-9 w-9 items-center justify-center rounded-full border text-sm disabled:opacity-30"
									disabled={trainingPage === totalPages - 1}
									onClick={() => setTrainingPage((p) => p + 1)}
									type="button"
								>
									›
								</button>
								<button
									className="flex h-9 w-9 items-center justify-center rounded-full border text-sm disabled:opacity-30"
									disabled={trainingPage === totalPages - 1}
									onClick={() => setTrainingPage(totalPages - 1)}
									type="button"
								>
									»
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
