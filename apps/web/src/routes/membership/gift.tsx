import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/membership/gift")({
	component: RouteComponent,
});

const PMI_DARK = "#200f3b";

const GIFT_REASONS = [
	{
		title: "For a Colleague",
		body: "Help a teammate grow their project management skills and accelerate their career with the world's leading PM community.",
	},
	{
		title: "For a Mentee",
		body: "Give someone you're guiding the tools, resources, and certifications they need to reach their potential.",
	},
	{
		title: "For a Graduate",
		body: "Celebrate a new grad's milestone with a gift that opens doors — discounted certifications, global community, and more.",
	},
	{
		title: "For a Career Changer",
		body: "Support someone making the move into project management with the resources and network to make their transition a success.",
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
						Gift a PMI Membership
					</h1>
					<p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
						Help friends and colleagues level up their careers with the power
						and perks of PMI membership. The perfect gift for any project
						professional.
					</p>
					<Link
						className="mt-10 inline-flex h-12 items-center rounded-full bg-white px-10 font-aeonik font-semibold text-sm transition hover:bg-white/90"
						resetScroll
						style={{ color: PMI_DARK }}
						to="/contact"
					>
						Gift a Membership
					</Link>
				</div>
			</section>

			{/* Who to gift */}
			<section className="bg-[#f8f5f0] py-16 lg:py-24">
				<div className="mx-auto max-w-6xl px-6">
					<h2
						className="mb-12 text-center font-aeonik font-bold text-3xl lg:text-4xl"
						style={{ color: PMI_DARK }}
					>
						The Perfect Gift For…
					</h2>
					<div className="grid gap-6 sm:grid-cols-2">
						{GIFT_REASONS.map((r) => (
							<div
								className="rounded-2xl border border-gray-200 bg-white p-8"
								key={r.title}
							>
								<h3
									className="mb-3 font-aeonik font-semibold text-xl"
									style={{ color: PMI_DARK }}
								>
									{r.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{r.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* What they get */}
			<section className="bg-white py-16 lg:py-24">
				<div className="mx-auto max-w-4xl px-6 text-center">
					<h2
						className="font-aeonik font-bold text-3xl lg:text-4xl"
						style={{ color: PMI_DARK }}
					>
						What Your Gift Unlocks
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
						A PMI Professional Membership gives the recipient 12 months of
						access to discounted certifications, the PMI eLearning library,
						career tools, and a global community of 1.7M+ project professionals.
					</p>
					<Link
						className="mt-8 inline-flex h-12 items-center rounded-full border-2 px-8 font-aeonik font-semibold text-sm transition hover:bg-gray-50"
						resetScroll
						style={{ borderColor: PMI_DARK, color: PMI_DARK }}
						to="/membership/professional"
					>
						See All Benefits
					</Link>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 lg:py-24" style={{ background: PMI_DARK }}>
				<div className="mx-auto max-w-2xl px-6 text-center">
					<h2 className="font-aeonik font-bold text-3xl text-white lg:text-4xl">
						Ready to give the gift of growth?
					</h2>
					<p className="mt-4 text-lg text-white/75">
						Contact us to purchase a gift membership for someone in your life.
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
