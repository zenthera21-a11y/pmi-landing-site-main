import { Link } from "@tanstack/react-router";

interface FeaturedResource {
	description: string;
	href: string;
	icon: string;
	link: { label: string };
	title: string;
}

const featuredResources: FeaturedResource[] = [
	{
		icon: "🎯",
		title: "Connect at PMI Events",
		description:
			"Build skills. Share insights. Grow together. Join PMI at in-person and virtual events—bringing faculty and students together for fresh ideas and career opportunities.",
		href: "/contact",
		link: { label: "See What's Next" },
	},
	{
		icon: "💡",
		title: "Thought leadership",
		description:
			"Expert analysis, original research and perspectives on current and future trends in project management.",
		href: "/learning/thought-leadership",
		link: { label: "Explore Content" },
	},
	{
		icon: "🚀",
		title: "Explore Career Resources",
		description:
			"Help students take their next step. Access skill-building tools and a global job and internship board to support learners as they prepare for careers in the project profession.",
		href: "/career-resources",
		link: { label: "Visit Careers Page" },
	},
];

export function FeaturedResources() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<h2
					className="mb-12 text-center font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
					style={{ color: "#200f3b" }}
				>
					Featured Resources
				</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{featuredResources.map((resource) => (
						<article
							className="flex flex-col rounded-2xl border border-[#d4cbc3] bg-white p-6 transition-shadow hover:shadow-lg md:p-8"
							key={resource.title}
						>
							<span aria-hidden="true" className="mb-4 text-3xl">
								{resource.icon}
							</span>
							<h3
								className="mb-3 font-bold font-heading text-lg leading-tight md:text-xl"
								style={{ color: "#200f3b" }}
							>
								{resource.title}
							</h3>
							<p
								className="mb-6 flex-1 text-sm leading-relaxed md:text-base"
								style={{ color: "#6b5b7b" }}
							>
								{resource.description}
							</p>
							<Link
								className="inline-flex w-fit items-center rounded-full bg-[#200f3b] px-5 py-2.5 font-medium text-sm text-white transition-opacity hover:opacity-90"
								resetScroll
								to={resource.href}
							>
								{resource.link.label}
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
