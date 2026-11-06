import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/membership/chapters")({
	component: RouteComponent,
});

const PMI_DARK = "#200f3b";

const CHAPTER_BENEFITS = [
	{
		title: "Local Networking",
		body: "Meet project professionals in your city at chapter events, workshops, and socials designed to build real connections.",
	},
	{
		title: "Professional Development",
		body: "Earn PDUs and grow your skills through chapter-hosted training, seminars, and certification prep sessions.",
	},
	{
		title: "Mentorship Programs",
		body: "Find a mentor or become one. PMI chapters connect experienced professionals with those earlier in their careers.",
	},
	{
		title: "Volunteer Leadership",
		body: "Step into chapter leadership roles to build management experience, expand your network, and give back to the profession.",
	},
	{
		title: "Global Events",
		body: "Get discounted access to PMI global events, symposia, and conferences organized in partnership with local chapters.",
	},
	{
		title: "Community Impact",
		body: "Participate in community outreach and pro bono projects that make a difference while building your portfolio.",
	},
];

const REGIONS = [
	{ name: "North America", count: "120+" },
	{ name: "Europe, Middle East & Africa", count: "100+" },
	{ name: "Asia Pacific", count: "80+" },
	{ name: "Latin America & Caribbean", count: "40+" },
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
						PMI Chapters
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
						Become part of your local PMI chapter to broaden your professional
						circle, earn PDUs, and gain fresh perspectives from project
						professionals near you.
					</p>
					<Link
						className="mt-10 inline-flex h-12 items-center rounded-full bg-white px-10 font-aeonik font-semibold text-sm transition hover:bg-white/90"
						resetScroll
						style={{ color: PMI_DARK }}
						to="/contact"
					>
						Find Your Chapter
					</Link>
				</div>
			</section>

			{/* Stats */}
			<section className="border-gray-200 border-b bg-white py-12">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
						{REGIONS.map((r) => (
							<div className="text-center" key={r.name}>
								<p
									className="font-aeonik font-bold text-4xl"
									style={{ color: PMI_DARK }}
								>
									{r.count}
								</p>
								<p className="mt-2 text-gray-600 text-sm">{r.name}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="bg-[#f8f5f0] py-16 lg:py-24">
				<div className="mx-auto max-w-6xl px-6">
					<h2
						className="mb-12 text-center font-aeonik font-bold text-3xl lg:text-4xl"
						style={{ color: PMI_DARK }}
					>
						Why Join a Chapter?
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{CHAPTER_BENEFITS.map((b) => (
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
						Connect with your community
					</h2>
					<p className="mt-4 text-lg text-white/75">
						Join a PMI chapter to expand your network and accelerate your career
						in project management.
					</p>
					<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
						<Link
							className="inline-flex h-12 items-center rounded-full bg-white px-10 font-aeonik font-semibold text-sm transition hover:bg-white/90"
							resetScroll
							style={{ color: PMI_DARK }}
							to="/contact"
						>
							Find Your Chapter
						</Link>
						<Link
							className="inline-flex h-12 items-center gap-2 rounded-full border border-white/50 px-8 font-aeonik font-semibold text-sm text-white transition hover:bg-white/10"
							resetScroll
							to="/membership"
						>
							Back to Membership
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
