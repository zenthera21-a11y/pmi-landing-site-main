import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/business-solutions/construction")({
	component: RouteComponent,
});

/* ── Design tokens ─────────────────────────────────────────────────────── */
const INK = "#1f1646";
const BODY = "#4a4458";
const TERTIARY = "#ece6dc";
const DARK_BTN = "#1c1330";
const WARNING = "#c9840a";

const COUNTRIES = [
	"United States",
	"Canada",
	"United Kingdom",
	"Australia",
	"India",
	"Germany",
	"France",
	"Japan",
	"Singapore",
	"South Africa",
	"Saudi Arabia",
	"United Arab Emirates",
	"Brazil",
	"Mexico",
	"Afghanistan",
	"Albania",
	"Algeria",
	"Andorra",
	"Angola",
	"Argentina",
	"Austria",
	"Bahrain",
	"Bangladesh",
	"Belgium",
	"Cabo Verde",
	"Chile",
	"China",
	"Colombia",
	"Czechia",
	"Denmark",
	"Egypt",
	"Finland",
	"Greece",
	"Hong Kong",
	"Hungary",
	"Indonesia",
	"Ireland",
	"Israel",
	"Italy",
	"Jordan",
	"Kenya",
	"Kuwait",
	"Malaysia",
	"Netherlands",
	"New Zealand",
	"Norway",
	"Oman",
	"Pakistan",
	"Philippines",
	"Poland",
	"Portugal",
	"Qatar",
	"Romania",
	"Russian Federation",
	"South Korea",
	"Spain",
	"Sweden",
	"Switzerland",
	"Taiwan",
	"Thailand",
	"Turkey",
	"Ukraine",
	"Vietnam",
	"Zambia",
	"Zimbabwe",
];

/* ── Tab nav ───────────────────────────────────────────────────────────── */
const TABS = [
	{ id: "why-pmi-cp", label: "Why PMI-CP?" },
	{ id: "certification-outcomes", label: "Certification Outcomes" },
	{ id: "group-training", label: "Group Training" },
	{ id: "insights", label: "Insights & Case Studies" },
	{ id: "get-started", label: "Get Started" },
];

/* ── Data ──────────────────────────────────────────────────────────────── */
const SUCCESS_FACTORS = [
	"Enhanced project efficiency",
	"Improved risk management",
	"Stronger leadership capabilities",
	"Collaboration skills",
	"Enhanced mindset",
];

const TESTIMONIALS = [
	{
		quote:
			"I envision that within 5 to 10 years, 50% of construction professionals will hold a PMI-CP™ certification, leading to a 50% drop in project overruns and underperformance.",
		name: "Luigi Rosa",
		title: "AVP Frederick Douglass Tunnel Program, Amtrak",
		location: "",
		img: "/images/business-solutions/construction/testimonial-luigi-rosa.png",
		alt: "Luigi Rosa",
	},
	{
		quote:
			"I was able to advance my project management career with the help of the PMI-CP certification. I felt more confident in myself after passing the exam and receiving my certification.",
		name: "Robin Lopez",
		title: "Jr. Project Manager, Booz Allen Hamilton",
		location: "Washington, DC",
		img: "/images/business-solutions/construction/testimonial-robin-lopez.png",
		alt: "Robin Lopez",
	},
];

const COMPETITIVE_EDGE_ITEMS = [
	{
		icon: "globe" as const,
		title: "The only globally-recognized construction certification",
		paras: [
			"PMI-CP has been adopted by national authorities across four continents: BCA Singapore, SACPCMP South Africa, Saudi Arabia's HRDF and SCA, Zambia's EIZ, and Ministry of Works Bahrain.",
			"More than 42,000 individual courses have been completed globally since its 2023 launch. Early adoption is accelerating in North American procurement frameworks.",
		],
	},
	{
		icon: "building" as const,
		title: "Built by the construction industry, for construction projects",
		paras: [
			"PMI-CP was crafted with an expert panel representing the full construction ecosystem, including the US Department of Energy, US Army Corps of Engineers, Oracle, DPR Construction, BHP, Petronas, CII, Lean Construction Institute, and Saudi Aramco.",
			"The curriculum is designed to meet the unique demands of the construction industry, reflecting the realities of construction practices rather than generic project management theories.",
		],
	},
	{
		icon: "map" as const,
		title: "On a foundation of standardized, proven methodologies",
		paras: [
			"The certification's prerequisite training courses focus on building essential project management skills specific to the construction industry.",
			"Your team will gain the knowledge to apply project-tested techniques for effectively managing budgets, schedules, and scope, as well as leadership strategies to foster teamwork and drive success in all project phases.",
		],
	},
];

const INSIGHTS = [
	{
		tag: "Report",
		title: "The Construction Project Management Talent Gap",
		description:
			"Discover how to close construction’s growing project management talent gap and learn the key skills, barriers, and actions needed to stay competitive.",
		href: "/learning/thought-leadership",
		img: "/images/business-solutions/construction/insights-joindiscussion.jpg",
		cta: "Read Now",
	},
	{
		tag: "Podcast",
		title: "Gigaprojects: Delivering Strategic, Massive Transformation",
		description:
			"Gigaprojects aren’t hard to spot: deep complexity, massive stakeholder groups, wildly ambitious scopes and a major boost to national economies. This episode discusses two–building a bridge and preserving an archaeological site.",
		href: "/projectified-podcast",
		img: "/images/business-solutions/construction/insights-gigaprojects.jpg",
		cta: "Listen Now",
	},
	{
		tag: "Article",
		title:
			"Megaprojects: Challenges, Opportunities, and the Role of the Project Profession",
		description:
			"Megaprojects reshape economies, but often miss the mark. Explore the challenges, hidden opportunities, and why project professionals are key to success.",
		href: "/learning/thought-leadership",
		img: "/images/business-solutions/construction/insights-megaprojects.jpg",
		cta: "Read Now",
	},
	{
		tag: "Podcast",
		title: "Cutting-Edge Technologies in Construction Projects",
		description:
			"From BIM to data-driven design, hear how emerging technologies are reshaping construction, along with what you need to know to keep pace.",
		href: "/projectified-podcast",
		img: "/images/business-solutions/construction/insights-innovation.jpg",
		cta: "Listen Now",
	},
];

/* ── Icons ─────────────────────────────────────────────────────────────── */
function GlobeIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-6 w-6"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
		>
			<path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
		</svg>
	);
}

function BuildingIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-6 w-6"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
		>
			<path d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
		</svg>
	);
}

function MapIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-6 w-6"
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
			viewBox="0 0 24 24"
		>
			<path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
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
		>
			<path d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z" />
		</svg>
	);
}

function LeftArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
		>
			<path d="M2.99305 16L11.8789 6.00348L14.1211 7.99657L8.34027 14.5H28V17.5H8.34023L14.1211 24.0035L11.8789 25.9966L2.99305 16Z" />
		</svg>
	);
}

function DownArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
		>
			<path d="M14.5 23.6598L14.5 4H17.5L17.5 23.6597L24.0034 17.8789L25.9965 20.1211L16 29.007L6.00342 20.1211L7.99651 17.8789L14.5 23.6598Z" />
		</svg>
	);
}

/* ── Route component ───────────────────────────────────────────────────── */
function RouteComponent() {
	const [activeTab, setActiveTab] = useState("why-pmi-cp");
	const [testimonialIdx, setTestimonialIdx] = useState(0);
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
		const navH = navRef.current?.offsetHeight ?? 0;
		const el = document.getElementById(id);
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

	const testimonial = TESTIMONIALS[testimonialIdx];

	return (
		<main className="overflow-x-hidden bg-white">
			{/* ── Hero ─────────────────────────────────────────────────── */}
			<section
				className="relative flex min-h-screen items-center justify-center bg-center bg-cover bg-no-repeat text-center text-white"
				style={{
					backgroundImage:
						"url('/images/business-solutions/construction/construction-hero-dsk.png')",
					backgroundColor: "#0f0c1e",
				}}
			>
				{/* Breadcrumbs overlaid on hero */}
				<div className="absolute top-0 left-0 w-full">
					<div className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4">
						<nav aria-label="Breadcrumb">
							<ol className="flex flex-wrap items-center gap-2 font-medium text-sm text-white/80">
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
								<li className="opacity-70">Construction</li>
							</ol>
						</nav>
					</div>
				</div>

				{/* Overlay gradient */}
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(to bottom, rgba(15,12,30,0.3) 0%, rgba(15,12,30,0.7) 60%, rgba(15,12,30,0.85) 100%)",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-4xl px-6 py-28 lg:py-36">
					<h1 className="mb-6 font-medium text-4xl leading-tight lg:text-5xl xl:text-6xl">
						Upskill your workforce in construction project management
					</h1>
					<p className="mx-auto mb-10 max-w-2xl text-base text-white/85 leading-relaxed lg:text-lg">
						Equip your team to tackle the complexities of modern construction
						project management with training and certification from PMI, created
						specifically for construction Project Professionals.
					</p>
					<div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
						{/* Primary: white pill */}
						<a
							className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white px-6 font-medium transition hover:opacity-90"
							href="#contact-us"
							style={{ color: INK }}
						>
							Contact Us <DownArrowIcon />
						</a>
						{/* Secondary: outlined */}
						<a
							className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border border-white/60 px-6 font-medium text-white transition hover:bg-white/10"
							href="/certifications/construction"
						>
							Explore PMI-CP Certification <ArrowIcon />
						</a>
					</div>
				</div>
			</section>

			{/* ── Sticky tab nav ───────────────────────────────────────── */}
			<div
				className="sticky top-0 z-30 bg-white"
				ref={navRef}
				style={{ boxShadow: "0 1px 0 #e5e0ec" }}
			>
				<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
					<nav
						aria-label="Page sections"
						className="flex gap-0 overflow-x-auto lg:justify-center"
					>
						{TABS.map((tab) => (
							<button
								className="whitespace-nowrap px-4 py-5 font-medium text-sm transition lg:px-6"
								key={tab.id}
								onClick={() => scrollTo(tab.id)}
								style={{
									color: activeTab === tab.id ? INK : "#8a8696",
									borderBottom:
										activeTab === tab.id
											? `2px solid ${INK}`
											: "2px solid transparent",
								}}
								type="button"
							>
								{tab.label}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* ── Skills Gap ───────────────────────────────────────────── */}
			<section
				className="bg-white"
				id="why-pmi-cp"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
						<h2
							className="font-semibold text-3xl leading-tight lg:col-span-5 lg:text-4xl"
							style={{ color: INK }}
						>
							Addressing the skills gap in construction project management
						</h2>
						<div className="space-y-4 lg:col-span-7">
							<p
								className="font-semibold text-base leading-snug"
								style={{ color: WARNING }}
							>
								Infrastructure investment is at a generational high and delivery
								capability hasn't kept pace.
							</p>
							<p className="text-base leading-relaxed" style={{ color: BODY }}>
								The construction industry is powering some of the world's
								biggest ambitions, including modern infrastructure, clean
								energy, and housing solutions. Despite booming opportunities,
								the talent pool necessary to execute these projects is lagging
								behind.
							</p>
							<p className="text-base leading-relaxed" style={{ color: BODY }}>
								Our{" "}
								<a
									className="underline hover:no-underline"
									href="/learning/thought-leadership"
									style={{ color: INK }}
								>
									2026 Construction Project Management Talent Gap report
								</a>{" "}
								reveals a critical tipping point: by 2035, the industry will
								need nearly 2.5 million additional construction Project
								Professionals, a staggering 60% increase from 2025 levels.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── Dark section: warning banner + stats (unified) ───────── */}
			<div
				className="bg-center bg-cover bg-no-repeat text-white"
				style={{
					backgroundImage:
						"url('/images/business-solutions/construction/row-bg-warning.png')",
					backgroundColor: "#2c0f0a",
				}}
			>
				{/* Warning quote */}
				<div className="mx-auto max-w-screen-xl px-6 pt-16 pb-10 lg:px-4 lg:pt-20 lg:pb-12">
					<div className="mx-auto max-w-3xl text-center">
						<p className="font-semibold text-3xl leading-snug lg:text-4xl">
							Construction project mismanagement is not an outlier.{" "}
							<span style={{ color: WARNING }}>It is the baseline.</span>
						</p>
						<p className="mt-5 text-base text-white/75 leading-relaxed">
							In an industry characterized by tight margins and schedules, poor
							management not only affects profitability, but it also impacts
							future contract opportunities.
						</p>
					</div>
				</div>

				{/* Stats row with vertical dividers */}
				<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4 lg:pb-20">
					<div className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
						{[
							{ stat: "73%", label: "Of projects exceed budgets" },
							{ stat: "72%", label: "Of projects face delays" },
							{ stat: "$127M", label: "Wasted per $1B spent" },
						].map(({ stat, label }) => (
							<div
								className="px-6 py-4 first:pt-0 last:pb-0 sm:py-0 sm:last:pr-0 sm:first:pl-0 lg:px-10"
								key={stat}
							>
								<p
									className="mb-2 font-semibold text-4xl leading-none lg:text-6xl"
									style={{ color: WARNING }}
								>
									{stat}
								</p>
								<p className="font-medium text-sm text-white/90 lg:text-base">
									{label}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Why choose PMI-CP ────────────────────────────────────── */}
			<section className="bg-white">
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
						<h2
							className="font-semibold text-3xl leading-tight lg:col-span-5 lg:text-4xl"
							style={{ color: INK }}
						>
							Why choose PMI Construction Professional (PMI-CP)™ certification?
						</h2>
						<div className="lg:col-span-7">
							<p
								className="mb-4 text-base leading-relaxed"
								style={{ color: BODY }}
							>
								To effectively manage complex construction projects, deliver
								enhanced value to clients, and boost profitability, your team
								needs industry-specific training and certification in
								construction project management.
							</p>
							<p
								className="mb-6 font-semibold text-base"
								style={{ color: WARNING }}
							>
								Success in construction projects, hinges on:
							</p>
							<ol className="list-none">
								{SUCCESS_FACTORS.map((factor, i) => (
									<li key={factor}>
										<div className="flex items-center gap-4 py-4">
											<span
												className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-sm text-white"
												style={{ background: INK }}
											>
												{i + 1}
											</span>
											<span
												className="font-medium text-lg"
												style={{ color: INK }}
											>
												{factor}
											</span>
										</div>
										{i < SUCCESS_FACTORS.length - 1 && (
											<div
												className="h-px w-full"
												style={{ background: "#e5e0ec" }}
											/>
										)}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>

			{/* ── Individual cert ──────────────────────────────────────── */}
			<section className="bg-white">
				<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4 lg:pb-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
						<h2
							className="font-semibold text-3xl leading-tight lg:col-span-5 lg:text-4xl"
							style={{ color: INK }}
						>
							Here on your own?{" "}
							<span style={{ color: WARNING }}>Get certified.</span>
						</h2>
						<div className="lg:col-span-7">
							<p
								className="mb-6 text-base leading-relaxed"
								style={{ color: BODY }}
							>
								<strong style={{ color: INK }}>
									The PMI-CP is available as an individual certification.
								</strong>{" "}
								Validate your expertise with the most trusted credential in
								construction project management and take your career to the next
								level.
							</p>
							<a
								className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
								href="/certifications/construction"
								style={{ borderColor: INK, color: INK }}
							>
								Explore PMI-CP for Individuals
								<ArrowIcon />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ── Testimonials ─────────────────────────────────────────── */}
			<section style={{ background: TERTIARY }}>
				<div className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
						{/* Image: D-shape (straight left, arched right) */}
						<div
							className="overflow-hidden lg:col-span-7"
							style={{ borderRadius: "12px 9999px 9999px 12px" }}
						>
							<img
								alt={testimonial.alt}
								className="aspect-[16/10] w-full object-cover"
								height={375}
								src={testimonial.img}
								width={600}
							/>
						</div>
						{/* Quote */}
						<figure className="lg:col-span-5">
							<blockquote
								className="relative font-medium text-xl leading-snug lg:text-2xl"
								style={{ color: INK }}
							>
								<span
									aria-hidden
									className="absolute -top-1 -left-2 font-serif text-5xl leading-none opacity-20"
									style={{ color: INK }}
								>
									"
								</span>
								{testimonial.quote}
							</blockquote>
							<figcaption className="mt-6" style={{ color: INK }}>
								<span className="block font-semibold text-base">
									{testimonial.name}
								</span>
								<span
									className="block text-sm leading-snug"
									style={{ color: "#8a8696" }}
								>
									{testimonial.title}
								</span>
								{testimonial.location && (
									<span className="block text-sm" style={{ color: "#8a8696" }}>
										{testimonial.location}
									</span>
								)}
							</figcaption>
						</figure>
					</div>

					{/* Carousel controls */}
					<div className="mt-8 flex items-center justify-between">
						<div className="flex items-center gap-2">
							{TESTIMONIALS.map((t, i) => (
								<button
									aria-label={`Show testimonial ${i + 1}`}
									className="h-1.5 rounded-full transition-all"
									key={t.name}
									onClick={() => setTestimonialIdx(i)}
									style={{
										width: i === testimonialIdx ? 40 : 8,
										background: i === testimonialIdx ? INK : "#cfc9d6",
									}}
									type="button"
								/>
							))}
						</div>
						<div className="flex items-center gap-2">
							<button
								aria-label="Previous testimonial"
								className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
								disabled={testimonialIdx === 0}
								onClick={() => setTestimonialIdx(testimonialIdx - 1)}
								style={{ color: INK }}
								type="button"
							>
								<LeftArrowIcon />
							</button>
							<button
								aria-label="Next testimonial"
								className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
								disabled={testimonialIdx === TESTIMONIALS.length - 1}
								onClick={() => setTestimonialIdx(testimonialIdx + 1)}
								style={{ color: INK }}
								type="button"
							>
								<ArrowIcon />
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* ── Certification Outcomes: Gain a competitive edge ──────── */}
			<section
				className="bg-white"
				id="certification-outcomes"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
						<h2
							className="font-semibold text-3xl leading-tight lg:col-span-5 lg:text-4xl"
							style={{ color: INK }}
						>
							Gain a competitive edge in construction with PMI-CP certification
						</h2>
						<div className="lg:col-span-7">
							<p
								className="mb-2 font-semibold text-base"
								style={{ color: WARNING }}
							>
								Upskilling your team is essential to stay competitive.
							</p>
							<p
								className="mb-3 text-base leading-relaxed"
								style={{ color: BODY }}
							>
								The PMI Construction Professional (PMI-CP)™ certification equips
								your organization with the expertise to address the challenges
								of modern construction project management.
							</p>
							<p
								className="mb-8 text-base leading-relaxed"
								style={{ color: BODY }}
							>
								Designed to empower construction professionals with essential
								knowledge and skills, PMI-CP certification is ideal for Project
								Managers, team leaders and industry professionals aiming to lead
								and manage construction projects more effectively.
							</p>

							{/* Icon list */}
							<ol className="list-none">
								{COMPETITIVE_EDGE_ITEMS.map(({ icon, title, paras }, i) => (
									<li key={title}>
										<div className="flex gap-5 py-6">
											<span
												className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
												style={{ background: "#f0edf8", color: INK }}
											>
												{icon === "globe" && <GlobeIcon />}
												{icon === "building" && <BuildingIcon />}
												{icon === "map" && <MapIcon />}
											</span>
											<div className="space-y-2">
												<h3
													className="font-semibold text-base lg:text-lg"
													style={{ color: INK }}
												>
													{title}
												</h3>
												{paras.map((p) => (
													<p
														className="text-sm leading-relaxed lg:text-base"
														key={p.slice(0, 30)}
														style={{ color: BODY }}
													>
														{p}
													</p>
												))}
											</div>
										</div>
										{i < COMPETITIVE_EDGE_ITEMS.length - 1 && (
											<div
												className="h-px w-full"
												style={{ background: "#e5e0ec" }}
											/>
										)}
									</li>
								))}
							</ol>
						</div>
					</div>
				</div>
			</section>

			{/* ── Want data for your region? ────────────────────────────── */}
			<section className="bg-white">
				<div className="mx-auto max-w-screen-xl px-6 pt-0 pb-6 lg:px-4">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
						{/* Left: Heading */}
						<div className="lg:col-span-5">
							<h2
								className="font-medium text-2xl leading-tight lg:text-3xl"
								style={{ color: INK }}
							>
								Want data for your region?
							</h2>
						</div>
						{/* Right: Body & CTA */}
						<div className="lg:col-span-7">
							<div className="space-y-4">
								<p
									className="text-base leading-relaxed"
									style={{ color: BODY }}
								>
									With PMI-CP training teams can proactively mitigate risks,
									streamline processes, and consistently meet deadlines, leading
									to increased customer satisfaction and repeat business.
								</p>
								<p
									className="text-base leading-relaxed"
									style={{ color: BODY }}
								>
									By leveraging PMI-CP, your organization ensures better project
									outcomes, improved efficiency, and greater profitability.
								</p>
							</div>
							<div className="mt-6">
								<a
									className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
									href="#get-started"
									style={{ borderColor: INK, color: INK }}
								>
									Get in Touch?
									<DownArrowIcon />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Image below the columns */}
				<div className="mx-auto max-w-screen-xl px-6 pb-10 lg:px-4 lg:pb-20">
					<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
						<div className="hidden lg:col-span-5 lg:block" />
						<div className="lg:col-span-7">
							<div className="overflow-hidden rounded-xl">
								<img
									alt="Construction Training Options"
									className="w-full object-cover transition duration-500 hover:scale-[1.02]"
									height={603}
									src="/images/business-solutions/construction/construction-16_9.png"
									width={1072}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Group Training ───────────────────────────────────────── */}
			<section
				id="group-training"
				style={{ background: TERTIARY, scrollMarginTop: 80 }}
			>
				{/* Part 1: Centered title */}
				<div className="mx-auto max-w-screen-xl px-6 pt-9 pb-4 text-center lg:px-4 lg:pt-14 lg:pb-6">
					<h2
						className="font-medium text-3xl lg:text-4xl"
						style={{ color: INK }}
					>
						Group training <span style={{ color: WARNING }}>for teams</span>
					</h2>
				</div>

				{/* Part 2: Split columns */}
				<div className="mx-auto max-w-screen-xl px-6 pb-12 lg:px-4 lg:pb-20">
					<div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
						{/* Left: subheading */}
						<div className="text-left lg:col-span-5">
							<h3
								className="font-medium text-xl leading-tight lg:text-2xl"
								style={{ color: INK }}
							>
								Get your construction workforce on the same page
							</h3>
						</div>
						{/* Right: Description & Checklist */}
						<div className="space-y-6 text-left lg:col-span-7">
							<p className="text-base leading-relaxed" style={{ color: BODY }}>
								PMI offers flexible group training for construction project
								teams—whether on-site or virtual—tailored to your business goals
								and focused on the skills your team needs to lead.
							</p>

							{/* Checklist items */}
							<ul className="flex flex-col gap-6">
								{[
									"Essential project management skills specific to the construction industry",
									"Customize topics and construction-relevant case studies to fit your organization",
									"Prepare teams for PMI-CP certification and role-ready leadership",
									"Earn PDUs before or after certification to support continuous learning",
									"Get post-training support to ensure teams are implementing all they’ve learned",
								].map((item) => (
									<li className="flex flex-col gap-6" key={item}>
										<div className="flex flex-row gap-6">
											<svg
												aria-hidden="true"
												className="h-8 w-8 shrink-0"
												fill="none"
												height="32"
												style={{ color: INK }}
												viewBox="0 0 32 32"
												width="32"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													clipRule="evenodd"
													d="M5.95438 15.5755L13.6857 23.0921L26.0456 11.0755L23.9544 8.92451L13.6857 18.9079L8.04561 13.4245L5.95438 15.5755Z"
													fill="currentColor"
													fillRule="evenodd"
												/>
											</svg>
											<div className="flex flex-col gap-3 font-display">
												<div
													className="font-medium text-base lg:text-lg"
													style={{ color: INK }}
												>
													{item}
												</div>
											</div>
										</div>
										<div
											className="h-px w-full"
											style={{ background: "#e5e0ec" }}
										/>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* ── Certification is a start, community is multiplier promo ───── */}
			<section className="w-full text-white" style={{ background: DARK_BTN }}>
				<div className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4 lg:py-20">
					<div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
						{/* Left: Content */}
						<div className="flex-1 space-y-6 text-left lg:max-w-[600px]">
							<h2 className="font-medium text-3xl text-white leading-tight lg:text-4xl">
								Certification is a start, the PMI community is the multiplier.
							</h2>

							<div className="space-y-4">
								<p className="font-medium text-base" style={{ color: WARNING }}>
									Combining PMI membership with PMI-CP certification unlocks
									exclusive member benefits to boost project and career success.
								</p>

								<ul className="list-disc space-y-2 pl-5 text-sm text-white/80">
									<li>Free and discounted career development courses</li>
									<li>PMI Infinity™ AI tools</li>
									<li>Premium webinars</li>
									<li>Thought leadership research</li>
								</ul>

								<p className="text-sm text-white/80">
									Local chapters around the globe add regional insights, local
									events, mentorship programs, and learning opportunities to
									keep your team’s skills current.
								</p>
							</div>

							<div className="pt-4">
								<a
									className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-transparent px-6 py-3 font-medium text-sm text-white transition hover:bg-white/10"
									href="/business-solutions/commercial-partners/enterprise-membership"
								>
									<svg
										aria-hidden="true"
										className="order-first h-6 w-6 shrink-0"
										fill="none"
										viewBox="0 0 32 32"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0_166_3__R2mthe_)">
											<path
												d="M15.9989 0L20.1758 5.9177L27.3138 4.68615L26.0823 11.8242L32 15.9989L26.0823 20.1758L27.3138 27.3138L20.1758 26.0823L15.9989 32L11.8242 26.0823L4.68615 27.3138L5.9177 20.1758L0 15.9989L5.9177 11.8242L4.68615 4.68615L11.8242 5.9177L15.9989 0Z"
												fill="#4F17A8"
											/>
											<mask
												height="32"
												id="mask0_166_3__R2mthe_"
												maskUnits="userSpaceOnUse"
												style={{ maskType: "alpha" }}
												width="32"
												x="0"
												y="0"
											>
												<path
													d="M15.9989 0L20.1758 5.9177L27.3138 4.68615L26.0823 11.8242L32 15.9989L26.0823 20.1758L27.3138 27.3138L20.1758 26.0823L15.9989 32L11.8242 26.0823L4.68615 27.3138L5.9177 20.1758L0 15.9989L5.9177 11.8242L4.68615 4.68615L11.8242 5.9177L15.9989 0Z"
													fill="#4F17A8"
												/>
											</mask>
											<g mask="url(#mask0_166_3__R2mthe_)">
												<circle
													cx="0.5"
													cy="15.5"
													fill="url(#paint0_radial_166_3__R2mthe_)"
													r="14.5"
												/>
												<circle
													cx="15.5"
													cy="-0.5"
													fill="url(#paint1_radial_166_3__R2mthe_)"
													r="18.5"
												/>
											</g>
											<path
												clipRule="evenodd"
												d="M10.8301 10.8357C13.6835 10.8357 15.9963 13.1485 15.9963 16.0019C15.9963 18.8553 13.6835 21.1681 10.8301 21.1681V10.8357Z"
												fill="white"
												fillRule="evenodd"
											/>
											<path
												clipRule="evenodd"
												d="M21.1589 21.1668C18.3055 21.1668 15.9927 18.854 15.9927 16.0006C15.9927 13.1471 18.3055 10.8344 21.1589 10.8344V21.1668Z"
												fill="white"
												fillRule="evenodd"
											/>
										</g>
										<defs>
											<radialGradient
												cx="0"
												cy="0"
												gradientTransform="translate(0.5 15.5) rotate(90) scale(14.5)"
												gradientUnits="userSpaceOnUse"
												id="paint0_radial_166_3__R2mthe_"
												r="1"
											>
												<stop stopColor="#05BFE0" />
												<stop offset="1" stopColor="#05BFE0" stopOpacity="0" />
											</radialGradient>
											<radialGradient
												cx="0"
												cy="0"
												gradientTransform="translate(15.5 -0.5) rotate(90) scale(18.5)"
												gradientUnits="userSpaceOnUse"
												id="paint1_radial_166_3__R2mthe_"
												r="1"
											>
												<stop stopColor="#FF610F" />
												<stop offset="1" stopColor="#FF610F" stopOpacity="0" />
											</radialGradient>
											<clipPath id="clip0_166_3__R2mthe_">
												<rect fill="white" height="32" width="32" />
											</clipPath>
										</defs>
									</svg>
									<span className="pb-0.5">
										Explore PMI Enterprise Membership
									</span>
								</a>
							</div>
						</div>

						{/* Right: Image */}
						<div className="w-full max-w-[536px] flex-1">
							<div className="aspect-[5/4] overflow-hidden rounded-xl">
								<img
									alt="Certification is a start"
									className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
									height={884}
									src="/images/business-solutions/construction/certification-is-a-start.jpg"
									width={1072}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Insights & Case Studies ──────────────────────────────── */}
			<section
				className="bg-white"
				id="insights"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="mb-10 text-left">
						<h2
							className="font-semibold text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							Construction Project Insights &amp; Case Studies
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{INSIGHTS.map(({ tag, title, description, img }) => (
							<div
								className="group relative flex min-h-[30rem] flex-col overflow-hidden rounded-xl border bg-white transition hover:shadow-lg sm:min-h-[34.5rem]"
								key={title}
								style={{ borderColor: INK }}
							>
								{/* Image Container (top 50%) */}
								<div className="relative h-1/2 w-full overflow-hidden">
									<img
										alt={title}
										className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
										height={450}
										src={img}
										width={800}
									/>
									{/* Badge inside the image */}
									<div className="absolute top-6 left-6 z-10">
										<span
											className="rounded-full border bg-white/95 px-4 py-1 font-medium text-gray-900 text-xs backdrop-blur-md"
											style={{ borderColor: INK }}
										>
											{tag}
										</span>
									</div>
								</div>

								{/* Content Container (bottom 50% - strictly on white background) */}
								<div className="flex h-1/2 w-full flex-col justify-between bg-white p-6 pb-8 text-left font-display">
									<div className="space-y-3">
										<h3
											className="font-medium text-lg leading-snug group-hover:underline lg:text-xl"
											style={{ color: INK }}
										>
											{title}
										</h3>
										<p
											className="line-clamp-3 overflow-hidden text-sm leading-relaxed"
											style={{ color: BODY }}
										>
											{description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Get Started / Contact ────────────────────────────────── */}
			<section
				className="bg-white"
				id="get-started"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 text-center lg:px-4 lg:py-20">
					<div className="mx-auto max-w-2xl">
						<h2
							className="font-semibold text-3xl lg:text-4xl"
							style={{ color: INK }}
						>
							Ready to upskill your team?
						</h2>
						<p className="mt-2 text-gray-500 text-lg">
							Contact us to get started
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-[600px] rounded-xl border border-[#e1dfdd] bg-[#f8f5f0]/30 p-8 shadow-xs">
						<div id="contact-us">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

/* ── Contact form ──────────────────────────────────────────────────────── */
function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const [phone, setPhone] = useState("+");

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setSubmitted(true);
	}

	if (submitted) {
		return (
			<div
				className="rounded-xl border bg-[#f8f5f0] px-8 py-10 text-center"
				style={{ borderColor: "#e1dfdd" }}
			>
				<p className="font-semibold text-lg" style={{ color: INK }}>
					Thank you for your inquiry. A PMI team member will contact you within
					5 - 7 business days.
				</p>
			</div>
		);
	}

	const inputCls =
		"w-full rounded border px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4f17a8] text-sm bg-white";
	const labelCls = "mb-2 block text-sm font-semibold text-gray-800 text-left";

	return (
		<form className="space-y-6" onSubmit={handleSubmit}>
			{/* Heading / Info */}
			<div className="text-left">
				<h3
					className="font-bold text-lg leading-snug lg:text-xl"
					style={{ color: INK }}
				>
					Fill out the form below and speak with a Partner Success Manager (PSM)
					for a customized learning journey to improve construction project
					success for your organization.
				</h3>
				<div className="my-6 border-t-2" style={{ borderColor: "#e1dfdd" }} />
			</div>

			{/* Fields */}
			<div className="space-y-4">
				{/* Organization */}
				<div>
					<label className={labelCls} htmlFor="form_org">
						Organization <span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_org"
						name="pmi_potentialaccountname"
						placeholder="Organization Name"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="text"
					/>
				</div>

				{/* First Name */}
				<div>
					<label className={labelCls} htmlFor="form_first_name">
						First Name <span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_first_name"
						name="firstname"
						placeholder="First Name"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="text"
					/>
				</div>

				{/* Last Name */}
				<div>
					<label className={labelCls} htmlFor="form_last_name">
						Last Name <span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_last_name"
						name="lastname"
						placeholder="Last Name"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="text"
					/>
				</div>

				{/* Business/Work Email Address */}
				<div>
					<label className={labelCls} htmlFor="form_email">
						Business/Work Email Address{" "}
						<span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_email"
						name="emailaddress1"
						placeholder="Business/work email domains ONLY to ensure follow‑up. (No gmail, yahoo, etc.)"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="email"
					/>
				</div>

				{/* Phone */}
				<div>
					<label className={labelCls} htmlFor="form_phone">
						Phone <span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_phone"
						name="telephone1"
						onChange={(e) => setPhone(e.target.value)}
						placeholder="+country code, number, no spaces or hyphens"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="tel"
						value={phone}
					/>
				</div>

				{/* Job Title */}
				<div>
					<label className={labelCls} htmlFor="form_job_title">
						Job Title <span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_job_title"
						name="jobtitle"
						placeholder="Job Title"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="text"
					/>
				</div>

				{/* Country */}
				<div>
					<label className={labelCls} htmlFor="form_country">
						Country <span className="font-bold text-red-600">*</span>
					</label>
					<select
						className={inputCls}
						defaultValue=""
						id="form_country"
						name="pmi_countryoptions"
						required
						style={{ borderColor: "#d1cfcd" }}
					>
						<option disabled value="">
							Choose country
						</option>
						{COUNTRIES.map((c) => (
							<option key={c} value={c}>
								{c}
							</option>
						))}
					</select>
				</div>

				{/* Team Size */}
				<div>
					<label className={labelCls} htmlFor="form_team_size">
						Team Size <span className="font-bold text-red-600">*</span>
					</label>
					<input
						className={inputCls}
						id="form_team_size"
						min="0"
						name="numberofemployees"
						placeholder="No. of team members (numeric only)"
						required
						style={{ borderColor: "#d1cfcd" }}
						type="number"
					/>
				</div>

				{/* Comments */}
				<div>
					<label className={labelCls} htmlFor="form_comments">
						Comments
					</label>
					<textarea
						className={`${inputCls} h-28 resize-none`}
						id="form_comments"
						name="pmi_leadnotes"
						placeholder="Additional Information"
						style={{ borderColor: "#d1cfcd" }}
					/>
				</div>
			</div>

			{/* Consent & Policy Texts */}
			<div className="space-y-4 text-left text-gray-600 text-sm">
				<p>
					By submitting this form, you grant PMI permission to contact you about
					your inquiry.
				</p>
				<p className="font-semibold" style={{ color: "#4f17a8" }}>
					<a
						className="underline hover:no-underline"
						href="/privacy"
						rel="noopener noreferrer"
						target="_blank"
					>
						View our privacy policy
					</a>
					.
				</p>

				{/* Acknowledge Checkbox */}
				<div className="flex items-start gap-3">
					<input
						className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-[#4f17a8] focus:ring-[#4f17a8]"
						id="form_ack"
						name="pmi_privacypolicytermsofuseacknowledged"
						required
						type="checkbox"
					/>
					<label
						className="cursor-pointer select-none font-medium text-gray-700"
						htmlFor="form_ack"
					>
						Privacy Policy &amp; Terms of Use Acknowledged{" "}
						<span className="font-bold text-red-600">*</span>
					</label>
				</div>

				{/* Contact Consent Checkbox */}
				<div className="flex items-start gap-3">
					<input
						className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-[#4f17a8] focus:ring-[#4f17a8]"
						defaultChecked
						id="form_consent"
						name="consent_checkbox"
						type="checkbox"
					/>
					<label
						className="cursor-pointer select-none font-medium text-gray-700"
						htmlFor="form_consent"
					>
						By checking this box, you grant PMI permission to contact you about
						your inquiry and send occasional offers and promotional emails. You
						can unsubscribe at any time.
					</label>
				</div>
			</div>

			{/* Google ReCAPTCHA Mock */}
			<div className="mx-auto my-6 flex w-full max-w-[304px] items-center justify-between rounded border border-gray-200 bg-gray-50 p-4 shadow-xs">
				<div className="flex items-center gap-3">
					<input
						className="h-6 w-6 cursor-pointer rounded border-gray-300 text-blue-600 focus:ring-blue-500"
						id="recaptcha"
						required
						type="checkbox"
					/>
					<label
						className="cursor-pointer select-none font-semibold text-gray-700 text-xs"
						htmlFor="recaptcha"
					>
						I'm not a robot
					</label>
				</div>
				<div className="flex select-none flex-col items-center justify-center">
					<img
						alt="reCAPTCHA"
						className="h-8 w-8"
						height={32}
						src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
						width={32}
					/>
					<span className="mt-1 font-semibold text-[8px] text-gray-400">
						reCAPTCHA
					</span>
					<span className="text-[7px] text-gray-400">Privacy - Terms</span>
				</div>
			</div>

			{/* Submit Button */}
			<div className="pt-2 text-center">
				<button
					className="w-full rounded py-3.5 font-bold text-sm text-white shadow-sm transition hover:opacity-90 active:scale-95"
					style={{ backgroundColor: "#4f17a8" }}
					type="submit"
				>
					Submit Request
				</button>
			</div>
		</form>
	);
}
