import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute(
	"/business-solutions/academic-institutions"
)({
	component: RouteComponent,
});

const INK = "#1f1646"; // --text-primary deep indigo
const BODY = "#4a4458"; // --text-secondary
const CREAM = "#f7f3ec"; // --surface-secondary
const TERTIARY = "#ece6dc"; // --surface-tertiary
const DARK_BTN = "#1c1330"; // --fill-off-black-darkest

const TABS = [
	{ id: "foundations", label: "Foundational Education" },
	{ id: "pmigac", label: "PMI GAC Accreditation" },
	{ id: "gsm", label: "Group Student Membership" },
	{ id: "gsc", label: "Gold standard certifications" },
	{ id: "atp", label: "Training Partners" },
];

const GAC_BENEFITS = [
	"Strengthened program reputation",
	"Increased visibility through promotion on GAC website",
	"Access to exclusive academic resources like PMI intellectual property and scholarship opportunities",
	"Enriched classroom experience",
	"Enhanced graduate job prospects",
	"Faster path to certification for students and grads",
];

const TESTIMONIALS = [
	{
		quote:
			"We consistently hear from students that our program was selected because it is a GAC-accredited program.",
		source: "Northeastern University",
		org: "",
		img: "/images/business-solutions/academic-institutions/testimonials/collaborating-professionals.png",
		alt: "Collaborating professionals",
	},
	{
		quote:
			"GAC accreditation provides a new level of respect and credibility of our project management program.",
		source: "Embry-Riddle Aeronautical University",
		org: "",
		img: "/images/business-solutions/academic-institutions/testimonials/jumping-into-the-discussion.png",
		alt: "Jumping into the discussion",
	},
	{
		quote:
			"The most important thing for me was that [my university] was accredited by the Project Management Institute. PMI GAC accreditation was the number one thing I was looking for in my master's program.",
		source: "Student",
		org: "George Washington University",
		img: "/images/business-solutions/academic-institutions/testimonials/learning-among-peers.png",
		alt: "Learning among peers",
	},
	{
		quote:
			"I wanted a program that was aligned with PMI principles and guidelines so that it would add credibility to my resume, and the University of Houston was one of those programs accredited by GAC.",
		source: "Student",
		org: "University of Houston",
		img: "/images/business-solutions/academic-institutions/testimonials/scholastic-discovery.png",
		alt: "Scholastic discovery",
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

function RouteComponent() {
	const [activeTab, setActiveTab] = useState("foundations");
	const [testimonialIdx, setTestimonialIdx] = useState(0);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveTab(entry.target.id);
					}
				}
			},
			{ rootMargin: "-40% 0px -50% 0px" }
		);
		for (const tab of TABS) {
			const el = document.getElementById(tab.id);
			if (el) {
				observer.observe(el);
			}
		}
		return () => observer.disconnect();
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		const navH = navRef.current?.offsetHeight ?? 0;
		if (el) {
			const top = el.getBoundingClientRect().top + window.scrollY - navH - 8;
			window.scrollTo({ top, behavior: "smooth" });
		}
	};

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
						<li className="opacity-70">Academic Institutions</li>
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
								src="/images/business-solutions/transformation/general-landing_pmi-for-orgs.png"
								width={1024}
							/>
						</div>
					</div>
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-[1.1] tracking-tight lg:text-5xl xl:text-6xl"
							style={{ color: INK }}
						>
							PMI offerings for academic institutions
						</h1>
						<p
							className="mb-8 text-lg leading-relaxed lg:text-xl"
							style={{ color: BODY }}
						>
							Demand for project management is rising— explore solutions that
							promote the reach, quality, and relevance of your academic
							programs as you prepare the project leaders of tomorrow.
						</p>
						<a
							className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
							href="/contact"
							style={{ background: DARK_BTN }}
						>
							Book a Meeting
						</a>
					</div>
				</div>
			</section>

			{/* ── Sticky tab nav ───────────────────────────────────────────── */}
			<div
				className="sticky top-0 z-30 border-gray-200 border-y bg-white"
				ref={navRef}
			>
				<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
					<nav className="flex gap-6 overflow-x-auto lg:justify-center lg:gap-10">
						{TABS.map((tab) => (
							<button
								className="whitespace-nowrap py-5 font-medium text-sm transition lg:text-base"
								key={tab.id}
								onClick={() => scrollTo(tab.id)}
								style={{
									color: activeTab === tab.id ? INK : "#8a8696",
									borderBottom:
										activeTab === tab.id
											? `3px solid ${INK}`
											: "3px solid transparent",
								}}
								type="button"
							>
								{tab.label}
							</button>
						))}
					</nav>
				</div>
			</div>

			{/* ── Meet the demand ──────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
					<h2
						className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
						style={{ color: INK }}
					>
						Meet the demand
					</h2>
					<div className="lg:col-span-7">
						<h3
							className="mb-5 font-medium text-xl lg:text-2xl"
							style={{ color: INK }}
						>
							30M new Project Professionals needed by 2030
						</h3>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							Opportunities in project management are growing across industries,
							prompting an increasing number of colleges and universities to
							provide degree programs, certificates, and courses that support
							students in developing Project Management skills.
						</p>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							Our programs for higher education empower you to establish, grow,
							and differentiate your project management offerings.
						</p>
						<p className="text-lg leading-relaxed" style={{ color: BODY }}>
							We help you stand out to prospective students, employers, and
							peers by demonstrating the excellence and relevance of your
							programs and increasing the marketability and career potential of
							your grads.
						</p>
					</div>
				</div>
			</section>

			{/* ── Foundational Education ───────────────────────────────────── */}
			<section
				id="foundations"
				style={{ background: TERTIARY, scrollMarginTop: 80 }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2
								className="mb-6 font-medium text-3xl leading-tight lg:text-4xl"
								style={{ color: INK }}
							>
								Get project ready with PMI<sup>®</sup> Foundations of Project
								Management
							</h2>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Build confident Project Professionals from day one.
							</p>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Offer your students a practical, accessible project management
								course designed to build the skills to turn ideas into
								execution.
							</p>
							<a
								className="inline-flex h-12 w-fit items-center rounded-full px-6 font-medium text-white transition hover:opacity-90"
								href="/business-solutions/academic-institutions/pmi-foundations-of-project-management"
								style={{ background: DARK_BTN }}
							>
								Learn More
							</a>
						</div>
						<div className="overflow-hidden rounded-xl">
							<img
								alt="Certified project professional presenting to fellow project professionals during a conference meeting."
								className="h-full w-full object-cover"
								height={600}
								src="/images/business-solutions/academic-institutions/pm-foundations.png"
								width={800}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ── PMI GAC Accreditation ────────────────────────────────────── */}
			<section
				className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20"
				id="pmigac"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
					<h2
						className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
						style={{ color: INK }}
					>
						Fostering excellence in degree programs
					</h2>
					<div className="lg:col-span-7">
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							The PMI Global Accreditation Center for project management
							Education Programs (GAC) accredits Project Management or related
							programs offered within accredited institutions of higher
							education at the bachelor, postgraduate, and doctorate levels,
							assuring that they are high-quality, relevant, and
							student-focused.
						</p>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							PMI GAC accreditation demonstrates that a program meets
							comprehensive global standards of excellence and prepares
							graduates to meet market demands.
						</p>
						<p className="mb-3 font-semibold text-lg" style={{ color: INK }}>
							Key Benefits:
						</p>
						<ul
							className="mb-8 list-disc space-y-3 pl-5 text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							{GAC_BENEFITS.map((b) => (
								<li key={b}>{b}</li>
							))}
						</ul>
						<a
							className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
							href="/learning/academic-programs"
							style={{ borderColor: INK, color: INK }}
						>
							Become Accredited
							<ArrowIcon />
						</a>
					</div>
				</div>
			</section>

			{/* ── Testimonial carousel ─────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl overflow-hidden px-6 pb-16 lg:px-4 lg:pb-24">
				{/* Slide: image (D-shape) + quote, with next quote peeking */}
				<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
					<div className="lg:col-span-7">
						<img
							alt={testimonial.alt}
							className="aspect-[16/10] w-full object-cover"
							height={1000}
							src={testimonial.img}
							style={{ borderRadius: "24px 9999px 9999px 24px" }}
							width={1600}
						/>
					</div>
					<figure className="relative lg:col-span-5">
						<blockquote
							className="font-medium text-2xl leading-snug lg:text-3xl"
							style={{ color: INK }}
						>
							“{testimonial.quote}”
						</blockquote>
						<figcaption className="mt-5 text-lg" style={{ color: INK }}>
							<span className="block">{testimonial.source}</span>
							{testimonial.org && (
								<span className="block text-base" style={{ color: "#8a8696" }}>
									{testimonial.org}
								</span>
							)}
						</figcaption>

						{/* Peek of next testimonial */}
						{testimonialIdx < TESTIMONIALS.length - 1 && (
							<div
								aria-hidden
								className="pointer-events-none absolute top-0 hidden w-64 lg:block"
								style={{ left: "calc(100% + 3rem)", color: INK }}
							>
								<blockquote className="font-medium text-2xl leading-snug lg:text-3xl">
									“{TESTIMONIALS[testimonialIdx + 1].quote}”
								</blockquote>
								<div className="mt-5 text-lg">
									{TESTIMONIALS[testimonialIdx + 1].source}
								</div>
							</div>
						)}
					</figure>
				</div>

				{/* Controls row: progress (left) + arrows (right) */}
				<div className="mt-10 flex items-center justify-between">
					<div className="flex items-center gap-2">
						{TESTIMONIALS.map((t, i) => (
							<button
								aria-label={`Show testimonial ${i + 1}`}
								className="h-1.5 rounded-full transition-all"
								key={`${t.source}-${t.org}`}
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

			{/* ── Group Student Membership ─────────────────────────────────── */}
			<section
				className="mx-auto max-w-screen-xl px-6 pt-8 pb-16 lg:px-4 lg:pt-12 lg:pb-20"
				id="gsm"
				style={{ scrollMarginTop: 80 }}
			>
				{/* Intro row */}
				<div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
					<h2
						className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
						style={{ color: INK }}
					>
						PMI Group Student Membership
					</h2>
					<p
						className="text-lg leading-relaxed lg:col-span-7"
						style={{ color: BODY }}
					>
						Give students the tools, credentials and community to jumpstart
						their project management career. With PMI student membership,
						students can build project management expertise through online
						resources, develop professional relationships, and advance through
						personalized career guidance and certification discounts.
					</p>
				</div>

				{/* Gradient stadium card */}
				<div
					className="overflow-hidden px-8 py-14 text-white lg:px-16 lg:py-20"
					style={{
						borderRadius: "min(40vw, 360px)",
						background:
							"radial-gradient(120% 95% at 50% 0%, #e0590f 0%, #7a2da6 28%, #3a1f6b 55%, #1f1248 100%)",
					}}
				>
					<div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
						{/* Left */}
						<div>
							<div className="mb-5 flex items-center gap-2 font-medium text-sm">
								<span
									aria-hidden
									className="flex h-6 w-6 items-center justify-center rounded-md font-bold text-[9px] text-white"
									style={{ background: "#7c3aed" }}
								>
									PMI
								</span>
								PMI Group Student Membership
							</div>
							<h3 className="mb-5 font-medium text-2xl leading-snug lg:text-3xl">
								Unlock student success with PMI Membership
							</h3>
							<p className="mb-8 text-base text-white/85 leading-relaxed">
								PMI membership gives students the tools to thrive as project
								professionals. Our group program makes it easy for schools to
								enroll 10 or more students.
							</p>
							<a
								className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white px-6 font-medium transition hover:opacity-90"
								href="/membership"
								style={{ color: "#7c3aed" }}
							>
								<span
									aria-hidden
									className="flex h-5 w-5 items-center justify-center rounded font-bold text-[7px] text-white"
									style={{ background: "#7c3aed" }}
								>
									PMI
								</span>
								Discover Group Student Membership
							</a>
						</div>

						{/* Right */}
						<div className="space-y-8">
							<div>
								<h4 className="mb-2 font-medium text-lg">Knowledge</h4>
								<p className="text-base text-white/85 leading-relaxed">
									The information your students need to succeed—from the PMBOK
									<sup>®</sup> Guide to over 1,700 publications in our Business
									Reading Center.
								</p>
							</div>
							<div>
								<h4 className="mb-2 font-medium text-lg">Community</h4>
								<p className="text-base text-white/85 leading-relaxed">
									Access to a global network of 750,000+ professionals with
									opportunities to connect online and locally.
								</p>
							</div>
							<div>
								<h4 className="mb-2 font-medium text-lg">Value</h4>
								<p className="text-base text-white/85 leading-relaxed">
									Members-only discounts on gold-standard courses and
									certification exams like CAPM<sup>®</sup> and PMP<sup>®</sup>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ── Gold Standard Certifications ──────────────────────────── */}
			<section id="gsc" style={{ background: TERTIARY, scrollMarginTop: 80 }}>
				<div className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4 lg:py-20">
					{/* Intro */}
					<div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
						<h2
							className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
							style={{ color: INK }}
						>
							Gold standard certifications
						</h2>
						<p
							className="text-lg leading-relaxed lg:col-span-7"
							style={{ color: BODY }}
						>
							Help your students prepare for and maintain industry
							certifications that prove their skills and boost employability —
							official training available for PMP, CAPM, PMI-ACP, and PMI-CP.
						</p>
					</div>

					{/* Certification cards carousel */}
					<CertCarousel />
				</div>
			</section>

			{/* ── ATP – Skills-Based Training & Certification Prep ──────── */}
			<section
				className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20"
				id="atp"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
					<h2
						className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
						style={{ color: INK }}
					>
						Skills-Based Training &amp; Certification Prep
					</h2>
					<div className="lg:col-span-7">
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							As a PMI® Authorized Training Partner, you'll get the coaching,
							teaching materials, and support you need to provide students with
							career-centered instruction.
						</p>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							Help your students prepare for and maintain industry
							certifications that prove their skills and boost employability by
							providing official training for PMP, CAPM, PMI-ACP, and PMI-CP.
						</p>
						<p className="mb-3 font-semibold text-lg" style={{ color: INK }}>
							Key Benefits:
						</p>
						<ul
							className="mb-8 list-disc space-y-3 pl-5 text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							<li>
								Boost the appeal of degree programs with certification prep and
								offer upskilling to continuing education students
							</li>
							<li>
								Full access to PMI licensed instructor and student course
								content
							</li>
							<li>Training and support for instructors</li>
							<li>
								Students meet educational requirements for PMI certification
							</li>
							<li>Increased program visibility through listing on PMI.org</li>
							<li>
								Purchase certification and membership vouchers at a discount
							</li>
							<li>Offer PMI-approved PDUs</li>
						</ul>
						<a
							className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
							href="/contact"
							style={{ borderColor: INK, color: INK }}
						>
							Become an ATP
							<ArrowIcon />
						</a>
					</div>
				</div>
			</section>

			{/* ── Resources ─────────────────────────────────────────────── */}
			<section style={{ background: TERTIARY }}>
				<div className="mx-auto max-w-screen-xl px-6 py-14 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div>
							<h2
								className="mb-5 font-medium text-3xl leading-tight lg:text-4xl"
								style={{ color: INK }}
							>
								Discover more PMI academic resources
							</h2>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								Explore more resources from PMI for students, educators, and
								researchers, including:
							</p>
							<ul
								className="mb-8 list-disc space-y-3 pl-5 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								<li>Free project management curriculum and teaching content</li>
								<li>Published research and thought leadership</li>
								<li>Grant, award and scholarship programs</li>
							</ul>
							<a
								className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
								href="/learning/academic-programs"
								style={{ borderColor: INK, color: INK }}
							>
								Learn More
								<ArrowIcon />
							</a>
						</div>
						<div className="overflow-hidden rounded-xl">
							<img
								alt="Resourceful students"
								className="h-full w-full object-cover"
								height={442}
								src="//www.pmi.org/-/media/pmi/headless-images/pmi-for-organizations/academic-institutions/resourceful-students.png?h=442&iar=0&w=552&rev=77004f8d0f324d8ea183536dc8b15bd4&sc_lang=en"
								width={552}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* ── Join the Academic Network ─────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
				<div className="mx-auto max-w-2xl text-center">
					<h2
						className="mb-4 font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						Join the Academic Network
					</h2>
					<p className="mb-8 text-lg leading-relaxed" style={{ color: BODY }}>
						Get industry updates to enhance your work, teaching and research
						delivered monthly by email in the PMI Academic Network Newsletter.
					</p>
					<a
						className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full border px-6 font-medium transition hover:bg-black/5"
						href="/learning/academic-programs"
						style={{ borderColor: INK, color: INK }}
					>
						Register Now
					</a>
				</div>
			</section>
		</main>
	);
}

/* ── Certification card data ─────────────────────────────────────────── */

type CertTheme = "dark" | "light";

const CERTS: {
	id: string;
	acronym: string;
	title: string;
	subtitle: string;
	description: string;
	href: string;
	theme: CertTheme;
	gradient: string;
	acronymColor: string;
	shapeImg: string;
	external?: boolean;
}[] = [
	{
		id: "capm",
		acronym: "CAPM®",
		title: "Certified Associate in Project Management (CAPM)®",
		subtitle: "No experience required",
		description:
			"This certification demonstrates an understanding of the foundational project management skills that project teams demand.",
		href: "/certifications/certified-associate-capm",
		theme: "dark",
		gradient: "linear-gradient(to bottom, #1a3c6e 26%, #0b1e42 100%)",
		acronymColor: "#22d3ee",
		shapeImg:
			"//www.pmi.org/-/media/pmi/headless-images/certifications/certification-landing/shape-container-capm.png?iar=0&rev=0b84c48d01e3450aa6175a550cf31357&sc_lang=en&w=600",
	},
	{
		id: "pmp",
		acronym: "PMP®",
		title: "Project Management Professional (PMP)®",
		subtitle: "3+ Years of Experience Leading Projects",
		description:
			"The PMP® validates competence in managing & directing people, processes, and priorities for a project team from start to finish.",
		href: "/certifications/project-management-pmp",
		theme: "dark",
		gradient: "linear-gradient(to bottom, #3d1f6e 26%, #1a0d42 100%)",
		acronymColor: "#c084fc",
		shapeImg:
			"//www.pmi.org/-/media/pmi/headless-images/certifications/certification-landing/shape-container-pmp.png?iar=0&rev=98eac2edcd0b4278aa89415e5ab4fdef&sc_lang=en&w=600",
	},
	{
		id: "pmi-cp",
		acronym: "PMI-CP™",
		title: "PMI Construction Professional (PMI-CP)™",
		subtitle: "3+ years of experience",
		description:
			"Learn new and advanced practices to set up, assess, manage and improve value-oriented PMOs.",
		href: "/dcpdp/sku/CE047-EL111",
		theme: "light",
		gradient: "linear-gradient(to bottom, #ede0cc 26%, #e2d3ba 100%)",
		acronymColor: INK,
		shapeImg:
			"//www.pmi.org/-/media/pmi/headless-images/certifications/certification-landing/shape-container-specialized.png?iar=0&rev=2477c70572594961b91372b29b804063&sc_lang=en&w=600",
		external: true,
	},
	{
		id: "pmi-acp",
		acronym: "PMI-ACP®",
		title: "PMI Agile Certified Practitioner (PMI-ACP)®",
		subtitle: "2+ years of experience",
		description:
			"This certification validates your ability to engage stakeholders, apply agile approaches, and lead teams.",
		href: "/certifications/agile-acp",
		theme: "light",
		gradient: "linear-gradient(to bottom, #ede0cc 26%, #e2d3ba 100%)",
		acronymColor: INK,
		shapeImg:
			"//www.pmi.org/-/media/pmi/headless-images/certifications/certification-landing/shape-container-specialized.png?iar=0&rev=2477c70572594961b91372b29b804063&sc_lang=en&w=600",
	},
];

function CertCarousel() {
	const [idx, setIdx] = useState(0);
	// show 3 cards at a time on desktop; step by 1
	const max = CERTS.length - 1;

	const prev = () => setIdx((i) => Math.max(0, i - 1));
	const next = () => setIdx((i) => Math.min(max, i + 1));

	return (
		<div>
			{/* Cards track – overflow visible so next card peeks */}
			<div className="overflow-hidden">
				<ul
					className="flex gap-4 transition-transform duration-300"
					style={{
						transform: `translateX(calc(-${idx} * (min(372px, calc(100vw - 3rem)) + 1rem)))`,
					}}
				>
					{CERTS.map((cert) => {
						const isDark = cert.theme === "dark";
						return (
							<li
								className="w-[min(372px,calc(100vw-3rem))] flex-shrink-0"
								key={cert.id}
							>
								<a
									className="relative flex h-full min-h-[480px] flex-col justify-between overflow-hidden rounded-xl p-6 no-underline transition-opacity hover:opacity-95 lg:min-h-[552px]"
									href={cert.href}
									rel={cert.external ? "noopener noreferrer" : undefined}
									style={{
										background: cert.gradient,
										color: isDark ? "white" : INK,
									}}
									target={cert.external ? "_blank" : undefined}
								>
									{/* Decorative shape – top right */}
									<div
										aria-hidden="true"
										className="pointer-events-none absolute top-0 right-0 w-[55%]"
									>
										<img
											alt=""
											className="h-auto w-full"
											height={400}
											src={cert.shapeImg}
											width={400}
										/>
									</div>

									{/* Badge */}
									<div className="relative z-10">
										<span
											className="inline-flex h-[26px] items-center rounded-full border px-3 font-medium text-xs"
											style={{
												borderColor: isDark
													? "rgba(255,255,255,0.35)"
													: "rgba(0,0,0,0.25)",
												color: isDark ? "white" : INK,
											}}
										>
											Certification
										</span>
									</div>

									{/* Content */}
									<div className="relative z-10">
										<p
											className="mb-1 font-black text-xl"
											style={{ color: cert.acronymColor }}
										>
											{cert.acronym}
										</p>
										<h3
											className="mb-4 font-medium text-xl leading-snug"
											style={{ color: isDark ? "white" : INK }}
										>
											{cert.title}
										</h3>
										<p
											className="mb-2 font-bold text-sm"
											style={{
												color: isDark ? "rgba(255,255,255,0.9)" : INK,
											}}
										>
											{cert.subtitle}
										</p>
										<p
											className="mb-6 line-clamp-4 text-sm leading-relaxed"
											style={{
												color: isDark ? "rgba(255,255,255,0.75)" : BODY,
											}}
										>
											{cert.description}
										</p>
										{/* Learn More button */}
										<span
											className="inline-flex h-11 items-center rounded-full px-6 font-medium text-sm transition"
											style={{
												background: isDark ? "white" : DARK_BTN,
												color: isDark ? INK : "white",
											}}
										>
											Learn More
										</span>
									</div>
								</a>
							</li>
						);
					})}
				</ul>
			</div>

			{/* Controls */}
			<div className="mt-8 flex items-center justify-between">
				<div className="flex items-center gap-2">
					{CERTS.map((_, i) => (
						<button
							aria-label={`Go to certification ${i + 1}`}
							className="h-1.5 rounded-full transition-all"
							// biome-ignore lint/suspicious/noArrayIndexKey: positional dots
							key={i}
							onClick={() => setIdx(i)}
							style={{
								width: i === idx ? 36 : 8,
								background: i === idx ? INK : "#cfc9d6",
							}}
							type="button"
						/>
					))}
				</div>
				<div className="flex items-center gap-3">
					<button
						aria-label="Previous certification"
						className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
						disabled={idx === 0}
						onClick={prev}
						style={{ color: INK }}
						type="button"
					>
						<LeftArrowIcon />
					</button>
					<button
						aria-label="Next certification"
						className="flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-40"
						disabled={idx === max}
						onClick={next}
						style={{ color: INK }}
						type="button"
					>
						<ArrowIcon />
					</button>
				</div>
			</div>
		</div>
	);
}
