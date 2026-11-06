import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/insights")({
	component: RouteComponent,
});

const TEMPLATE_CARDS = [
	{
		badge: "Power Skills",
		type: "Blog",
		title: "Power Up Your Power Skills",
		description:
			"Discover how developing essential power skills—communication, leadership, and collaboration—can set you apart and accelerate your career in project management.",
		cta: "Download Now",
		href: "/blog",
	},
	{
		badge: "AI",
		type: "Template",
		title: "AI Governance Plan",
		description:
			"Use this template to establish clear AI governance practices, roles, and risk frameworks for your organization's AI-driven projects.",
		cta: "Download Now",
		href: "/blog",
	},
	{
		badge: "AI",
		type: "Online Tool",
		title: "PMI Infinity Online Tool",
		description:
			"Get instant, AI-powered answers to your toughest project management questions—available 24/7 to help you navigate any challenge.",
		cta: "Try Now",
		href: "/infinity",
	},
] as const;

const MORE_RESOURCES = [
	{
		badge: "Blog",
		title: "How AI Is Transforming Project Management",
		href: "/blog",
	},
	{
		badge: "Video",
		title: "Leading Teams in the Age of AI",
		href: "/blog",
	},
	{
		badge: "Blog",
		title: "Building Better Teams with Power Skills",
		href: "/blog",
	},
	{
		badge: "Infographic",
		title: "The Rise of AI in Project Management",
		href: "/blog",
	},
	{
		badge: "Video",
		title: "Managing Hybrid Teams Effectively",
		href: "/blog",
	},
	{
		badge: "Infographic",
		title: "Career Paths in Project Management",
		href: "/career-resources",
	},
	{
		badge: "Video",
		title: "Agile Project Management Explained",
		href: "/learning/online-courses",
	},
	{
		badge: "Infographic",
		title: "PM Salary Trends 2026",
		href: "/career-resources",
	},
] as const;

const BADGE_COLORS: Record<string, string> = {
	Blog: "#200f3b",
	Video: "#0a5568",
	Infographic: "#4f17a8",
	"Power Skills": "#0a5568",
	AI: "#4f17a8",
	Template: "#200f3b",
	"Online Tool": "#0a5568",
};

function CardBadge({ label }: { label: string }) {
	const bg = BADGE_COLORS[label] ?? "#200f3b";
	return (
		<span
			className="inline-block rounded-full px-3 py-1 font-semibold text-white text-xs"
			style={{ background: bg }}
		>
			{label}
		</span>
	);
}

function TemplateCard({
	badge,
	type,
	title,
	description,
	cta,
	href,
}: (typeof TEMPLATE_CARDS)[number]) {
	return (
		<div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
			<div
				className="relative h-44 bg-center bg-cover"
				style={{
					backgroundImage: "url('/images/insights/card-bg.png')",
					backgroundColor: "#f0eaf8",
				}}
			>
				<div className="absolute bottom-4 left-4">
					<CardBadge label={badge} />
				</div>
			</div>
			<div className="flex flex-1 flex-col p-6">
				<span className="mb-2 font-semibold text-[#4f17a8] text-xs uppercase tracking-wide">
					{type}
				</span>
				<h3 className="mb-3 font-bold text-[#200f3b] text-lg leading-snug">
					{title}
				</h3>
				<p className="mb-6 flex-1 text-gray-600 text-sm leading-relaxed">
					{description}
				</p>
				<Link
					className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#200f3b] px-5 py-2.5 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
					to={href as never}
				>
					{cta}
					<IconArrowRight aria-hidden="true" className="size-4" />
				</Link>
			</div>
		</div>
	);
}

function ResourceCard({ badge, title, href }: (typeof MORE_RESOURCES)[number]) {
	return (
		<div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-md">
			<div
				className="relative h-36 bg-center bg-cover"
				style={{
					backgroundImage: "url('/images/insights/card-bg.png')",
					backgroundColor: "#f0eaf8",
				}}
			>
				<div className="absolute bottom-3 left-3">
					<CardBadge label={badge} />
				</div>
			</div>
			<div className="flex flex-1 flex-col p-5">
				<h4 className="mb-4 flex-1 font-semibold text-[#200f3b] text-sm leading-snug">
					{title}
				</h4>
				<Link
					className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#200f3b] px-4 py-2 font-semibold text-white text-xs transition hover:bg-[#3a1a5e]"
					to={href as never}
				>
					Read More
					<IconArrowRight aria-hidden="true" className="size-3.5" />
				</Link>
			</div>
		</div>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			{/* ── Hero ── */}
			<section style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-7xl px-6 pt-10 lg:px-10 lg:pt-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-[#200f3b]/70 hover:text-[#200f3b]"
									render={<Link to="/" />}
								>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-[#200f3b]/50" />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-[#200f3b]">
									Templates and Insights
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="mx-auto max-w-4xl px-6 pt-12 pb-20 text-center sm:pt-16 lg:pb-24">
					<h1 className="mx-auto mb-6 max-w-3xl font-bold text-3xl text-[#200f3b] leading-tight sm:text-4xl lg:text-5xl">
						Save time with project management templates and tools
					</h1>
					<p className="mx-auto max-w-2xl text-[#200f3b]/70 text-base leading-7 sm:text-lg">
						A curated selection of industry-vetted PMI templates, guides, and
						more to help you grow and maximize project success.
					</p>
				</div>
			</section>

			{/* ── Templates and Tools ── */}
			<section className="bg-white py-16 lg:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-10">
					<h2 className="mb-10 font-bold text-2xl text-[#200f3b] sm:text-3xl">
						Templates and Tools
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{TEMPLATE_CARDS.map((card) => (
							<TemplateCard key={card.title} {...card} />
						))}
					</div>
				</div>
			</section>

			{/* ── More Resources ── */}
			<section className="py-16 lg:py-24" style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-7xl px-6 lg:px-10">
					<h2 className="mb-10 font-bold text-2xl text-[#200f3b] sm:text-3xl">
						More Resources
					</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{MORE_RESOURCES.map((card) => (
							<ResourceCard key={card.title} {...card} />
						))}
					</div>
				</div>
			</section>

			{/* ── The PMI Blog ── */}
			<section className="bg-white py-16 lg:py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-10">
					<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
						<div>
							<p className="mb-3 font-semibold text-[#4f17a8] text-sm uppercase tracking-wide">
								The PMI Blog
							</p>
							<h2 className="mb-5 font-bold text-2xl text-[#200f3b] sm:text-3xl lg:text-4xl">
								Insights and perspectives from the world of project management
							</h2>
							<p className="mb-8 max-w-xl text-base text-gray-600 leading-7">
								The PMI Blog provides the latest insights and perspectives on
								new ways of working, organizational project management, and the
								future of the profession.
							</p>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-7 py-3 font-semibold text-sm text-white transition hover:bg-[#3a1a5e]"
								to="/blog"
							>
								Explore the Blog
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
						<div className="overflow-hidden rounded-2xl">
							<img
								alt="Project management professionals collaborating"
								className="h-full w-full object-cover"
								height={500}
								src="/images/business-solutions/knowledge-networking.jpg"
								width={900}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ── Projectified® Podcast ── */}
			<section className="py-16 lg:py-24" style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
					<p className="mb-3 font-semibold text-[#4f17a8] text-sm uppercase tracking-wide">
						Podcast
					</p>
					<h2 className="mb-5 font-bold text-2xl text-[#200f3b] sm:text-3xl lg:text-4xl">
						Projectified® Podcast
					</h2>
					<p className="mx-auto mb-8 max-w-xl text-base text-gray-600 leading-7">
						Projectified® is your go-to resource for real conversations with
						project professionals, thought leaders, and executives about the
						trends and topics shaping the project management landscape.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full border-2 border-[#200f3b] px-7 py-3 font-semibold text-[#200f3b] text-sm transition hover:bg-[#200f3b] hover:text-white"
						to="/projectified-podcast"
					>
						Tune In Now
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</section>

			{/* ── Membership CTA ── */}
			<section style={{ background: "#200f3b" }}>
				<div className="mx-auto max-w-2xl px-6 py-16 text-center lg:px-10 lg:py-24">
					<h2 className="mb-4 font-bold text-3xl text-white sm:text-4xl lg:text-5xl">
						Ready to join PMI?
					</h2>
					<p className="mx-auto mb-8 max-w-xl text-base text-white/75 leading-7">
						Unlock opportunity with members-only access to career-long learning,
						project resources, and our global community.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#200f3b] text-base transition hover:bg-white/90"
						resetScroll
						to="/membership"
					>
						Become a Member
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</section>
		</main>
	);
}
