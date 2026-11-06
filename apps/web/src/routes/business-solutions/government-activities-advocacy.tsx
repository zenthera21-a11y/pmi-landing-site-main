import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute(
	"/business-solutions/government-activities-advocacy"
)({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const CREAM = "#f7f3ec";
const DARK_BTN = "#1c1330";

const TESTIMONIALS = [
	{
		quote:
			"Part of my role is being a 'chaos coordinator.' Project management skills give me the structure and clarity to anticipate challenges early. My PMP strengthened my credibility and confidence to lead.",
		source: "Solomon Jennings IV, MPA, PMP, CSM",
		org: "Director, U.S. House of Representatives Green & Gold Congressional Aide Program",
		img: "//www.pmi.org/-/media/pmi/headless-images/business-solutions/testimonial-1200x676-jenningsiv.png?h=676&iar=0&w=1200&rev=a727155a1d304d4687d100b56efb7f5a&sc_lang=en",
		alt: "Solomon Jennings IV",
	},
	{
		quote:
			"I wasn't aware project management was a formal profession until my employer introduced it. Earning the PMP gave me structure and shared language that improved how I plan, communicate, and deliver results for my organization.",
		source: "Yamilette Bautista, MBA, PMP",
		org: "Operations Manager, House of Representatives Green & Gold Congressional Aide Program",
		img: "//www.pmi.org/-/media/pmi/headless-images/business-solutions/testimonial-1200x676-gov_bautista.png?h=676&iar=0&w=1200&rev=e61d6717157f48b99d641d1c1cb3ac01&sc_lang=en",
		alt: "Yamilette Bautista",
	},
];

const INSIGHTS = [
	{
		tags: ["White Paper", "Program Management"],
		title: "Aligning DAF with Program Management Industry Standard",
		date: "27 July 2023",
		href: "/business-solutions",
	},
	{
		tags: ["White Paper", "Agile"],
		title: "Agile Regulation: Gateway to the Future",
		date: "June 2022",
		href: "/business-solutions",
	},
	{
		tags: ["Case Study", "Lessons Learned"],
		title: "Ottawa Parliamentary Precinct Renewal Case Study",
		date: "February 2021",
		href: "/business-solutions/case-studies",
	},
	{
		tags: ["White Paper", "Agile"],
		title: "Building an Agile Federal Government: A Call to Action",
		date: "December 2020",
		href: "/business-solutions",
	},
];

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

function LeftArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			className="h-5 w-5"
			fill="currentColor"
			viewBox="0 0 32 32"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M2.99305 16L11.8789 6.00348L14.1211 7.99657L8.34027 14.5H28V17.5H8.34023L14.1211 24.0035L11.8789 25.9966L2.99305 16Z" />
		</svg>
	);
}

function VideoSection() {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	const handlePlay = () => {
		setPlaying(true);
		videoRef.current?.play();
	};

	return (
		<section className="mx-auto max-w-screen-xl px-6 pb-20 lg:px-4">
			<div className="relative overflow-hidden rounded-3xl lg:rounded-[9999px_9999px_9999px_24px]">
				<video
					className="h-auto w-full object-cover"
					controls={playing}
					poster="/images/business-solutions/government/government-video.jpg"
					ref={videoRef}
				>
					<source
						src="/images/business-solutions/government/government-video.mp4"
						type="video/mp4"
					/>
					<track default kind="captions" label="English" src="" />
				</video>
				{!playing && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/20">
						<button
							aria-label="Play video"
							className="transition hover:scale-105"
							onClick={handlePlay}
							type="button"
						>
							<svg
								aria-hidden="true"
								fill="currentColor"
								height="64"
								viewBox="0 0 64 64"
								width="64"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="32" cy="32" fill="#5b21b6" r="32" />
								<polygon fill="white" points="26,20 48,32 26,44" />
							</svg>
						</button>
					</div>
				)}
			</div>
		</section>
	);
}

function RouteComponent() {
	const [testimonialIdx, setTestimonialIdx] = useState(0);
	const testimonial = TESTIMONIALS[testimonialIdx];

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
						<li className="opacity-70">Government</li>
					</ol>
				</nav>
			</div>

			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pt-8 pb-16 lg:px-4 lg:pt-12 lg:pb-20">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
					<div className="relative h-auto lg:col-span-5">
						<div className="max-h-full lg:-ml-[max(16px,calc(50vw-640px))] lg:w-[max(calc(100%+16px),calc(100%+50vw-640px))] 2xl:ml-0 2xl:w-full">
							<img
								alt="hands typing on a keyboard"
								className="h-auto w-full 2xl:rounded-sm"
								height={931}
								src="//www.pmi.org/-/media/pmi/headless-images/pmi-for-organizations/general-landing_pmi-for-orgs.png?h=931&iar=0&w=1024&rev=003e8c0a805742faabbc140fbe4f0c45&sc_lang=en"
								width={1024}
							/>
						</div>
					</div>
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-[1.1] tracking-tight lg:text-5xl xl:text-6xl"
							style={{ color: INK }}
						>
							Project management practices for governments around the world
						</h1>
						<p
							className="mb-8 text-lg leading-relaxed lg:text-xl"
							style={{ color: BODY }}
						>
							Government projects often involve significant complexity and risk.
							Our standards and frameworks, best practices and certifications
							help governments navigate complex projects more effectively.
						</p>
						<a
							className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
							href="/contact"
							style={{ background: DARK_BTN }}
						>
							Contact Us
						</a>
					</div>
				</div>
			</section>

			{/* ── How We Can Help ──────────────────────────────────────────── */}
			<section className="bg-white">
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
						<h2
							className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
							style={{ color: INK }}
						>
							How We Can Help
						</h2>
						<div className="lg:col-span-7">
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								We offer{" "}
								<strong style={{ color: INK }}>
									globally recognized standards and frameworks
								</strong>
								, such as <em>The PMBOK® Guide</em>, to help government agencies
								standardize their project management practices. This approach
								aims for more predictable and repeatable project outcomes.
							</p>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Our <strong style={{ color: INK }}>best practices</strong>{" "}
								tackle significant complexities and risks involved in government
								projects. To assist governments in effectively navigating
								complex projects, we provide guidelines on:
							</p>
							<ul
								className="mb-4 list-disc space-y-2 pl-5 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								<li>Risk management</li>
								<li>Scope management</li>
								<li>Time management</li>
								<li>Other critical areas</li>
							</ul>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								And, we contribute to the{" "}
								<strong style={{ color: INK }}>professional development</strong>{" "}
								of government Project Managers by offering{" "}
								<a
									className="underline"
									href="/certifications"
									style={{ color: INK }}
								>
									certifications
								</a>{" "}
								like:
							</p>
							<ul
								className="mb-4 list-disc space-y-2 pl-5 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								<li>
									<a
										className="underline"
										href="/certifications/project-management-pmp"
										style={{ color: INK }}
									>
										Project Management Professional (PMP)®
									</a>
								</li>
								<li>
									<a
										className="underline"
										href="/certifications/certified-associate-capm"
										style={{ color: INK }}
									>
										Certified Associate in Project Management (CAPM)®
									</a>
								</li>
								<li>
									<a
										className="underline"
										href="/certifications/agile-acp"
										style={{ color: INK }}
									>
										PMI Agile Certified Practitioner (PMI-ACP)®
									</a>
								</li>
							</ul>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								This ensures they're equipped with the necessary skills and
								knowledge for efficient project management.
							</p>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								The{" "}
								<a
									className="underline"
									href="/certifications/ai-project-management-cpmai"
									style={{ color: INK }}
								>
									PMI Certified Professional in Managing AI (PMI-CPMAI)™ Exam
									Prep Course &amp; Certification
								</a>{" "}
								has been assessed as Awardable on the DoD Chief Digital and AI
								Office (CDAO) Tradewinds Solutions Marketplace. This designation
								confirms the rigor and readiness of our solution and enables
								government agencies to rapidly acquire PMI-CPMAI™ training
								through Other Transaction Authority (OTA), supporting AI
								capability development without lengthy procurement processes.
							</p>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								We're excited to offer exclusive enterprise discounts. Contact
								our team to get started today!
							</p>
							<a
								className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
								href="/contact"
								style={{ background: DARK_BTN }}
							>
								How We Can Help
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ── Testimonial carousel ─────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl overflow-hidden px-6 py-16 lg:px-4 lg:py-24">
				<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
					<div className="lg:col-span-7">
						<img
							alt={testimonial.alt}
							className="aspect-[16/10] w-full object-cover"
							height={676}
							src={testimonial.img}
							style={{ borderRadius: "24px 9999px 9999px 24px" }}
							width={1200}
						/>
					</div>
					<figure className="relative lg:col-span-5">
						<blockquote
							className="font-medium text-2xl leading-snug lg:text-3xl"
							style={{ color: INK }}
						>
							"{testimonial.quote}"
						</blockquote>
						<figcaption className="mt-5 text-lg" style={{ color: INK }}>
							<span className="block">{testimonial.source}</span>
							{testimonial.org && (
								<span className="block text-base" style={{ color: "#8a8696" }}>
									{testimonial.org}
								</span>
							)}
						</figcaption>

						{testimonialIdx < TESTIMONIALS.length - 1 && (
							<div
								aria-hidden
								className="pointer-events-none absolute top-0 hidden w-64 lg:block"
								style={{ left: "calc(100% + 3rem)", color: INK }}
							>
								<blockquote className="font-medium text-2xl leading-snug lg:text-3xl">
									"{TESTIMONIALS[testimonialIdx + 1].quote}"
								</blockquote>
								<div className="mt-5 text-lg">
									{TESTIMONIALS[testimonialIdx + 1].source}
								</div>
							</div>
						)}
					</figure>
				</div>

				<div className="mt-10 flex items-center justify-between">
					<div className="flex items-center gap-2">
						{TESTIMONIALS.map((t, i) => (
							<button
								aria-label={`Show testimonial ${i + 1}`}
								className="h-1.5 rounded-full transition-all"
								key={t.source}
								onClick={() => setTestimonialIdx(i)}
								style={{
									width: i === testimonialIdx ? 40 : 8,
									background: i === testimonialIdx ? INK : "#cfc9d6",
								}}
								type="button"
							/>
						))}
					</div>
					<div className="flex items-center gap-3">
						<button
							aria-label="Previous testimonial"
							className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
							disabled={testimonialIdx === 0}
							onClick={() => setTestimonialIdx(testimonialIdx - 1)}
							style={{ color: INK }}
							type="button"
						>
							<LeftArrowIcon />
						</button>
						<button
							aria-label="Next testimonial"
							className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
							disabled={testimonialIdx === TESTIMONIALS.length - 1}
							onClick={() => setTestimonialIdx(testimonialIdx + 1)}
							style={{ color: INK }}
							type="button"
						>
							<ArrowIcon />
						</button>
					</div>
				</div>
			</section>

			{/* ── Program Management Success in Government ─────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pb-6 lg:px-4">
				<h2
					className="font-medium text-3xl leading-tight lg:text-4xl"
					style={{ color: INK }}
				>
					Program Management Success in Government
				</h2>
			</section>

			{/* ── Insight cards ────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4 lg:pb-20">
				<div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
					{INSIGHTS.map((item) => (
						<article
							className="flex flex-col justify-between gap-4 rounded-xl border px-6 py-8"
							key={item.title}
							style={{ borderColor: INK }}
						>
							<div>
								<div className="mb-4 flex flex-wrap gap-2">
									{item.tags.map((tag) => (
										<span
											className="rounded-full border px-4 py-0.5 font-medium text-sm"
											key={tag}
											style={{ borderColor: INK, color: INK }}
										>
											{tag}
										</span>
									))}
								</div>
								<h3
									className="mb-3 font-medium text-xl leading-snug lg:text-2xl"
									style={{ color: INK }}
								>
									{item.title}
								</h3>
								<p className="text-base" style={{ color: BODY }}>
									{item.date}
								</p>
							</div>
							<div>
								<a
									className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
									href={item.href}
									style={{ background: DARK_BTN }}
								>
									Read
								</a>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* ── Video section ────────────────────────────────────────────── */}
			<VideoSection />
		</main>
	);
}
