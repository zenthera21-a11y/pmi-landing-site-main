import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/membership")({
	component: RouteComponent,
});

const PMI_DARK = "#200f3b";
const PMI_NAV_BG = "#2a1750";
const CARD_CREAM = "#f5f0e8";

/* ── Data ─────────────────────────────────────────────────────────────── */

const BENEFIT_CARDS = [
	{
		title: "Discounts Up to 30%",
		body: "Get up to 30% off gold standard certifications (including renewals), study resources, and eLearning, plus discounts on event registration.",
		img: "/images/membership/discounts-card.jpg",
	},
	{
		title: "PMI Infinity™ AI-powered Coach",
		body: "Get special access to the AI that speaks project management, powered exclusively by PMI proprietary data.",
		img: "/images/membership/infinity-card.jpg",
	},
	{
		title: "Premium Webinar Access",
		body: "Tap into live and on-demand digital sessions covering key skill areas, as you earn PDUs to maintain your certification.",
		img: "/images/membership/premium-webinars-card.jpg",
	},
	{
		title: "Free eLearning Courses",
		body: "Stay competitive with online courses covering trending topics, from AI through to agile.",
		img: "/images/membership/free-elearning-card.jpg",
	},
	{
		title: "Free PMBOK® Guide and More",
		body: "Download free digital editions of PMI standards and our industry guides. Save up to $640 USD!",
		img: "/images/membership/pmbok-card.jpg",
	},
	{
		title: "Early Access to Job Postings",
		body: "Members are first in line for new global project management openings on the PMI Job Board.",
		img: "/images/membership/early-access-card.jpg",
	},
];

const STATS = [
	{
		stat: "Up to 30% Off",
		detail:
			"Professional development, including certification, eLearning, training, and events",
	},
	{
		stat: "800K Members",
		detail:
			"Around the world, PMI is the largest professional association for Project Professionals",
	},
	{
		stat: "1.7 Million+",
		detail:
			"PMI certification holders worldwide, making PMI the leader in the field since 1969",
	},
];

interface TierItem {
	accent?: boolean;
	bold?: string;
	text: string;
}
const TIERS: Array<{
	name: string;
	tagline: string;
	taglineColor: string;
	intro?: string;
	introAccent?: string;
	items: TierItem[];
}> = [
	{
		name: "Free PMI.org Account",
		tagline: "Register for a free PMI.org account.",
		taglineColor: "#f97316",
		items: [
			{ bold: "Thought Leadership:", text: " Insights and research" },
			{
				bold: "PMI Job Board Access:",
				text: " Browse thousands of global open positions",
			},
			{
				bold: "Community Profile:",
				text: " Access to ProjectManagement.com",
			},
			{ text: "Free eLearning courses" },
		],
	},
	{
		name: "30-Day Trial Membership",
		tagline:
			"30 days of access. No credit card required. No automatic renewal.",
		taglineColor: "#05bfe0",
		intro: "Everything in a FREE account, ",
		introAccent: "plus:",
		items: [
			{ bold: "PMI Infinity:", text: " AI-powered project coach" },
			{ bold: "PMIstandards+:", text: " Digital standards app" },
			{ text: "Premium webinars and project templates" },
		],
	},
	{
		name: "PMI Professional Membership",
		tagline: "12 months of access, billed annually thereafter.",
		taglineColor: "#a78bfa",
		intro: "Everything in a trial membership, ",
		introAccent: "plus:",
		items: [
			{
				bold: "Member Pricing:",
				text: " Up to 30% off certification, learning, and events",
				accent: true,
			},
			{ text: "PMBOK® Guide and other PMI standards" },
			{ text: "Free for members eLearning courses" },
			{ text: "Project Management Journal" },
			{ text: "Business Reading Center" },
			{ text: "Early access to PMI Job Board postings" },
			{ text: "PMI Salary Survey tool" },
		],
	},
];

const MEMBERSHIP_TYPES = [
	{
		name: "Professional Membership",
		description:
			"Unlock exclusive access to free and discounted career education, project resources, and networking opportunities.",
		href: "/membership/professional",
	},
	{
		name: "Student Membership",
		description:
			"Launch your career for less. Full-time college or university students can join PMI at a deeply discounted rate.",
		href: "/membership/student",
	},
	{
		name: "Gift Membership",
		description:
			"Help friends and colleagues level up their careers with the power and perks of PMI membership.",
		href: "/membership/gift",
	},
];

const TESTIMONIALS = [
	{
		quote:
			"PMI membership helps me to be more aware of the current trends. I get access way faster to those materials.",
		name: "Agnes Lu-Hodi",
		lines: ["Puget Sound Chapter"],
		img: "/images/membership/testimonial-1.png",
		alt: "Positive work environment",
	},
	{
		quote:
			"I've been a PMI member since 2014. I am now a Director of a PMO and my biggest project was a multi-billion project for Boeing. PMI Membership has been my everything and I owe them my career.",
		name: "Deborah Ducmanas",
		lines: ["Central Ohio Chapter"],
		img: "/images/membership/testimonial-2.png",
		alt: "Bold women in discussion",
	},
	{
		quote:
			"PMI offers a lot of resources and tools, especially for members, and that helped me prepare for my CAPM Exam.",
		name: "Saucony Hunt",
		lines: ["IT Project Specialist", "Augusta, GA"],
		img: "/images/membership/testimonial-3.png",
		alt: "Man checking email",
	},
];

const FAQS = [
	{
		q: "Is membership worth it?",
		a: "PMI membership offers significant value through discounts on certifications, access to free resources like the PMBOK® Guide, free eLearning courses, and connection to a global community of 800,000+ project professionals. Members typically save more on their first certification exam than the cost of an annual membership.",
	},
	{
		q: "Is having a free PMI.org account the same as membership?",
		a: "No. A free PMI.org account gives you access to thought leadership content, the PMI Job Board, and community profiles. A paid membership unlocks additional benefits like certification discounts, free eLearning, the PMBOK® Guide, and PMI Infinity.",
	},
	{
		q: "What is the difference between membership and certification?",
		a: "Membership is an annual subscription that gives you access to PMI resources and community. Certification (like PMP®) is a credential that validates your project management skills and requires passing an exam. Members receive discounts on certification exams.",
	},
	{
		q: "Do I have to be a member to get and stay certified?",
		a: "No, membership is not required to earn or maintain a PMI certification. However, members receive up to 30% off certification exams and renewal fees, making membership a smart investment.",
	},
	{
		q: "How long is a membership valid?",
		a: "A PMI Professional Membership is valid for 12 months from the date of purchase and renews annually. Student Membership is also annual.",
	},
];

/* ── Sub-components ───────────────────────────────────────────────────── */

function PmiStar({ size = 24 }: { size?: number }) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			height={size}
			viewBox="0 0 32 32"
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<radialGradient
					cx="0"
					cy="0"
					gradientTransform="translate(0.5 15.5) rotate(90) scale(14.5)"
					gradientUnits="userSpaceOnUse"
					id="psCyan"
					r="1"
				>
					<stop stopColor="#05BFE0" />
					<stop offset="1" stopColor="#05BFE0" stopOpacity="0" />
				</radialGradient>
				<radialGradient
					cx="0"
					cy="0"
					gradientTransform="translate(15.5 -0.5) rotate(90) scale(18.5)"
					gradientUnits="userSpaceOnUse"
					id="psOrange"
					r="1"
				>
					<stop stopColor="#FF610F" />
					<stop offset="1" stopColor="#FF610F" stopOpacity="0" />
				</radialGradient>
				<clipPath id="psClip">
					<rect fill="white" height="32" width="32" />
				</clipPath>
				<mask
					height="32"
					id="psMask"
					maskUnits="userSpaceOnUse"
					style={{ maskType: "alpha" }}
					width="32"
					x="0"
					y="0"
				>
					<path
						d="M15.9989 0L20.1758 5.9177L27.3138 4.68615L26.0823 11.8242L32 15.9989L26.0823 20.1758L27.3138 27.3138L20.1758 26.0823L15.9989 32L11.8242 26.0823L4.68615 27.3138L5.9177 20.1758L0 15.9989L5.9177 11.8242L4.68615 4.68615L11.8242 5.9177L15.9989 0Z"
						fill="#4F17A8"
					/>
				</mask>
			</defs>
			<g clipPath="url(#psClip)">
				<path
					d="M15.9989 0L20.1758 5.9177L27.3138 4.68615L26.0823 11.8242L32 15.9989L26.0823 20.1758L27.3138 27.3138L20.1758 26.0823L15.9989 32L11.8242 26.0823L4.68615 27.3138L5.9177 20.1758L0 15.9989L5.9177 11.8242L4.68615 4.68615L11.8242 5.9177L15.9989 0Z"
					fill="#4F17A8"
				/>
				<g mask="url(#psMask)">
					<circle cx="0.5" cy="15.5" fill="url(#psCyan)" r="14.5" />
					<circle cx="15.5" cy="-0.5" fill="url(#psOrange)" r="18.5" />
				</g>
				<path
					clipRule="evenodd"
					d="M10.8301 10.8357C13.6835 10.8357 15.9963 13.1485 15.9963 16.0019C15.9963 18.8553 13.6835 21.1681 10.8301 21.1681V10.8357Z"
					fill="white"
					fillRule="evenodd"
				/>
				<path
					clipRule="evenodd"
					d="M21.1589 21.1668C18.3055 21.1668 15.9927 18.854 15.9927 16.0006C15.9927 13.1471 18.3055 10.8344 21.1589 10.8344V21.1668Z"
					fill="white"
					fillRule="evenodd"
				/>
			</g>
		</svg>
	);
}

function MemberButton({
	href,
	size = "md",
}: {
	href: string;
	size?: "sm" | "md" | "lg";
}) {
	const cls =
		size === "lg" ? "h-14 px-7 gap-3 text-xl" : "h-12 px-6 gap-2.5 text-lg";
	return (
		<a
			className={`inline-flex items-center rounded-full bg-white font-aeonik font-semibold shadow transition hover:shadow-md active:scale-95 ${cls}`}
			href={href}
		>
			<PmiStar size={size === "lg" ? 28 : 24} />
			<span
				style={{
					background: "linear-gradient(to right, #ff610f, #9c3ef0, #4f17a8)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
					backgroundClip: "text",
				}}
			>
				Become a Member
			</span>
		</a>
	);
}

function ChevronRight() {
	return (
		<svg
			aria-hidden="true"
			className="h-4 w-4"
			fill="currentColor"
			viewBox="0 0 32 32"
		>
			<path
				clipRule="evenodd"
				d="M13.12 6L22 16 13.12 26l-2.24-2 7.12-8-7.12-8 2.24-2z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function FaqItem({ q, a }: { q: string; a: string }) {
	const [open, setOpen] = useState(false);
	return (
		<div className="overflow-hidden">
			<button
				aria-expanded={open}
				className="flex w-full items-center justify-between px-6 py-5 text-left"
				onClick={() => setOpen((v) => !v)}
				type="button"
			>
				<span className="font-aeonik font-medium text-lg text-white">{q}</span>
				<span className="ml-4 flex-shrink-0 text-2xl text-white/50 leading-none">
					{open ? "−" : "+"}
				</span>
			</button>
			{open && (
				<div className="px-6 pb-6">
					<p className="font-aeonik text-base text-white/75 leading-7">{a}</p>
				</div>
			)}
		</div>
	);
}

function TestimonialsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const t = TESTIMONIALS[activeIndex];
	const count = TESTIMONIALS.length;

	return (
		<div>
			{/* Slide — mobile: col, desktop: row image-left quote-right */}
			<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[7.7vw]">
				{/* Image */}
				<div className="lg:order-first lg:basis-2/3">
					<div
						className="relative w-full overflow-hidden rounded-3xl"
						style={{ paddingBottom: "56.25%" }}
					>
						<img
							alt={t.alt}
							className="absolute inset-0 h-full w-full object-cover"
							height={900}
							loading="lazy"
							src={t.img}
							width={1600}
						/>
					</div>
				</div>
				{/* Quote */}
				<div className="flex flex-col justify-center gap-4 lg:order-last lg:basis-1/4">
					<blockquote className="font-aeonik font-medium text-white text-xl leading-snug lg:text-2xl">
						&ldquo;{t.quote}&rdquo;
					</blockquote>
					<div>
						<p className="font-aeonik font-medium text-base text-white">
							{t.name}
						</p>
						{t.lines.map((line) => (
							<p className="font-aeonik text-sm text-white/55" key={line}>
								{line}
							</p>
						))}
					</div>
				</div>
			</div>

			{/* Navigation row — dots left, arrows right */}
			<div className="mt-6 flex items-center justify-between py-2">
				<ul className="flex items-center gap-2">
					{TESTIMONIALS.map((_, i) => (
						<li
							// biome-ignore lint/suspicious/noArrayIndexKey: pagination dots keyed by position
							key={i}
						>
							<button
								aria-label={`Go to testimonial ${i + 1}`}
								className="block h-1 rounded-full bg-white transition-all duration-300"
								onClick={() => setActiveIndex(i)}
								style={{ width: i === activeIndex ? "36px" : "4px" }}
								type="button"
							/>
						</li>
					))}
				</ul>
				<div className="flex gap-4">
					<button
						aria-label="Previous"
						className="h-8 w-8 text-white transition-opacity disabled:opacity-30"
						disabled={activeIndex === 0}
						onClick={() => setActiveIndex((prev) => prev - 1)}
						type="button"
					>
						<svg
							aria-hidden="true"
							fill="none"
							height="32"
							viewBox="0 0 32 32"
							width="32"
						>
							<path
								d="M2.99305 16L11.8789 6.00348L14.1211 7.99657L8.34027 14.5H28V17.5H8.34023L14.1211 24.0035L11.8789 25.9966L2.99305 16Z"
								fill="currentColor"
							/>
						</svg>
					</button>
					<button
						aria-label="Next"
						className="h-8 w-8 text-white transition-opacity disabled:opacity-30"
						disabled={activeIndex === count - 1}
						onClick={() => setActiveIndex((prev) => prev + 1)}
						type="button"
					>
						<svg
							aria-hidden="true"
							fill="none"
							height="32"
							viewBox="0 0 32 32"
							width="32"
						>
							<path
								d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z"
								fill="currentColor"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

/* ── Page ─────────────────────────────────────────────────────────────── */

function RouteComponent() {
	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Hero ── */}
			<div
				className="relative w-full overflow-hidden"
				style={{
					backgroundImage: "url('/images/membership/hero-desktop.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center top",
					minHeight: "680px",
				}}
			>
				<div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black/80" />
				<div className="relative z-10 mx-auto max-w-7xl px-6 pt-6 lg:px-4">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink
									className="text-white/80 hover:text-white"
									render={<Link to="/" />}
								>
									Home
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="text-white/60" />
							<BreadcrumbItem>
								<BreadcrumbPage className="text-white">
									Membership
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-36 text-center sm:pt-40">
					<h1 className="mb-6 font-aeonik font-bold text-4xl text-white sm:text-5xl lg:text-6xl">
						Join our community of 800,000 Project Professionals
					</h1>
					<p className="mx-auto mb-10 max-w-2xl font-aeonik text-lg text-white/85 sm:text-xl">
						Become a PMI member and join the world&apos;s largest project
						management community. Make meaningful connections with visionary
						thought leaders, trend-setters, and like-minded professionals
						elevating our world through project success.
					</p>
					<MemberButton href="/membership/professional" size="lg" />
				</div>
			</div>

			{/* ── Sticky nav ── */}
			<div
				className="sticky top-0 z-30 w-full"
				style={{ background: PMI_NAV_BG }}
			>
				<div className="mx-auto max-w-7xl overflow-x-auto px-4">
					<nav
						aria-label="Page sections"
						className="flex min-w-max items-stretch"
					>
						{[
							{ label: "Membership Benefits", id: "benefits" },
							{ label: "Membership Types", id: "types" },
							{ label: "Local Chapters", id: "chapters" },
							{ label: "From Current Members", id: "testimonials" },
							{ label: "Ready to Join?", id: "join" },
						].map((item) => (
							<a
								className="flex items-center border-transparent border-b-2 px-5 py-5 font-aeonik font-medium text-sm text-white/60 transition hover:border-white/40 hover:text-white"
								href={`#${item.id}`}
								key={item.id}
							>
								{item.label}
							</a>
						))}
					</nav>
				</div>
			</div>

			{/* ── Benefits ── */}
			<div
				className="w-full scroll-mt-12"
				id="benefits"
				style={{ background: PMI_DARK }}
			>
				<div className="mx-auto max-w-7xl px-6 pt-16 pb-6 lg:px-4 lg:pt-20">
					<div className="mb-12 text-center">
						<p className="font-aeonik font-bold text-4xl text-white sm:text-5xl">
							Get more from PMI
						</p>
						<p
							className="mt-3 font-aeonik font-bold text-2xl sm:text-3xl"
							style={{ color: "#a78bfa" }}
						>
							with members-only benefits
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{BENEFIT_CARDS.map((card) => (
							<div
								className="overflow-hidden rounded-xl bg-white/5 transition hover:bg-white/10"
								key={card.title}
							>
								<img
									alt={card.title}
									className="aspect-video w-full object-cover"
									height={900}
									loading="lazy"
									src={card.img}
									width={1600}
								/>
								<div className="p-5">
									<h3 className="mb-2 font-aeonik font-semibold text-white text-xl">
										{card.title}
									</h3>
									<p className="font-aeonik text-sm text-white/70 leading-6">
										{card.body}
									</p>
								</div>
							</div>
						))}
					</div>
					{/* CTA row */}
					<div className="mt-10 flex flex-col items-start gap-4 border-white/10 border-t pt-8 sm:flex-row sm:items-center">
						<a
							className="inline-flex items-center gap-1 font-aeonik font-medium text-lg text-white/80 underline-offset-4 hover:text-white hover:underline"
							href="/membership/benefits"
						>
							Explore All Membership Benefits
							<ChevronRight />
						</a>
					</div>
				</div>
			</div>

			{/* ── Stats ── */}
			<div style={{ background: PMI_DARK }}>
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
						{STATS.map((s, i) => (
							<div
								className={`py-6 sm:py-0 ${i === 0 ? "sm:pr-8" : "sm:px-8"}`}
								key={s.stat}
							>
								<p
									className="font-aeonik font-bold text-3xl lg:text-4xl"
									style={{ color: "#a78bfa" }}
								>
									{s.stat}
								</p>
								<p className="mt-2 font-aeonik text-sm text-white/60 leading-6">
									{s.detail}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Explore all PMI membership benefits ── */}
			<div style={{ background: "#1a0d33" }}>
				<div className="mx-auto max-w-7xl px-6 pt-16 pb-16 lg:px-4 lg:pt-20 lg:pb-20">
					<h2 className="mb-4 text-center font-aeonik font-bold text-3xl text-white sm:text-4xl">
						Explore all PMI membership benefits
					</h2>
					<p className="mx-auto mb-12 max-w-2xl text-center font-aeonik text-base text-white/70 leading-7">
						A full, paid membership will make a career-defining difference with
						access to free and discounted professional development
						opportunities, as well as a global network of Project Professionals.
					</p>
					<div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
						{TIERS.map((tier, i) => (
							<div
								className={`py-8 sm:py-0 ${i === 0 ? "sm:pr-8" : "sm:px-8"}`}
								key={tier.name}
							>
								<h3 className="mb-3 font-aeonik font-bold text-white text-xl">
									{tier.name}
								</h3>
								<p
									className="mb-4 font-aeonik font-semibold text-sm leading-6"
									style={{ color: tier.taglineColor }}
								>
									{tier.tagline}
								</p>
								{tier.intro && (
									<p className="mb-4 font-aeonik text-sm text-white/70">
										{tier.intro}
										<span style={{ color: tier.taglineColor }}>
											{tier.introAccent}
										</span>
									</p>
								)}
								<ul className="space-y-3">
									{tier.items.map((item, j) => (
										<li
											className="flex items-baseline gap-2 font-aeonik text-sm text-white/80"
											// biome-ignore lint/suspicious/noArrayIndexKey: static ordered benefit list
											key={j}
										>
											<span
												className="flex-shrink-0 text-base leading-none"
												style={{ color: "rgba(255,255,255,0.45)" }}
											>
												·
											</span>
											<span>
												{item.bold && (
													<strong
														style={
															item.accent
																? { color: tier.taglineColor }
																: { color: "white" }
														}
													>
														{item.bold}
													</strong>
												)}
												{item.text}
											</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Ready to become a member ── */}
			<div style={{ background: PMI_NAV_BG }}>
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2 className="font-aeonik font-bold text-4xl text-white sm:text-5xl">
								Ready to become a member?
							</h2>
						</div>
						<div className="space-y-8">
							<div>
								<p className="mb-6 font-aeonik text-base text-white/80 leading-7">
									<span className="font-semibold" style={{ color: "#a78bfa" }}>
										Get 12 months of access to all PMI member benefits,
									</span>{" "}
									including the PMI Infinity AI tool, discounts on
									certification, free and discounted eLearning, a global network
									of Project Professionals, and so much more.
								</p>
								<div className="flex flex-wrap items-center gap-4">
									<a
										className="inline-flex items-center gap-1 font-aeonik font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
										href="/membership/benefits"
									>
										Explore All Membership Benefits
										<ChevronRight />
									</a>
								</div>
							</div>
							<div className="border-white/10 border-t pt-8">
								<p
									className="mb-3 font-aeonik font-semibold text-xl"
									style={{ color: "#a78bfa" }}
								>
									Still thinking about it?
								</p>
								<p className="mb-6 font-aeonik text-base text-white/80 leading-7">
									Give PMI membership a try for 30 days—no credit card required,
									no automatic renewal. Unlock 30 days of access to PMI
									Infinity, premium webinars, and project templates.
								</p>
								<a
									className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-aeonik font-semibold text-white transition hover:bg-white/10"
									href="/membership/trial"
								>
									Start 30-Day Free Trial <ChevronRight />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ── Membership types ── */}
			<div className="w-full scroll-mt-12 bg-white" id="types">
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
						{MEMBERSHIP_TYPES.map((type) => (
							<div
								className="relative flex flex-col overflow-hidden rounded-3xl"
								key={type.name}
								style={{ background: CARD_CREAM, minHeight: "440px" }}
							>
								{/* PMI star watermark */}
								<div className="pointer-events-none absolute inset-x-0 top-6 flex justify-center">
									<svg
										aria-hidden="true"
										className="opacity-[0.07]"
										fill="none"
										height="260"
										viewBox="0 0 32 32"
										width="260"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.9989 0L20.1758 5.9177L27.3138 4.68615L26.0823 11.8242L32 15.9989L26.0823 20.1758L27.3138 27.3138L20.1758 26.0823L15.9989 32L11.8242 26.0823L4.68615 27.3138L5.9177 20.1758L0 15.9989L5.9177 11.8242L4.68615 4.68615L11.8242 5.9177L15.9989 0Z"
											fill={PMI_DARK}
										/>
									</svg>
								</div>
								<div className="relative flex flex-1 flex-col p-8">
									{/* Badge */}
									<div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#200f3b]/25 px-3 py-1">
										<PmiStar size={16} />
										<span className="font-aeonik font-medium text-[#200f3b] text-xs">
											Membership
										</span>
									</div>
									{/* Spacer for watermark area */}
									<div className="flex-1" style={{ minHeight: "200px" }} />
									<h3 className="mb-3 font-aeonik font-bold text-2xl text-[#200f3b]">
										{type.name}
									</h3>
									<p className="mb-6 font-aeonik text-[#200f3b]/70 text-sm leading-6">
										{type.description}
									</p>
									<Link
										className="inline-block w-fit rounded-full px-6 py-3 font-aeonik font-semibold text-white transition hover:opacity-90"
										resetScroll
										style={{ background: PMI_DARK }}
										to={type.href}
									>
										Learn More
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── Connect in your community ── */}
			<div
				className="w-full scroll-mt-12 border-white/10 border-t"
				id="chapters"
				style={{ background: PMI_DARK }}
			>
				{/* Connect row */}
				<div className="mx-auto max-w-screen-xl px-6 pt-10 pb-0 lg:px-4 lg:pt-20">
					<div className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
						<h2 className="font-aeonik font-bold text-4xl text-white sm:text-5xl">
							Connect in your community
						</h2>
						<div>
							<p className="mb-6 font-aeonik text-base text-white/80 leading-7">
								Become part of your local PMI chapter to broaden your
								professional circle and gain fresh perspectives from Project
								Professionals near you.
							</p>
							<Link
								className="inline-flex h-12 items-center gap-2.5 rounded-full border border-white px-6 font-aeonik font-semibold text-white transition hover:bg-white/10"
								resetScroll
								to="/membership/chapters"
							>
								Explore Chapters
								<svg
									aria-hidden="true"
									fill="none"
									height="20"
									viewBox="0 0 32 32"
									width="20"
								>
									<path
										d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z"
										fill="currentColor"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>

				{/* Chapter gradient card */}
				<div className="mx-auto max-w-screen-xl px-6 pt-10 pb-16 lg:px-4 lg:pt-20 lg:pb-20">
					<div
						className="relative overflow-hidden rounded-3xl"
						style={{
							backgroundImage: "url('/images/membership/hero-desktop.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						<div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black/80" />
						<div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid lg:grid-cols-[5fr_7fr] lg:gap-x-32">
							<h3 className="mb-6 font-aeonik font-bold text-3xl text-white sm:text-4xl lg:mb-0">
								Check out chapters near you
							</h3>
							<div>
								<p className="mb-4 font-aeonik text-base text-white/80 leading-7">
									Chapter events, monthly meetings, and volunteer activities are
									opportunities not only to network, but to make a positive
									impact in your local community.
								</p>
								<p className="mb-6 font-aeonik text-sm text-white/55 leading-6">
									If not logged into PMI.org, chapter suggestions are based on
									your current IP address and may not reflect the chapters
									nearest your work or residence. Upon login, chapter
									suggestions are based on your primary address.
								</p>
								<ul className="space-y-2">
									{[
										"Pearl City, Hyderabad Chapter",
										"Pune-Deccan India Chapter",
									].map((ch) => (
										<li key={ch}>
											<a
												className="inline-flex items-center gap-0.5 font-aeonik font-medium text-base text-white underline-offset-4 hover:underline"
												href="/membership/chapters"
											>
												{ch}
												<svg
													aria-hidden="true"
													fill="none"
													height="24"
													viewBox="0 0 32 32"
													width="24"
												>
													<path
														clipRule="evenodd"
														d="M14.1389 11.0238L20.9756 19L14.1389 26.9762L11.8611 25.0238L17.0244 19L11.8611 12.9762L14.1389 11.0238Z"
														fill="currentColor"
														fillRule="evenodd"
													/>
												</svg>
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ── Testimonials ── */}
			<div
				className="w-full scroll-mt-12"
				id="testimonials"
				style={{ background: PMI_DARK }}
			>
				<div className="mx-auto max-w-7xl border-white/10 border-t px-6 pt-12 pb-16 lg:px-4 lg:pt-16 lg:pb-20">
					<h2 className="mb-12 text-center font-aeonik font-bold text-3xl text-white sm:text-4xl">
						See what current members are saying
					</h2>
					<TestimonialsCarousel />
				</div>
			</div>

			{/* ── Ready to join ── */}
			<div
				className="w-full scroll-mt-12 border-white/10 border-t"
				id="join"
				style={{ background: PMI_DARK }}
			>
				<div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-4 lg:py-20">
					<h2 className="mb-4 font-aeonik font-bold text-4xl text-white sm:text-5xl">
						Ready to join?
					</h2>
					<p className="mx-auto mb-10 max-w-lg font-aeonik text-lg text-white/80">
						Becoming a member is easy. Jumpstart your career and take advantage
						of member perks and discounts right away.
					</p>
					<MemberButton href="/membership/professional" size="lg" />
				</div>
			</div>

			{/* ── FAQ ── */}
			<div style={{ background: PMI_DARK }}>
				<div className="mx-auto max-w-7xl border-white/10 border-t px-6 pt-12 pb-24 lg:px-4 lg:pt-16 lg:pb-32">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2 className="font-aeonik font-bold text-3xl text-white sm:text-4xl">
								Top Membership Questions
							</h2>
							<p className="mt-4 font-aeonik text-base text-white/70 leading-7">
								Still have questions about PMI membership and the benefits
								you&apos;ll get? Read our membership FAQs for answers on
								everything from getting started to renewal.
							</p>
							<a
								className="mt-6 inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-aeonik font-semibold text-white transition hover:bg-white/10"
								href="/membership/faq"
							>
								Explore Membership FAQs <ChevronRight />
							</a>
						</div>
						<div
							className="divide-y divide-white/10 overflow-hidden rounded-2xl"
							style={{ background: PMI_NAV_BG }}
						>
							{FAQS.map((faq) => (
								<FaqItem a={faq.a} key={faq.q} q={faq.q} />
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
