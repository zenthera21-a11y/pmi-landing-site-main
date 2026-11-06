import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/business-solutions/agile-technical-solutions"
)({
	component: RouteComponent,
});

const PURPLE = "#6629b2";

const LEFT_NAV = [
	{
		label: "Solutions for Software Developers",
		href: "/business-solutions/agile-technical-solutions",
		active: true,
	},
	{ label: "Talent Management", href: "/business-solutions/talent-management" },
	{ label: "Case Studies", href: "/business-solutions/case-studies" },
	{
		label: "Government Activities & Advocacy",
		href: "/business-solutions/government-activities-advocacy",
	},
	{ label: "How Can We Help?", href: "/contact" },
];

const COURSES = [
	{
		title: "Design Patterns Thinking",
		img: "https://www.pmi.org/-/media/pmi/other-images/business-solutions/cropped/seminar-group-meeting-cropped.jpg?h=819&iar=0&w=800&rev=10f73c86a3894b45b3df5e0e0361556a",
		alt: "Seminar-Group-Meeting-cropped",
		body: "Learn to analyze problems and create high-quality solutions using a shared language of design.",
		href: "/contact",
	},
	{
		title: "Advanced Software Design",
		img: "https://www.pmi.org/-/media/pmi/other-images/business-solutions/cropped/team-sticky-notes-wall-cropped.jpg?h=819&iar=0&w=800&rev=8252d0e1658f464d9d12425711771923",
		alt: "team-sticky-notes-wall-cropped",
		body: "Solve more complex problems with a deeper application of patterns.",
		href: "/contact",
	},
	{
		title: "Sustainable Test-Driven Development",
		img: "https://www.pmi.org/-/media/pmi/other-images/business-solutions/cropped/young-professionals-cropped.jpg?h=819&iar=0&w=800&rev=bf6ae45d52df43e29e4f427701ab39fd",
		alt: "young-professionals-cropped",
		body: "Learn to write maintainable tests that drive analysis, design, and flexible evolution.",
		href: "/contact",
	},
	{
		title: "Acceptance Test-Driven Development",
		img: "https://www.pmi.org/-/media/pmi/other-images/business-solutions/cropped/teamworkinginbreakoutroom-cropped.jpg?h=819&iar=0&w=800&rev=954abf899c664cbfa46996974b0b9e41",
		alt: "TeamWorkingInBreakoutRoom-cropped",
		body: "Learn to collaborate effectively across the organization, and with all audiences, using acceptance tests.",
		href: "/contact",
	},
];

function RouteComponent() {
	return (
		<div className="bg-white">
			{/* ── Heading container: breadcrumb + title row + social ────────── */}
			<div className="mx-auto max-w-7xl px-4 pt-5">
				{/* Breadcrumb */}
				<nav aria-label="Breadcrumbs" className="mb-3">
					<ol className="flex flex-wrap items-center gap-x-1 text-sm">
						<li>
							<a
								className="font-medium hover:underline"
								href="/"
								style={{ color: PURPLE }}
							>
								Home
							</a>
						</li>
						<li aria-hidden className="text-gray-400">
							/
						</li>
						<li>
							<a
								className="font-medium hover:underline"
								href="/business-solutions"
								style={{ color: PURPLE }}
							>
								PMI for Organizations
							</a>
						</li>
					</ol>
				</nav>

				{/* H1 (col-md-7) + Social (col-md-5) — same row */}
				<div className="flex flex-col gap-3 pb-4 sm:flex-row sm:items-start">
					<div className="min-w-0 flex-[7]">
						<h1 className="font-bold text-3xl text-gray-900 leading-tight lg:text-4xl">
							Solutions for Software Developers
						</h1>
					</div>
					<div className="flex flex-[5] shrink-0 flex-wrap items-start justify-start gap-1.5 sm:justify-end">
						<span
							className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-semibold text-white text-xs"
							style={{ background: "#0a66c2" }}
						>
							<svg
								aria-hidden
								fill="currentColor"
								height="14"
								viewBox="0 0 24 24"
								width="14"
							>
								<title>LinkedIn</title>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
							Share
						</span>
						<span
							className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-semibold text-white text-xs"
							style={{ background: "#25d366" }}
						>
							<svg
								aria-hidden
								fill="currentColor"
								height="14"
								viewBox="0 0 24 24"
								width="14"
							>
								<title>WhatsApp</title>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
								<path d="M11.999 0C5.373 0 0 5.373 0 12c0 2.117.554 4.107 1.523 5.832L0 24l6.335-1.501A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 11.999 0zm.001 21.818a9.818 9.818 0 01-5.015-1.374l-.36-.214-3.726.882.924-3.617-.235-.372A9.818 9.818 0 012.18 12c0-5.415 4.404-9.818 9.82-9.818 5.415 0 9.818 4.403 9.818 9.818 0 5.416-4.403 9.818-9.818 9.818z" />
							</svg>
							Share
						</span>
						<span
							className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-semibold text-white text-xs"
							style={{ background: "#000" }}
						>
							<svg
								aria-hidden
								fill="currentColor"
								height="14"
								viewBox="0 0 24 24"
								width="14"
							>
								<title>X</title>
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
							Post
						</span>
						<span
							className="inline-flex items-center gap-1.5 rounded px-3 py-1.5 font-semibold text-white text-xs"
							style={{ background: "#1877f2" }}
						>
							<svg
								aria-hidden
								fill="currentColor"
								height="14"
								viewBox="0 0 24 24"
								width="14"
							>
								<title>Facebook</title>
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
							</svg>
							Share
						</span>
					</div>
				</div>
			</div>

			{/* ── Left nav (col-lg-2) + Main content (col-lg-10) ───────────── */}
			<div className="mx-auto max-w-7xl px-4 pb-16">
				<div className="flex gap-0">
					{/* Left nav — desktop only */}
					<nav
						aria-label="Section navigation"
						className="hidden w-48 shrink-0 pr-4 lg:block"
					>
						<ul className="space-y-0.5 text-sm">
							{LEFT_NAV.map((item) => (
								<li key={item.href}>
									<a
										className={`block rounded px-3 py-2 font-medium leading-snug transition-colors ${
											item.active
												? "text-[#1d6fa8]"
												: "text-gray-600 hover:text-gray-900"
										}`}
										href={item.href}
										style={item.active ? { background: "#d0eaf8" } : undefined}
									>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Main content — col-lg-10, border-start */}
					<div className="min-w-0 flex-1 lg:border-l lg:pl-8">
						{/* ── Wide row: intro col-md-8 | why da col-md-4 ─────── */}
						<div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-12">
							<div className="md:col-span-8">
								<h2 className="mb-3 font-bold text-2xl text-gray-900">
									Disciplined Agile<sup>®</sup> Technical Training
								</h2>
								<p className="mb-3 text-base text-gray-700 leading-relaxed">
									The agile movement in software represents a game changer when
									it comes to efficient work, responsiveness to market forces
									and opportunities, and the ability of technical teams to align
									themselves with business value.
								</p>
								<p className="mb-3 text-base text-gray-700 leading-relaxed">
									To achieve this with your team, there are two key principles
									that underlie every agile process:
								</p>
								<ul className="mb-6 list-disc space-y-2 pl-5 text-base text-gray-700 leading-relaxed">
									<li>
										Embrace Change. We must allow for new requirements to be
										introduced, even late in the development cycle, without
										causing damage, delays, and waste. This requires both
										flexibility and a focus on technical quality.
									</li>
									<li>
										Validate Frequently (with stakeholders). Frequent validation
										means that we correct early when misunderstandings are
										discovered, or when customer needs require something
										different from what was initially planned. This helps to
										eliminate wasteful work and allows us to be more responsive.
									</li>
								</ul>

								<h2 className="mb-3 font-bold text-2xl text-gray-900">
									Our Technical Training Offerings
								</h2>
								<p className="text-base text-gray-700 leading-relaxed">
									Embracing change and validating frequently necessitate
									flexibility without overdesign and a focus on quality. The
									technical training that we offer in Disciplined Agile is all
									about this. Our courses are:
								</p>
							</div>

							<div className="md:col-span-4">
								<h2 className="mb-3 font-bold text-2xl text-gray-900">
									Why Disciplined Agile?
								</h2>
								<p className="mb-2 text-base text-gray-700">
									Great organizations need great <b>software</b>.
								</p>
								<p className="mb-2 text-base text-gray-700">
									Great software requires great <b>developers</b>.
								</p>
								<p className="text-base text-gray-700">
									Great developers require great <b>skills</b>.
								</p>
							</div>
						</div>

						{/* ── Courses: 2 per row (col-md-6 each) ─────────────── */}
						<div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
							{COURSES.map((course) => (
								<div key={course.href}>
									<h2 className="mb-3 font-bold text-2xl text-gray-900">
										{course.title}
									</h2>
									<img
										alt={course.alt}
										className="mb-3 w-full"
										height={819}
										src={course.img}
										width={800}
									/>
									<p className="mb-4 text-base text-gray-700 leading-relaxed">
										{course.body}
									</p>
									<a
										className="inline-flex items-center rounded px-4 py-2 font-semibold text-sm text-white transition hover:opacity-90"
										href={course.href}
										rel="noopener noreferrer"
										style={{ background: PURPLE }}
										target="_blank"
									>
										{course.title}
									</a>
								</div>
							))}
						</div>

						{/* ── Advertisement ──────────────────────────────────── */}
						<div className="mt-16 border-t pt-6">
							<p className="mb-2 font-semibold text-gray-400 text-xs uppercase tracking-wide">
								Advertisement
							</p>
							<div className="h-20 w-full rounded bg-gray-100" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
