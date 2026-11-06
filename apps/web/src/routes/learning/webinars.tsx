import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/learning/webinars")({
	component: RouteComponent,
});

const featuredWebinars = [
	{
		description:
			"When does AI stop helping and start harming? Look at potential uses of AI that could lead to project challenges or, even, failure.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Project HEADWAY: What AI Cannot Do for Project Managers",
	},
	{
		description:
			"Learn how to harness the power of prompting to enhance decision-making, strategic thinking, and communication.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Lead Smarter with AI: Prompting Skills for Leaders",
	},
	{
		description:
			'Explore "artificial integrity," the concept that AI must reflect human values and societal norms for safety and responsibility.',
		href: "/certifications/ai-project-management-cpmai",
		title: "Can Machines Demonstrate Artificial Integrity?",
	},
	{
		description:
			"Explore how AI is reshaping project management. Gain insights, trends, and tips to lead and adapt in today's evolving landscape.",
		href: "/certifications/ai-project-management-cpmai",
		title: "AI Briefing: Strategic Trends Every PM Should Know",
	},
	{
		description:
			"Boost project success with GenAI. Get hands-on skills to streamline workflows, boost productivity, and elevate your practice.",
		href: "/certifications/ai-project-management-cpmai",
		title: "A Project Manager's AI Playbook for Project Success",
	},
	{
		description:
			"Watch an expert Q&A on building business acumen to boost strategy, confidence, and impact in complex project environments.",
		href: "/certifications/project-management-pmp",
		title: "Mastering Business Acumen: Q&A with Project Experts",
	},
];

function HeroSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h1
					className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
					style={{ color: "#200f3b" }}
				>
					Watch, learn and earn
				</h1>
				<p
					className="max-w-3xl text-lg leading-relaxed md:text-xl"
					style={{ color: "#6b5b7b" }}
				>
					Access a library of engaging, on-demand presentations to help you
					learn more and earn professional development units (PDUs). Our
					webinars cover a range of topics including project management best
					practices, upskilling and expert advice on the latest techniques and
					trends in the profession.
				</p>
			</div>
		</section>
	);
}

function FeaturedWebinarsSection() {
	return (
		<section className="bg-[#f8f5f0] py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2
					className="mb-12 font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
					style={{ color: "#200f3b" }}
				>
					Featured Webinars
				</h2>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{featuredWebinars.map((webinar) => (
						<div
							className="flex flex-col gap-4 rounded-2xl border border-[#d4cbc3] bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
							key={webinar.title}
						>
							<span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 font-medium text-[#1d1d35] text-xs">
								<svg
									aria-hidden="true"
									className="size-3.5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8 5v14l11-7z" />
								</svg>
								Video
							</span>
							<h3
								className="font-semibold text-base leading-snug md:text-lg"
								style={{ color: "#200f3b" }}
							>
								{webinar.title}
							</h3>
							<p
								className="text-sm leading-relaxed"
								style={{ color: "#6b5b7b" }}
							>
								{webinar.description}
							</p>
							<Link
								className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
								resetScroll
								to={webinar.href}
							>
								Watch Now
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
						resetScroll
						to="/learning/online-courses"
					>
						View All Webinars
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function ContactUsSection() {
	return (
		<section className="bg-white py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mx-auto max-w-3xl text-center">
					<h2
						className="mb-6 font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
						style={{ color: "#200f3b" }}
					>
						Didn&rsquo;t find a topic that interests you?
					</h2>
					<p
						className="mb-8 text-lg leading-relaxed md:text-xl"
						style={{ color: "#6b5b7b" }}
					>
						We welcome your recommendations.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
						resetScroll
						to="/contact"
					>
						Submit Your Ideas
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function MembershipCtaSection() {
	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0 bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage:
						"linear-gradient(160deg, #061828 0%, #0c2a3d 45%, #0a2233 100%)",
				}}
			/>
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-overlay"
				height={800}
				src="/assets/shared/grainy-texture.webp"
				width={1200}
			/>
			<div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
				<div className="flex flex-col items-center gap-6 text-center">
					<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-[2.75rem]">
						Ready to join PMI?
					</h2>
					<p className="max-w-2xl text-base text-white/85 leading-relaxed md:text-lg">
						Unlock opportunity with members-only access to career-long learning,
						project resources, and our global community.
					</p>
					<div>
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/membership"
						>
							Become a Member
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function TrainingPartnerAd() {
	return (
		<section className="bg-white py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h3
					className="mb-8 text-center font-bold font-heading text-2xl md:text-3xl"
					style={{ color: "#200f3b" }}
				>
					Offer from our training partner
				</h3>
				<Link
					className="mx-auto block max-w-[970px] overflow-hidden rounded-lg"
					resetScroll
					to="/learning/instructor-led-training"
				>
					<img
						alt="Advertisement"
						className="h-auto w-full"
						height={90}
						src="https://img.nui.media/banners/media/41/413669/72/724501/1767223343140_PMP_970x90_3.png"
						width={970}
					/>
				</Link>
				<p className="mt-4 text-center text-sm" style={{ color: "#6b5b7b" }}>
					Advertisement
				</p>
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<HeroSection />
			<FeaturedWebinarsSection />
			<ContactUsSection />
			<MembershipCtaSection />
			<TrainingPartnerAd />
		</main>
	);
}
