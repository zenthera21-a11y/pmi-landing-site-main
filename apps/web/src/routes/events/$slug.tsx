import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/events/$slug")({
	component: RouteComponent,
});

/* ── Design tokens ────────────────────────────────────────────────── */

const PMI_NAV_BG = "#2a1750";
const HEADING_DARK = "#1a2c5b";
const CYAN = "#05bfe0";

/* ── PMxpo data ───────────────────────────────────────────────────── */
const PMXPO_TESTIMONIALS = [
	{
		quote:
			"Attending PMXPO was an enriching experience. The keynote presentations offered valuable insights into the future of project management, while the breakout sessions provided practical knowledge I could immediately apply to my work. Connecting with professionals from around the globe was another highlight that made the experience especially meaningful.",
		attribution: "Previous Attendee",
	},
	{
		quote:
			"PMXPO transformed the way I approach project challenges. The sessions were incredibly insightful and the speakers were world-class. I left with actionable strategies and a renewed sense of purpose in my career.",
		attribution: "Previous Attendee",
	},
	{
		quote:
			"As a PMI member, PMXPO is always a highlight of my year. The networking opportunities alone make it worthwhile, and the PDUs I earn help me maintain my certification without any hassle.",
		attribution: "Previous Attendee",
	},
	{
		quote:
			"The diversity of topics covered at PMXPO is unmatched. From AI and digital transformation to agile leadership, every session was relevant and forward-thinking. I highly recommend it to any project professional.",
		attribution: "Previous Attendee",
	},
];

const PMXPO_FAQS = [
	{
		q: "Is PMxpo free to attend?",
		a: "PMxpo is free for all PMI members. Non-members can purchase access at a discounted rate. Membership also unlocks on-demand access to all session recordings after the event.",
	},
	{
		q: "How many PDUs can I earn?",
		a: "Attendees can earn up to 12 Professional Development Units (PDUs) across all tracks. PDUs are automatically credited to your PMI account after each session you attend.",
	},
	{
		q: "Will sessions be available on demand?",
		a: "Yes. All live sessions are recorded and made available on-demand. PMI members retain access through 29 Jan 2027.",
	},
	{
		q: "What time zone are sessions in?",
		a: "Session times are displayed in your local time zone. Live sessions run across multiple time zones to accommodate our global audience.",
	},
	{
		q: "Can I earn a digital badge for attending?",
		a: "Yes. Participants who complete a minimum number of sessions receive an official PMxpo 2026 digital badge, shareable on LinkedIn and other platforms.",
	},
];

/* ── Helpers ──────────────────────────────────────────────────────── */
function FaqItem({ q, a, light }: { q: string; a: string; light?: boolean }) {
	const [open, setOpen] = useState(false);
	const borderColor = light ? "border-gray-200" : "border-white/10";
	const headingColor = light ? HEADING_DARK : "white";
	const bodyColor = light ? "text-gray-600" : "text-white/75";
	return (
		<div className={`overflow-hidden border-b ${borderColor} last:border-b-0`}>
			<button
				aria-expanded={open}
				className="flex w-full items-center justify-between py-5 text-left"
				onClick={() => setOpen((v) => !v)}
				type="button"
			>
				<span
					className="font-aeonik font-medium text-base"
					style={{ color: headingColor }}
				>
					{q}
				</span>
				<span
					className={`ml-4 flex-shrink-0 text-xl leading-none ${light ? "text-gray-400" : "text-white/40"}`}
				>
					{open ? "−" : "+"}
				</span>
			</button>
			{open && (
				<div className="pb-5">
					<p className={`font-aeonik text-sm leading-7 ${bodyColor}`}>{a}</p>
				</div>
			)}
		</div>
	);
}

/* ── Testimonials Carousel ────────────────────────────────────────── */
function TestimonialsCarousel() {
	const [idx, setIdx] = useState(0);
	const count = PMXPO_TESTIMONIALS.length;
	const t = PMXPO_TESTIMONIALS[idx];

	return (
		<div>
			<div className="relative min-h-[220px]">
				<blockquote
					className="font-aeonik text-2xl leading-relaxed lg:text-3xl"
					style={{ color: HEADING_DARK }}
				>
					&ldquo;{t.quote}&rdquo;
				</blockquote>
				<p className="mt-4 font-aeonik text-sm" style={{ color: "#6b7a9a" }}>
					{t.attribution}
				</p>
			</div>
			{/* Nav row */}
			<div className="mt-8 flex items-center justify-between border-gray-200 border-t pt-5">
				<ul className="flex items-center gap-2">
					{PMXPO_TESTIMONIALS.map((_, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: pagination dots keyed by position
						<li key={i}>
							<button
								className="block rounded-full transition-all duration-300"
								onClick={() => setIdx(i)}
								style={{
									height: "4px",
									width: i === idx ? "36px" : "4px",
									background: i === idx ? HEADING_DARK : "#d1d5db",
								}}
								type="button"
							/>
						</li>
					))}
				</ul>
				<div className="flex gap-3">
					<button
						aria-label="Previous testimonial"
						className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 disabled:opacity-30"
						disabled={idx === 0}
						onClick={() => setIdx((p) => p - 1)}
						type="button"
					>
						<svg
							aria-hidden={true}
							fill="none"
							height="16"
							viewBox="0 0 32 32"
							width="16"
						>
							<path
								d="M2.99305 16L11.8789 6.00348L14.1211 7.99657L8.34027 14.5H28V17.5H8.34023L14.1211 24.0035L11.8789 25.9966L2.99305 16Z"
								fill="currentColor"
							/>
						</svg>
					</button>
					<button
						aria-label="Next testimonial"
						className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition hover:bg-gray-100 disabled:opacity-30"
						disabled={idx === count - 1}
						onClick={() => setIdx((p) => p + 1)}
						type="button"
					>
						<svg
							aria-hidden={true}
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
					</button>
				</div>
			</div>
		</div>
	);
}

/* ── Sticky Tabs ──────────────────────────────────────────────────── */
const TABS = [
	{ id: "registration", label: "Registration" },
	{ id: "agenda", label: "2026 Agenda & Speakers" },
	{ id: "why-attend", label: "Why Attend?" },
];

function StickyTabs() {
	const [active, setActive] = useState("registration");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -55% 0px", threshold: 0 }
		);
		for (const tab of TABS) {
			const el = document.getElementById(tab.id);
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
		<div className="sticky top-0 z-20 w-full border-gray-200 border-b bg-white">
			<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
				<div className="flex gap-8 overflow-x-auto">
					{TABS.map((tab) => (
						<button
							className="flex-shrink-0 border-b-2 py-4 font-aeonik text-sm transition"
							key={tab.id}
							onClick={() => scrollTo(tab.id)}
							style={{
								borderColor: active === tab.id ? HEADING_DARK : "transparent",
								color: active === tab.id ? HEADING_DARK : "#6b7a9a",
								fontWeight: active === tab.id ? 700 : 400,
							}}
							type="button"
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

/* ── PMxpo page ───────────────────────────────────────────────────── */
function PmxpoPage() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [videoPlaying, setVideoPlaying] = useState(false);

	function startVideo() {
		setVideoPlaying(true);
		videoRef.current?.play();
	}

	return (
		<main className="overflow-x-hidden bg-white" id="main-layout">
			{/* ── Hero ── */}
			<div
				className="relative w-full overflow-hidden"
				style={{
					background:
						"linear-gradient(160deg, #0c1e4a 0%, #0d2d6a 35%, #1a4a7a 65%, #0d3a5a 100%)",
					minHeight: "520px",
				}}
			>
				{/* Vertical stripe overlay */}
				<div
					className="absolute inset-0 opacity-30"
					style={{
						backgroundImage:
							"repeating-linear-gradient(90deg, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 58px, rgba(255,255,255,0.04) 58px, rgba(255,255,255,0.04) 60px)",
					}}
				/>
				{/* Soft radial glow right */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse 60% 80% at 80% 50%, rgba(100,180,160,0.18) 0%, transparent 70%)",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-screen-xl px-6 pt-6 lg:px-4">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-white/70 hover:text-white"
									render={<Link to="/" />}
								>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-white/40" />
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-white/70 hover:text-white"
									render={<Link to="/events" />}
								>
									Attend Events
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-white/40" />
							<BreadcrumbItem>
								<BreadcrumbPage className="font-medium text-white">
									PMXPO
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>

				<div className="relative z-10 mx-auto max-w-3xl px-6 pt-12 pb-20 text-center lg:px-4 lg:pt-16 lg:pb-24">
					<h1 className="mb-4 font-aeonik font-bold text-4xl text-white sm:text-5xl lg:text-6xl">
						Register for PMXPO&#8482; 2026 On-Demand
					</h1>
					<p
						className="mb-6 font-aeonik font-medium text-xl sm:text-2xl"
						style={{ color: CYAN }}
					>
						Step up. Grow through collective learning.
					</p>
					<p className="mb-4 font-aeonik text-base text-white/80">
						On-Demand Virtual Event through 29 Jan 2027 &nbsp;|&nbsp; 12 PDUs
					</p>
					<p className="mx-auto mb-10 max-w-2xl font-aeonik text-base text-white/75 leading-7">
						PMXPO is the premier, free virtual experience for Project
						Professionals—not just to learn and build skills, but to step up.
						Step up your skills and knowledge. Step up the profession. And
						ultimately, step up to meet the demands of an ever-changing world.
					</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							className="inline-flex h-12 items-center rounded-full bg-white px-8 font-aeonik font-semibold text-base transition hover:bg-white/90"
							href="/contact"
							style={{ color: HEADING_DARK }}
						>
							Register Now for Free
						</a>
						<a
							className="inline-flex h-12 items-center gap-2 rounded-full border border-white/40 px-8 font-aeonik font-semibold text-base text-white transition hover:bg-white/10"
							href="#registration"
						>
							Registered? Access Now
							<svg
								aria-hidden={true}
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
						</a>
					</div>
				</div>
			</div>
			{/* ── Sticky tabs ── */}
			<StickyTabs />
			{/* ══ REGISTRATION SECTION ══════════════════════════════════════════ */}
			<div className="scroll-mt-12 bg-white" id="registration">
				{/* Text row — 2 columns */}
				<div className="mx-auto max-w-screen-xl px-6 pt-16 pb-10 lg:px-4 lg:pt-20">
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "5fr 7fr",
							gap: "4rem",
						}}
					>
						<h2
							className="font-aeonik font-bold text-3xl leading-snug lg:text-4xl"
							style={{ color: HEADING_DARK }}
						>
							Step up with PMXPO 2026
						</h2>
						<div>
							<h3
								className="mb-3 font-aeonik font-semibold text-lg"
								style={{ color: CYAN }}
							>
								Couldn&rsquo;t join us for the live experience?
							</h3>
							<p className="font-aeonik text-base text-gray-600 leading-7">
								Register for on-demand access to the world&rsquo;s premier free
								virtual event for Project Professionals and those exploring the
								field.
							</p>
						</div>
					</div>
				</div>

				{/* Video — large, below text, indented left, rounded left corners, bleeds right */}
				<div className="pb-16" style={{ paddingLeft: "14%" }}>
					<div
						className="relative overflow-hidden"
						style={{ borderRadius: "40px 0 0 40px", minHeight: "520px" }}
					>
						{!videoPlaying && (
							<button
								className="absolute inset-0 z-10 h-full w-full"
								onClick={startVideo}
								type="button"
							>
								<img
									alt="PMXPO 2026 — watch on-demand"
									className="h-full w-full object-cover"
									height={520}
									src="/images/events/pmxpo/video-cover.webp"
									width={1200}
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
							style={{ display: "block", minHeight: "520px" }}
						>
							<source
								src="/images/events/pmxpo/pmxpo-2026.mp4"
								type="video/mp4"
							/>
							<track default kind="captions" label="English" src="" />
						</video>
					</div>
				</div>

				{/* Built for global access */}
				<div className="border-gray-100 border-t bg-white">
					<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-bold text-3xl leading-snug lg:text-4xl"
								style={{ color: HEADING_DARK }}
							>
								Built for global access and connection
							</h2>
							<p className="font-aeonik text-base text-gray-600 leading-7">
								PMXPO 2026 takes place on a fully virtual platform designed for
								accessibility and inclusion. The experience supports screen
								readers, keyboard navigation, and customizable display options
								to accommodate diverse needs.
							</p>
						</div>
					</div>
				</div>

				{/* Register today for free */}
				<div className="border-gray-100 border-t bg-white">
					<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
						<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2
								className="font-aeonik font-bold text-4xl leading-tight lg:text-5xl"
								style={{ color: HEADING_DARK }}
							>
								Register today, for free!
							</h2>
							<div>
								<p
									className="mb-4 font-aeonik font-semibold text-lg leading-snug"
									style={{ color: CYAN }}
								>
									Access a full day of learning and engagement on-demand.
								</p>
								<p className="mb-4 font-aeonik font-semibold text-base text-gray-800">
									Including access to:
								</p>
								<ul className="mb-8 space-y-2">
									{[
										"Featured Mainstage Theater Sessions",
										"Breakout Theater Sessions",
										"Bonus Theater Sessions",
									].map((item) => (
										<li
											className="flex items-start gap-2 font-aeonik text-base text-gray-600"
											key={item}
										>
											<span className="mt-1 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
											{item}
										</li>
									))}
								</ul>
								<a
									className="inline-flex h-11 items-center gap-2 rounded-full border border-gray-800 px-6 font-aeonik font-semibold text-sm transition hover:bg-gray-50"
									href="/contact"
									style={{ color: HEADING_DARK }}
								>
									Register for PMXPO 2026
									<svg
										aria-hidden={true}
										fill="none"
										height="14"
										viewBox="0 0 32 32"
										width="14"
									>
										<path
											d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z"
											fill="currentColor"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* ══ AGENDA SECTION ════════════════════════════════════════════════ */}
			<div className="scroll-mt-12 bg-white" id="agenda">
				{/* Explore Topics banner */}
				<div className="mx-auto max-w-screen-xl px-6 pb-6 lg:px-4">
					<div
						className="relative overflow-hidden rounded-3xl"
						style={{ minHeight: "220px" }}
					>
						{/* Background image */}
						<img
							alt="PMXPO 2026 conference session"
							className="absolute inset-0 h-full w-full object-cover"
							height={220}
							src="/images/events/pmxpo/explore-topics.jpg"
							width={900}
						/>
						{/* Dark overlay so text is readable */}
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(90deg, rgba(13,26,74,0.92) 0%, rgba(13,26,74,0.7) 50%, rgba(13,26,74,0.2) 100%)",
							}}
						/>
						<div className="relative z-10 flex flex-col justify-center gap-4 p-8 sm:p-12 lg:max-w-md">
							<h2 className="font-aeonik font-bold text-3xl text-white sm:text-4xl">
								Explore the Topics
							</h2>
							<p className="font-aeonik font-semibold text-white/80 text-xl">
								for PMXPO 2026
							</p>
							<a
								className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2.5 font-aeonik font-semibold text-sm transition hover:bg-white/90"
								href="/contact"
								style={{ color: HEADING_DARK }}
							>
								Explore Agenda
								<svg
									aria-hidden={true}
									fill="none"
									height="14"
									viewBox="0 0 32 32"
									width="14"
								>
									<path
										d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z"
										fill="currentColor"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Meet the Speakers banner */}
				<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4 lg:pb-20">
					<div
						className="relative overflow-hidden rounded-3xl"
						style={{ minHeight: "220px" }}
					>
						<img
							alt="PMXPO featured speakers on stage"
							className="absolute inset-0 h-full w-full object-cover"
							height={220}
							src="/images/events/pmxpo/meet-speakers.jpg"
							width={900}
						/>
						<div
							className="absolute inset-0"
							style={{
								background:
									"linear-gradient(90deg, rgba(26,10,64,0.92) 0%, rgba(26,10,64,0.7) 50%, rgba(26,10,64,0.2) 100%)",
							}}
						/>
						<div className="relative z-10 flex flex-col justify-center gap-4 p-8 sm:p-12 lg:max-w-md">
							<h2 className="font-aeonik font-bold text-3xl text-white sm:text-4xl">
								Meet the speakers
							</h2>
							<p className="font-aeonik text-base text-white/70">
								for PMXPO 2026
							</p>
							<a
								className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2.5 font-aeonik font-semibold text-sm transition hover:bg-white/90"
								href="/contact"
								style={{ color: HEADING_DARK }}
							>
								View All Speakers
								<svg
									aria-hidden={true}
									fill="none"
									height="14"
									viewBox="0 0 32 32"
									width="14"
								>
									<path
										d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z"
										fill="currentColor"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
			;
			{/* ══ WHY ATTEND ════════════════════════════════════════════════════ */}
			<div
				className="w-full scroll-mt-12"
				id="why-attend"
				style={{ background: PMI_NAV_BG }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
						<h2 className="font-aeonik font-bold text-3xl text-white leading-snug lg:text-4xl">
							Why attend PMXPO 2026?
						</h2>
						<div>
							{/* Why Attend photo */}
							<div className="mb-8 overflow-hidden rounded-2xl">
								<img
									alt="Project professionals collaborating in a meeting"
									className="h-[260px] w-full object-cover"
									height={260}
									loading="lazy"
									src="/images/events/pmxpo/why-attend.jpg"
									width={1280}
								/>
							</div>
							{/* Cyan italic subheading */}
							<p
								className="mb-6 font-aeonik text-lg leading-7"
								style={{ color: CYAN }}
							>
								<em>
									From seasoned project managers to emerging leaders, PMXPO 2026
									offers something for everyone.
								</em>
							</p>
							<p className="mb-8 font-aeonik text-base text-white/75 leading-7">
								PMXPO 2026 brings the global project community together for a
								shared day of learning, connection, and skill building. Designed
								for experienced professionals and those new to the field, the
								event offers practical insights that help Project Professionals
								step up their practice and expand their impact.
							</p>
							{/* Feature list */}
							<div className="space-y-0 divide-y divide-white/10">
								{[
									{
										icon: (
											<svg
												aria-hidden={true}
												fill="none"
												height="22"
												viewBox="0 0 24 24"
												width="22"
											>
												<path
													d="M3 3h18v4H3V3zm0 5h14v2H3V8zm0 3h18v2H3v-2zm0 3h10v2H3v-2z"
													fill="currentColor"
												/>
											</svg>
										),
										title: "Invaluable Insights",
										body: "Gain exclusive access to keynote speakers and expert panels featuring industry pioneers who share actionable insights and proven strategies.",
									},
									{
										icon: (
											<svg
												aria-hidden={true}
												fill="none"
												height="22"
												viewBox="0 0 24 24"
												width="22"
											>
												<path
													d="M4 6h16M4 10h16M4 14h12M4 18h8"
													stroke="currentColor"
													strokeLinecap="round"
													strokeWidth="2"
												/>
											</svg>
										),
										title: "Cutting-Edge Trends",
										body: "Stay updated on the latest project management methodologies, technologies, and trends to future-proof your career.",
									},
									{
										icon: (
											<svg
												aria-hidden={true}
												fill="none"
												height="22"
												viewBox="0 0 24 24"
												width="22"
											>
												<path
													d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
													stroke="currentColor"
													strokeLinecap="round"
													strokeWidth="2"
												/>
											</svg>
										),
										title: "Interactive Learning",
										body: "Participate in hands-on workshops, breakout sessions, and live demos tailored to enhance your skillset and address real-world challenges.",
									},
								].map((f) => (
									<div className="flex gap-4 py-5" key={f.title}>
										<div
											className="mt-0.5 flex-shrink-0"
											style={{ color: "white" }}
										>
											{f.icon}
										</div>
										<div>
											<p className="mb-1 font-aeonik font-semibold text-base text-white">
												{f.title}
											</p>
											<p className="font-aeonik text-sm text-white/65 leading-6">
												{f.body}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			;{/* ── Testimonials ── */}
			<div className="border-gray-100 border-t bg-white">
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<h2
						className="mb-12 font-aeonik font-bold text-2xl lg:text-3xl"
						style={{ color: HEADING_DARK }}
					>
						What past attendees are saying about PMXPO
					</h2>
					<TestimonialsCarousel />
				</div>
			</div>
			;{/* ── Ready to register CTA card ── */}
			<div className="bg-white pb-16 lg:pb-20">
				<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
					<div
						className="overflow-hidden rounded-3xl"
						style={{
							background:
								"linear-gradient(135deg, #0a1a4a 0%, #0d2d6a 40%, #1a4a5a 70%, #0d3a4a 100%)",
						}}
					>
						<div className="grid grid-cols-1 gap-8 p-8 sm:p-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
							<h2 className="font-aeonik font-bold text-3xl text-white leading-snug lg:text-4xl">
								Ready to register?
							</h2>
							<div>
								<p
									className="mb-3 font-aeonik font-semibold text-sm"
									style={{ color: CYAN }}
								>
									Free On-Demand Virtual Event | 12 PDUs
								</p>
								<p className="mb-6 font-aeonik font-semibold text-base text-white/90 leading-7">
									Experience the excitement and immerse yourself in everything
									this on-demand event has to offer. The event is free, but
									registration is required to access the content on-demand.
								</p>
								<a
									className="inline-flex h-11 items-center rounded-full bg-white px-8 font-aeonik font-semibold text-sm transition hover:bg-white/90"
									href="/contact"
									style={{ color: HEADING_DARK }}
								>
									Register Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			;{/* ── FAQ ── */}
			<div className="border-gray-100 border-t bg-white pb-20 lg:pb-28">
				<div className="mx-auto max-w-screen-xl px-6 pt-16 lg:px-4 lg:pt-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
						<div>
							<h2
								className="mb-4 font-aeonik font-bold text-3xl lg:text-4xl"
								style={{ color: HEADING_DARK }}
							>
								Have questions?
							</h2>
							<p className="font-aeonik text-base text-gray-500 leading-7">
								Most questions about PMXPO can be answered by checking our FAQ.
								Still need help?{" "}
								<a
									className="underline underline-offset-4 hover:opacity-70"
									href="/contact"
									style={{ color: HEADING_DARK }}
								>
									Contact us
								</a>
								.
							</p>
						</div>
						<div>
							{PMXPO_FAQS.map((f) => (
								<FaqItem a={f.a} key={f.q} light q={f.q} />
							))}
						</div>
					</div>
				</div>
			</div>
			;
		</main>
	);
}

/* ── Generic fallback ─────────────────────────────────────────────── */
function GenericEventPage() {
	return <Navigate replace to="/contact" />;
}

/* ── Router ───────────────────────────────────────────────────────── */
const SLUG_PAGES: Record<string, () => React.JSX.Element> = {
	pmxpo: PmxpoPage,
};

function RouteComponent() {
	const { slug } = Route.useParams();
	const Page = SLUG_PAGES[slug];
	if (Page) {
		return <Page />;
	}
	return <GenericEventPage />;
}
