import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/membership/professional")({
	component: RouteComponent,
});

const PMI_DARK = "#200f3b";

const BENEFITS = [
	{
		title: "Certification Discounts",
		body: "Save up to 30% on gold standard PMI certifications including the PMP®, CAPM®, PMI-ACP®, and more — including renewals.",
	},
	{
		title: "PMI Infinity™ AI Coach",
		body: "Exclusive access to PMI's AI-powered coach, built on proprietary PMI data to help you navigate your career and projects.",
	},
	{
		title: "eLearning & Resources",
		body: "Unlock thousands of courses, templates, and tools on PMI's digital platforms at member-only pricing.",
	},
	{
		title: "Global Community",
		body: "Connect with over 1.7 million project professionals worldwide through local chapters, events, and online communities.",
	},
	{
		title: "Salary Survey Access",
		body: "Free access to the PMI Earning Power Salary Survey — the most comprehensive project management salary data available.",
	},
	{
		title: "PDU Opportunities",
		body: "Earn Professional Development Units (PDUs) to maintain your certification with members-only webinars, courses, and events.",
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
						PMI Professional Membership
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
						Unlock exclusive access to career-long learning, gold standard
						certifications at a discount, and a global network of project
						professionals.
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
					<p className="font-aeonik text-gray-500 text-lg">Annual membership</p>
					<p
						className="mt-2 font-aeonik font-bold text-5xl"
						style={{ color: PMI_DARK }}
					>
						$139{" "}
						<span className="font-normal text-2xl text-gray-400">/ year</span>
					</p>
					<p className="mt-3 text-gray-500 text-sm">
						Valid for 12 months from date of purchase. Renews annually.
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

			{/* CTA */}
			<section className="py-16 lg:py-24" style={{ background: PMI_DARK }}>
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="font-aeonik font-bold text-3xl text-white lg:text-4xl">
						Ready to join?
					</h2>
					<p className="mt-4 text-lg text-white/75">
						Start your PMI Professional Membership today and take your career to
						the next level.
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
