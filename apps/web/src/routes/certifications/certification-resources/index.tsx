import { IconArrowRight, IconChevronRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/certifications/certification-resources/"
)({
	component: RouteComponent,
});

const pduCategories = [
	{
		title: "Ways of Working",
		pdus: "8 PDUs",
		color: "#200f3b",
		bg: "#f0ebe4",
		description:
			"Courses on predictive, agile, and hybrid project delivery approaches. Includes formal training, webinars, and self-directed learning.",
		examples: [
			"Online courses & eLearning",
			"Instructor-led training",
			"PMI webinars",
			"Workshops and seminars",
		],
	},
	{
		title: "Power Skills",
		pdus: "8 PDUs",
		color: "#0a4a5c",
		bg: "#e8f4f7",
		description:
			"Leadership, communication, and collaborative skills that make you a stronger, more effective project professional.",
		examples: [
			"Leadership development programs",
			"Team facilitation training",
			"Negotiation & communication courses",
			"Coaching & mentoring",
		],
	},
	{
		title: "Business Acumen",
		pdus: "8 PDUs",
		color: "#1a5c2a",
		bg: "#e8f4eb",
		description:
			"Strategic thinking, finance, and organizational awareness skills that elevate your value as a project leader.",
		examples: [
			"Business strategy courses",
			"Finance for non-finance managers",
			"Data analysis & AI literacy",
			"Industry-specific knowledge",
		],
	},
];

const earningMethods = [
	{
		icon: "📚",
		title: "Education",
		description:
			"Take courses, attend workshops, read publications, or complete formal training aligned to the PMI Talent Triangle®.",
	},
	{
		icon: "🎤",
		title: "Giving Back",
		description:
			"Teach others, present at events, volunteer with PMI chapters, or create content for the project management community.",
	},
	{
		icon: "💼",
		title: "Working",
		description:
			"Earn PDUs by working as a practitioner in your professional role, applying project management skills on real projects.",
	},
];

const certificationCycles = [
	{ name: "PMP®", pdus: 60, cycle: "3-year" },
	{ name: "CAPM®", pdus: 15, cycle: "3-year" },
	{ name: "PMI-ACP®", pdus: 30, cycle: "3-year" },
	{ name: "PMI-RMP®", pdus: 30, cycle: "3-year" },
	{ name: "PMI-PMOCP™", pdus: 30, cycle: "3-year" },
	{ name: "PgMP®", pdus: 60, cycle: "3-year" },
	{ name: "PfMP®", pdus: 60, cycle: "3-year" },
	{ name: "PMI-CP™", pdus: 30, cycle: "3-year" },
	{ name: "PMI-CPMAI™", pdus: 30, cycle: "3-year" },
];

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			{/* Breadcrumb */}
			<div className="border-[#e8e0d8] border-b bg-white">
				<div className="mx-auto max-w-6xl px-6 py-3 md:px-10">
					<nav className="flex items-center gap-1.5 text-[#6b5b7b] text-sm">
						<Link
							className="hover:text-[#200f3b] hover:underline"
							to="/certifications"
						>
							Certifications
						</Link>
						<IconChevronRight
							aria-hidden="true"
							className="size-3.5 shrink-0"
						/>
						<span className="text-[#200f3b]">Certification Resources</span>
					</nav>
				</div>
			</div>

			{/* Hero */}
			<section className="relative overflow-hidden bg-[#200f3b] py-16 md:py-20 lg:py-24">
				<img
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10"
					height={800}
					src="/assets/shared/grainy-texture.webp"
					width={1200}
				/>
				<div className="relative mx-auto max-w-6xl px-6 md:px-10">
					<div className="max-w-3xl">
						<span className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-1 font-medium text-sm text-white">
							Certification Resources
						</span>
						<h1 className="mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl">
							Maintain your PMI certification
						</h1>
						<p className="text-lg text-white/80 leading-relaxed md:text-xl">
							Earning your certification is a big accomplishment — maintaining
							it keeps you at the cutting edge of the profession. Learn how to
							earn PDUs and keep your credentials active.
						</p>
					</div>
				</div>
			</section>

			{/* What are PDUs */}
			<section className="bg-white py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
						<div>
							<h2 className="mb-6 font-bold font-heading text-3xl text-[#200f3b] leading-tight md:text-4xl">
								What are Professional Development Units (PDUs)?
							</h2>
							<p className="mb-4 text-[#4a4a6a] text-base leading-relaxed">
								PDUs are the unit of measure used to quantify approved learning
								and professional service. One PDU equals one hour spent
								learning, teaching, or volunteering in ways that advance the
								project management profession.
							</p>
							<p className="text-[#4a4a6a] text-base leading-relaxed">
								To maintain your PMI certification, you must earn a set number
								of PDUs within each 3-year certification cycle and report them
								through PMI's Continuing Certification Requirements System
								(CCRS).
							</p>
						</div>
						<div className="rounded-2xl bg-[#f8f5f0] p-8">
							<h3 className="mb-6 font-bold font-heading text-[#200f3b] text-xl">
								PDUs required per certification
							</h3>
							<div className="flex flex-col gap-3">
								{certificationCycles.map((cert) => (
									<div
										className="flex items-center justify-between border-[#e8e0d8] border-b pb-3 last:border-0 last:pb-0"
										key={cert.name}
									>
										<span className="font-medium text-[#200f3b]">
											{cert.name}
										</span>
										<span className="rounded-full bg-[#200f3b] px-3 py-1 font-bold text-sm text-white">
											{cert.pdus} PDUs / {cert.cycle}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3 Ways to Earn PDUs */}
			<section className="bg-[#f8f5f0] py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<h2 className="mb-4 text-center font-bold font-heading text-3xl text-[#200f3b] leading-tight md:text-4xl">
						3 ways to earn PDUs
					</h2>
					<p className="mx-auto mb-12 max-w-2xl text-center text-[#6b5b7b] text-base leading-relaxed">
						PDUs can be earned across three categories aligned to the PMI Talent
						Triangle®. All three count toward your maintenance requirement.
					</p>
					<div className="grid gap-6 md:grid-cols-3">
						{earningMethods.map((method) => (
							<div
								className="flex flex-col gap-4 rounded-2xl border border-[#e8e0d8] bg-white p-8"
								key={method.title}
							>
								<span className="text-4xl">{method.icon}</span>
								<h3 className="font-bold font-heading text-[#200f3b] text-xl">
									{method.title}
								</h3>
								<p className="text-[#4a4a6a] text-sm leading-relaxed">
									{method.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* PDU Categories */}
			<section className="bg-white py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<h2 className="mb-4 font-bold font-heading text-3xl text-[#200f3b] leading-tight md:text-4xl">
						The PMI Talent Triangle®
					</h2>
					<p className="mb-12 max-w-2xl text-[#6b5b7b] text-base leading-relaxed">
						PDUs must be distributed across three skill areas. Each area
						reflects what today's project professionals need to deliver value.
					</p>
					<div className="grid gap-6 md:grid-cols-3">
						{pduCategories.map((cat) => (
							<div
								className="flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#e8e0d8]"
								key={cat.title}
							>
								<div className="px-8 py-6" style={{ backgroundColor: cat.bg }}>
									<span
										className="mb-1 block font-bold font-heading text-3xl"
										style={{ color: cat.color }}
									>
										{cat.pdus}
									</span>
									<h3
										className="font-bold font-heading text-xl"
										style={{ color: cat.color }}
									>
										{cat.title}
									</h3>
								</div>
								<div className="flex flex-1 flex-col gap-4 px-8 pb-8">
									<p className="text-[#4a4a6a] text-sm leading-relaxed">
										{cat.description}
									</p>
									<ul className="flex flex-col gap-2">
										{cat.examples.map((ex) => (
											<li
												className="flex items-center gap-2 text-[#4a4a6a] text-sm"
												key={ex}
											>
												<span
													className="h-1.5 w-1.5 shrink-0 rounded-full"
													style={{ backgroundColor: cat.color }}
												/>
												{ex}
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-[#f8f5f0] py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid gap-8 rounded-2xl bg-[#200f3b] p-6 sm:p-10 md:grid-cols-2 md:items-center md:gap-12 md:p-14">
						<div>
							<h2 className="mb-4 font-bold font-heading text-3xl text-white leading-tight md:text-4xl">
								Start earning PDUs today
							</h2>
							<p className="text-base text-white/80 leading-relaxed">
								PMI members get access to hundreds of free PDU-eligible
								resources including webinars, publications, and courses — all
								included with membership.
							</p>
						</div>
						<div className="flex flex-col gap-4 sm:flex-row md:justify-end">
							<Link
								className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								resetScroll
								to="/learning/online-courses"
							>
								Browse Courses
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
							<Link
								className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
								resetScroll
								to="/membership"
							>
								Explore Membership
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
