import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/business-solutions/talent-management")({
	component: RouteComponent,
});

const INK = "#1f1646"; // --text-primary deep indigo
const BODY = "#4a4458"; // --text-secondary
const CREAM = "#f7f3ec"; // --surface-secondary
const CARD = "#f1ece3"; // feature card surface
const DARK_BTN = "#1c1330"; // --fill-off-black-darkest
const STATS_BG = "#2c1d57"; // dark purple stats banner
const STATS_ACCENT = "#a07cff"; // bright violet stat numbers

const JOB_SEARCH_URL = "/business-solutions/talent-management";

const TABS = [
	{ id: "about", label: "About the PMI Job Board" },
	{ id: "offers", label: "What It Offers" },
	{ id: "insights", label: "Hiring Insights" },
	{ id: "job-seekers", label: "For Job Seekers" },
];

const ABOUT_BULLETS = [
	"Directly email job postings to skilled professionals",
	"Explore various pricing options and packages",
	"Access our resume database of top-notch candidates",
	"Easily manage job postings and applicant activity on our site",
	"Restrict applications to only the most qualified individuals",
];

const STATS = [
	{
		value: "+30 Million",
		body: (
			<>
				More Project Professionals needed by 2035 to{" "}
				<a
					className="underline hover:no-underline"
					href="/learning/thought-leadership"
				>
					fill the global talent gap
				</a>
			</>
		),
	},
	{
		value: "1.7 Million",
		body: "PMI certification holders worldwide, making PMI the leader in the field since 1969",
	},
	{
		value: "800,000",
		body: "PMI members to reach with your job posting",
	},
];

const OFFERS = [
	{
		title: "Target qualified candidates",
		body: "Reach and recruit qualified candidates from PMI's global community of Project Professionals.",
	},
	{
		title: "Increase visibility with email upgrades",
		body: "Put your job in our Job Flash™ email to Project Professionals to get up to 5x more applications.",
	},
	{
		title: "Save up to 30% with posting packs",
		body: "Lots of hiring this year? Save when you buy a three, 5, or 10 pack of job listings valid for 365 days.",
	},
	{
		title: "Post internships for free",
		body: "Post internship opportunities free for 30 days to find the next generation of project leadership.",
	},
	{
		title: "Streamline recruiting with templates",
		body: "Set up job, message, and pre-screen templates to speed recruiting. Attach a single company profile to all postings.",
	},
	{
		title: "Search PMI's resume bank",
		body: "Search thousands of resumes and reach out to the candidates that might be a good fit for your openings.",
	},
];

const INSIGHT_LINKS = [
	{
		tag: "Report",
		title: "A New Era for Enterprise Agility",
		href: "/learning/thought-leadership",
	},
	{
		tag: "Article",
		title: "How PMOs Can Build a Talent Pipeline",
		href: "/learning/thought-leadership",
	},
];

function _ExternalIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M25.8787 4L25.9393 3.93933L26 4H28V6L28.0607 6.06065L28 6.1213V15H25V9.1213L14.0607 20.0607L11.9393 17.9393L22.8787 7H17V4H25.8787Z" />
			<path d="M12.7273 7H8C7.44772 7 7 7.44772 7 8V25H24C24.5523 25 25 24.5523 25 24V19.2727H28V24C28 26.2091 26.2091 28 24 28H4V8C4 5.79086 5.79086 4 8 4H12.7273V7Z" />
		</svg>
	);
}

function ArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z" />
		</svg>
	);
}

function Badge({ children }: { children: React.ReactNode }) {
	return (
		<span
			className="inline-flex items-center rounded-full border px-3 py-1 font-medium text-xs"
			style={{ borderColor: INK, color: INK }}
		>
			{children}
		</span>
	);
}

function RouteComponent() {
	const [activeTab, setActiveTab] = useState("about");
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveTab(entry.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -50% 0px" }
		);
		for (const tab of TABS) {
			const el = document.getElementById(tab.id);
			if (el) {
				observer.observe(el);
			}
		}
		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		const navH = navRef.current?.offsetHeight ?? 0;
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	return (
		<main className="overflow-x-hidden" style={{ background: CREAM }}>
			{/* ── Breadcrumb ───────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 pt-8 pb-2 lg:px-4">
				<nav aria-label="Breadcrumb">
					<ol
						className="flex flex-wrap items-center gap-1.5 font-medium text-sm"
						style={{ color: INK }}
					>
						<li>
							<Link className="hover:underline" to="/">
								Home
							</Link>
						</li>
						<li aria-hidden>/</li>
						<li>
							<Link className="hover:underline" to="/business-solutions">
								PMI for Organizations
							</Link>
						</li>
						<li aria-hidden>/</li>
						<li className="opacity-70">Job Board and Recruiting</li>
					</ol>
				</nav>
			</div>

			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-8 pb-16 lg:px-4 lg:pt-12 lg:pb-20">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
					<div className="relative h-auto lg:col-span-5">
						<div className="max-h-full lg:-ml-[max(16px,calc(50vw-640px))] lg:w-[max(calc(100%+16px),calc(100%+50vw-640px))] 2xl:ml-0 2xl:w-full">
							<img
								alt="people-walking-by-glass-window"
								className="h-auto w-full 2xl:rounded-sm"
								height={540}
								src="/images/business-solutions/talent-management/hero.png"
								width={540}
							/>
						</div>
					</div>
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-[1.1] tracking-tight lg:text-5xl xl:text-6xl"
							style={{ color: INK }}
						>
							Qualifications certified
						</h1>
						<p
							className="mb-8 text-lg leading-relaxed lg:text-xl"
							style={{ color: BODY }}
						>
							Have a project position to fill? Reach and recruit qualified,
							often PMI-certified, candidates on the PMI<sup>®</sup> Job Board.
						</p>
					</div>
				</div>
			</section>

			{/* ── Sticky tab nav ───────────────────────────────────────────── */}
			<div
				className="sticky top-0 z-30 border-gray-200 border-y bg-white"
				ref={navRef}
			>
				<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
					<nav className="flex gap-8 overflow-x-auto lg:gap-12">
						{TABS.map((tab) => (
							<button
								className="whitespace-nowrap py-5 font-medium text-base transition"
								key={tab.id}
								onClick={() => scrollTo(tab.id)}
								style={{
									color: activeTab === tab.id ? INK : "#8a8696",
									borderBottom:
										activeTab === tab.id
											? `3px solid ${INK}`
											: "3px solid transparent",
								}}
								type="button"
							>
								{tab.label}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* ── About ────────────────────────────────────────────────────── */}
			<section className="bg-white" id="about">
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
						<h2
							className="font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							About the PMI Job Board
						</h2>
						<div>
							<p
								className="mb-5 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								From intern to scrum master, from IT to shipping—the PMI Job
								Board helps employers target qualified Project Professionals
								around the world at any level in any industry.
							</p>
							<p
								className="mb-6 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								As an employer, you can showcase your job to our highly
								qualified PMI community and efficiently fill your job openings
								with exceptional talent.
							</p>
							<ul
								className="mb-8 list-disc space-y-3 pl-5 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								{ABOUT_BULLETS.map((b) => (
									<li key={b}>{b}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ── Stats banner ─────────────────────────────────────────────── */}
			<section style={{ background: STATS_BG }}>
				<div className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4 lg:py-16">
					<div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
						{STATS.map((stat, i) => (
							<div
								className={
									i > 0 ? "md:border-white/20 md:border-l md:pl-10" : "md:pr-10"
								}
								key={stat.value}
							>
								<div
									className="mb-3 font-medium text-4xl lg:text-5xl"
									style={{ color: STATS_ACCENT }}
								>
									{stat.value}
								</div>
								<p className="text-lg text-white leading-relaxed">
									{stat.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── What It Offers ───────────────────────────────────────────── */}
			<section className="bg-white" id="offers">
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<h2
						className="mb-12 font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						What does the PMI Job Board offer?
					</h2>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{OFFERS.map((card) => (
							<div
								className="rounded-2xl p-8"
								key={card.title}
								style={{ background: CARD }}
							>
								<h3
									className="mb-3 font-medium text-xl leading-snug"
									style={{ color: INK }}
								>
									{card.title}
								</h3>
								<p
									className="text-base leading-relaxed"
									style={{ color: BODY }}
								>
									{card.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Hiring Insights ──────────────────────────────────────────── */}
			<section className="bg-white" id="insights">
				<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4 lg:pb-20">
					<h2
						className="mb-10 font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						Hiring Insights
					</h2>
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
						{/* Featured card */}
						<a
							className="group flex flex-col justify-between overflow-hidden rounded-2xl transition hover:shadow-lg"
							href="/learning/thought-leadership"
							style={{ background: CARD, minHeight: 440 }}
						>
							<div
								className="h-40"
								style={{
									background:
										"linear-gradient(135deg, #efe9df 0%, #e4dccd 50%, #efe9df 100%)",
								}}
							/>
							<div className="flex flex-1 flex-col p-8">
								<div className="mb-4">
									<Badge>Report</Badge>
								</div>
								<h3
									className="mb-3 font-medium text-2xl leading-snug"
									style={{ color: INK }}
								>
									Global Project Management Talent Gap
								</h3>
								<p
									className="mb-6 flex-1 text-base leading-relaxed"
									style={{ color: BODY }}
								>
									PMI forecasts a possible global talent gap of up to 30 million
									Project Professionals by 2035. Explore the data behind the
									demand, and what's at stake if we don't close the gap.
								</p>
								<span
									className="inline-flex h-11 w-fit items-center rounded-full px-6 font-medium text-sm text-white"
									style={{ background: DARK_BTN }}
								>
									Read Now
								</span>
							</div>
						</a>

						{/* Right column */}
						<div className="flex flex-col gap-6">
							<div
								className="rounded-2xl border p-8"
								style={{ borderColor: "#d8d3ca" }}
							>
								<div className="mb-4 flex flex-wrap items-center gap-3">
									<Badge>Report</Badge>
									<span
										className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-medium text-xs"
										style={{ borderColor: "#7c3aed", color: "#7c3aed" }}
									>
										✦ Free for Members
									</span>
								</div>
								<h3
									className="mb-3 font-medium text-2xl leading-snug"
									style={{ color: INK }}
								>
									Earning Power: Project Management Salary Survey
								</h3>
								<p
									className="mb-6 text-base leading-relaxed"
									style={{ color: BODY }}
								>
									Dig into detailed data, from 20,000+ professionals across 20+
									countries, on salary trends and earning potential.
								</p>
								<a
									className="inline-flex h-11 w-fit items-center rounded-full px-6 font-medium text-sm text-white"
									href="/learning/thought-leadership"
									style={{ background: DARK_BTN }}
								>
									Read Now
								</a>
							</div>

							{INSIGHT_LINKS.map((link) => (
								<a
									className="flex items-center justify-between gap-4 border-gray-200 border-b pb-6"
									href={link.href}
									key={link.title}
								>
									<div>
										<div className="mb-2">
											<Badge>{link.tag}</Badge>
										</div>
										<h4
											className="font-medium text-xl leading-snug"
											style={{ color: INK }}
										>
											{link.title}
										</h4>
									</div>
									<span style={{ color: INK }}>
										<ArrowIcon />
									</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* ── For Job Seekers ──────────────────────────────────────────── */}
			<section id="job-seekers" style={{ background: "#e8e2d7" }}>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div className="overflow-hidden rounded-2xl">
							<img
								alt="people-gathering-at-event"
								className="h-full w-full object-cover"
								height={600}
								src="/images/business-solutions/talent-management/looking-for-opportunity.png"
								width={800}
							/>
						</div>
						<div>
							<h2
								className="mb-6 font-medium text-3xl leading-tight lg:text-4xl"
								style={{ color: INK }}
							>
								Looking for your next opportunity?
							</h2>
							<p
								className="mb-5 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Search thousands of project roles at all levels and around the
								world on the PMI Job Board.
							</p>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Plus, PMI members get early access to opportunities three days
								before they go public.
							</p>
							<a
								className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
								href={JOB_SEARCH_URL}
								rel="noopener noreferrer"
								style={{ background: "#5b4a7e" }}
								target="_blank"
							>
								Search the PMI Job Board
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
