import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/business-solutions/non-profits")({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const CREAM = "#f7f3ec";
const DARK_BTN = "#1c1330";

function RouteComponent() {
	return (
		<div style={{ background: CREAM }}>
			{/* ── Breadcrumb ────────────────────────────────────────────────── */}
			<nav
				aria-label="Breadcrumb"
				className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4"
			>
				<ol className="flex flex-wrap items-center gap-1.5 font-medium text-sm">
					{[
						{ label: "Home", href: "/" },
						{ label: "PMI for Organizations", href: "/business-solutions" },
						{ label: "Non-Governmental Organizations", href: null },
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
								<span aria-hidden="true" style={{ color: BODY }}>
									/
								</span>
							)}
						</li>
					))}
				</ol>
			</nav>

			{/* ── Hero ──────────────────────────────────────────────────────── */}
			<section className="mx-auto grid max-w-screen-xl items-center gap-12 px-6 pt-8 pb-16 lg:grid-cols-12 lg:gap-14 lg:px-4 lg:pt-12 lg:pb-20">
				{/* Image — no CSS circle; the PNG source has transparent circular crop */}
				<div className="relative h-auto lg:col-span-5">
					<div className="max-h-full lg:-ml-[max(16px,calc(50vw-640px))] lg:w-[max(calc(100%+16px),calc(100%+50vw-640px))] 2xl:ml-0 2xl:w-full">
						<img
							alt="Hands typing on a keyboard"
							className="h-auto w-full 2xl:rounded-sm"
							height={931}
							src="//www.pmi.org/-/media/pmi/headless-images/pmi-for-organizations/general-landing_pmi-for-orgs.png?h=931&iar=0&w=1024&rev=003e8c0a805742faabbc140fbe4f0c45"
							width={1024}
						/>
					</div>
				</div>

				{/* Text */}
				<div className="lg:col-span-7">
					<h1
						className="mb-6 font-medium text-4xl leading-tight lg:text-5xl"
						style={{ color: INK }}
					>
						Helping non-governmental organizations expand their capacity to
						elevate our world
					</h1>
					<p className="mb-8 text-xl leading-relaxed" style={{ color: BODY }}>
						Discover how PMI can offer substantial support. Project Management
						Institute (PMI)® provides significant assistance to non-governmental
						organizations (NGO) in various ways.
					</p>
					<a
						className="inline-flex h-12 items-center rounded-full px-6 font-medium text-base text-white transition hover:opacity-90"
						href="/contact"
						style={{ background: DARK_BTN }}
					>
						Let's work together
					</a>
				</div>
			</section>

			{/* ── Training and certifications ──────────────────────────────── */}
			<ContentRow
				body={
					<p className="text-lg leading-relaxed" style={{ color: BODY }}>
						We offer globally recognized certifications like the Project
						Management Professional (PMP)® and Certified Associate in Project
						Management (CAPM)®. These certifications enhance the project
						management skills of NGO staff and can be purchased by the
						organization on behalf of their employees and/or students. We also
						provide access to a wide range of training resources, including
						online courses, workshops, and seminars, which empower NGO staff to
						develop their project management capabilities.
					</p>
				}
				heading="Training and certifications"
			/>

			{/* ── Testimonial ───────────────────────────────────────────────── */}
			<section className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
					<div className="overflow-hidden rounded-3xl lg:rounded-[9999px_24px_24px_9999px]">
						<img
							alt="Crystal Taylor, PMP"
							className="aspect-video w-full object-cover"
							height={676}
							src="//www.pmi.org/-/media/pmi/headless-images/business-solutions/testimonial-1200x676-crystaltaylor.png?h=676&iar=0&w=1200&rev=7242d9108b714c02961dd4e75f59c941"
							width={1200}
						/>
					</div>

					{/* Quote */}
					<div>
						<blockquote>
							<p
								className="mb-6 font-medium text-2xl leading-snug lg:text-3xl"
								style={{ color: INK }}
							>
								"Bringing project management principles into nonprofit work
								elevated our operations. My PMP certification helps us apply
								structure, anticipate challenges, and deliver mission-driven
								results in an environment that often lacks resources."
							</p>
							<footer>
								<p className="font-medium text-base" style={{ color: INK }}>
									Crystal Taylor, PMP
								</p>
								<p className="mt-1 text-sm" style={{ color: BODY }}>
									Vice President of Programs and Operations, Junior Achievement
									of Central Carolinas
								</p>
							</footer>
						</blockquote>
					</div>
				</div>
			</section>

			{/* ── Networking opportunities ──────────────────────────────────── */}
			<ContentRow
				body={
					<p className="text-lg leading-relaxed" style={{ color: BODY }}>
						We're thrilled to host engaging conferences, meetings, and local
						chapter events that offer fantastic opportunities for organizations
						to connect with project management professionals, exchange best
						practices, and gain insights from others' experiences. Building
						these connections paves the way for valuable partnerships and
						collaborations that greatly benefit the organization's projects and
						initiatives.
					</p>
				}
				heading="Networking opportunities"
			/>

			{/* ── Grant and funding support ─────────────────────────────────── */}
			<ContentRow
				body={
					<p className="text-lg leading-relaxed" style={{ color: BODY }}>
						PMI Educational Foundation (PMIEF) offers grants to Youth-Serving
						Nonprofits (YSNPs) for the purpose of educating youth in project
						management on an annual basis. Details can be found on the{" "}
						<a
							className="underline"
							href="/learning/academic-programs"
							style={{ color: INK }}
						>
							PMIEF website
						</a>
						. PMIEF also offers{" "}
						<a
							className="underline"
							href="/learning/academic-programs"
							style={{ color: INK }}
						>
							scholarships
						</a>{" "}
						for leaders of NGOs annual for use for training and development in
						PM (includes certification training but excludes exam fees).{" "}
						<a
							className="underline"
							href="/volunteer/project-managers-without-borders"
							style={{ color: INK }}
						>
							Project Managers Without Borders
						</a>{" "}
						connects professionals with NGOs to empower and equip them with
						sustainable project management processes, tools, solutions,
						pro-bono.
					</p>
				}
				heading="Grant and funding support"
			/>

			{/* ── Access to resources ───────────────────────────────────────── */}
			<ContentRow
				body={
					<p className="text-lg leading-relaxed" style={{ color: BODY }}>
						We publish a wealth of knowledge through standards, guides (like the
						PMBOK Guide®), whitepapers, case studies, and articles that equip
						NGOs to improve their Project Management practices. NGOs use our
						templates, tools, and frameworks to streamline their project
						processes and improve efficiency.
					</p>
				}
				heading="Access to resources"
			/>

			{/* ── Volunteer program ─────────────────────────────────────────── */}
			<ContentRow
				body={
					<p className="text-lg leading-relaxed" style={{ color: BODY }}>
						The project management volunteer program connects skilled project
						management volunteers with NGOs that need assistance with their
						projects through{" "}
						<a
							className="underline"
							href="/volunteer/project-managers-without-borders"
							style={{ color: INK }}
						>
							Project Managers Without Borders (PMWB)
						</a>
						. This organization provides NGOs with expert advice and support
						without incurring high costs.
					</p>
				}
				heading="Volunteer program"
				last
			/>
		</div>
	);
}

function ContentRow({
	heading,
	body,
	last,
}: {
	heading: string;
	body: React.ReactNode;
	last?: boolean;
}) {
	return (
		<section
			className={`mx-auto max-w-screen-xl px-6 lg:px-4 ${last ? "py-10 pb-20" : "py-10"}`}
		>
			<div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
				<div className="lg:col-span-5">
					<h2
						className="font-medium text-2xl leading-snug lg:text-3xl"
						style={{ color: INK }}
					>
						{heading}
					</h2>
				</div>
				<div className="lg:col-span-7">{body}</div>
			</div>
		</section>
	);
}
