import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/business-solutions/")({
	component: RouteComponent,
});

const VIOLET = "#4f17a8";
const GRAY_LIGHT = "#f0f0f0";

const OPPORTUNITIES = [
	{
		img: "/images/business-solutions/atp.jpg",
		alt: "Authorized Training Partner",
		title: "Become an Authorized Training Partner",
		body: (
			<>
				The PMI<sup>®</sup> Authorized Training Partner Program is a network
				that helps training organizations gain visibility as approved providers
				among PMI customers.
			</>
		),
		linkText: "Become a Partner",
		href: "/contact",
	},
	{
		img: "/images/business-solutions/talent-management-business-solutions.jpg",
		alt: "Talent Management",
		title: "Talent Management",
		body: "Optimize your team by acquiring, assessing, developing, and retaining top-tier talent, ensuring continuous growth and long-term commitment.",
		linkText: "Explore Talent Management",
		href: "/business-solutions/talent-management",
	},
	{
		img: "/images/business-solutions/government-advocacy-business-solutions.jpg",
		alt: "Government Activities and Advocacy",
		title: "Government Activities and Advocacy",
		body: "We can help organizations to close talent gaps, upskill, and certify their professionals.",
		linkText: "Discover Government Activities and Advocacy",
		href: "/business-solutions/government-activities-advocacy",
	},
	{
		img: "/images/business-solutions/knowledge-networking.jpg",
		alt: "The Council at PMI",
		title: "The Council at PMI",
		body: "The Global Executive Council is a community of thought leaders and experts who believe in the power of shared learning to bring results.",
		linkText: "Learn More",
		href: "/business-solutions/the-global-executive-council",
	},
];

function RouteComponent() {
	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Breadcrumb + H1 ──────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 pt-8 pb-4">
				<nav aria-label="Breadcrumb" className="mb-3">
					<ol
						className="flex items-center gap-2 text-sm"
						style={{ color: VIOLET }}
					>
						<li>
							<Link className="hover:underline" to="/">
								Home
							</Link>
						</li>
					</ol>
				</nav>
				<h1 className="font-bold text-3xl text-gray-900 lg:text-4xl">
					Business Solutions
				</h1>
			</div>

			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<div className="relative w-full overflow-hidden lg:min-h-[340px]">
				<img
					alt="Project manager addressing company"
					className="h-[260px] w-full object-cover object-right sm:h-[340px] lg:absolute lg:inset-0 lg:h-full lg:max-h-[420px]"
					height={420}
					src="/images/business-solutions/project-manager-addressing-company.jpg"
					width={1600}
				/>
				<div
					className="relative w-full px-6 py-8 lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:flex lg:max-w-md lg:flex-col lg:justify-center lg:px-10 lg:py-10"
					style={{ background: "rgba(79,23,168,0.85)" }}
				>
					<h2 className="mb-3 font-bold text-2xl text-white lg:text-3xl">
						Discover the Value
					</h2>
					<p className="text-base text-white/90 leading-relaxed">
						Learn how project, program, and portfolio management help strategies
						succeed.
					</p>
				</div>
			</div>

			{/* ── Explore Opportunities ────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 pt-12 pb-6">
				<h2 className="mb-8 font-bold text-2xl text-gray-900 lg:text-3xl">
					Explore Opportunities
				</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{OPPORTUNITIES.map((card) => (
						<div className="flex flex-col" key={card.title}>
							<div className="mb-4 overflow-hidden rounded">
								<img
									alt={card.alt}
									className="h-48 w-full object-cover"
									height={600}
									src={card.img}
									width={800}
								/>
							</div>
							<h3 className="mb-3 font-bold text-gray-900 text-lg leading-snug">
								{card.title}
							</h3>
							<p className="mb-3 flex-1 text-base text-gray-700 leading-relaxed">
								{card.body}
							</p>
							<a
								className="font-bold text-base hover:underline"
								href={card.href}
								style={{ color: VIOLET }}
							>
								{card.linkText}
							</a>
						</div>
					))}
				</div>
			</div>

			{/* ── Agile Business Solutions ─────────────────────────────────── */}
			<div className="mt-6 py-10" style={{ background: GRAY_LIGHT }}>
				<div className="mx-auto max-w-screen-xl px-6">
					<div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_1fr]">
						<div>
							<h2 className="mb-4 font-bold text-2xl text-gray-900 lg:text-3xl">
								Agile Business Solutions
							</h2>
							<p className="mb-6 text-base text-gray-700 leading-relaxed">
								In the fast-paced business landscape, agility is crucial for
								quick market entry and customer satisfaction. The high demand
								for agile skills reflects the need to stay relevant in dynamic
								times, with customized approaches for each organization.
							</p>
							<a
								className="mb-8 inline-block rounded border px-5 py-2.5 font-semibold text-sm transition hover:bg-gray-200"
								href="/certifications/agile-acp"
								style={{ borderColor: VIOLET, color: VIOLET }}
							>
								View All Agile Business Solutions
							</a>
							<h3 className="mb-3 font-bold text-gray-900 text-lg">
								Explore Solutions For:
							</h3>
							<ul className="space-y-1">
								{[
									"Agile Teams",
									"Agile Team Leaders",
									"Agile Coaches and Consultants",
									"Software Developers",
								].map((item) => (
									<li className="flex items-center gap-2" key={item}>
										<span
											className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
											style={{ background: VIOLET }}
										/>
										<a
											className="text-base hover:underline"
											href="/certifications/agile-acp"
											style={{ color: VIOLET }}
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="overflow-hidden rounded">
							<img
								alt="Agile business solutions"
								className="w-full rounded object-cover"
								height={600}
								src="/images/business-solutions/agile.jpg"
								width={800}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ── Global Accreditation Center ──────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 py-12">
				<h2 className="mb-4 font-bold text-2xl text-gray-900 lg:text-3xl">
					Global Accreditation Center
				</h2>
				<p className="mb-6 max-w-3xl text-base text-gray-700 leading-relaxed">
					PMI's Global Accreditation Center for Project Management Education
					Programs (GAC) is the premier accrediting body for project management
					and related degree programs worldwide.
				</p>
				<a
					className="inline-block rounded border px-5 py-2.5 font-semibold text-sm transition hover:bg-gray-100"
					href="/contact"
					style={{ borderColor: VIOLET, color: VIOLET }}
				>
					Find a Program
				</a>
			</div>

			{/* ── Case Studies + White Papers / How Can We Help ────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 pb-16">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
					<div>
						<h2 className="mb-3 font-bold text-2xl text-gray-900 lg:text-3xl">
							Case Studies
						</h2>
						<p className="mb-2 text-base text-gray-700 leading-relaxed">
							Our collection of case studies highlights how organizations are
							implementing project management practices and using PMI products,
							programs or services to fulfill business initiatives and overcome
							challenges.
						</p>
						<a
							className="inline-block font-bold text-base hover:underline"
							href="/business-solutions/case-studies"
							style={{ color: VIOLET }}
						>
							View Case Studies
						</a>

						<h2 className="mt-8 mb-3 font-bold text-2xl text-gray-900 lg:text-3xl">
							White Papers
						</h2>
						<p className="mb-2 text-base text-gray-700 leading-relaxed">
							Learn how the strategic and committed use project, program and
							portfolio management supports greater success for organizations.
						</p>
						<a
							className="inline-block font-bold text-base hover:underline"
							href="/contact"
							style={{ color: VIOLET }}
						>
							Explore White Papers
						</a>
					</div>

					{/* How Can We Help? */}
					<div className="h-fit rounded p-6" style={{ background: GRAY_LIGHT }}>
						<h2 className="mb-3 font-bold text-gray-900 text-xl">
							How Can We Help?
						</h2>
						<p className="mb-5 text-base text-gray-700 leading-relaxed">
							Whether experienced or new to project management, PMI provides the
							resources, connections, and solutions to support your team.
						</p>
						<a
							className="inline-block rounded border px-5 py-2.5 font-semibold text-sm transition hover:bg-gray-200"
							href="/contact"
							style={{ borderColor: VIOLET, color: VIOLET }}
						>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
