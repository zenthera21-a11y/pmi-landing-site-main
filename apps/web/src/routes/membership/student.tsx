import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/membership/student")({
	component: RouteComponent,
});

const PMI_DARK = "#200f3b";

const BENEFITS = [
	{
		title: "Discounted Certifications",
		body: "Access PMI certifications like the CAPM® at heavily discounted student pricing to kick-start your career.",
	},
	{
		title: "Student Chapter Access",
		body: "Connect with fellow students through PMI's global network of student chapters at colleges and universities worldwide.",
	},
	{
		title: "Career Resources",
		body: "Tap into PMI's career tools, job board, and industry research to prepare for your first project management role.",
	},
	{
		title: "eLearning Library",
		body: "Access thousands of courses, templates, and project management resources at member-only rates.",
	},
	{
		title: "Mentorship Opportunities",
		body: "Connect with experienced PMI members who can guide your career and help you navigate the project management profession.",
	},
	{
		title: "PDU Opportunities",
		body: "Begin earning Professional Development Units early through webinars, events, and learning that count toward future certifications.",
	},
];

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			{/* Hero */}
			<section style={{ background: PMI_DARK }}>
				<div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
					<span className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1 font-medium text-sm text-white/80">
						Membership
					</span>
					<h1 className="font-aeonik font-bold text-4xl text-white lg:text-6xl">
						PMI Student Membership
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
						Launch your project management career for less. Full-time college
						and university students can join PMI at a deeply discounted rate.
					</p>
					<div className="mt-10 flex flex-wrap items-center justify-center gap-4">
						<Link
							className="inline-flex h-12 items-center rounded-full bg-white px-8 font-aeonik font-semibold text-sm transition hover:bg-white/90"
							resetScroll
							style={{ color: PMI_DARK }}
							to="/contact"
						>
							Join Now
						</Link>
						<Link
							className="inline-flex h-12 items-center gap-2 rounded-full border border-white/50 px-8 font-aeonik font-semibold text-sm text-white transition hover:bg-white/10"
							resetScroll
							to="/membership"
						>
							Compare Plans
						</Link>
					</div>
				</div>
			</section>

			{/* Price */}
			<section className="border-gray-200 border-b bg-white py-12">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<p className="font-aeonik text-gray-500 text-lg">
						Annual student membership
					</p>
					<p
						className="mt-2 font-aeonik font-bold text-5xl"
						style={{ color: PMI_DARK }}
					>
						$32{" "}
						<span className="font-normal text-2xl text-gray-400">/ year</span>
					</p>
					<p className="mt-3 text-gray-500 text-sm">
						Must be enrolled full-time at an accredited college or university.
						Valid for 12 months.
					</p>
				</div>
			</section>

			{/* Benefits */}
			<section className="bg-[#f8f5f0] py-16 lg:py-24">
				<div className="mx-auto max-w-6xl px-6">
					<h2
						className="mb-12 text-center font-aeonik font-bold text-3xl lg:text-4xl"
						style={{ color: PMI_DARK }}
					>
						What's Included
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{BENEFITS.map((b) => (
							<div
								className="rounded-2xl border border-gray-200 bg-white p-6"
								key={b.title}
							>
								<h3
									className="mb-3 font-aeonik font-semibold text-lg"
									style={{ color: PMI_DARK }}
								>
									{b.title}
								</h3>
								<p className="text-gray-600 text-sm leading-relaxed">
									{b.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Academic Programs */}
			<section className="bg-white py-16 lg:py-24">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<h2
						className="font-aeonik font-bold text-3xl lg:text-4xl"
						style={{ color: PMI_DARK }}
					>
						Explore Academic Programs
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
						PMI partners with universities worldwide through our Global
						Accreditation Center (GAC) to recognize top-tier project management
						programs.
					</p>
					<Link
						className="mt-8 inline-flex h-12 items-center rounded-full border-2 px-8 font-aeonik font-semibold text-sm transition hover:bg-gray-50"
						resetScroll
						style={{ borderColor: PMI_DARK, color: PMI_DARK }}
						to="/learning/academic-programs"
					>
						View Academic Programs
					</Link>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 lg:py-24" style={{ background: PMI_DARK }}>
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="font-aeonik font-bold text-3xl text-white lg:text-4xl">
						Start your journey today
					</h2>
					<p className="mt-4 text-lg text-white/75">
						Join thousands of students worldwide building the foundation for a
						successful project management career.
					</p>
					<Link
						className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-10 font-aeonik font-semibold text-sm transition hover:bg-white/90"
						resetScroll
						style={{ color: PMI_DARK }}
						to="/contact"
					>
						Get Started
					</Link>
				</div>
			</section>
		</main>
	);
}
