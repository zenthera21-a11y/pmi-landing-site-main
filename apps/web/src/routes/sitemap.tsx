import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap")({
	component: RouteComponent,
});

interface LinkItem {
	href: string;
	label: string;
}
interface SubSection {
	links: LinkItem[];
	title: string;
}

function SitemapSection({
	heading,
	columns,
}: {
	heading: string;
	columns: SubSection[][];
}) {
	return (
		<div>
			<hr className="mb-6 border-border" />
			<h2 className="mb-6 font-aeonik font-bold text-2xl text-pmi-text-primary">
				{heading}
			</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{columns.map((col, ci) => (
					<div className="space-y-6" key={col[0]?.title ?? ci}>
						{col.map((sub) => (
							<div key={sub.title}>
								<p className="mb-2 font-aeonik font-semibold text-pmi-text-primary">
									{sub.title}
								</p>
								<ul className="space-y-1">
									{sub.links.map((link) => (
										<li key={link.href}>
											<a
												className="font-aeonik text-pmi-text-primary text-sm underline-offset-2 hover:underline"
												href={link.href}
											>
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}

const sections: { heading: string; columns: SubSection[][] }[] = [
	{
		heading: "Certifications",
		columns: [
			[
				{
					title: "Core Certifications",
					links: [
						{
							label: "Certified Associate in Project Management (CAPM)®",
							href: "/certifications/certified-associate-capm",
						},
						{
							label: "Project Management Professional (PMP)®",
							href: "/certifications/project-management-pmp",
						},
						{
							label: "Program Management Professional (PgMP)®",
							href: "/certifications/program-management-pgmp",
						},
						{
							label: "Portfolio Management Professional (PfMP)®",
							href: "/certifications/portfolio-management-pfmp",
						},
					],
				},
				{
					title: "Certification Resources",
					links: [
						{
							label: "Celebrate Your Certification",
							href: "/certifications/certification-resources/digital-badges",
						},
						{
							label: "Maintain & Renew Your Certification",
							href: "/certifications/certification-resources/maintain",
						},
						{
							label: "Check a Certification",
							href: "/certifications/certification-resources/registry",
						},
						{
							label: "Certification FAQs",
							href: "/certifications/certification-resources/faq",
						},
					],
				},
			],
			[
				{
					title: "Specialized Certifications",
					links: [
						{
							label: "PMO Certified Practitioner (PMO-CP)®",
							href: "/certifications",
						},
						{
							label: "PMI Agile Certified Practitioner (PMI-ACP)®",
							href: "/certifications/agile-acp",
						},
						{
							label: "PMI Risk Management Professional (PMI-RMP)®",
							href: "/certifications/risk-management-rmp",
						},
						{
							label: "PMI Professional in Business Analysis (PMI-PBA)®",
							href: "/certifications/business-analysis-pba",
						},
						{
							label: "PMI Construction Professional (PMI-CP)™",
							href: "/certifications/construction",
						},
					],
				},
				{
					title: "Project Management",
					links: [
						{
							label: "What is a Project Manager",
							href: "/about/what-is-a-project-manager",
						},
						{
							label: "What is Project Management",
							href: "/about/what-is-project-management",
						},
						{ label: "What is a Project", href: "/about/what-is-a-project" },
						{ label: "The Matrix Organization", href: "/certifications" },
						{
							label: "Earned Value Management Systems (EVMS)",
							href: "/certifications",
						},
						{ label: "Stakeholder Analysis", href: "/certifications" },
					],
				},
			],
		],
	},
	{
		heading: "Learning",
		columns: [
			[
				{
					title: "Explore by Type",
					links: [
						{ label: "Exam Prep", href: "/learning/exam-prep" },
						{ label: "Online Courses", href: "/learning/online-courses" },
						{
							label: "Free Online Courses",
							href: "/learning/free-online-courses",
						},
						{
							label: "Instructor Led Training",
							href: "/learning/authorized-training-partners",
						},
						{ label: "Webinars", href: "/learning/webinars" },
						{ label: "Academic Programs", href: "/learning/academic-programs" },
					],
				},
				{
					title: "Thought Leadership",
					links: [
						{
							label: "Thought Leadership",
							href: "/learning/thought-leadership",
						},
						{
							label: "Project Management Journal®",
							href: "/learning/project-management-journal",
						},
						{
							label: "Academic Sponsored Research",
							href: "/learning/academic-sponsored-research",
						},
						{ label: "Future of Work", href: "/learning" },
						{ label: "Shaping the Future of PM With AI", href: "/learning" },
						{
							label: "Measuring the Impact of ESG Initiatives",
							href: "/learning",
						},
					],
				},
			],
			[
				{
					title: "Explore by Topic",
					links: [
						{ label: "Agile", href: "/learning/agile" },
						{
							label: "Artificial Intelligence",
							href: "/learning/ai-in-project-management",
						},
						{
							label: "Careers in Project Management",
							href: "/learning/careers",
						},
						{ label: "Sustainability", href: "/learning/sustainability" },
						{
							label: "Explore All Learning Topics",
							href: "/learning/library",
						},
					],
				},
				{
					title: "Standards",
					links: [
						{ label: "PMI Standards & Publications", href: "/standards" },
						{ label: "PMBOK Guide", href: "/standards/pmbok" },
						{
							label: "PMI Standards+",
							href: "/standards/pmi-standards-plus",
						},
						{ label: "About Standards", href: "/standards/about" },
					],
				},
			],
		],
	},
	{
		heading: "Membership",
		columns: [
			[
				{
					title: "Join PMI",
					links: [
						{ label: "About PMI Membership", href: "/membership" },
						{
							label: "Individual Membership",
							href: "/membership/professional",
						},
						{
							label: "Student Membership",
							href: "/membership/student",
						},
						{ label: "Chapter Membership", href: "/membership/chapters" },
						{ label: "Membership FAQs", href: "/membership/faq" },
						{ label: "PMI Infinity AI Tool", href: "/infinity" },
						{
							label: "Business Reading Center",
							href: "/membership/business-reading-center",
						},
					],
				},
			],
			[
				{
					title: "Chapters",
					links: [
						{
							label: "APAC Chapters",
							href: "/membership/chapters/asia-pacific",
						},
						{
							label: "Europe Chapters",
							href: "/membership/chapters/europe",
						},
						{
							label: "MENA Chapters",
							href: "/membership/chapters/middle-east-north-africa",
						},
						{
							label: "South Asia Chapters",
							href: "/membership/chapters/south-asia",
						},
						{
							label: "Sub-Saharan Africa Chapters",
							href: "/membership/chapters/sub-saharan-africa",
						},
						{
							label: "Latin America Chapters",
							href: "/membership/chapters/latin-america",
						},
						{
							label: "North America Chapters",
							href: "/membership/chapters/north-america",
						},
					],
				},
			],
		],
	},
	{
		heading: "Resources",
		columns: [
			[
				{
					title: "Discover & Learn",
					links: [
						{ label: "Templates and Insights", href: "/insights" },
						{
							label: "Projectified Podcast®",
							href: "/old-projectified-podcast",
						},
						{ label: "The PMI Blog", href: "/blog" },
						{
							label: "PMI Job Board",
							href: "/business-solutions/talent-management",
						},
						{ label: "Career Navigator", href: "/career-navigator" },
					],
				},
			],
			[
				{
					title: "Agile Business Solutions",
					links: [
						{
							label: "Solutions for Agile Teams",
							href: "/business-solutions",
						},
						{
							label: "Solutions for Agile Team Leaders",
							href: "/business-solutions",
						},
						{
							label: "Solutions for Agile Coaches and Consultants",
							href: "/business-solutions",
						},
						{
							label: "Solutions for Software Developers",
							href: "/business-solutions/agile-technical-solutions",
						},
					],
				},
			],
		],
	},
	{
		heading: "Get Involved",
		columns: [
			[
				{
					title: "Volunteer Opportunities",
					links: [
						{ label: "Volunteer", href: "/volunteer" },
						{
							label: "Search Volunteer Opportunities",
							href: "/volunteer",
						},
						{
							label: "Leadership Institute",
							href: "/volunteer/leadership-institute",
						},
						{
							label: "Social Impact Initiatives",
							href: "/volunteer/social-impact",
						},
						{
							label: "PMI Educational Foundation",
							href: "/pmi-educational-foundation",
						},
						{
							label: "Project Managers Without Borders",
							href: "/volunteer/project-managers-without-borders",
						},
						{
							label: "UN Sustainable Development Goals",
							href: "/volunteer/sustainability-goals",
						},
					],
				},
			],
			[
				{
					title: "PMI for Organizations",
					links: [
						{
							label: "Enterprise & Commercial Partners",
							href: "/business-solutions/commercial-partners",
						},
						{
							label: "Training Partners",
							href: "/contact",
						},
						{
							label: "Government",
							href: "/business-solutions/government-activities-advocacy",
						},
						{
							label: "Academic Institutions",
							href: "/business-solutions/academic-institutions",
						},
						{
							label: "Non-Profits and NGOs",
							href: "/business-solutions/non-profits",
						},
						{
							label: "Global Executive Council",
							href: "/business-solutions/the-global-executive-council",
						},
						{
							label: "Job Board & Recruiting",
							href: "/business-solutions/talent-management",
						},
						{
							label: "Business Transformation",
							href: "/business-solutions/transformation",
						},
					],
				},
			],
		],
	},
	{
		heading: "About PMI",
		columns: [
			[
				{
					title: "Getting Started",
					links: [
						{ label: "Career Navigator", href: "/career-navigator" },
						{ label: "PMI Study Hall", href: "/learning/exam-prep" },
					],
				},
			],
			[
				{
					title: "What We Do",
					links: [
						{ label: "Impact & Sustainability", href: "/about/impact" },
						{
							label: "Culture & DEI",
							href: "/about/culture-and-diversity",
						},
						{ label: "Ethics", href: "/about/ethics" },
						{ label: "Press & Media", href: "/about/press-media" },
						{ label: "Media Kit", href: "/about/press-media/kit" },
					],
				},
			],
		],
	},
];

function RouteComponent() {
	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* Hero */}
			<div className="w-full bg-pmi-surface-secondary">
				<div className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Sitemap</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:px-4">
					<h1 className="mb-6 font-aeonik font-bold text-header-md text-pmi-text-primary sm:text-header-xl">
						PMI Sitemap
					</h1>
				</div>
			</div>

			{/* Content card */}
			<div
				className="relative w-full overflow-hidden bg-pmi-surface-primary"
				style={{
					borderRadius: "var(--pmi-rounded-md) var(--pmi-rounded-md) 0 0",
					marginTop: "calc(-1 * var(--pmi-rounded-md))",
				}}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-6 lg:px-4 lg:py-10">
					<div className="space-y-10">
						{sections.map((s) => (
							<SitemapSection
								columns={s.columns}
								heading={s.heading}
								key={s.heading}
							/>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
