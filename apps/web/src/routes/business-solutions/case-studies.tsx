import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/business-solutions/case-studies")({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const DARK_BTN = "#1c1330";
const CREAM = "#f7f3ec";
const TERTIARY = "#ece6dc";

const FEATURED: {
	title: string;
	body: string;
	href: string;
}[] = [
	{
		title: "How NYU Prepares the Next Generation of Project Management",
		body: "NYU School of Professional Studies earned PMI Global Accreditation Center (GAC) accreditation, gaining global recognition for its project management graduate program and developing future project leaders.",
		href: "/business-solutions/case-studies/nyusp",
	},
	{
		title: "Deloitte: Future-Proofing a Workforce with PMI",
		body: "Recognizing that enterprise agility requires more than strategy, global consultancy Deloitte partnered with PMI on project management training and certification to empower its people to lead and execute.",
		href: "/business-solutions/case-studies/deloitte-case-study",
	},
	{
		title: "Charcoalblue: Clarity and Consistency for Creative Teams",
		body: "Global design and project management consultancy Charcoalblue became a PMI Authorized Training Partner and turned creative energy into execution excellence, building long-term value for both the business and the people behind the work.",
		href: "/business-solutions/case-studies/charcoalblue",
	},
	{
		title: "Georgia Tech's PMI® Authorized Training Partner Advantage",
		body: "Georgia Tech's experience shows how becoming a PMI ATP strengthens job readiness, boosts institutional credibility, and prepares learners for success in project management careers.",
		href: "/business-solutions/case-studies/georgia-tech",
	},
	{
		title: "Using a PMI Disciplined Agile® Approach in Global Manufacturing",
		body: "PMI's Disciplined Agile® is now helping global manufacturing boost quality, speed, and team productivity.",
		href: "/business-solutions/case-studies/using-a-pmi-disciplined-agile-approach-in-global-manufacturing",
	},
	{
		title: "Fujitsu: Developing Early-Career Project Managers",
		body: "Fujitsu enhanced early-career training with a project-focused framework using structured learning and rotations.",
		href: "/business-solutions/case-studies/fujitsu-case-study",
	},
	{
		title: "Kuveyt Türk Bank: Disciplined Agile® for PMO Transformation",
		body: "The Kuveyt Türk Bank's PMO leveraged the Disciplined Agile® (DA) Value Acceleration Guide to address both team and enterprise-level agility challenges, ensuring a structured and scalable approach to transformation.",
		href: "/business-solutions/case-studies/kuveyt-turk-bank-disciplined-agile",
	},
	{
		title: "Hospital El Pilar: Improving Patient Care With Disciplined Agile®",
		body: "Hospital El Pilar is focused on driving innovation by investing in the latest technology to better serve both patients and staff.",
		href: "/business-solutions/case-studies/hospital-el-pilar",
	},
	{
		title: "Saudi Aramco: Offshore Construction in Crowded Waters",
		body: "Saudi Aramco's Marjan and Zuluf projects boost offshore output using careful planning to manage complex risks.",
		href: "/business-solutions/case-studies/saudi-aramco-case-study",
	},
	{
		title: "Lighthouse Labs: Innovating in a Crisis",
		body: "Lighthouse Labs used agile, lean, and constraint-based methods to scale from 41 to 85,000 daily COVID tests in the UK.",
		href: "/business-solutions/case-studies/lighthouse-laboratory-case-study",
	},
	{
		title: "AstraZeneca: Fighting a Global Pandemic",
		body: "AstraZeneca used PMI standards to rapidly develop and distribute a COVID-19 vaccine amid global challenges.",
		href: "/business-solutions/case-studies/astrazeneca-case-study",
	},
	{
		title:
			"Gordie Howe International Bridge: Connecting People, Nations, and Commerce",
		body: "The Gordie Howe Bridge project uses PMI standards to manage a major cross-border infrastructure build, set for 2025.",
		href: "/business-solutions/case-studies/gordie-howe-case-study",
	},
	{
		title:
			"Canadian Nuclear Laboratories Leverages PMI Global Summit as a Strategic Talent Investment",
		body: "CNL leveraged its booth presence at the PMI Global Summit to expand its global talent pool and successfully recruit a skilled PMI community member aligned with the organization's mission.",
		href: "/business-solutions/canadian-nuclear-laboratories-case-study",
	},
	{
		title: "Ontario Power Generation and the PMO: Mega Project Success",
		body: "Partnering with PMI helped OPG build a skilled workforce adapted to evolving demands and mega project complexity.",
		href: "/business-solutions/case-studies/pmo-mega-projects",
	},
];

function RouteComponent() {
	return (
		<div>
			{/* ── Hero ──────────────────────────────────────────────────────── */}
			<div style={{ background: DARK_BTN }}>
				{/* Breadcrumb */}
				<nav
					aria-label="Breadcrumb"
					className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4"
				>
					<ol className="flex flex-wrap items-center gap-1.5 font-medium text-sm text-white/70">
						{[
							{ label: "Home", href: "/" },
							{ label: "PMI for Organizations", href: "/business-solutions" },
							{ label: "Case Studies", href: null },
						].map((crumb, i, arr) => (
							<li className="flex items-center gap-1.5" key={crumb.label}>
								{crumb.href ? (
									<Link className="hover:text-white" to={crumb.href}>
										{crumb.label}
									</Link>
								) : (
									<span className="text-white">{crumb.label}</span>
								)}
								{i < arr.length - 1 && <span aria-hidden>/</span>}
							</li>
						))}
					</ol>
				</nav>

				{/* Hero text */}
				<div className="mx-auto max-w-4xl px-6 pt-16 pb-24 text-center text-white lg:pt-20 lg:pb-28">
					<h1 className="mb-6 font-medium text-4xl leading-tight lg:text-5xl">
						Case Studies
					</h1>
					<p className="text-lg leading-relaxed opacity-90 lg:text-xl">
						Our collection of featured case studies highlights how organizations
						are implementing project management practices and using PMI
						products, programs, or services to fulfill business initiatives and
						overcome challenges.
					</p>
				</div>
			</div>

			{/* ── Cream body — rounded top overlapping hero ─────────────────── */}
			<div
				className="relative -mt-6 overflow-hidden"
				style={{ background: CREAM, borderRadius: "24px 24px 0 0" }}
			>
				{/* ── Case Study Spotlight ────────────────────────────────────── */}
				<section className="mx-auto max-w-screen-xl px-6 pt-14 pb-8 lg:px-4">
					<h2
						className="mb-8 font-medium text-2xl lg:text-3xl"
						style={{ color: INK }}
					>
						Case Study Spotlight
					</h2>

					{/* Full-width promo card */}
					<div
						className="overflow-hidden rounded-2xl bg-center bg-cover"
						style={{
							backgroundImage:
								"url('//www.pmi.org/-/media/pmi/other-images/business-solutions/case-studies/mayo-clinic/hero-cs-mayoclinic-dsk-2880x1620.jpg?h=1620&iar=0&w=2880&rev=33b7feb281cc48c0a43072ddf960f5a2')",
						}}
					>
						<div className="flex min-h-[340px] items-end bg-gradient-to-r from-black/60 via-black/30 to-transparent p-8 lg:min-h-[400px] lg:p-12">
							<div className="max-w-lg text-white">
								<h3 className="mb-4 font-medium text-3xl leading-tight lg:text-4xl">
									Mayo Clinic Expansion
								</h3>
								<p className="mb-6 text-base leading-relaxed opacity-90 lg:text-lg">
									Mayo Clinic leveraged PMI educational resources and a shared
									playbook for governance, risk management, and hybrid delivery.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* ── Featured Case Studies ────────────────────────────────────── */}
				<section className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4">
					<h2
						className="mb-8 font-medium text-2xl lg:text-3xl"
						style={{ color: INK }}
					>
						Featured Case Studies
					</h2>

					<div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
						{FEATURED.map((cs) => (
							<div
								className="relative flex flex-col justify-between gap-4 rounded-2xl border px-6 py-8"
								key={cs.href}
								style={{ borderColor: `${INK}33` }}
							>
								{/* Badge */}
								<div>
									<span
										className="mb-4 inline-flex h-6 items-center rounded-full border px-3 font-medium text-xs"
										style={{ borderColor: `${INK}55`, color: INK }}
									>
										Case Study
									</span>
									<h3
										className="mb-3 font-medium text-xl leading-snug lg:text-2xl"
										style={{ color: INK }}
									>
										{cs.title}
									</h3>
									<p
										className="line-clamp-4 text-base leading-relaxed"
										style={{ color: BODY }}
									>
										{cs.body}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Explore CTA */}
				</section>

				{/* ── Partner with PMI ─────────────────────────────────────────── */}
				<section style={{ background: TERTIARY }}>
					<div className="mx-auto grid max-w-screen-xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-4 lg:py-20">
						<div>
							<h2
								className="mb-4 font-medium text-3xl leading-tight lg:text-4xl"
								style={{ color: INK }}
							>
								Partner with PMI to grow your business
							</h2>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Partner with PMI to equip your team with gold-standard
								certifications and training in project management, AI, and
								portfolio management, designed to enhance your workforce and
								overall business outcomes.
							</p>
							<a
								className="inline-flex h-12 items-center rounded-full px-6 font-medium text-sm text-white transition hover:opacity-90"
								href="/contact"
								style={{ background: DARK_BTN }}
							>
								Partner with PMI
							</a>
						</div>
						<div className="overflow-hidden rounded-2xl">
							<img
								alt="Team collaborating in a workshop"
								className="aspect-[4/3] w-full object-cover"
								height={508}
								src="//www.pmi.org/-/media/pmi/headless-images/landing---microsites/shrm25/global-exec-council.jpg?h=508&iar=0&w=900&rev=1b5e173e8ca049c397aecda0d6ea1d54"
								width={900}
							/>
						</div>
					</div>
				</section>

				{/* ── Get ahead with expert insights ───────────────────────────── */}
				<section
					className="px-6 py-20 text-center"
					style={{ background: CREAM }}
				>
					<h2
						className="mx-auto mb-4 max-w-3xl font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						Get ahead with expert insights from PMI
					</h2>
					<p
						className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed"
						style={{ color: BODY }}
					>
						Discover in-depth insights, research, and expert opinions shaping
						the future of project management.
					</p>
					<a
						className="inline-flex h-12 items-center gap-2 rounded-full border px-6 font-medium text-base transition hover:bg-black/5"
						href="/learning/thought-leadership"
						style={{ borderColor: INK, color: INK }}
					>
						Explore Thought Leadership <span aria-hidden>→</span>
					</a>
				</section>
			</div>
		</div>
	);
}
