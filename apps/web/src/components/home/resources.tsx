"use client";

import {
	Item,
	ItemActions,
	ItemContent,
	ItemGroup,
	ItemTitle,
} from "@pmi-south-asia/ui/components/item";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@pmi-south-asia/ui/components/tabs";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

const resourceTabs = [
	{ value: "ai", label: "AI" },
	{ value: "agile", label: "Agile" },
	{ value: "careers", label: "Careers" },
	{ value: "sustainability", label: "Sustainability" },
] as const;

type TabValue = (typeof resourceTabs)[number]["value"];

interface ResourceBadge {
	label: string;
	memberOnly?: boolean;
}

interface ResourceListItem {
	badges: ResourceBadge[];
	href: string;
	title: string;
}

interface ResourceTabData {
	featured: {
		backgroundImage?: string;
		backgroundStyle?: string;
		badges: ResourceBadge[];
		ctaHref?: string;
		ctaLabel?: string;
		darkBackground?: boolean;
		description: string;
		title: string;
	};
	listItems: ResourceListItem[];
	secondary: {
		badges: ResourceBadge[];
		ctaHref?: string;
		ctaLabel?: string;
		description: string;
		title: string;
	};
}

const tabContent: Record<TabValue, ResourceTabData> = {
	ai: {
		featured: {
			backgroundImage: "/assets/shared/infinity-card-bg.webp",
			badges: [{ label: "Online Tool", memberOnly: true }],
			darkBackground: true,
			title: "Unlock the Power of Infinity™",
			description:
				"Exclusive to members and powered by AI, PMI Infinity™ is your project management coach designed to boost project success.",
		},
		secondary: {
			badges: [{ label: "Publication", memberOnly: true }],
			title:
				"The Standard for Artificial Intelligence in Portfolio, Program and Project Management",
			description:
				"The first and only global AI Standard for Project Professionals, built to turn AI uncertainty into structured, responsible practice.",
		},
		listItems: [],
	},
	agile: {
		featured: {
			backgroundImage: "/assets/shared/card-star-bg-image.webp",
			badges: [{ label: "Report", memberOnly: true }],
			title: "GenAI and Agile: Amplifying Human-Centered Collaboration",
			description:
				"Explore how GenAI strengthens agile teams by supporting trust, surfacing risks, and enabling breakthroughs—while keeping human collaboration at the center of project success.",
		},
		secondary: {
			badges: [{ label: "Podcast" }, { label: "Discussion" }],
			title: "How to Lead Teams Through Change",
			description:
				"Change is constant. This episode explores how project leaders can use AI, agile mindsets, and effective change practices to adapt quickly, empower teams, and seize new opportunities.",
		},
		listItems: [],
	},
	careers: {
		featured: {
			backgroundImage: "/assets/shared/card-star-bg-image.webp",
			badges: [{ label: "Self-Assessment", memberOnly: true }],
			title: "Unlock Your Potential with Career Navigator",
			description:
				"Take a free assessment to discover your strengths, explore career paths, and build a personalized plan for your next step in project management.",
		},
		secondary: {
			badges: [{ label: "Podcast" }],
			title: "How to Lead Teams Through Change",
			description:
				"Change is constant. This episode explores how project leaders can use AI, agile mindsets, and effective change practices to adapt quickly, empower teams, and seize new opportunities.",
		},
		listItems: [],
	},
	sustainability: {
		featured: {
			backgroundImage: "/assets/shared/card-star-bg-image.webp",
			badges: [{ label: "Podcast" }, { label: "Discussion" }],
			title: "Sustainable Project Management: From Planning to Delivery",
			description:
				"Every project can be led and managed more sustainably. Guests discuss why project professionals should build sustainability into every project and their advice to help others do the same.",
		},
		secondary: {
			badges: [{ label: "Blog" }, { label: "Certification" }],
			title: "How the GPM-b™ Can Boost Your Career",
			description:
				"The GPM-b™ gives you the tools, knowledge, and credibility to lead with purpose. Learn why and how to get your certification.",
		},
		listItems: [],
	},
};

function MemberBadge() {
	return (
		<span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-medium text-[#7c5cfc] text-xs">
			<img
				alt=""
				aria-hidden="true"
				className="h-3.5 w-3.5"
				height="14"
				src="/assets/shared/membership-icon.svg"
				width="14"
			/>
			Free for Members
		</span>
	);
}

function ResourceBadges({
	badges,
	variant = "default",
}: {
	badges: ResourceBadge[];
	variant?: "default" | "on-dark";
}) {
	const labelClassName =
		variant === "on-dark"
			? "rounded-full border border-white/60 px-3 py-1 font-medium text-white text-xs"
			: "rounded-full border border-[#d4cbc3] px-3 py-1 font-medium text-[#200f3b] text-xs";

	return (
		<div className="flex flex-wrap gap-2">
			{badges.map((badge) => (
				<span className="contents" key={badge.label}>
					<span className={labelClassName}>{badge.label}</span>
					{badge.memberOnly ? <MemberBadge /> : null}
				</span>
			))}
		</div>
	);
}

function FeaturedResourceCard({
	featured,
}: {
	featured: ResourceTabData["featured"];
}) {
	const isLightBg = !featured.darkBackground;
	const backgroundStyle = featured.backgroundImage
		? {
				backgroundImage: `url(${featured.backgroundImage})`,
			}
		: { background: featured.backgroundStyle };

	return (
		<article
			className="relative flex min-h-[420px] flex-col justify-between gap-10 overflow-hidden rounded-2xl border border-[#d4cbc3] bg-center bg-cover bg-no-repeat px-6 py-8 md:min-h-[580px] md:gap-12 md:px-10 md:py-10"
			style={backgroundStyle}
		>
			<div className="flex flex-wrap gap-2">
				<ResourceBadges
					badges={featured.badges}
					variant={isLightBg ? "default" : "on-dark"}
				/>
			</div>

			<div className="flex flex-col gap-6">
				<h3
					className={`font-bold font-heading text-3xl leading-tight md:text-4xl ${isLightBg ? "text-[#200f3b]" : "text-white"}`}
				>
					{featured.title}
				</h3>
				<p
					className={`max-w-md text-base leading-relaxed md:text-lg ${isLightBg ? "text-[#6b5b7b]" : "text-white/85"}`}
				>
					{featured.description}
				</p>
				{featured.ctaHref && featured.ctaLabel ? (
					<a
						className={`inline-flex w-fit rounded-full px-6 py-3 font-medium text-sm transition-opacity hover:opacity-90 md:text-base ${isLightBg ? "bg-[#200f3b] text-white" : "bg-white text-[#200f3b]"}`}
						href={featured.ctaHref}
					>
						{featured.ctaLabel}
					</a>
				) : null}
			</div>
		</article>
	);
}

function ResourceTabPanel({ data }: { data: ResourceTabData }) {
	return (
		<div className="grid gap-8 lg:grid-cols-[3fr_2fr] lg:gap-10">
			<FeaturedResourceCard featured={data.featured} />

			<div className="flex flex-col">
				<article className="rounded-t-xl border border-[#d4cbc3] border-b-0 p-6 md:p-8">
					<div className="mb-4">
						<ResourceBadges badges={data.secondary.badges} />
					</div>
					<h3 className="mb-3 font-bold font-heading text-[#200f3b] text-xl leading-snug md:text-2xl">
						{data.secondary.title}
					</h3>
					<p className="mb-6 text-[#6b5b7b] text-sm leading-relaxed md:text-base">
						{data.secondary.description}
					</p>
					{data.secondary.ctaHref && data.secondary.ctaLabel ? (
						<a
							className="inline-flex rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
							href={data.secondary.ctaHref}
						>
							{data.secondary.ctaLabel}
						</a>
					) : null}
				</article>

				{data.listItems.length > 0 ? (
					<ItemGroup className="gap-0">
						{data.listItems.map((item) => (
							<Item
								className="rounded-none border-0 border-[#d4cbc3] border-t px-0 py-6"
								key={item.href}
							>
								<ItemContent className="gap-3">
									<ResourceBadges badges={item.badges} />
									<ItemTitle className="line-clamp-none font-semibold text-[#200f3b] text-base md:text-lg">
										<Link className="hover:underline" to={item.href}>
											{item.title}
										</Link>
									</ItemTitle>
								</ItemContent>
								<ItemActions>
									<IconArrowRight
										aria-hidden="true"
										className="size-5 shrink-0 text-[#200f3b]"
									/>
								</ItemActions>
							</Item>
						))}
					</ItemGroup>
				) : null}
			</div>
		</div>
	);
}

export function Resources() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="mx-auto max-w-6xl px-6 pt-20 md:px-10 lg:pt-24">
				<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
					<h2
						className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
						style={{ color: "#200f3b" }}
					>
						Stay in the know and ahead of the curve
					</h2>
					<p
						className="text-lg leading-relaxed md:text-xl"
						style={{ color: "#6b5b7b" }}
					>
						A career in project management means being dedicated to lifelong
						learning. Use the resources below to fuel your growth and excel
						within the ever-changing project landscape.
					</p>
				</div>
			</div>

			<Tabs className="gap-0" defaultValue="ai">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<TabsList className="!grid !w-full h-auto w-full grid-cols-4 items-stretch gap-0 rounded-none border-0 bg-[#f8f5f0] p-0 group-data-horizontal/tabs:h-auto">
						{resourceTabs.map((tab) => (
							<TabsTrigger
								className="!border-r !border-r-[#e5ddd6] last:!border-r-0 relative h-auto min-h-[5rem] w-full flex-none grow-0 items-start justify-start rounded-none border-0 bg-[#f8f5f0] px-4 pt-4 pb-5 text-left font-normal text-[#6b5b7b] text-sm after:hidden data-active:bg-white data-active:font-bold data-active:text-[#200f3b] data-active:shadow-[inset_4px_0_0_0_#200f3b] md:min-h-[7.5rem] md:px-6 md:pt-5 md:pb-8 md:text-base"
								key={tab.value}
								value={tab.value}
							>
								{tab.label}
							</TabsTrigger>
						))}
					</TabsList>
				</div>

				{resourceTabs.map((tab) => (
					<TabsContent
						className="w-full bg-white px-6 py-8 md:px-10 md:py-10"
						key={tab.value}
						value={tab.value}
					>
						<div className="mx-auto w-full max-w-6xl">
							<ResourceTabPanel data={tabContent[tab.value]} />
						</div>
					</TabsContent>
				))}
			</Tabs>
		</section>
	);
}
