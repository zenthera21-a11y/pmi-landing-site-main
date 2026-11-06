import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@pmi-south-asia/ui/components/breadcrumb";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/infinity")({
	component: RouteComponent,
});

function ArrowRight() {
	return (
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
	);
}

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
					id="infCyan"
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
					id="infOrange"
					r="1"
				>
					<stop stopColor="#FF610F" />
					<stop offset="1" stopColor="#FF610F" stopOpacity="0" />
				</radialGradient>
				<clipPath id="infClip">
					<rect fill="white" height="32" width="32" />
				</clipPath>
				<mask
					height="32"
					id="infMask"
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
			<g clipPath="url(#infClip)">
				<path
					d="M15.9989 0L20.1758 5.9177L27.3138 4.68615L26.0823 11.8242L32 15.9989L26.0823 20.1758L27.3138 27.3138L20.1758 26.0823L15.9989 32L11.8242 26.0823L4.68615 27.3138L5.9177 20.1758L0 15.9989L5.9177 11.8242L4.68615 4.68615L11.8242 5.9177L15.9989 0Z"
					fill="#4F17A8"
				/>
				<g mask="url(#infMask)">
					<circle cx="0.5" cy="15.5" fill="url(#infCyan)" r="14.5" />
					<circle cx="15.5" cy="-0.5" fill="url(#infOrange)" r="18.5" />
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

function MemberButton() {
	return (
		<a
			className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-aeonik font-semibold text-lg shadow transition hover:shadow-md active:scale-95"
			href="/membership/professional"
		>
			<PmiStar size={24} />
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

const STATS = [
	{
		value: "50% learn",
		description:
			"Your peers are growing their project leadership, sharpening decision-making skills, mastering risk management, and preparing for professional certifications.",
	},
	{
		value: "77% augment",
		description:
			"Users are augmenting their work by aligning stakeholders, creating project documentation, and defining solutions to boost their performance.",
	},
	{
		value: "18% automate",
		description:
			"Automated workflows save time and drive impact through coordinated collaboration, standardized templates, and streamlined communication.",
	},
];

const FEATURES = [
	{
		title: "Prompt Library",
		description:
			"Level up your projects with recommended queries and helpful prompts searched and vetted by the PMI community.",
	},
	{
		title: "Specialized AI Agents",
		description:
			"Access dedicated agents that provide expert-level assistance in creating critical planning documentation with less prompting. Launch them directly from the Agents page or by starting a new chat. Create Project Charters, RACI Charts, Stakeholder, and Risk Management Plans, and more.",
	},
	{
		title: "Document Analysis and Creation",
		description:
			"Upload your project documents and let PMI Infinity do the heavy lifting. It extracts, summarizes, and analyzes your content, then allows you to generate polished, ready-to-use deliverables in minutes.",
	},
	{
		title: "Templates and Checklists",
		description:
			"Streamline your project management tasks. Infinity understands your needs, enabling you to create smart templates and checklists for a consistent approach.",
	},
	{
		title: "Trust the Source",
		description:
			"Know exactly where your information comes from. Infinity provides clear references and source visibility, so you can verify content and make confident, informed decisions.",
	},
];

const TESTIMONIALS = [
	{
		quote:
			"PMI Infinity went beyond my expectations in helping me prepare for the PMP exam. I practiced with PMChallenge questions, used Infinity to deepen my understanding, and I passed!",
		name: "Kristi Cummings, PMP",
		role: "Portfolio Manager",
		location: "Dandridge, Tennessee",
		img: "/images/membership/testimonial-1.png",
		alt: "PMI Infinity community member",
	},
	{
		quote:
			"I've used PMI Infinity to help align stakeholders on complex programs. It's like having a senior PM available at all times — the guidance is grounded and reliable.",
		name: "Marcus Reid, PMP",
		role: "Senior Program Manager",
		location: "Chicago, Illinois",
		img: "/images/membership/testimonial-2.png",
		alt: "PMI Infinity community member",
	},
	{
		quote:
			"PMI Infinity helped me generate a risk register in minutes. What used to take days now takes an afternoon. It's transformed how I prepare project documentation.",
		name: "Saucony Hunt",
		role: "IT Project Specialist",
		location: "Augusta, GA",
		img: "/images/membership/testimonial-3.png",
		alt: "PMI Infinity community member",
	},
];

function TestimonialsCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const t = TESTIMONIALS[activeIndex];
	const count = TESTIMONIALS.length;

	return (
		<div>
			<div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[7.7vw]">
				<div className="lg:order-first lg:basis-2/3">
					<div
						className="relative w-full overflow-hidden"
						style={{ paddingBottom: "66.67%" }}
					>
						<img
							alt={t.alt}
							className="absolute inset-0 h-full w-full rounded-3xl object-cover"
							height={900}
							loading="lazy"
							src={t.img}
							width={1350}
						/>
					</div>
				</div>
				<div className="flex flex-col justify-center gap-4 lg:order-last lg:basis-1/3">
					<blockquote className="font-aeonik font-medium text-[#200f3b] text-xl leading-snug lg:text-2xl">
						&ldquo;{t.quote}&rdquo;
					</blockquote>
					<div>
						<p className="font-aeonik font-medium text-[#200f3b] text-base">
							{t.name}
						</p>
						<p className="font-aeonik text-gray-500 text-sm">{t.role}</p>
						<p className="font-aeonik text-gray-500 text-sm">{t.location}</p>
					</div>
				</div>
			</div>

			<div className="mt-6 flex items-center justify-between py-2">
				<ul className="flex items-center gap-2">
					{TESTIMONIALS.map((_, i) => (
						<li
							// biome-ignore lint/suspicious/noArrayIndexKey: pagination dots keyed by position
							key={i}
						>
							<button
								aria-label={`Go to testimonial ${i + 1}`}
								className="block h-1 rounded-full bg-[#200f3b] transition-all duration-300"
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
						className="h-8 w-8 text-[#200f3b] transition-opacity disabled:opacity-30"
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
						className="h-8 w-8 text-[#200f3b] transition-opacity disabled:opacity-30"
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

function VideoSection() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [playing, setPlaying] = useState(false);

	function handlePlay() {
		setPlaying(true);
		requestAnimationFrame(() => {
			videoRef.current?.play();
		});
	}

	return (
		<section
			className="relative overflow-hidden"
			style={{ background: "#200f3b" }}
		>
			<div
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse at 50% 85%, #3b0d6e 0%, transparent 62%)",
				}}
			/>
			<div className="relative z-10">
				{/* biome-ignore lint/a11y/useMediaCaption: marketing sizzle reel */}
				<video
					className="block w-full"
					controls={playing}
					playsInline
					poster="/images/infinity/video-thumbnail.png"
					preload="none"
					ref={videoRef}
				>
					<source src="/videos/infinity/infinity-intro.mp4" type="video/mp4" />
				</video>
				{!playing && (
					<div className="absolute inset-0 flex items-center justify-center">
						<button
							aria-label="Play PMI Infinity, your AI-powered coach"
							className="flex h-20 w-20 items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95"
							onClick={handlePlay}
							style={{ background: "#4f17a8" }}
							type="button"
						>
							<svg fill="white" height="30" viewBox="0 0 24 24" width="30">
								<title>Play</title>
								<path d="M8 5v14l11-7z" />
							</svg>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Hero ── */}
			<section
				className="relative w-full"
				style={{
					backgroundImage: "url('/images/infinity/hero.jpg')",
					backgroundSize: "cover",
					backgroundPosition: "center top",
					minHeight: "680px",
				}}
			>
				<div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/50 to-black/80" />
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
									PMI Infinity AI Tool
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-40 text-center sm:pt-40">
					<h1 className="mb-6 font-aeonik font-medium text-4xl text-white sm:text-5xl lg:text-6xl">
						Introducing your AI that speaks project management. Meet PMI
						Infinity™.
					</h1>
					<p className="mx-auto mb-10 max-w-3xl font-aeonik text-lg text-white/85 sm:text-xl">
						Powered by multiple leading AI models and grounded in global
						standards from PMI, Infinity delivers secure, project-specific
						guidance you can trust, available online and in the PMI Official
						mobile app.
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
						<a
							className="inline-flex items-center gap-2 rounded-full bg-white/95 px-7 py-3.5 font-aeonik font-semibold text-[#200f3b] shadow transition hover:bg-white active:scale-95"
							href="/membership/trial"
						>
							Start 30-Day Free Trial
						</a>
						<a
							className="inline-flex items-center gap-2 rounded-full border border-white px-7 py-3.5 font-aeonik font-semibold text-white transition hover:bg-white/10 active:scale-95"
							href="https://infinity.pmi.org"
							rel="noopener noreferrer"
							target="_blank"
						>
							Member? Launch PMI Infinity
							<ArrowRight />
						</a>
					</div>
				</div>
			</section>

			{/* ── What can PMI Infinity™ do for you? ── */}
			<section
				className="relative -mt-10 rounded-t-[2rem] bg-white pt-16 pb-20 lg:pt-20 lg:pb-24"
				style={{ zIndex: 1 }}
			>
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-4">
					<div>
						<h2 className="font-aeonik font-medium text-3xl text-[#200f3b] lg:text-4xl">
							What can PMI Infinity™ do for you?
						</h2>
					</div>
					<div className="space-y-5">
						<p className="font-aeonik text-base text-gray-700 leading-7">
							Project managers are redefining success and embracing AI to
							automate, assist and augment their work. PMI Infinity delivers
							project-specific guidance you can trust, helping teams make
							smarter, faster decisions with confidence and control.
						</p>
						<p className="font-aeonik text-base text-gray-700 leading-7">
							See what makes Infinity different and how it can power your
							project success.
						</p>
						<ul className="space-y-3">
							<li className="font-aeonik text-base text-gray-700 leading-7">
								<strong className="font-semibold text-[#200f3b]">
									Project Management expertise, built-in:
								</strong>{" "}
								Grounded in global standards and expert community insights from
								PMI, Infinity delivers project-ready guidance you can trust.
							</li>
							<li className="font-aeonik text-base text-gray-700 leading-7">
								<strong className="font-semibold text-[#200f3b]">
									Smarter, more relevant intelligence:
								</strong>{" "}
								Powered by multiple leading generative AI models, Infinity
								delivers accurate, context-aware answers built for how project
								professionals work.
							</li>
							<li className="font-aeonik text-base text-gray-700 leading-7">
								<strong className="font-semibold text-[#200f3b]">
									Secure by design:
								</strong>{" "}
								Your data stays private and protected, so you can work with
								confidence and peace of mind.{" "}
								<a
									className="text-purple-700 underline underline-offset-2 hover:text-purple-900"
									href="/trust-center"
								>
									See how we ensure reliability, security and quality.
								</a>
							</li>
							<li className="font-aeonik text-base text-gray-700 leading-7">
								<strong className="font-semibold text-[#200f3b]">
									Always within reach:
								</strong>{" "}
								Available online and in the PMI Official mobile app, Infinity
								brings trusted project intelligence wherever you work.
							</li>
						</ul>
						<p className="font-aeonik font-medium text-[#200f3b] text-base leading-7">
							PMI Infinity is an exclusive benefit for PMI members. Experience
							it commitment-free with our 30-day Membership Free Trial.
						</p>
						<div className="flex flex-col gap-4 pt-2 sm:flex-row">
							<a
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-7 py-3.5 font-aeonik font-semibold text-white transition hover:bg-[#2f1856] active:scale-95"
								href="/membership/trial"
							>
								Start 30-Day Free Trial
								<ArrowRight />
							</a>
							<a
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-7 py-3.5 font-aeonik font-semibold text-white transition hover:bg-[#2f1856] active:scale-95"
								href="https://infinity.pmi.org/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Member? Launch PMI Infinity
								<ArrowRight />
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ── How are Project Managers using PMI Infinity? ── */}
			<section
				style={{
					backgroundImage: "url('/images/infinity/stats-bg.png')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundColor: "#0a5568",
				}}
			>
				<div className="mx-auto max-w-7xl px-6 pt-14 pb-16 lg:px-4 lg:pt-16 lg:pb-20">
					<div className="mb-10 lg:mx-auto lg:max-w-3xl lg:text-center">
						<h2 className="font-aeonik font-medium text-3xl text-white lg:text-4xl">
							How are Project Managers using PMI Infinity?
						</h2>
					</div>
					<div className="grid grid-cols-1 divide-y divide-white/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
						{STATS.map((stat, i) => (
							<div
								className={`py-8 sm:py-0 ${i === 0 ? "sm:pr-10" : "sm:px-10"}`}
								key={stat.value}
							>
								<p className="mb-3 font-aeonik font-medium text-3xl text-white lg:text-4xl">
									{stat.value}
								</p>
								<p className="font-aeonik font-medium text-sm text-white/85 leading-6">
									{stat.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Download the PMI Official mobile app ── */}
			<section className="bg-white py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-4">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
						<div>
							<h2 className="font-aeonik font-medium text-3xl text-[#200f3b] lg:text-4xl">
								Download the PMI Official mobile app
							</h2>
						</div>
						<div>
							<p className="mb-6 font-aeonik font-medium text-[#200f3b] text-xl">
								Take PMI Infinity with you anytime, anywhere!
							</p>
							<div className="mb-6 overflow-hidden rounded-2xl">
								<img
									alt="Download the PMI Official mobile app — PMI Infinity with QR code"
									className="w-full rounded-2xl"
									height={575}
									loading="lazy"
									src="/images/infinity/mobile-app.png"
									width={1024}
								/>
							</div>
							<div className="flex flex-wrap items-center gap-4">
								<a
									href="https://apps.apple.com/us/app/pmi-official/id6744980359"
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										alt="Download on the App Store"
										className="h-12 w-auto"
										height={50}
										src="/images/infinity/app-store-badge.png"
										width={150}
									/>
								</a>
								<a
									href="https://play.google.com/store/apps/details?id=org.pmi.mobileapp"
									rel="noopener noreferrer"
									target="_blank"
								>
									<img
										alt="Get it on Google Play"
										className="h-12 w-auto"
										height={50}
										src="/images/infinity/google-play-badge.png"
										width={169}
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Unlock project intelligence — Features ── */}
			<section className="border-gray-100 border-t bg-white py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-4">
					<div className="mb-12 text-center">
						<h2 className="font-aeonik font-medium text-3xl text-[#200f3b] lg:text-4xl">
							Unlock project intelligence with PMI Infinity. Explore the
							features.
						</h2>
					</div>
					<div className="divide-y divide-gray-200">
						{FEATURES.map((feature) => (
							<div
								className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-[5fr_7fr] lg:gap-16"
								key={feature.title}
							>
								<h3 className="font-aeonik font-medium text-2xl text-[#200f3b]">
									{feature.title}
								</h3>
								<p className="font-aeonik text-base text-gray-700 leading-7">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Video / devices section ── */}
			<VideoSection />

			{/* ── Elevate your organization ── */}
			<section style={{ background: "#140829" }}>
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2 className="mb-6 font-aeonik font-bold text-3xl text-white lg:text-4xl">
								Elevate your organization with PMI Infinity™
							</h2>
							<p className="mb-8 font-aeonik text-base text-white/80 leading-7">
								Equip your organization with secure, project-specific
								intelligence that strengthens decision-making, accelerates
								delivery and ensures consistency across teams and portfolios.
							</p>
							<a
								className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 font-aeonik font-semibold text-white transition hover:bg-white/10 active:scale-95"
								href="/business-solutions/commercial-partners/pmi-infinity-for-organizations"
							>
								Explore How
								<ArrowRight />
							</a>
						</div>
						<div className="overflow-hidden rounded-2xl">
							<img
								alt="Organization teams working with PMI Infinity"
								className="h-full w-full object-cover"
								height={600}
								loading="lazy"
								src="/images/business-solutions/knowledge-networking.jpg"
								width={800}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ── Community Forum Testimonials ── */}
			<section className="bg-white py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-4">
					<h2 className="mb-12 text-center font-aeonik font-bold text-3xl text-[#200f3b] lg:text-4xl">
						What Our Community Forum Is Saying About PMI Infinity
					</h2>
					<TestimonialsCarousel />
				</div>
			</section>

			{/* ── Infinite Possibilities ── */}
			<section style={{ background: "#f5f0e8" }}>
				<div className="mx-auto max-w-7xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2 className="mb-6 font-aeonik font-bold text-3xl text-[#200f3b] lg:text-4xl">
								Infinite Possibilities
							</h2>
							<p className="mb-8 font-aeonik text-base text-gray-600 leading-7">
								What&apos;s next for PMI Infinity? Enhanced productivity and
								efficiency for added value. Together, with our global community,
								we will continue building the world&apos;s most trusted and
								comprehensive knowledge platform to maximize project success.
								Visit our AI Resource Hub for the latest updates.
							</p>
							<a
								className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-aeonik font-semibold text-white transition hover:bg-[#2f1856] active:scale-95"
								href="/resources/ai-resource-hub"
							>
								Explore the AI Resource Hub
							</a>
						</div>
						<div className="overflow-hidden rounded-2xl">
							<img
								alt="Infinite possibilities with PMI Infinity"
								className="h-full w-full object-cover"
								height={600}
								loading="lazy"
								src="/images/business-solutions/project-manager-addressing-company.jpg"
								width={800}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ── Ready to get the full PMI Infinity experience? ── */}
			<section
				className="border-gray-200 border-t py-16 text-center lg:py-20"
				style={{ background: "#f5f0e8" }}
			>
				<div className="mx-auto max-w-3xl px-6 lg:px-4">
					<h2 className="mb-4 font-aeonik font-bold text-3xl text-[#200f3b] lg:text-4xl">
						Ready to get the full PMI Infinity experience?
					</h2>
					<p className="mx-auto mb-10 max-w-2xl font-aeonik text-base text-gray-600 leading-7">
						Become a PMI member and get full access to PMI Infinity, plus
						exclusive AI learning resources, tools and insights. Join a global
						community of project professionals leading the future of work.
					</p>
					<MemberButton />
				</div>
			</section>
		</main>
	);
}
