import {
	IconArrowRight,
	IconBook,
	IconFileText,
	IconPlayerPlay,
	IconVideo,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

type Tab = "who" | "value" | "research" | "about";

const TABS: { id: Tab; label: string }[] = [
	{ id: "who", label: "Who Can Benefit" },
	{ id: "value", label: "Value to Organizations" },
	{ id: "research", label: "Research & Assets" },
	{ id: "about", label: "About Brightline" },
];

const INK = "#1f1646";
const BODY = "#4a4458";

export function BrightlineTabs() {
	const [activeTab, setActiveTab] = useState<Tab>("who");

	return (
		<section className="bg-[#f7f3ec]">
			{/* Tab navigation */}
			<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
				<div
					aria-label="Brightline sections"
					className="flex gap-1 overflow-x-auto border-gray-300 border-b"
					role="tablist"
				>
					{TABS.map((tab) => (
						<button
							aria-controls={`panel-${tab.id}`}
							aria-selected={activeTab === tab.id}
							className={`whitespace-nowrap px-5 py-4 font-medium text-sm transition ${
								activeTab === tab.id
									? "border-b-2"
									: "text-gray-500 hover:text-gray-800"
							}`}
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							role="tab"
							style={
								activeTab === tab.id
									? { borderColor: INK, color: INK }
									: undefined
							}
							type="button"
						>
							{tab.label}
						</button>
					))}
				</div>
			</div>

			{/* Tab content */}
			<div
				aria-labelledby={`tab-${activeTab}`}
				className="mx-auto max-w-screen-xl px-6 py-12 lg:px-4 lg:py-16"
				id={`panel-${activeTab}`}
				role="tabpanel"
			>
				{activeTab === "who" && <WhoCanBenefit />}
				{activeTab === "value" && <ValueToOrganizations />}
				{activeTab === "research" && <ResearchAndAssets />}
				{activeTab === "about" && <AboutBrightline />}
			</div>
		</section>
	);
}

/* ── Who Can Benefit ─────────────────────────────────────────────── */
function WhoCanBenefit() {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
			<div className="lg:col-span-5">
				<h2
					className="font-medium text-3xl leading-tight lg:text-4xl"
					style={{ color: INK }}
				>
					Who Can Benefit
				</h2>
			</div>
			<div className="lg:col-span-7">
				<p className="text-lg leading-relaxed" style={{ color: BODY }}>
					Brightline inspires and guides executive leaders in large enterprises,
					government, and non-profit organizations across industries and
					regions, particularly Chief Strategy Officers (CSOs), Chief
					Transformation Officers (CTOs), and Chief Sustainability Officers
					(CSuOs).
				</p>
				<p className="mt-4 text-lg leading-relaxed" style={{ color: BODY }}>
					Senior VPs, Executive Directors, and other professionals accountable
					for change initiatives and value creation also benefit from
					Brightline's insights and resources.
				</p>
			</div>
		</div>
	);
}

/* ── Value to Organizations ──────────────────────────────────────── */
const VALUE_ITEMS = [
	{
		title: "Expertise and proprietary insights",
		description:
			"Through PMI, Brightline brings decades of deep knowledge, expertise and commitment to excellence in project management and transformation. Partnering organizations gain first-hand insights into the latest trends, innovative approaches and proprietary data.",
	},
	{
		title: "Collaboration and knowledge exchange",
		description:
			"Organizations benefit from Brightline's research and content creation capabilities to drive joint research projects and co-develop reports and case studies. Brightline engage partnering organizations in meaningful collaborations with other industry leaders through knowledge-sharing initiatives, such as facilitation of roundtables, workshops, and webinars.",
	},
	{
		title: "Brand visibility and advocacy",
		description:
			"By partnering with Brightline PMI, organizations increase its brand visibility and authority within the project management space, showcasing leadership and commitment to excellence. Brightline provides independent perspectives and unbiased perspectives and partnership model.",
	},
];

function ValueToOrganizations() {
	return (
		<div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
			<div className="lg:col-span-5">
				<h2
					className="font-medium text-3xl leading-tight lg:text-4xl"
					style={{ color: INK }}
				>
					Value to Organizations
				</h2>
				<p className="mt-4 text-lg leading-relaxed" style={{ color: BODY }}>
					Brightline offers value to partnering organizations across three
					dimensions:
				</p>
			</div>
			<div className="space-y-8 lg:col-span-7">
				{VALUE_ITEMS.map((item) => (
					<div key={item.title}>
						<h3 className="mb-2 font-semibold text-lg" style={{ color: INK }}>
							{item.title}
						</h3>
						<p className="leading-relaxed" style={{ color: BODY }}>
							{item.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

/* ── Research & Assets ───────────────────────────────────────────── */
type AssetType = "Publication" | "Report" | "Webinar";

type Asset = {
	title: string;
	type: AssetType;
	description: string;
	cta: string;
	href: string;
};

const CATEGORIES = [
	{
		name: "Sustainability",
		assets: [
			{
				title: "Driving Sustainable Innovation",
				type: "Publication" as AssetType,
				description:
					"In this thought-provoking, yet highly applicable, book, a collection of global leaders define what sustainable innovation means for both individuals and organizations.",
				cta: "Read",
				href: "/learning/thought-leadership",
			},
			{
				title: "Driving Sustainability Strategy Home",
				type: "Webinar" as AssetType,
				description:
					"Sustainability goals increasingly influence business strategy, culture, and ways of working. We surveyed 500+ executives to see what distinguishes sustainability leaders.",
				cta: "Watch",
				href: "/learning/thought-leadership",
			},
		],
	},
	{
		name: "Transformation",
		assets: [
			{
				title: "The Digital Transformation Playbook",
				type: "Publication" as AssetType,
				description:
					"Second edition – An indispensable resource for you and your organization as you embark on the exciting and challenging journey of digital transformation.",
				cta: "Read",
				href: "/business-solutions/transformation",
			},
			{
				title: "Strategic Transformation Research",
				type: "Report" as AssetType,
				description:
					"In this report, we examine the correlation between strategy implementation success and transformation effectiveness and speed.",
				cta: "Read",
				href: "/business-solutions/transformation",
			},
			{
				title: "The Chief Transformation Officer",
				type: "Publication" as AssetType,
				description:
					"A collaboration between PMI and Accenture reveals that CTOs are pivotal in driving firm-wide change and transformation.",
				cta: "Read",
				href: "/business-solutions/transformation",
			},
			{
				title: "The Brightline Transformation Compass",
				type: "Report" as AssetType,
				description:
					"Five critical, mutually-reinforcing building blocks that drive effective transformation.",
				cta: "Read",
				href: "/business-solutions/transformation",
			},
		],
	},
	{
		name: "Leadership & Innovation",
		assets: [
			{
				title: "Building Resilient Organizations",
				type: "Publication" as AssetType,
				description:
					"Organizations with resilience in their DNA possess the agility of mind, culture, and organization to survive and thrive in tumultuous times.",
				cta: "Read",
				href: "/learning/thought-leadership",
			},
			{
				title: "Becoming Future-Ready",
				type: "Webinar" as AssetType,
				description:
					"Explore the Future Readiness Indicator, a framework for gauging how prepared organizations are to win more in good times and lose less in bad times.",
				cta: "Watch",
				href: "/learning/thought-leadership",
			},
			{
				title: "Actionable Strategies for Innovative Leadership",
				type: "Webinar" as AssetType,
				description:
					"Learn actionable strategies for driving innovation and leading transformation from industry experts.",
				cta: "Watch",
				href: "/learning/thought-leadership",
			},
		],
	},
];

function TypeIcon({ type }: { type: AssetType }) {
	switch (type) {
		case "Publication":
			return <IconBook aria-hidden="true" className="size-5" />;
		case "Report":
			return <IconFileText aria-hidden="true" className="size-5" />;
		case "Webinar":
			return <IconVideo aria-hidden="true" className="size-5" />;
		default:
			return null;
	}
}

function AssetCard({ asset }: { asset: Asset }) {
	return (
		<Link
			className="group block rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg"
			to={asset.href}
		>
			<div className="mb-3 flex items-center gap-2">
				<span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 font-medium text-[#5621b4] text-xs">
					<TypeIcon type={asset.type} />
					{asset.type}
				</span>
			</div>
			<h4
				className="mb-2 font-semibold text-lg leading-snug"
				style={{ color: INK }}
			>
				{asset.title}
			</h4>
			<p
				className="mb-4 flex-1 text-sm leading-relaxed"
				style={{ color: BODY }}
			>
				{asset.description}
			</p>
			<span className="inline-flex items-center gap-1.5 font-medium text-[#5621b4] text-sm transition group-hover:underline">
				{asset.cta}
				{asset.cta === "Watch" ? (
					<IconPlayerPlay aria-hidden="true" className="size-4" />
				) : (
					<IconArrowRight aria-hidden="true" className="size-4" />
				)}
			</span>
		</Link>
	);
}

function ResearchAndAssets() {
	return (
		<div className="space-y-12">
			{CATEGORIES.map((category) => (
				<div key={category.name}>
					<h3 className="mb-6 font-medium text-2xl" style={{ color: INK }}>
						{category.name}
					</h3>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{category.assets.map((asset) => (
							<AssetCard asset={asset} key={asset.title} />
						))}
					</div>
				</div>
			))}
		</div>
	);
}

/* ── About Brightline ────────────────────────────────────────────── */
function AboutBrightline() {
	return (
		<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
			<div className="lg:col-span-7">
				<p className="text-lg leading-relaxed" style={{ color: BODY }}>
					Through research and thought leadership, The Brightline® Initiative of
					PMI inspires and provides strategic direction to senior executive
					leaders to help transform their organizations for long-term growth.
				</p>
				<div className="mt-8">
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-[#1c1330] px-6 py-3 font-medium text-white transition hover:opacity-90"
						to="/business-solutions/transformation"
					>
						Visit Brightline
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
			<div className="lg:col-span-5">
				<img
					alt="Brightline initiative"
					className="h-auto w-full rounded-2xl"
					height={400}
					src="/images/learning/brightline/brightline-about.jpg"
					width={600}
				/>
			</div>
		</div>
	);
}
