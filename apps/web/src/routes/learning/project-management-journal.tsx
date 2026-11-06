import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@pmi-south-asia/ui/components/carousel";
import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learning/project-management-journal")({
	component: RouteComponent,
});

const PURPLE = "#200f3b";
const MUTED = "#6b5b7b";

const currentIssueArticles = [
	{
		authors:
			"Alejandro Romero-Torres, Shankar Sankaran, Carl Marnewick, Alessandro Paravano, Nathan Johnson, and Tomas Blomquist",
		label: "Editorial",
		title:
			"Special Issue: Expanding Research Opportunities for Project Management Researchers from Industry 5.0's Pillars",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728261420386",
	},
	{
		authors:
			"José M. R. C. A. Santos, Filipa S. Freitas, and Gabriela Fernandes",
		title: "Beyond Tech: The Human Element in Industry 5.0 Projects",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728251349774",
	},
	{
		authors: "Eleni Papadonikolaki and Bethan Morgan",
		title: "Leading Psychologically Safe Digitally Enabled Project Teams",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728251362760",
	},
	{
		authors: "Navid Torkanfar, Ehsan Rezazadeh Azar, and Brenda McCabe",
		title:
			"Toward Industry 5.0: A Conceptual Model for Blockchain's Impact on Interorganizational Trust in Construction Project Management",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728251358664",
	},
	{
		authors: "Dominik Kögel, Sandro Meile, and Lourdes Canos-Daros",
		title:
			"Who's Steering Whom and in What Direction? An Experiment on AI Versus Top Management Decision-Making in Projects",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728251379338",
	},
	{
		authors: "Ibrahim Dani, Yongjian Ke, and Suhair Al Kilani",
		title:
			"The Future of Project Management in Industry 5.0: A Narrative Literature Review",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728251386332",
	},
	{
		authors: "Julien Pollack, Ekaterina Anichenko, and Lynn Crawford",
		title: "What Is Project Management Productivity?",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728251413128",
	},
	{
		authors:
			"Nicholas Dacre, Carla Alessandra dos Santos, Tomas Sparano Martins, and Hao Dong",
		title:
			"Industry 5.0 Imperatives and Project-Based Manufacturing: Collaborative Agility as a Translational Capability",
		url: "https://journals.sagepub.com/doi/full/10.1177/87569728261419098",
	},
] as const;

const membershipBenefits = [
	{
		badge: "Free for Members",
		description:
			"Leverage sources generated and vetted by the PMI global community, boost your understanding of complex topics and gain detailed responses for a unique learning experience.",
		title: "PMI Infinity™, your AI-powered co-pilot",
		url: "https://www.pmi.org/infinity",
	},
	{
		badge: "Publication",
		description:
			"The PMBOK® Guide—our flagship publication, now in its seventh edition—has evolved to meet your needs.",
		title: "PMBOK® Guide",
		url: "https://www.pmi.org/standards/pmbok",
	},
] as const;

function HeroSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="max-w-4xl">
					<h1
						className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
						style={{ color: PURPLE }}
					>
						Project Management Journal&reg;
					</h1>
					<p
						className="mb-6 max-w-3xl text-lg leading-relaxed md:text-xl"
						style={{ color: MUTED }}
					>
						The Project Management Journal&rsquo;s mission is to shape thinking
						on the need for and impact of managing projects by publishing
						cutting-edge research that advances theory and evidence-based
						practice.
					</p>
					<p
						className="inline-flex rounded-full bg-[#f8f5f0] px-4 py-2 font-medium text-sm"
						style={{ color: PURPLE }}
					>
						Access to Project Management Journal is a benefit of PMI membership.
					</p>
				</div>
			</div>
		</section>
	);
}

function CurrentIssueSection() {
	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mb-10">
					<h2
						className="mb-4 font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
						style={{ color: PURPLE }}
					>
						In the Current Issue
					</h2>
				</div>

				<div className="divide-y divide-[#d4cbc3]">
					{currentIssueArticles.map((article) => (
						<article
							className="group flex flex-col gap-2 py-6 first:pt-0 last:pb-0"
							key={article.title}
						>
							{article.label && (
								<span className="inline-flex w-fit rounded-full bg-white px-3 py-1 font-semibold text-xs">
									{article.label}
								</span>
							)}
							<a
								className="font-bold font-heading text-lg leading-snug transition-colors hover:underline md:text-xl"
								href={article.url}
								rel="noopener noreferrer"
								style={{ color: PURPLE }}
								target="_blank"
							>
								{article.title}
							</a>
							<p className="text-sm leading-relaxed" style={{ color: MUTED }}>
								By {article.authors}
							</p>
						</article>
					))}
				</div>

				<div className="mt-10">
					<span
						className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
						rel="noopener noreferrer"
						target="_blank"
					>
						Preview the Latest Issue
						<IconArrowRight aria-hidden="true" className="size-4" />
					</span>
				</div>
			</div>
		</section>
	);
}

function OverviewSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mx-auto max-w-4xl">
					<h2
						className="mb-6 font-bold font-heading text-3xl leading-tight md:text-4xl"
						style={{ color: PURPLE }}
					>
						Overview
					</h2>
					<p
						className="mb-6 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						The Project Management Journal seeks to provide knowledge and
						explore emerging topics to support PMI members, the wider project
						profession and help enable project success.
					</p>
					<p
						className="mb-6 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						Projects represent a growing proportion of human activity in large,
						small, private, and public organizations. They are the engine of
						tomorrow&rsquo;s innovation, value creation, and strategic change.
					</p>
					<p
						className="mb-6 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						Project Management Journal addresses project challenges and
						opportunities by encouraging the development and application of
						novel theories, concepts, frameworks, research methods, designs, and
						teaching case studies. It covers:
					</p>
					<ul
						className="mb-8 ml-6 list-disc space-y-1 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						<li>Projects, programs, project portfolios</li>
						<li>Megaprojects</li>
						<li>
							Project-based organizations, project networks, project business
						</li>
						<li>The projectification of society</li>
					</ul>
					<p
						className="mb-6 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						And, it serves audiences in academia and the field:
					</p>
					<ul
						className="mb-8 ml-6 list-disc space-y-1 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						<li>
							Academics and researchers who publish in the journal, as well as
							cite it in their research
						</li>
						<li>Students who use the journal in their studies</li>
						<li>
							Project practitioners who inform project practices through the
							journal&rsquo;s research, webinars, videos, summaries, and
							articles, including Thoughtlets
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

function StatsSection() {
	const stats = [
		{ label: "Current Impact Factor", value: "4.4" },
		{ label: "5-Year Impact Factor", value: "5.7" },
		{ label: "Journal Citation Indicator", value: ".99" },
		{ label: "Readers", value: "428,972" },
	] as const;

	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{stats.map((stat) => (
						<div
							className="flex flex-col items-center gap-2 rounded-2xl border border-[#d4cbc3] bg-white p-8 text-center"
							key={stat.label}
						>
							<span
								className="font-bold font-heading text-4xl leading-none md:text-5xl"
								style={{ color: PURPLE }}
							>
								{stat.value}
							</span>
							<span
								className="max-w-40 text-sm leading-snug"
								style={{ color: MUTED }}
							>
								{stat.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function ContributeSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mx-auto max-w-3xl">
					<h2
						className="mb-6 font-bold font-heading text-3xl leading-tight md:text-4xl"
						style={{ color: PURPLE }}
					>
						Contribute to Project Management Journal
					</h2>
					<p
						className="mb-8 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						We value papers, articles and other contributions from academics and
						researchers both from within and beyond Project Management to
						augment and transform theory and practice.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
						to="/learning/project-management-journal/submissions"
					>
						See what and how to submit
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function CollegeSection() {
	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mx-auto max-w-4xl">
					<span className="inline-flex w-fit rounded-full border border-[#d4cbc3] bg-white px-4 py-1 font-medium text-sm">
						Shaping the Future of Project Studies
					</span>

					<h2
						className="mt-6 mb-4 font-bold font-heading text-3xl leading-tight md:text-4xl"
						style={{ color: PURPLE }}
					>
						Second Call for PMJ College Fellows
					</h2>

					<p
						className="mb-6 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						The PMJ College for Early Career Researchers in Project Studies,
						supported by the{" "}
						<strong style={{ color: PURPLE }}>
							Project Management Institute (PMI)
						</strong>{" "}
						and led by the Project Management Journal (PMJ), announces its{" "}
						<strong style={{ color: PURPLE }}>
							second call for applications
						</strong>{" "}
						(deadline:{" "}
						<strong style={{ color: PURPLE }}>1 February 2026</strong>).
					</p>

					<p
						className="mb-6 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						Launched in 2024, the College is a{" "}
						<strong style={{ color: PURPLE }}>
							global, cross-journal initiative
						</strong>{" "}
						designed to support{" "}
						<strong style={{ color: PURPLE }}>
							PhD candidates and post-doctoral researchers
						</strong>{" "}
						pursuing academic careers in project studies. It provides{" "}
						<strong style={{ color: PURPLE }}>
							mentorship, workshops, international networking
						</strong>
						, and <strong style={{ color: PURPLE }}>visibility</strong> to
						strengthen research excellence and diversity&mdash;particularly
						promoting inclusion from the{" "}
						<strong style={{ color: PURPLE }}>Global South</strong>.
					</p>

					<p
						className="mb-4 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						The <strong style={{ color: PURPLE }}>two-year program</strong>{" "}
						(plus one year of mentorship) includes:
					</p>
					<ul
						className="mb-8 ml-6 list-disc space-y-2 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						<li>
							Four virtual workshops on reading, writing, methods, and career
							development
						</li>
						<li>
							A self-led seminar series and opportunities to engage with leading
							scholars
						</li>
						<li>A participation certificate upon completion</li>
					</ul>

					<div className="mb-8 rounded-2xl border border-[#d4cbc3] bg-white p-6 md:p-8">
						<h3
							className="mb-3 font-bold font-heading text-xl"
							style={{ color: PURPLE }}
						>
							Eligibility & Selection
						</h3>
						<p
							className="mb-4 text-base leading-relaxed md:text-lg"
							style={{ color: MUTED }}
						>
							<strong style={{ color: PURPLE }}>Eligibility:</strong> Doctoral
							students (enrolled for at least one year) or post-docs researching
							in project studies with a commitment to academia.
						</p>
						<p
							className="mb-2 font-semibold text-base leading-relaxed"
							style={{ color: PURPLE }}
						>
							Selection criteria:
						</p>
						<ol
							className="mb-4 ml-6 list-decimal space-y-1 text-base leading-relaxed md:text-lg"
							style={{ color: MUTED }}
						>
							<li>Quality and relevance of submitted paper</li>
							<li>Contribution to project studies</li>
							<li>Commitment to an academic career</li>
						</ol>
						<p
							className="text-base leading-relaxed md:text-lg"
							style={{ color: MUTED }}
						>
							Diversity in gender, geography, and research topics is
							prioritized. PMI also offers limited travel support grants for
							financially constrained participants presenting at major
							conferences.
						</p>
					</div>

					<p className="mb-4 text-sm leading-relaxed" style={{ color: MUTED }}>
						Applications (CV, cover letter, best paper, enrollment proof, and
						optional funding letter) should be emailed to the program
						coordinator.
					</p>
					<p className="text-sm leading-relaxed" style={{ color: MUTED }}>
						The College is led by Joana Geraldi, Shazia Nauman, Jörg Sydow,
						Giorgio Locatelli, Tristano Sainati, Alessandro Paravano, Stewart
						Clegg, and Jonas Söderlund.
					</p>
				</div>
			</div>
		</section>
	);
}

function MembershipBenefitsCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [snapCount, setSnapCount] = useState(0);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	useEffect(() => {
		if (!api) {
			return;
		}

		const onSelect = () => {
			setCurrentIndex(api.selectedScrollSnap());
			setSnapCount(api.scrollSnapList().length);
			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		};

		onSelect();
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [api]);

	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mb-10">
					<h2
						className="font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
						style={{ color: PURPLE }}
					>
						More Membership Benefits
					</h2>
					<p
						className="mt-2 text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						PMI resources with savings exclusively for members.
					</p>
				</div>

				<Carousel
					className="w-full"
					opts={{ align: "start", containScroll: false }}
					setApi={setApi}
				>
					<CarouselContent className="ml-0 gap-6">
						{membershipBenefits.map((benefit) => (
							<CarouselItem
								className="basis-[min(400px,calc(100vw-4.5rem))] pl-0 md:basis-[400px]"
								key={benefit.title}
							>
								<div className="flex h-full min-h-[340px] flex-col gap-6 rounded-2xl border border-[#d4cbc3] bg-[#f8f5f0] p-6 shadow-sm">
									<span
										className="inline-flex w-fit rounded-full border border-[#d4cbc3] bg-white px-3 py-1 font-medium text-xs"
										style={{ color: PURPLE }}
									>
										{benefit.badge}
									</span>
									<h3
										className="font-bold font-heading text-xl leading-snug"
										style={{ color: PURPLE }}
									>
										{benefit.title}
									</h3>
									<p
										className="text-sm leading-relaxed"
										style={{ color: MUTED }}
									>
										{benefit.description}
									</p>
									<a
										className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#200f3b] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
										href={benefit.url}
										rel="noopener noreferrer"
										target="_blank"
									>
										Learn More
										<IconArrowRight aria-hidden="true" className="size-4" />
									</a>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<div className="mt-8 flex items-center justify-between">
					<div className="flex gap-2">
						{Array.from({ length: snapCount }, (_, i) => ({ id: i })).map(
							(dot) => (
								<button
									aria-label={`Go to slide ${dot.id + 1}`}
									className="min-h-[44px] min-w-[44px] rounded-full transition-all md:h-2 md:min-h-0 md:min-w-0"
									key={dot.id}
									onClick={() => api?.scrollTo(dot.id)}
									style={{
										width: dot.id === currentIndex ? "32px" : "8px",
										backgroundColor:
											dot.id === currentIndex ? PURPLE : "#d4c5b9",
									}}
									type="button"
								/>
							)
						)}
					</div>

					<div className="flex gap-4">
						<button
							aria-label="Previous slide"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl transition-opacity hover:opacity-70 disabled:opacity-30 md:min-h-0 md:min-w-0"
							disabled={!canScrollPrev}
							onClick={() => api?.scrollPrev()}
							style={{ color: MUTED }}
							type="button"
						>
							←
						</button>
						<button
							aria-label="Next slide"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl transition-opacity hover:opacity-70 disabled:opacity-30 md:min-h-0 md:min-w-0"
							disabled={!canScrollNext}
							onClick={() => api?.scrollNext()}
							style={{ color: MUTED }}
							type="button"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

function JoinSection() {
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
				<div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
					<div className="flex flex-col gap-6">
						<p className="font-medium text-sm text-white/70 uppercase tracking-wide">
							PMI Membership
						</p>
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-[2.75rem]">
							Ready to join?
						</h2>
						<p className="max-w-lg text-base text-white/85 leading-relaxed md:text-lg">
							Becoming a member is easy. Jumpstart your career and start taking
							advantage of member perks and discounts right away.
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								to="/membership"
							>
								Become a Member
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="grid gap-6 sm:grid-cols-2">
						<div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
							<h3 className="mb-2 font-bold font-heading text-white text-xl">
								Value
							</h3>
							<p className="text-sm text-white/80 leading-relaxed">
								PMI membership gives you access to the best courses and
								certifications in the field.
							</p>
						</div>
						<div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
							<h3 className="mb-2 font-bold font-heading text-white text-xl">
								Community
							</h3>
							<p className="text-sm text-white/80 leading-relaxed">
								Connect with an international community of project management
								professionals.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<HeroSection />
			<CurrentIssueSection />
			<OverviewSection />
			<StatsSection />
			<ContributeSection />
			<CollegeSection />
			<MembershipBenefitsCarousel />
			<JoinSection />
		</main>
	);
}
