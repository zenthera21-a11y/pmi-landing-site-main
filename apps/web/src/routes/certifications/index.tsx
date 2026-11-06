import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/certifications/")({
	component: RouteComponent,
});

const coreCertifications = [
	{
		badge: "CAPM®",
		title: "Certified Associate in Project Management (CAPM)®",
		experience: "No experience required",
		description:
			"Show the world that you possess the foundational knowledge and skills that project teams demand.",
		slug: "certified-associate-in-project-management-capm",
		shape: "/assets/shared/shape-circle.webp",
		variant: "light" as const,
	},
	{
		badge: "PMP®",
		title: "Project Management Professional (PMP)®",
		experience: "3+ Years of Experience Leading Projects",
		description:
			"The global gold standard in project management certification, validating your ability to lead projects in any industry.",
		slug: "project-management-pmp",
		shape: "/assets/shared/shape-inverted-triangle.webp",
		variant: "dark-purple" as const,
	},
	{
		badge: "PgMP®",
		title: "Program Management Professional (PgMP)®",
		experience: "4-7 years of experience",
		description:
			"Demonstrates advanced expertise in managing multiple, related projects toward a strategic goal.",
		slug: "program-management-pgmp",
		shape: "/assets/shared/shape-pentagon.webp",
		variant: "light" as const,
	},
	{
		badge: "PfMP®",
		title: "Portfolio Management Professional (PfMP)®",
		experience: "8+ years of experience",
		description:
			"Proves you have the advanced skills to align multiple projects and programs with your organization's strategic goals.",
		slug: "portfolio-management-pfmp",
		shape: "/assets/shared/shape-circle.webp",
		variant: "dark-teal" as const,
	},
];

const specializedCertifications = [
	{
		badge: "PMI-ACP®",
		title: "PMI Agile Certified Practitioner (PMI-ACP)®",
		experience: "2+ years of experience",
		description:
			"Validates your ability to apply agile principles across Scrum, Lean, Kanban, and more.",
		slug: "agile-acp",
	},
	{
		badge: "PMI-RMP®",
		title: "PMI Risk Management Professional (PMI-RMP)®",
		experience: "3-5 years of experience",
		description:
			"Demonstrates your expertise to spot threats early and master risk management.",
		slug: "risk-management-rmp",
	},
	{
		badge: "PMI-PMOCP™",
		title: "PMI PMO Certified Professional (PMI-PMOCP)™",
		experience: "3+ years of experience",
		description:
			"Certifies your expertise in leading and shaping Project Management Offices.",
		slug: "pmo-certified-professional-pmi-pmocp",
	},
	{
		badge: "PMI-CP™",
		title: "PMI Construction Professional (PMI-CP)™",
		experience: "3+ years of experience",
		description:
			"The only internationally recognized certification with an in-depth construction industry curriculum.",
		slug: "construction",
	},
	{
		badge: "PMI-PBA®",
		title: "PMI Professional in Business Analysis (PMI-PBA)®",
		experience: "3-5 years of experience",
		description:
			"Recognizes your expertise in business analysis and using techniques to improve project success.",
		slug: "business-analysis-pba",
	},
	{
		badge: "PMI-SP®",
		title: "PMI Scheduling Professional (PMI-SP)®",
		experience: "2-3 years of experience",
		description:
			"Demonstrates your ability to develop and maintain complex project schedules.",
		slug: "scheduling-sp",
	},
	{
		badge: "PMI-CPMAI™",
		title: "PMI Certified Professional in Managing AI (PMI-CPMAI)™",
		experience: "No experience required",
		description:
			"Your license to lead the future of AI — gain the tools to build and manage AI projects effectively.",
		slug: "ai-project-management-cpmai",
	},
	{
		badge: "CSPP™",
		title: "Certified Sustainable Project Professional (CSPP)™",
		experience: "Varies by bundle",
		description:
			"Equips project leaders with the lens and toolkit to uncover hidden value and build resilience into delivery.",
		slug: "sustainability-cspp",
	},
];

type Variant = "light" | "dark-teal" | "dark-purple";

function CoreCard({ cert }: { cert: (typeof coreCertifications)[number] }) {
	const isDark = cert.variant === "dark-teal" || cert.variant === "dark-purple";

	const bgMap: Record<Variant, string> = {
		light: "linear-gradient(180deg, #fdf5ef 0%, #f7ddd0 100%)",
		"dark-teal": "#0a4a5c",
		"dark-purple": "#2d1b69",
	};

	const textColor = isDark ? "#ffffff" : "#200f3b";
	let badgeColor = "#200f3b";
	if (cert.variant === "dark-teal") {
		badgeColor = "#5eead4";
	} else if (cert.variant === "dark-purple") {
		badgeColor = "#c4b5fd";
	}
	const buttonBg = isDark ? "#ffffff" : "#200f3b";
	const buttonText = isDark ? "#200f3b" : "#ffffff";

	return (
		<div
			className="relative flex min-h-[400px] flex-col overflow-hidden rounded-2xl p-8"
			style={{ background: bgMap[cert.variant] }}
		>
			{!isDark && (
				<img
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
					height={400}
					src="/assets/shared/grainy-texture.webp"
					width={400}
				/>
			)}
			<img
				alt=""
				aria-hidden="true"
				className="absolute top-6 right-6 h-24 w-24 object-contain"
				height={96}
				src={cert.shape}
				width={96}
			/>
			<div className="relative mt-20 flex flex-1 flex-col">
				<p
					className="mb-1 font-bold font-heading text-base"
					style={{ color: badgeColor }}
				>
					{cert.badge}
				</p>
				<h3
					className="mb-3 font-bold font-heading text-xl leading-snug"
					style={{ color: textColor }}
				>
					{cert.title}
				</h3>
				<p
					className="mb-2 font-semibold text-sm"
					style={{ color: textColor, opacity: 0.8 }}
				>
					{cert.experience}
				</p>
				<p
					className="mb-6 flex-1 text-sm leading-relaxed"
					style={{ color: textColor, opacity: 0.75 }}
				>
					{cert.description}
				</p>
				<Link
					className="inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 font-medium text-sm transition-opacity hover:opacity-90"
					resetScroll
					style={{ backgroundColor: buttonBg, color: buttonText }}
					to={`/certifications/${cert.slug}`}
				>
					Learn More
					<IconArrowRight aria-hidden="true" className="size-4" />
				</Link>
			</div>
		</div>
	);
}

function SpecializedCard({
	cert,
}: {
	cert: (typeof specializedCertifications)[number];
}) {
	return (
		<div className="flex flex-col gap-4 rounded-2xl border border-[#e8e0d8] bg-white p-6 transition-shadow hover:shadow-md">
			<p className="font-bold font-heading text-[#200f3b] text-sm">
				{cert.badge}
			</p>
			<h3 className="font-bold font-heading text-[#200f3b] text-lg leading-snug">
				{cert.title}
			</h3>
			<p className="font-semibold text-[#6b5b7b] text-xs">{cert.experience}</p>
			<p className="flex-1 text-[#4a4a6a] text-sm leading-relaxed">
				{cert.description}
			</p>
			<Link
				className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-5 py-2 font-medium text-sm text-white transition-opacity hover:opacity-90"
				resetScroll
				to={`/certifications/${cert.slug}`}
			>
				Learn More
				<IconArrowRight aria-hidden="true" className="size-4" />
			</Link>
		</div>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			{/* Hero */}
			<section className="bg-[#200f3b] py-16 md:py-20 lg:py-24">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="max-w-3xl">
						<span className="mb-4 inline-flex rounded-full border border-white/30 px-4 py-1 font-medium text-sm text-white">
							Professional Certifications
						</span>
						<h1 className="mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl">
							Certifications for every stage of your career
						</h1>
						<p className="text-lg text-white/80 leading-relaxed md:text-xl">
							No matter what your professional goals are, we have a
							certification to help you reach them. Globally recognized,
							industry-validated, and built for the future.
						</p>
					</div>
				</div>
			</section>

			{/* Core Certifications */}
			<section className="bg-[#f8f5f0] py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-10">
						<h2 className="mb-2 font-bold font-heading text-3xl text-[#200f3b] md:text-4xl">
							Core Certifications
						</h2>
						<p className="text-[#6b5b7b] text-base leading-relaxed">
							Build a strong foundation with PMI's flagship project management
							credentials.
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{coreCertifications.map((cert) => (
							<CoreCard cert={cert} key={cert.slug} />
						))}
					</div>
				</div>
			</section>

			{/* Specialized Certifications */}
			<section className="bg-white py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="mb-10">
						<h2 className="mb-2 font-bold font-heading text-3xl text-[#200f3b] md:text-4xl">
							Specialized Certifications
						</h2>
						<p className="text-[#6b5b7b] text-base leading-relaxed">
							Go deeper in a specific domain — agile, risk, AI, sustainability,
							and more.
						</p>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{specializedCertifications.map((cert) => (
							<SpecializedCard cert={cert} key={cert.slug} />
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="bg-[#f8f5f0] py-16 md:py-20">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<div className="grid gap-8 rounded-2xl bg-[#200f3b] p-6 sm:p-10 md:grid-cols-2 md:items-center md:p-14">
						<div>
							<h2 className="mb-4 font-bold font-heading text-3xl text-white leading-tight md:text-4xl">
								Not sure where to start?
							</h2>
							<p className="text-base text-white/80 leading-relaxed">
								PMI members save on exam fees and get access to exclusive prep
								resources. Membership pays for itself with just one
								certification.
							</p>
						</div>
						<div className="flex flex-col gap-4 sm:flex-row md:justify-end">
							<Link
								className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								resetScroll
								to="/membership"
							>
								Explore Membership
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
							<Link
								className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
								resetScroll
								to="/contact"
							>
								Talk to Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
