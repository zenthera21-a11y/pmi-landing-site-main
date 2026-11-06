import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/learning/free-online-courses")({
	component: RouteComponent,
});

const featuredCourse = {
	description:
		"With the right skill set and embrace of AI, you can do more than ever before.",
	href: "/certifications/ai-project-management-cpmai",
	image:
		"https://www.pmi.org/-/media/pmi/headless-images/learning/free-online-courses/generative-ai-lesson.png?h=663&iar=0&w=828&rev=cadbf9c10a5f456caa03ef6e6774a2ce&sc_lang=en",
	title: "Generative AI Overview for Project Managers",
};

const freeCourses = [
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free for Members"],
		description:
			"Apply M.O.R.E. and practice the behaviors that power better decisions and stronger project results.",
		href: "/learning/online-courses",
		title: "PMI® Essentials: M.O.R.E. In Action",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/new-pmp-mobile.jpg?rev=acaf1cd7191349569b6183e22a835516&sc_lang=en",
		badges: ["eLearning", "Free"],
		description:
			"Start your PMP® journey now with the free introductory course. Get what you need to apply and prepare for certification.",
		href: "/certifications/project-management-pmp",
		title: "Free Introduction: PMP®",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["Free"],
		description:
			"Discover a clear, practical pattern-based approach to plan, assess and navigate AI projects with confidence.",
		href: "/certifications/ai-project-management-cpmai",
		title: "PMI® Essentials: Seven AI Project Patterns",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free"],
		description:
			"Strategically combine AI tools, understand prompting techniques, and implement automation in your workflows.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Practical Application of Generative AI for Project Managers",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning"],
		description:
			"Get to know Disciplined Agile® with this quick and cost-effective introductory eLearning course.",
		href: "/certifications/agile-acp",
		title: "Disciplined Agile® Essentials",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free"],
		description:
			"Gain a basic understanding of Generative AI (GenAI) in project management. Explore different tools and its applications for enhanced project outcomes.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Generative AI Overview for Project Managers",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free for Members"],
		description:
			"Explore data characteristics, governance, ethical considerations, and risks with GenAI, and how to implement GenAI within your organization.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Data Landscape of GenAI for Project Managers",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free"],
		description:
			"Get the knowledge and skills to talk with Large Language Models (LLMs) such as ChatGPT effectively. Generate the most valuable, customized, and insightful responses.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Talking to AI: Prompt Engineering for Project Managers",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["Free for Members"],
		description:
			"Build stronger collaboration between project and product professionals to enhance delivery effectiveness and alignment.",
		href: "/learning/online-courses",
		title: "Product x Project Management: The Collaboration Playbook",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free"],
		description:
			"Explore AI project management and the CPMAI™ methodology in this preview of the PMI-CPMAI™ certification path.",
		href: "/certifications/ai-project-management-cpmai",
		title: "Free Introduction: PMI-CPMAI™",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free"],
		description:
			"Expand beyond traditional project success and deliver value worth the effort and expense by delivering M.O.R.E.",
		href: "/learning/online-courses",
		title: "PMI Essentials M.O.R.E. Maximizing Project Success",
	},
	{
		background:
			"https://www.pmi.org/-/media/spx-headless/product-detail-pages/hero-backgrounds/specialized-unassociated-mobile.png?rev=b3e493c229d84b3facd03df42d3f5f2e&sc_lang=en",
		badges: ["eLearning", "Free for Members"],
		description:
			"Explore practical ways to harness AI in agile delivery and organization-wide, while keeping agile values at the core.",
		href: "/certifications/agile-acp",
		title: "AI in Agile Delivery",
	},
];

function HeroSection() {
	return (
		<section
			className="py-16 md:py-20 lg:py-24"
			style={{ backgroundColor: "#2b1b45" }}
		>
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h1 className="mb-6 font-bold font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl">
					Investing in yourself doesn't always have to come at a cost
				</h1>
				<p className="max-w-3xl text-lg text-white/85 leading-relaxed md:text-xl">
					We have created a number of free courses to aid and support your
					growth throughout your career. Refresh your skills or explore new
					areas of learning to better adapt in our ever-evolving profession.
				</p>
			</div>
		</section>
	);
}

function FeaturedCourseSection() {
	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2 md:gap-0">
					<div className="order-1 md:order-2">
						<img
							alt={featuredCourse.title}
							className="h-64 w-full object-cover md:h-full md:min-h-[420px]"
							height={416}
							src={featuredCourse.image}
							width={520}
						/>
					</div>
					<div className="order-2 flex flex-col gap-6 p-8 md:order-1 md:p-12 lg:p-16">
						<h2
							className="font-bold font-heading text-3xl leading-tight md:text-4xl"
							style={{ color: "#200f3b" }}
						>
							{featuredCourse.title}
						</h2>
						<p
							className="text-base leading-relaxed md:text-lg"
							style={{ color: "#6b5b7b" }}
						>
							{featuredCourse.description}
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
								resetScroll
								to={featuredCourse.href}
							>
								Learn More
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function CourseCard({ course }: { course: (typeof freeCourses)[number] }) {
	return (
		<div className="group relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-[#d4cbc3] bg-white shadow-sm transition-shadow hover:shadow-lg">
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
				height={1644}
				src={course.background}
				width={370}
			/>
			<div className="relative flex flex-1 flex-col gap-4 bg-gradient-to-t from-white via-white/95 to-transparent px-6 pt-24 pb-8">
				<div className="flex flex-wrap gap-2">
					{course.badges.map((badge) => (
						<span
							className="inline-flex w-fit rounded-full border border-[#d4cbc3] bg-white px-3 py-1 font-medium text-[#1d1d35] text-xs"
							key={badge}
						>
							{badge}
						</span>
					))}
				</div>
				<h3
					className="font-semibold text-[#1d1d35] text-lg leading-snug"
					style={{ color: "#200f3b" }}
				>
					{course.title}
				</h3>
				<p className="text-slate-600 text-sm leading-relaxed">
					{course.description}
				</p>
				<Link
					className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
					resetScroll
					to={course.href}
				>
					Learn More
					<IconArrowRight aria-hidden="true" className="size-4" />
				</Link>
			</div>
		</div>
	);
}

function CourseGridSection() {
	return (
		<section className="bg-[#f8f5f0] py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mx-auto mb-16 max-w-3xl text-center">
					<h2
						className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl"
						style={{ color: "#200f3b" }}
					>
						Find the right courses for you
					</h2>
					<p
						className="text-lg leading-relaxed md:text-xl"
						style={{ color: "#6b5b7b" }}
					>
						We offer a number of free courses to suit a wide variety of passions
						and career paths. Choose one or choose them all — there's no limit
						to what you can learn.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{freeCourses.map((course) => (
						<CourseCard course={course} key={course.title} />
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
						resetScroll
						to="/learning/online-courses"
					>
						Explore All Online Courses
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function KickoffSection() {
	return (
		<section className="bg-[#e8e5dd] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid items-center gap-10 overflow-hidden rounded-3xl bg-white shadow-sm md:grid-cols-2 md:gap-0">
					<div>
						<img
							alt="The joy of remote work"
							className="h-64 w-full object-cover md:h-full md:min-h-[420px]"
							height={429}
							src="https://www.pmi.org/-/media/pmi/headless-images/learning/free-online-courses/the-joy-of-remote-collaboration.png?h=663&iar=0&w=828&rev=66a663a65fde4246a6a7dd392126d3c8&sc_lang=en"
							width={536}
						/>
					</div>
					<div className="flex flex-col gap-6 p-8 md:p-12 lg:p-16">
						<h2
							className="font-bold font-heading text-3xl leading-tight md:text-4xl"
							style={{ color: "#200f3b" }}
						>
							Learn the basics of project management fast and free with Kickoff™
						</h2>
						<p
							className="text-base leading-relaxed md:text-lg"
							style={{ color: "#6b5b7b" }}
						>
							Kickoff is a free, 45-minute digital course and tool kit that
							guides you through the basics of project management, so you can
							effectively launch your project(s) from start to finish.
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
								resetScroll
								to="/learning/foundations-of-project-management"
							>
								Learn More
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
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
				<span
					className="mx-auto block max-w-[970px] overflow-hidden rounded-lg"
					rel="noopener"
					target="_blank"
				>
					<img
						alt="Advertisement - opens in a new tab"
						className="h-auto w-full"
						height={90}
						src="https://img.nui.media/banners/media/41/413669/72/724501/1767223343140_PMP_970x90_3.png"
						width={970}
					/>
				</span>
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
			<FeaturedCourseSection />
			<CourseGridSection />
			<KickoffSection />
			<MembershipCtaSection />
			<TrainingPartnerAd />
		</main>
	);
}
