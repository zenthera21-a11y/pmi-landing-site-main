import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/business-solutions/commercial-partners/enterprise-membership"
)({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const CREAM = "#f7f3ec";
const DARK_BTN = "#1c1330";
const ACCENT = "#6629b2";

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
							{
								label: "Enterprise and Commercial Partners",
								href: "/business-solutions/commercial-partners",
							},
							{ label: "PMI Enterprise Membership", href: null },
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
								alt="Enterprise Membership Hero"
								className="h-auto w-full 2xl:rounded-sm"
								height={850}
								src="//www.pmi.org/-/media/pmi/headless-images/business-solutions/enterprise-membership-hero.png?h=850&iar=0&w=850&rev=33e8900164804e7cbf21e188685c9434"
								width={850}
							/>
						</div>
					</div>
					<div className="lg:col-span-7">
						<h1
							className="mb-6 font-medium text-4xl leading-tight lg:text-5xl"
							style={{ color: INK }}
						>
							Build organizational community with PMI membership
						</h1>
						<p className="mb-8 text-xl leading-relaxed" style={{ color: BODY }}>
							Organizations grow when their people thrive. PMI membership equips
							your teams with the skills, tools, and global network to drive
							project success and gives your business the confidence to lead
							through change.
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
				{/* ── PMI Membership for Your Enterprise ─────────────────────── */}
				<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-0 lg:px-4">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
						<div className="lg:col-span-5">
							<h2
								className="font-medium text-3xl leading-snug lg:text-4xl"
								style={{ color: INK }}
							>
								PMI Membership for Your Enterprise
							</h2>
						</div>
						<div className="lg:col-span-7">
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								PMI membership equips your workforce with the in-demand
								capabilities needed to lead in today's dynamic environment, from
								agile and AI to change management and hybrid delivery, while
								also creating opportunities for employees to engage locally,
								give back to their communities, and strengthen leadership
								through service and volunteerism.
							</p>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								While PMI membership is held by individuals, its impact is
								designed to scale across organizations. Memberships connect your
								teams to a global ecosystem of standards, learning, credentials,
								and insights, reinforced through automatic access to local PMI
								chapters worldwide.
							</p>
							<p className="text-lg leading-relaxed" style={{ color: BODY }}>
								This combination helps enterprises build consistent capability
								at scale while enabling teams to apply and reinforce what they
								learn within their local context.
							</p>
						</div>
					</div>
				</div>

				{/* ── Video — col-2 offset + col-10 ──────────────────────────── */}
				<div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:gap-12 lg:px-4">
					<div className="hidden lg:col-span-2 lg:block" />
					<div className="lg:col-span-10">
						<div className="overflow-hidden rounded-2xl bg-black">
							<video
								className="aspect-video w-full"
								controls
								playsInline
								poster="//www.pmi.org/-/media/pmi/headless-images/business-solutions/enterprise-membership-video.png?h=901&iar=0&w=1600&rev=7ef67beb3c9648c6ad186aba9356eaaa"
								preload="metadata"
							>
								<source
									src="/videos/enterprise-membership.mp4"
									type="video/mp4"
								/>
								<track default kind="captions" label="English" src="" />
							</video>
						</div>
					</div>
				</div>

				{/* ── Gain Strategic Advantage ────────────────────────────────── */}
				<div className="mx-auto max-w-screen-xl px-6 pb-16 lg:px-4">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6">
						<div className="lg:col-span-5">
							<h2
								className="font-medium text-3xl leading-snug lg:text-4xl"
								style={{ color: INK }}
							>
								PMI Membership for Your Enterprise
							</h2>
						</div>
						<div className="lg:col-span-7">
							{/* Gain strategic advantage */}
							<h3
								className="mb-4 font-medium text-2xl leading-snug lg:text-3xl"
								style={{ color: ACCENT }}
							>
								Gain strategic advantage
							</h3>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								PMI membership helps organizations build a culture of continuous
								learning, support talent retention, and align teams around
								proven global standards for delivery and execution.
							</p>
							<p className="mb-3 font-medium text-lg" style={{ color: INK }}>
								Members gain access to:
							</p>
							<ul className="mb-6 space-y-3 text-lg" style={{ color: BODY }}>
								{[
									"Access to projectmanagement.com communities and ongoing PDU opportunities",
									"Insights from PMI research, The PMBOK Guide, PMI Infinity AI tool, and subject matter experts",
									"Single membership that combines global PMI benefits with local chapter access, providing opportunities for networking, leadership development, and community engagement",
									"Discounts on learning courses and professional development programs",
									"Reduced registration fees for PMI events and conferences",
								].map((item) => (
									<li className="flex items-start gap-3" key={item}>
										<span
											aria-hidden
											className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
											style={{ background: BODY }}
										/>
										{item}
									</li>
								))}
							</ul>
							<p
								className="mb-8 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								For enterprises, this creates a shared language across teams and
								strengthens alignment from strategy through execution.
							</p>

							{/* Divider */}
							<div
								className="mb-8 h-px w-full rounded"
								style={{ background: "#e5e2de" }}
							/>

							{/* Future-proof your workforce */}
							<h3
								className="mb-4 font-medium text-2xl leading-snug lg:text-3xl"
								style={{ color: ACCENT }}
							>
								Future-proof your workforce
							</h3>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								In partnership with Purdue University's Krach Institute for Tech
								Diplomacy, PMI brings the groundbreaking{" "}
								<span
									className="font-medium underline underline-offset-2"
									rel="noopener noreferrer"
									style={{ color: INK }}
									target="_blank"
								>
									Tech Diplomacy Academy
								</span>{" "}
								to our global membership.
							</p>
							<p
								className="mb-4 text-lg leading-relaxed"
								style={{ color: BODY }}
							>
								This initiative equips approximately 740,000 Project
								Professionals with on-demand training in critical technologies
								like AI, cybersecurity, semiconductors, and 5G. These offerings
								complement PMI's core learning resources and help prepare teams
								for the complexities of today's technology-driven world.
							</p>
						</div>
					</div>
				</div>

				{/* ── CTA ─────────────────────────────────────────────────────── */}
				<div className="px-6 py-20 text-center" style={{ background: CREAM }}>
					<h2
						className="mx-auto mb-4 max-w-2xl font-medium text-3xl leading-tight lg:text-4xl"
						style={{ color: INK }}
					>
						Ready to build organizational community?
					</h2>
					<p
						className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed"
						style={{ color: BODY }}
					>
						Connect with PMI to explore enterprise membership options and equip
						your workforce with the skills, credentials, and global community
						connections they need to drive project success.
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
		</div>
	);
}
