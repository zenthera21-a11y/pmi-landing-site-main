import { createFileRoute, Link } from "@tanstack/react-router";
import type React from "react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/business-solutions/human-resources")({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const DARK_BTN = "#1c1330";

const inputCls =
	"w-full rounded border border-gray-300 px-4 py-3 text-base transition focus:border-[#1f1646] focus:outline-none focus:ring-1 focus:ring-[#1f1646]";

function Field({
	id,
	label,
	required,
	children,
}: {
	id: string;
	label: string;
	required?: boolean;
	children: React.ReactNode;
}) {
	return (
		<div>
			<label
				className="mb-1.5 block font-semibold text-sm"
				htmlFor={id}
				style={{ color: INK }}
			>
				{label}
				{required && <span className="ml-0.5 text-red-600">*</span>}
			</label>
			{children}
		</div>
	);
}

const TABS = [
	{ id: "future", label: "A Skills-Based Future" },
	{ id: "tailored", label: "Tailored Solutions" },
	{ id: "connect", label: "Connect with PMI" },
	{ id: "contact", label: "Contact Us" },
];

const TAILORED_SOLUTIONS = [
	{
		title: "PMI Team Training",
		body: "Upskill your workforce and empower your team to lead with expert-led project management and agile training.",
		cta: "Train Your Team",
		href: "/events",
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/shrm25/team-training.jpg?h=508&iar=0&w=900&rev=c0a2a222638e4290a4305cdc06d1cc8f",
		alt: "Team Training",
	},
	{
		title: "Global Executive Council",
		body: "Join senior leaders from top companies shaping the future of work through collaboration, innovation, and shared learning.",
		cta: "Join Now",
		href: "/business-solutions/the-global-executive-council",
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/shrm25/global-exec-council.jpg?h=508&iar=0&w=900&rev=1b5e173e8ca049c397aecda0d6ea1d54",
		alt: "Global Executive Council",
	},
	{
		title: "PMI Job Board",
		body: "Leverage the PMI Job Board to recruit certified project professionals with verified skills and a passion for driving results.",
		cta: "Discover Talent",
		href: "/business-solutions/talent-management",
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/shrm25/job-board.jpg?h=508&iar=0&w=900&rev=b6a0abb39a4d460bb4e54e6af6a46b8e",
		alt: "PMI Job Board",
	},
];

const CONNECT_CARDS = [
	{
		title: "Project Skills for HR",
		body: "Learn more about building a skills-based workforce to unlock talent, drive retention, and prepare for the future of work.",
		cta: "Learn More",
		href: "https://pmi.showpad.com/share/gt5DxteZMCNQgAOdwJFGk",
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/human-resources/project-skills-for-hr.jpg?h=633&iar=0&w=1128&rev=1b58f1cfc1114ee88a8aa991d5e539bb",
		alt: "Project Skills for HR",
	},
	{
		title: "AI Technology by PMI",
		body: "Streamline workflows, increase productivity, and enhance decision making with PMI Infinity™, our AI-powered project coach.",
		cta: "Discover PMI Infinity",
		href: "/infinity",
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/human-resources/ai-technology-by-pmi.jpg?h=633&iar=0&w=1128&rev=0c683d74cf2f4e88995125a0eb456cea",
		alt: "AI Technology by PMI",
	},
	{
		title: "Project Management Talent Gap",
		body: "Explore our research on the growing talent gap and how organizations are addressing skills shortages in project management.",
		cta: "Read the Research",
		href: "/learning/thought-leadership",
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/human-resources/project-management-talent-gap.jpg?h=633&iar=0&w=1128&rev=ed727d56a02448e9aa8c087119157fdc",
		alt: "Project Management Talent Gap",
	},
];

function ChevronRightIcon() {
	return (
		<svg
			aria-hidden="true"
			fill="currentColor"
			height="24"
			viewBox="0 0 32 32"
			width="24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				clipRule="evenodd"
				d="M14.1389 11.0238L20.9756 19L14.1389 26.9762L11.8611 25.0238L17.0244 19L11.8611 12.9762L14.1389 11.0238Z"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function DownArrowIcon() {
	return (
		<svg
			aria-hidden="true"
			fill="currentColor"
			height="20"
			viewBox="0 0 32 32"
			width="20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M14.5 23.6598L14.5 4H17.5L17.5 23.6597L24.0034 17.8789L25.9965 20.1211L16 29.007L6.00342 20.1211L7.99651 17.8789L14.5 23.6598Z" />
		</svg>
	);
}

function RouteComponent() {
	const [activeTab, setActiveTab] = useState("future");
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

	return (
		<main className="overflow-x-hidden">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<section
				className="relative flex items-end bg-center bg-cover pb-24 text-white lg:items-center lg:pb-0"
				style={{
					backgroundImage:
						"url('//www.pmi.org/-/media/pmi/headless-images/landing---microsites/human-resources/human-resources-hero.jpg?h=1196&iar=0&w=2880&rev=ace7b24f4be449d9af9bba492407ec9a')",
					minHeight: "calc(100vh - 0px)",
				}}
			>
				{/* Gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70 lg:via-black/20 lg:to-black/50" />

				{/* Breadcrumb */}
				<nav
					aria-label="Breadcrumb"
					className="absolute top-6 right-0 left-0 z-10 px-6 lg:px-4"
				>
					<div className="mx-auto max-w-screen-xl">
						<ol className="flex flex-wrap items-center gap-1.5 font-medium text-sm text-white/90">
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
							<li className="opacity-80">
								Upskill Your Workforce with Project Management
							</li>
						</ol>
					</div>
				</nav>

				{/* Centered content */}
				<div className="relative z-10 mx-auto w-full max-w-4xl px-6 text-center lg:px-4">
					<h1 className="mb-5 font-medium text-4xl leading-[1.1] tracking-tight lg:text-6xl xl:text-7xl">
						Upskill your workforce with project management
					</h1>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-white/85 leading-relaxed lg:text-xl">
						PMI helps HR professionals identify the right project management
						skills to strengthen teams, boost retention, and prepare your
						workforce for what's next.
					</p>
					<button
						className="inline-flex h-12 w-fit items-center gap-2.5 rounded-full px-6 font-medium text-white transition hover:opacity-90"
						onClick={() => scrollTo("contact")}
						style={{ background: DARK_BTN }}
						type="button"
					>
						Contact Us
						<DownArrowIcon />
					</button>
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

			{/* ── A Skills-Based Future ────────────────────────────────────── */}
			<section
				className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20"
				id="future"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
					<h2
						className="font-medium text-3xl leading-tight lg:col-span-5 lg:text-4xl"
						style={{ color: INK }}
					>
						A Skills-Based Future with PMI
					</h2>
					<div className="lg:col-span-7">
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							The workforce is shifting toward a skills-based hiring model, and
							HR leaders are uniquely positioned to guide this transformation by
							championing a new world of work that prioritizes capabilities and
							skills.
						</p>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							<strong style={{ color: INK }}>
								HR is the architect of the skills-based future.
							</strong>{" "}
							You are leaders in the field–you own the talent systems through
							job design, recruitment, performance, and development. And, by
							defining the employee value proposition, you play a critical role
							in driving retention.
						</p>
						<p className="mb-4 text-lg leading-relaxed" style={{ color: BODY }}>
							PMI can partner with you to identify, develop, and support top
							talent by offering:
						</p>
						<ul
							className="list-disc space-y-2 pl-5 text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							<li>Globally recognized certifications</li>
							<li>AI-ready training</li>
							<li>Ethics-focused frameworks</li>
							<li>Learning development programs</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ── Separator ────────────────────────────────────────────────── */}
			<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
				<hr className="border-gray-200" />
			</div>

			{/* ── Tailored Solutions ───────────────────────────────────────── */}
			<section
				className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20"
				id="tailored"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mb-14 text-center">
					<h2
						className="mb-3 font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						Tailored Solutions for Your Organization
					</h2>
					<p className="text-lg" style={{ color: BODY }}>
						PMI offers enterprise-ready solutions that scale with your goals.
					</p>
				</div>

				<div className="divide-y divide-gray-200">
					{TAILORED_SOLUTIONS.map((item) => (
						<div
							className="grid grid-cols-1 items-center gap-8 py-10 lg:grid-cols-3 lg:gap-12"
							key={item.title}
						>
							<h3
								className="font-medium text-2xl leading-snug lg:text-3xl"
								style={{ color: INK }}
							>
								{item.title}
							</h3>
							<div className="flex flex-col gap-4">
								<p className="text-lg leading-relaxed" style={{ color: BODY }}>
									{item.body}
								</p>
								<a
									className="inline-flex items-center gap-0.5 font-medium text-lg transition hover:underline"
									href={item.href}
									style={{ color: INK }}
								>
									{item.cta}
									<ChevronRightIcon />
								</a>
							</div>
							<div className="overflow-hidden rounded-xl">
								<img
									alt={item.alt}
									className="aspect-video w-full object-cover"
									height={508}
									src={item.img}
									width={900}
								/>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ── Connect with PMI ─────────────────────────────────────────── */}
			<section
				className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20"
				id="connect"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mb-14 text-center">
					<h2
						className="mb-3 font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						Connect with PMI to start driving results
					</h2>
					<p className="text-lg" style={{ color: BODY }}>
						Discover all PMI offers. Let's elevate your HR strategy–together.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
					{CONNECT_CARDS.map((card) => (
						<div className="relative flex flex-col" key={card.title}>
							<div className="mb-6 overflow-hidden rounded-xl">
								<img
									alt={card.alt}
									className="aspect-video w-full object-cover"
									height={633}
									src={card.img}
									width={1128}
								/>
							</div>
							<h3
								className="mb-3 font-medium text-xl leading-snug"
								style={{ color: INK }}
							>
								{card.title}
							</h3>
							<p
								className="mb-4 flex-grow text-base leading-relaxed"
								style={{ color: BODY }}
							>
								{card.body}
							</p>
							<a
								className="inline-flex items-center gap-0.5 self-start font-medium text-lg transition hover:underline"
								href={card.href}
								style={{ color: INK }}
							>
								{card.cta}
								<ChevronRightIcon />
							</a>
						</div>
					))}
				</div>
			</section>

			{/* ── Contact Us ───────────────────────────────────────────────── */}
			<section
				className="bg-white"
				id="contact"
				style={{ scrollMarginTop: 80 }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
						{/* Left: heading + description */}
						<div className="lg:col-span-5">
							<h2
								className="mb-6 font-medium text-3xl leading-tight lg:text-4xl"
								style={{ color: INK }}
							>
								Contact us today
							</h2>
							<p
								className="font-medium text-xl leading-relaxed"
								style={{ color: INK }}
							>
								Complete this form and we'll be in touch with more about project
								management skills HR can use for the workforce.
							</p>
						</div>

						{/* Right: form */}
						<div className="lg:col-span-7">
							<form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
								{/* Work Email */}
								<Field id="workEmail" label="Work Email" required>
									<input
										className={inputCls}
										id="workEmail"
										placeholder="Email"
										required
										type="email"
									/>
								</Field>

								{/* First Name */}
								<Field id="firstName" label="First Name" required>
									<input
										className={inputCls}
										id="firstName"
										placeholder="First Name"
										required
										type="text"
									/>
								</Field>

								{/* Last Name */}
								<Field id="lastName" label="Last Name" required>
									<input
										className={inputCls}
										id="lastName"
										placeholder="Last Name"
										required
										type="text"
									/>
								</Field>

								{/* Business Phone */}
								<Field id="phone" label="Business Phone" required>
									<input
										className={inputCls}
										id="phone"
										placeholder="+##-###-###-####"
										required
										type="tel"
									/>
								</Field>

								{/* Organization */}
								<Field id="org" label="Organization" required>
									<input
										className={inputCls}
										id="org"
										placeholder="Organization Name"
										required
										type="text"
									/>
								</Field>

								{/* Job Title */}
								<Field id="jobTitle" label="Job Title" required>
									<input
										className={inputCls}
										id="jobTitle"
										placeholder="Job Title"
										required
										type="text"
									/>
								</Field>

								{/* Products & services checkboxes */}
								<fieldset>
									<legend
										className="mb-3 font-semibold text-base"
										style={{ color: INK }}
									>
										Products and services most interested in
									</legend>
									<div className="space-y-2.5">
										{[
											"Academic Resources for Faculty/Students",
											"Certification",
											"Enterprise Solutions",
											"Membership",
											"Training & E-Learning",
											"PMI Infinity",
										].map((opt) => (
											<label
												className="flex cursor-pointer items-center gap-3 text-base"
												key={opt}
												style={{ color: INK }}
											>
												<input
													className="h-4 w-4 rounded border-gray-400 accent-[#1f1646]"
													type="checkbox"
												/>
												{opt}
											</label>
										))}
									</div>
								</fieldset>

								{/* Team Size */}
								<Field id="teamSize" label="Team Size">
									<input
										className={inputCls}
										id="teamSize"
										placeholder="Team Size"
										type="text"
									/>
								</Field>

								{/* How can we assist */}
								<Field id="assist" label="How can we assist?">
									<textarea
										className={inputCls}
										id="assist"
										placeholder="Additional Information"
										rows={4}
									/>
								</Field>

								{/* Privacy notice */}
								<p className="text-sm leading-relaxed" style={{ color: BODY }}>
									By submitting this form, you grant PMI permission to contact
									you about your inquiry.{" "}
									<a
										className="font-semibold underline"
										href="/privacy"
										style={{ color: INK }}
									>
										View our privacy policy
									</a>
									.
								</p>

								{/* Privacy policy checkbox */}
								<label
									className="flex cursor-pointer items-start gap-3 text-sm"
									style={{ color: INK }}
								>
									<input
										className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-400 accent-[#1f1646]"
										required
										type="checkbox"
									/>
									<span>
										Privacy Policy &amp; Terms of Use Acknowledged{" "}
										<span className="text-red-600">*</span>
									</span>
								</label>

								{/* Marketing opt-in */}
								<label
									className="flex cursor-pointer items-start gap-3 text-sm"
									style={{ color: INK }}
								>
									<input
										className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-400 accent-[#1f1646]"
										defaultChecked
										type="checkbox"
									/>
									<span>
										By checking this box, you grant PMI permission to contact
										you about your inquiry and send occasional offers and
										promotional emails. You can unsubscribe at any time.
									</span>
								</label>

								{/* reCAPTCHA mock */}
								<div
									className="flex w-fit items-center gap-4 rounded border border-gray-300 bg-gray-50 px-5 py-4"
									style={{ minWidth: 300 }}
								>
									<input
										className="h-5 w-5 rounded border-gray-400"
										type="checkbox"
									/>
									<span className="text-sm" style={{ color: INK }}>
										I'm not a robot
									</span>
									<div className="ml-auto text-right">
										<div className="text-2xl">♻</div>
										<div className="text-[10px] text-gray-400 leading-tight">
											reCAPTCHA
											<br />
											Privacy - Terms
										</div>
									</div>
								</div>

								{/* Submit */}
								<button
									className="inline-flex h-12 w-full items-center justify-center rounded-lg font-medium text-base text-white transition hover:opacity-90 lg:w-auto lg:px-10"
									style={{ background: "#1a56db" }}
									type="submit"
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
