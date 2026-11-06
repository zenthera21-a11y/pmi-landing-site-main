import {
	IconAward,
	IconBackpack,
	IconBook,
	IconBooks,
	IconCoin,
	IconFlask,
	IconSchool,
	IconUsersGroup,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type { JSX } from "react";

interface ResourceCard {
	description: string;
	href: string;
	icon: JSX.Element;
	link: { label: string };
	title: string;
}

const resources: ResourceCard[] = [
	{
		icon: <IconBooks aria-hidden="true" className="size-8 shrink-0" />,
		title: "Academic Resources",
		description:
			"Comprehensive resources for faculty, students, and researchers in project management.",
		href: "/learning/online-courses",
		link: { label: "Explore Resources" },
	},
	{
		icon: <IconUsersGroup aria-hidden="true" className="size-8 shrink-0" />,
		title: "PMI Chapter Student Clubs",
		description:
			"PMI Chapter Student Clubs bridge the gap between higher education and the professional world by connecting students with local PMI chapters.",
		href: "/membership",
		link: { label: "Learn More" },
	},
	{
		icon: <IconBackpack aria-hidden="true" className="size-8 shrink-0" />,
		title: "Student resource hub",
		description:
			"Browse student-focused tools, resources, and content to support your project management journey.",
		href: "/learning/online-courses",
		link: { label: "Visit the Hub" },
	},
	{
		icon: <IconBook aria-hidden="true" className="size-8 shrink-0" />,
		title: "Curriculum and teaching resources",
		description:
			"Teaching project management? Our curriculum and resources can be used to support existing courses or introduce new ones.",
		href: "/learning/foundations-of-project-management",
		link: { label: "Access Resources" },
	},
	{
		icon: <IconCoin aria-hidden="true" className="size-8 shrink-0" />,
		title: "Academic scholarships",
		description:
			"Find PMI-funded scholarships for undergraduate and graduate study in project management and related fields.",
		href: "/contact",
		link: { label: "Explore Scholarships" },
	},
	{
		icon: <IconFlask aria-hidden="true" className="size-8 shrink-0" />,
		title: "Academic research",
		description:
			"Discover PMI-sponsored published research, current research projects, and funding opportunities.",
		href: "/learning/academic-sponsored-research",
		link: { label: "Learn More" },
	},
	{
		icon: <IconAward aria-hidden="true" className="size-8 shrink-0" />,
		title: "Research and academic awards",
		description:
			"We honor excellence in teaching, studies, academic research, and publishing. Nominations open yearly.",
		href: "/contact",
		link: { label: "View Awards" },
	},
	{
		icon: <IconSchool aria-hidden="true" className="size-8 shrink-0" />,
		title: "Programs for academic institutions",
		description:
			"Leverage our solutions for higher education to set your students and academic offerings apart from the rest.",
		href: "/contact",
		link: { label: "Learn More" },
	},
];

function ResourceCard({ card }: { card: ResourceCard }) {
	return (
		<Link className="block" resetScroll to={card.href}>
			<article className="group flex h-full flex-col rounded-2xl border border-[#d4cbc3] bg-white p-6 transition-shadow hover:shadow-lg md:p-8">
				<div
					className="mb-4 flex size-12 items-center justify-center rounded-full bg-[#f0ebe5]"
					style={{ color: "#5621b4" }}
				>
					{card.icon}
				</div>
				<h3
					className="mb-3 font-bold font-heading text-lg leading-tight md:text-xl"
					style={{ color: "#200f3b" }}
				>
					{card.title}
				</h3>
				<p
					className="mb-6 flex-1 text-sm leading-relaxed md:text-base"
					style={{ color: "#6b5b7b" }}
				>
					{card.description}
				</p>
				<span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-5 py-2.5 font-medium text-sm text-white transition-opacity group-hover:opacity-90">
					{card.link.label}
				</span>
			</article>
		</Link>
	);
}

export function AcademicResources() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					{resources.map((card) => (
						<ResourceCard card={card} key={card.title} />
					))}
				</div>
			</div>
		</section>
	);
}
