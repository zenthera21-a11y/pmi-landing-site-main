import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/business-solutions/transformation")({
	component: RouteComponent,
});

const INK = "#1f1646"; // --text-primary (light theme deep indigo)
const BODY = "#4a4458"; // --text-secondary
const CREAM = "#f7f3ec"; // --surface-secondary
const CTA_BG = "#e8e2d7";
const DARK_BTN = "#1c1330"; // --fill-off-black-darkest

const CONTENT_ROWS = [
	{
		id: "ai",
		title: "Leading AI-driven Business Transformation",
		body: (
			<>
				Executives are under significant pressure to transform their
				organizations, and AI presents both disruption and opportunity to
				deliver results. Our research discusses what key steps leaders must take
				today to start their organizations on the path to a successful AI
				transformation.
			</>
		),
		cta: "View Research",
		href: "/learning/thought-leadership",
		external: false,
	},
	{
		id: "digital",
		title: "How to Navigate Digital Transformation, Insights from Experts",
		body: (
			<>
				In today's digital-first world, businesses must adopt digital
				technologies to stay competitive. Digital transformation fosters growth
				and innovation, ensuring value for customers and an edge over
				competitors. With the right tools and mindset, businesses can thrive.{" "}
				<em>
					The Digital Transformation Playbook: What You Need to Know and Do
				</em>{" "}
				offers expert insights, guiding organizations on this journey.
			</>
		),
		cta: "Learn More",
		href: "https://www.brightline.org/resources/the-digital-transformation-playbook/",
		external: true,
	},
	{
		id: "cto",
		title: "The Chief Transformation Officer, Why This Role Matters",
		body: (
			<>
				The C-suite is evolving, introducing the role of Chief Transformation
				Officer (CTO). A collaboration between PMI and Accenture reveals that
				CTOs are pivotal in driving firm-wide change and transformation. The
				report outlines key skills CTOs need and the conditions for their
				success.
			</>
		),
		cta: "Read the Report",
		href: "https://www.brightline.org/resources/the-chief-transformation-officer/",
		external: true,
	},
];

function ExternalIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M25.8787 4L25.9393 3.93933L26 4H28V6L28.0607 6.06065L28 6.1213V15H25V9.1213L14.0607 20.0607L11.9393 17.9393L22.8787 7H17V4H25.8787Z" />
			<path d="M12.7273 7H8C7.44772 7 7 7.44772 7 8V25H24C24.5523 25 25 24.5523 25 24V19.2727H28V24C28 26.2091 26.2091 28 24 28H4V8C4 5.79086 5.79086 4 8 4H12.7273V7Z" />
		</svg>
	);
}

function ArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M29.007 16L20.1211 6.00348L17.8789 7.99657L23.6597 14.5H4V17.5H23.6598L17.8789 24.0035L20.1211 25.9966L29.007 16Z" />
		</svg>
	);
}

function RouteComponent() {
	const [playing, setPlaying] = useState(false);

	return (
		<main className="overflow-x-hidden" style={{ background: CREAM }}>
			{/* ── Breadcrumb ───────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 pt-8 pb-2 lg:px-4">
				<nav aria-label="Breadcrumb">
					<ol
						className="flex flex-wrap items-center gap-1.5 font-medium text-sm"
						style={{ color: INK }}
					>
						<li>
							<Link className="hover:underline" to="/">
								Home
							</Link>
						</li>
						<li aria-hidden>/</li>
						<li>
							<Link className="hover:underline" to="/business-solutions">
								PMI for Organizations
							</Link>
						</li>
						<li aria-hidden>/</li>
						<li className="opacity-70">Business Transformation</li>
					</ol>
				</nav>
			</div>

			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-12 pb-16 lg:px-4 lg:pt-20 lg:pb-24">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
					{/* Left: circular image (bleeds toward left edge) */}
					<div className="relative h-auto lg:col-span-5">
						<div className="max-h-full lg:-ml-[max(16px,calc(50vw-640px))] lg:w-[max(calc(100%+16px),calc(100%+50vw-640px))] 2xl:ml-0 2xl:w-full">
							<img
								alt="hands typing on a keyboard"
								className="h-auto w-full 2xl:rounded-sm"
								height={931}
								src="/images/business-solutions/transformation/general-landing_pmi-for-orgs.png"
								width={1024}
							/>
						</div>
					</div>

					{/* Right: heading + subtitle */}
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-[1.1] tracking-tight lg:text-5xl xl:text-6xl"
							style={{ color: INK }}
						>
							Business transformation essentials for executives
						</h1>
						<p
							className="text-lg leading-relaxed lg:text-xl"
							style={{ color: BODY }}
						>
							Executives must turn their organization's vision into reality.
							Here's what to know to drive business transformation, growth, and
							tangible results.
						</p>
					</div>
				</div>
			</section>

			{/* ── Building Blocks ──────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pb-12 lg:px-4 lg:pb-20">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
					<div className="lg:col-span-5">
						<h2
							className="font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							The building blocks for effective transformation
						</h2>
					</div>
					<div className="lg:col-span-7">
						<p className="text-lg leading-relaxed" style={{ color: BODY }}>
							The key to a successful business transformation is building a
							movement that aligns inside-out and outside-in approaches to
							deliver on strategic goals with sustained benefits. Learn about
							the Brightline Transformation Compass and its five critical,
							mutually-reinforcing building blocks that drive effective
							transformation.
						</p>
						<div className="pt-6">
							<Link
								className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full px-6 font-medium text-white transition hover:opacity-90"
								resetScroll
								style={{ background: DARK_BTN }}
								to="/learning/brightline"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ── Video ────────────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 lg:px-4">
				<div className="grid grid-cols-1 lg:grid-cols-12">
					<div className="lg:col-span-10 lg:col-start-3">
						{playing ? (
							<video
								autoPlay
								className="h-auto w-full bg-black"
								controls
								poster="/images/business-solutions/transformation/video-cover.png"
								src="/images/business-solutions/transformation/transformation-video.mp4"
							>
								<track kind="captions" />
							</video>
						) : (
							<button
								className="relative w-full cursor-pointer overflow-hidden bg-white shadow-sm"
								onClick={() => setPlaying(true)}
								type="button"
							>
								<img
									alt="How can leaders truly transform their organizations"
									className="h-auto w-full object-cover"
									height={900}
									src="/images/business-solutions/transformation/video-cover.png"
									width={1600}
								/>
								{/* Title bar overlay */}
								<div className="pointer-events-none absolute inset-x-0 top-0 bg-linear-to-b from-black/70 to-transparent px-6 py-4">
									<span className="font-semibold text-sm text-white">
										How can leaders truly transform their organizations
									</span>
								</div>
								<div className="absolute inset-0 flex items-center justify-center">
									<span
										className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition hover:scale-105"
										style={{ background: DARK_BTN }}
									>
										<svg
											aria-hidden="true"
											fill="white"
											height="24"
											viewBox="0 0 24 24"
											width="24"
										>
											<path d="M8 5v14l11-7z" />
										</svg>
									</span>
								</div>
							</button>
						)}
					</div>
				</div>
			</section>

			{/* ── Content Rows ─────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-16 pb-16 lg:px-4 lg:pt-20 lg:pb-20">
				{CONTENT_ROWS.map((row, idx) => (
					<div key={row.id}>
						{idx > 0 && <div className="h-px w-full bg-gray-300" />}
						<div className="grid grid-cols-1 gap-8 py-14 lg:grid-cols-12 lg:gap-14">
							<div className="lg:col-span-5">
								<h2
									className="font-medium text-2xl leading-snug lg:text-3xl"
									style={{ color: INK }}
								>
									{row.title}
								</h2>
							</div>
							<div className="lg:col-span-7">
								<p className="text-lg leading-relaxed" style={{ color: BODY }}>
									{row.body}
								</p>
								<div className="pt-6">
									<a
										className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
										href={row.href}
										style={{ borderColor: INK, color: INK }}
										{...(row.external
											? { target: "_blank", rel: "noopener noreferrer" }
											: {})}
									>
										{row.cta}
										{row.external ? <ExternalIcon /> : <ArrowIcon />}
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</section>

			{/* ── Brightline CTA ───────────────────────────────────────────── */}
			<section style={{ background: CTA_BG }}>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-24">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2
								className="mb-6 font-medium text-3xl leading-tight lg:text-4xl"
								style={{ color: INK }}
							>
								Transform your organization's vision into reality with
								Brightline®
							</h2>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Brightline provides insights and solutions to help leaders
								effectively turn their organization's vision into reality
								through strategic initiative management. Learn how to better
								close the strategy-execution gap.
							</p>
							<Link
								className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full px-6 font-medium text-white transition hover:opacity-90"
								resetScroll
								style={{ background: DARK_BTN }}
								to="/learning/brightline"
							>
								Visit Brightline
							</Link>
						</div>
						<div className="overflow-hidden rounded-2xl">
							<img
								alt="Executive reflecting on business transformation"
								className="h-full w-full object-cover"
								height={600}
								src="/images/business-solutions/project-manager-addressing-company.jpg"
								width={800}
							/>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
