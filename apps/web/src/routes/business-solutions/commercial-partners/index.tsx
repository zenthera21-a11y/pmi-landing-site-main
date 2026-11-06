import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/business-solutions/commercial-partners/"
)({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const CREAM = "#f7f3ec";
const DARK_BTN = "#1c1330";
const CARD_BG = "#ede8e1";

const TABS = [
	{ label: "For Your Teams", href: "#teams" },
	{ label: "For Your Organization", href: "#organization" },
	{ label: "Research & Insights", href: "#research" },
	{ label: "Partner with PMI", href: "#partner" },
];

const ORG_ROWS = [
	{
		heading: "Train & Upskill to Meet the Future",
		body: "In your offices or online, we offer team training specifically designed to upskill teams for tomorrow's challenges. Choose from 100+ interactive small-group sessions, on everything from managing AI projects to enterprise agility and business transformation.",
		link: {
			label: "Explore PMI Training for Teams",
			href: "/business-solutions/talent-management",
		},
		img: "//www.pmi.org/-/media/pmi/headless-images/business-solutions/enterprise-hero.png?iar=0&rev=a7a35b61b7ba413ea37657ca0b25e0d5&w=600",
		alt: "Team training session",
	},
	{
		heading: "Authorized PMI Certification Exam Prep",
		body: "Our Authorized Training Partner Program makes it easy for organizations to get high-quality, PMI-developed training and certification exam prep, customized to your business needs. Help employees prepare for and maintain top certifications like PMP®, CAPM®, PMI-ACP®, and PMI-CP™ that elevate their skills and maximize your organization's project success.",
		link: {
			label: "Explore our Authorized Training Partner Program",
			href: "/contact",
		},
		img: "//www.pmi.org/-/media/pmi/headless-images/pmi-for-organizations/general-landing_pmi-for-orgs.png?h=600&iar=0&w=600&rev=003e8c0a805742faabbc140fbe4f0c45",
		alt: "Professional at laptop",
	},
	{
		heading: "Connect & Network in our Global Executive Council",
		body: "The PMI Global Executive Council unites leaders from top organizations worldwide to shape the future of project management. The Council drives transformation in an ever-changing world by collaborating on innovative practices and creating enriching learning and networking opportunities.",
		link: { label: "Join Now", href: "/contact" },
		img: "//www.pmi.org/-/media/pmi/headless-images/landing---microsites/shrm25/global-exec-council.jpg?h=508&iar=0&w=900&rev=1b5e173e8ca049c397aecda0d6ea1d54",
		alt: "Global Executive Council networking",
	},
	{
		heading: "Recruit & Hire Qualified Talent",
		body: "Leverage the PMI Job Board to acquire top-tier, certified project management professionals, ensuring your organization benefits from proven expertise and a commitment to excellence. This strategic recruitment tool enhances team performance and drives sustained organizational growth.",
		link: {
			label: "Discover Talent",
			href: "/business-solutions/talent-management",
		},
		img: "//www.pmi.org/-/media/pmi/headless-images/business-solutions/enterprise-hero.png?iar=0&rev=a7a35b61b7ba413ea37657ca0b25e0d5&w=600",
		alt: "Professional recruiting talent",
	},
];

const REPORTS = [
	{
		badge: "Report",
		title:
			"Built to Thrive: PMOs That Elevate Innovation and Power Transformation",
		body: "This report explores how high-performing PMOs help their organizations gain a competitive edge and what PMO leaders are doing to make it happen.",
		href: "/learning/thought-leadership",
	},
	{
		badge: "Report",
		title: "Maximizing Project Success",
		body: "Learn what project success is and what drives it in our latest report highlighting how project professionals can deliver more value and make a lasting impact on the world.",
		href: "/learning/thought-leadership",
	},
];

function RouteComponent() {
	return (
		<div>
			{/* ── Hero (cream) ──────────────────────────────────────────────── */}
			<div style={{ background: CREAM }}>
				<nav
					aria-label="Breadcrumb"
					className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4"
				>
					<ol className="flex flex-wrap items-center gap-1.5 font-medium text-sm">
						{[
							{ label: "Home", href: "/" },
							{ label: "PMI for Organizations", href: "/business-solutions" },
							{ label: "Enterprise and Commercial Partners", href: null },
						].map((crumb, i, arr) => (
							<li className="flex items-center gap-1.5" key={crumb.label}>
								{crumb.href ? (
									<a
										className="hover:underline"
										href={crumb.href}
										style={{ color: INK }}
									>
										{crumb.label}
									</a>
								) : (
									<span style={{ color: BODY }}>{crumb.label}</span>
								)}
								{i < arr.length - 1 && (
									<span aria-hidden style={{ color: BODY }}>
										/
									</span>
								)}
							</li>
						))}
					</ol>
				</nav>

				<section className="mx-auto grid max-w-screen-xl items-center gap-12 px-6 pt-8 pb-16 lg:grid-cols-12 lg:gap-14 lg:px-4 lg:pt-12 lg:pb-20">
					<div className="relative h-auto lg:col-span-5">
						<div className="max-h-full lg:-ml-[max(16px,calc(50vw-640px))] lg:w-[max(calc(100%+16px),calc(100%+50vw-640px))] 2xl:ml-0 2xl:w-full">
							<img
								alt="people-at-conference"
								className="h-auto w-full 2xl:rounded-sm"
								height={850}
								src="//www.pmi.org/-/media/pmi/headless-images/business-solutions/enterprise-hero.png?h=850&iar=0&w=850&rev=a7a35b61b7ba413ea37657ca0b25e0d5"
								width={850}
							/>
						</div>
					</div>
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-tight lg:text-5xl"
							style={{ color: INK }}
						>
							Enterprise skills that maximize organizational success
						</h1>
						<p className="mb-8 text-xl leading-relaxed" style={{ color: BODY }}>
							Empower your employees with world-class certifications and
							training in project management, AI, and portfolio management that
							positively impact your business and workforce.
						</p>
						<a
							className="inline-flex h-12 items-center rounded-full px-6 font-medium text-base text-white transition hover:opacity-90"
							href="/contact"
							style={{ background: DARK_BTN }}
						>
							Contact Us
						</a>
					</div>
				</section>
			</div>

			{/* ── White body — rounded top ───────────────────────────────────── */}
			<div
				className="relative -mt-6 overflow-hidden bg-white"
				style={{ borderRadius: "24px 24px 0 0" }}
			>
				{/* ── Sticky tab nav ─────────────────────────────────────────── */}
				<div
					className="sticky top-0 z-20 border-b bg-white"
					style={{ borderColor: "#e5e2de" }}
				>
					<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
						<nav aria-label="Page sections" className="hidden lg:block">
							<ul className="flex items-center justify-center">
								{TABS.map((tab, i) => (
									<li key={tab.href}>
										<a
											className={`flex h-20 items-center border-b-2 px-8 font-medium text-sm leading-snug transition hover:text-gray-900 ${
												i === 0
													? "border-gray-900 text-gray-900"
													: "border-transparent text-gray-500"
											}`}
											href={tab.href}
										>
											{tab.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
						<div className="py-4 lg:hidden">
							<select
								className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-base"
								defaultValue="#teams"
							>
								{TABS.map((tab) => (
									<option key={tab.href} value={tab.href}>
										{tab.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* ════════════════ #teams ════════════════ */}
				<div id="teams" style={{ scrollMarginTop: "80px" }}>
					<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 lg:px-4">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
							<div className="lg:col-span-5">
								<h2
									className="font-medium text-3xl leading-snug lg:text-4xl"
									style={{ color: INK }}
								>
									Equip Your Teams for Project Success
								</h2>
							</div>
							<div className="lg:col-span-7">
								<p
									className="mb-4 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									PMI enables organizations to transform project management by
									equipping teams with proven frameworks and methodologies that
									drive efficiency, reduce risks, and deliver measurable
									success.
								</p>
								<p className="text-lg leading-relaxed" style={{ color: BODY }}>
									By investing in PMI certifications, your organization can
									improve project outcomes and increase employee retention
									through skill development and validated expertise, fostering a
									more capable and committed workforce.
								</p>
							</div>
						</div>
					</div>

					{/* Video — col-2 offset + col-10 */}
					<div className="w-full" id="video">
						<div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-6 pb-16 lg:grid-cols-12 lg:gap-12 lg:px-4">
							<div className="hidden lg:col-span-2 lg:block" />
							<div className="lg:col-span-10">
								<div className="overflow-hidden rounded-2xl bg-black">
									<video
										className="aspect-video w-full"
										controls
										playsInline
										poster="//www.pmi.org/-/media/pmi/headless-images/business-solutions/video-2880x1622-enterpriseskills.png?h=1622&iar=0&w=2880&rev=e8a56dd8c18443b58192787bc59e56df"
										preload="metadata"
									>
										<source
											src="/videos/enterprise-skills.mp4"
											type="video/mp4"
										/>
										<track default kind="captions" label="English" src="" />
									</video>
								</div>
							</div>
						</div>
					</div>

					{/* Empower Teams with PMI's Global Community */}
					<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
							<div>
								<h3
									className="font-medium text-2xl leading-snug lg:text-3xl"
									style={{ color: INK }}
								>
									Empower Teams with PMI's Global Community
								</h3>
							</div>
							<div>
								<p
									className="mb-4 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									PMI membership unlocks the benefits of the world's largest
									project management community.
								</p>
								<p
									className="mb-4 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									When your employees join PMI chapters, they gain access to
									visionary thought leaders, cutting-edge insights, and a
									network of like-minded professionals driving project success.
									Membership enhances individual expertise and brings fresh
									ideas and strategies back to your organization, fueling
									innovation and elevating your team's performance.
								</p>
								<a
									className="mb-4 block font-medium underline underline-offset-2"
									href="/membership"
									style={{ color: INK }}
								>
									See All Member Benefits
								</a>
								<a
									className="inline-flex h-11 items-center gap-2 rounded-full border px-5 font-medium text-sm transition hover:bg-gray-50"
									href="/business-solutions/commercial-partners/enterprise-membership"
									style={{ borderColor: INK, color: INK }}
								>
									Explore Enterprise Membership →
								</a>
							</div>
						</div>
					</div>

					{/* Advance Expertise with Certifications */}
					<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
							<div>
								<h3
									className="font-medium text-2xl leading-snug lg:text-3xl"
									style={{ color: INK }}
								>
									Advance Expertise with Certifications
								</h3>
							</div>
							<div>
								<p
									className="mb-4 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									Elevate your team's expertise and impact with PMI's
									gold-standard certifications in project management. Or,
									future-proof your team with specialized certifications in
									capabilities critical to organizational success:
								</p>
								<ul className="mb-4 space-y-1 text-lg" style={{ color: BODY }}>
									<li className="flex items-center gap-2">
										<span>·</span> Artificial intelligence
									</li>
									<li className="flex items-center gap-2">
										<span>·</span> Agile approaches
									</li>
									<li className="flex items-center gap-2">
										<span>·</span> Risk management
									</li>
								</ul>
								<p
									className="mb-6 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									These globally recognized credentials help employees stand out
									at any skill level and in any industry and empower
									organizations to foster a highly skilled, adaptable workforce.
									By investing in PMI certifications, your company gains a
									competitive edge through proven methodologies and enhanced
									project outcomes, positioning your organization for sustained
									success and growth.
								</p>
								<a
									className="inline-flex h-11 items-center gap-2 rounded-full border px-5 font-medium text-sm transition hover:bg-gray-50"
									href="/certifications"
									style={{ borderColor: INK, color: INK }}
								>
									View Certifications →
								</a>
							</div>
						</div>
					</div>

					{/* Advertisement */}
					<div
						className="border-t py-8 text-center"
						style={{ borderColor: "#e5e2de" }}
					>
						<p className="mb-1 font-semibold text-sm" style={{ color: INK }}>
							Offer from our training partner
						</p>
						<p className="text-sm" style={{ color: BODY }}>
							Advertisement
						</p>
					</div>
				</div>

				{/* ════════════════ #organization ════════════════ */}
				<div
					id="organization"
					style={{ scrollMarginTop: "80px", background: "white" }}
				>
					<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-12 text-center lg:px-4">
						<h2
							className="mb-4 font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							Solutions for Your Organization
						</h2>
						<p
							className="mx-auto max-w-3xl text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							PMI provides tailored solutions to strengthen your organization.
							From building high-performing teams to fostering leadership
							collaboration and attracting top talent, PMI empowers your company
							to achieve strategic objectives, innovate with confidence, and
							maintain a competitive edge in a rapidly evolving world.
						</p>
					</div>

					<div className="mx-auto max-w-screen-xl px-6 pb-20 lg:px-4">
						{ORG_ROWS.map((row, i) => (
							<div
								className="grid grid-cols-1 gap-8 border-t py-10 md:grid-cols-12 md:gap-10"
								key={row.heading}
								style={{
									borderColor: "#e5e2de",
									...(i === ORG_ROWS.length - 1
										? { borderBottom: "1px solid #e5e2de" }
										: {}),
								}}
							>
								<div className="md:col-span-4">
									<h3
										className="font-medium text-xl leading-snug lg:text-2xl"
										style={{ color: INK }}
									>
										{row.heading}
									</h3>
								</div>
								<div className="md:col-span-5">
									<p
										className="mb-4 text-base leading-relaxed lg:text-lg"
										style={{ color: BODY }}
									>
										{row.body}
									</p>
									<a
										className="flex items-center gap-1 font-medium text-base"
										href={row.link.href}
										style={{ color: INK }}
									>
										{row.link.label}
										<span aria-hidden>›</span>
									</a>
								</div>
								<div className="md:col-span-3">
									<img
										alt={row.alt}
										className="aspect-[4/3] w-full rounded-xl object-cover"
										height={300}
										src={row.img}
										width={400}
									/>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* ════════════════ #research ════════════════ */}
				<div id="research" style={{ scrollMarginTop: "80px" }}>
					<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-10 lg:px-4">
						<h2
							className="font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							Research &amp; Insights
						</h2>
					</div>

					<div className="w-full pt-4 pb-16" style={{ background: CARD_BG }}>
						<div className="mx-auto max-w-screen-xl px-6 lg:px-4">
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
								{REPORTS.map((report) => (
									<div
										className="rounded-2xl border p-8"
										key={report.title}
										style={{ background: CARD_BG, borderColor: `${INK}18` }}
									>
										<div>
											<span
												className="mb-6 inline-flex h-7 items-center rounded-full border px-3.5 font-medium text-sm"
												style={{ borderColor: `${INK}44`, color: INK }}
											>
												{report.badge}
											</span>
											<h3
												className="mb-4 font-medium text-xl leading-snug lg:text-2xl"
												style={{ color: INK }}
											>
												{report.title}
											</h3>
											<p
												className="text-base leading-relaxed"
												style={{ color: BODY }}
											>
												{report.body}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="mt-8">
								<a
									className="inline-flex h-11 items-center gap-2 rounded-full border px-5 font-medium text-sm transition hover:bg-black/5"
									href="/learning/thought-leadership"
									style={{ borderColor: INK, color: INK }}
								>
									Discover More Insights →
								</a>
							</div>
						</div>
					</div>

					{/* The Shift Code Podcast */}
					<div style={{ background: CARD_BG }}>
						<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4">
							<div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
								<div className="overflow-hidden rounded-2xl">
									<img
										alt="The Shift Code podcast artwork"
										className="aspect-[4/3] w-full object-cover"
										height={900}
										src="//www.pmi.org/-/media/pmi/headless-images/global/hero-backgrounds/background-pimary-desktop.jpg?h=900&iar=0&w=1200&rev=69de96068d3e440e99dfd14848184979"
										width={1200}
									/>
								</div>
								<div>
									<h3
										className="mb-4 font-medium text-2xl leading-snug lg:text-3xl"
										style={{ color: INK }}
									>
										The Shift Code™ Podcast
									</h3>
									<p
										className="mb-6 text-lg leading-relaxed"
										style={{ color: BODY }}
									>
										Step into the C-Suite with PMI CEO Pierre Le Manh to hear
										empowering, candid conversations with top leaders dedicated
										to driving successful organizational transformation by
										meeting at the intersection of leadership, change
										management, and real-world impact.
									</p>
									<a
										className="inline-flex h-11 items-center rounded-full px-5 font-medium text-sm text-white transition hover:opacity-90"
										href="/learning/thought-leadership"
										style={{ background: DARK_BTN }}
									>
										Listen Now
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Ready to maximize CTA */}
					<div className="px-6 py-20 text-center">
						<h2
							className="mx-auto mb-4 max-w-2xl font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							Ready to maximize organizational success?
						</h2>
						<p
							className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							Partner with PMI to equip your team with gold-standard
							certifications and training in project management, AI, and
							portfolio management, designed to enhance your workforce and
							overall business outcomes.
						</p>
						<a
							className="inline-flex h-12 items-center rounded-full px-6 font-medium text-base text-white transition hover:opacity-90"
							href="/contact"
							style={{ background: DARK_BTN }}
						>
							Contact Us Today
						</a>
					</div>
				</div>

				{/* ════════════════ #partner ════════════════ */}
				<div
					id="partner"
					style={{ scrollMarginTop: "80px", background: CREAM }}
				>
					<div className="px-6 py-20 text-center">
						<h2
							className="mx-auto mb-4 max-w-2xl font-medium text-3xl leading-tight lg:text-4xl"
							style={{ color: INK }}
						>
							PMI Enterprise Solutions Newsletter
						</h2>
						<p
							className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed"
							style={{ color: BODY }}
						>
							Subscribe to our monthly newsletter for the latest trends,
							research, and strategies for your project leadership, workforce
							development, and organization transformation.
						</p>
						<a
							className="inline-flex h-12 items-center rounded-full px-6 font-medium text-base text-white transition hover:opacity-90"
							href="/business-solutions/enterprise-newsletter"
							style={{ background: DARK_BTN }}
						>
							Subscribe
						</a>
					</div>

					<div
						className="border-t py-8 text-center"
						style={{ borderColor: "#ddd8cf" }}
					>
						<p className="mb-1 font-semibold text-sm" style={{ color: INK }}>
							Offer from our training partner
						</p>
						<p className="text-sm" style={{ color: BODY }}>
							Advertisement
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
