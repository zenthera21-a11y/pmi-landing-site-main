import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/business-solutions/commercial-partners/pmi-infinity-for-organizations"
)({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const DARK_BG = "#1c1330";
const DARK_BTN = "#1c1330";
const INFO = "#4fc3f7";

const TABS = [
	{ label: "About PM Infinity", href: "#about" },
	{ label: "For the Enterprise", href: "#organization" },
	{ label: "For Project Teams", href: "#teams" },
	{ label: "Join the Pilot", href: "#pilot" },
];

const WHAT_MAKES_DIFFERENT = [
	{
		title: "Practical Learning",
		body: "Learning and doing in one flow.",
		svg: (
			<path
				d="M11.5 7H12.2219L12.6719 7.5625L18.2219 14.5H22V11.5H23.5L28 16L23.5 20.5H22V17.5H18.2219L12.6719 24.4375L12.2219 25H11.5H5.5H4V22H5.5H10.7781L15.5781 16L10.7781 10H5.5H4V7H5.5H11.5Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Agentic AI for Project Management Work",
		body: "Activate agents to take action for project management tasks and processes under your governance.",
		svg: (
			<>
				<path
					d="M4.8 13.2951H2V21.6951H4.8V13.2951ZM30 13.2951H27.2V21.6951H30V13.2951ZM14.25 14.6951C14.25 14.231 14.0656 13.7859 13.7374 13.4577C13.4092 13.1295 12.9641 12.9451 12.5 12.9451C12.0359 12.9451 11.5908 13.1295 11.2626 13.4577C10.9344 13.7859 10.75 14.231 10.75 14.6951C10.75 15.1592 10.9344 15.6044 11.2626 15.9326C11.5908 16.2607 12.0359 16.4451 12.5 16.4451C12.9641 16.4451 13.4092 16.2607 13.7374 15.9326C14.0656 15.6044 14.25 15.1592 14.25 14.6951ZM19.5 16.4451C19.9641 16.4451 20.4092 16.2607 20.7374 15.9326C21.0656 15.6044 21.25 15.1592 21.25 14.6951C21.25 14.231 21.0656 13.7859 20.7374 13.4577C20.4092 13.1295 19.9641 12.9451 19.5 12.9451C19.0359 12.9451 18.5908 13.1295 18.2626 13.4577C17.9344 13.7859 17.75 14.231 17.75 14.6951C17.75 15.1592 17.9344 15.6044 18.2626 15.9326C18.5908 16.2607 19.0359 16.4451 19.5 16.4451Z"
					fill="currentColor"
				/>
				<path
					d="M17.05 5.54512V4.49512H14.95V5.54512V7.69512H8.3H6.2V9.79512V23.7951V25.8951H8.3H11.4779V26.0451V27.8404V28.2951C11.4779 29.2583 12.5503 29.8339 13.353 29.3015L13.7395 29.0451L18.2626 25.8951H23.7H25.8V23.7951V9.79512V7.69512H23.7H17.05V5.54512ZM23.7 23.7951H18.2626H17.5794L17.0093 24.1748L14.4118 25.8951L13.7395 26.3404V26.0451V25.8951V23.7951H11.4779H8.3V9.79512H14.95H17.05H23.7V23.7951Z"
					fill="currentColor"
				/>
			</>
		),
	},
	{
		title: "Cited Sources",
		body: "Responses include references from PMI knowledge, standards, and vetted community content.",
		svg: (
			<path
				d="M5.5 8.125C5.5 5.84688 7.34688 4 9.625 4H25.375H26.5V5.125V21.625V22.75H25.375H25V25.75H25.375H26.5V28H25.375H9.25C7.17812 28 5.5 26.3219 5.5 24.25C5.5 24.1234 5.50469 23.9969 5.51875 23.875H5.5V8.125ZM9.25 22.75C8.42031 22.75 7.75 23.4203 7.75 24.25C7.75 25.0797 8.42031 25.75 9.25 25.75H22.75V22.75H9.25ZM7.75 20.8141C8.20937 20.6125 8.71563 20.5 9.25 20.5H24.25V6.25H22V15.25L18.25 12.25L14.5 15.25V6.25H9.625C8.58906 6.25 7.75 7.08906 7.75 8.125V20.8141Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Trusted for Privacy",
		body: "PMI Infinity is backed by PMI's Information Security Program, which is aligned with the ISO/IEC 27001 standard and is comprised of a robust set of policies and controls to manage and mitigate the risks associated with storing, processing and transmitting data.",
		svg: (
			<path
				d="M15.9984 6.41406L7.00309 9.90625C6.95622 11.9453 7.32653 14.9172 8.58747 17.8187C9.90934 20.8609 12.1968 23.8047 15.9984 25.5438C19.8 23.8047 22.0875 20.8609 23.4093 17.8187C24.6703 14.9172 25.0406 11.9453 24.9984 9.90625L15.9984 6.41406ZM27.1687 8.33594L27.225 9.29688C27.3609 11.6406 26.9953 15.2172 25.4765 18.7141C23.9437 22.2391 21.2062 25.7453 16.5984 27.7422L15.9984 28L15.4031 27.7422C10.7906 25.7453 8.05778 22.2437 6.52497 18.7141C5.00153 15.2172 4.6359 11.6359 4.77653 9.29688L4.83278 8.33594L5.72809 7.98438L15.4547 4.21094L15.9984 4L16.5422 4.21094L26.2687 7.98438L27.1687 8.33125V8.33594Z"
				fill="currentColor"
			/>
		),
	},
];

const ORG_ITEMS = [
	{
		title: "Portfolio Clarity",
		body: "Gain earlier visibility into scope, schedule, budget, and dependency risks with AI-proposed next steps for proactive management.",
		svg: (
			<path
				d="M24.25 7.75V9.25H7.75V7.75H24.25ZM7.75 5.5H5.5V7.75V9.25V11.5H7.75H14.875V12.25L14.4109 12.7141L13.0938 14.0312L12.625 14.5H7H5.875V15.625V20.5H4V22.75V24.25V26.5H6.25H7.75H10V24.25V22.75V20.5H8.125V16.75H12.625L13.0891 17.2141L14.4062 18.5312L14.875 19V20.5H13V22.75V24.25V26.5H15.25H16.75H19V24.25V22.75V20.5H17.125V19L17.5891 18.5359L18.9062 17.2188L19.375 16.75H23.875V20.5H22V22.75V24.25V26.5H24.25H25.75H28V24.25V22.75V20.5H26.125V15.625V14.5H25H19.375L18.9109 14.0359L17.5938 12.7188L17.125 12.25V11.5H24.25H26.5V9.25V7.75V5.5H24.25H7.75ZM6.25 24.25V22.75H7.75V24.25H6.25ZM16.75 22.75V24.25H15.25V22.75H16.75ZM24.25 24.25V22.75H25.75V24.25H24.25ZM14.6828 15.625L16 14.3078L17.3172 15.625L16 16.9422L14.6828 15.625Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Decision-Ready Intelligence",
		body: "Generate portfolio-ready artifacts, insights, and recommendations with cited sources and clear owner and action paths.",
		svg: (
			<path
				d="M20.9313 15.6672C21.6063 14.7016 22 13.525 22 12.25C22 8.93594 19.3141 6.25 16 6.25C12.6859 6.25 10 8.93594 10 12.25C10 13.525 10.3938 14.7016 11.0688 15.6672C11.2422 15.9156 11.4484 16.1969 11.6687 16.4969C12.2734 17.3266 12.9953 18.3203 13.5344 19.3C14.0219 20.1906 14.2703 21.1187 14.3922 21.9953L12.1094 22C12.0062 21.4375 11.8328 20.8891 11.5562 20.3828C11.0922 19.5391 10.5156 18.7469 9.93906 17.9547C9.69531 17.6219 9.45156 17.2891 9.21719 16.9516C8.29375 15.6203 7.75 13.9984 7.75 12.25C7.75 7.69375 11.4438 4 16 4C20.5562 4 24.25 7.69375 24.25 12.25C24.25 13.9984 23.7063 15.6203 22.7781 16.9516C22.5438 17.2891 22.3 17.6219 22.0563 17.9547C21.4797 18.7422 20.9031 19.5344 20.4391 20.3828C20.1625 20.8891 19.9891 21.4375 19.8859 22H17.6078C17.7297 21.1234 17.9781 20.1906 18.4656 19.3047C19.0047 18.325 19.7266 17.3313 20.3312 16.5016C20.5516 16.2016 20.7531 15.9203 20.9266 15.6719L20.9313 15.6672ZM16 10C14.7578 10 13.75 11.0078 13.75 12.25H12.25C12.25 10.1781 13.9281 8.5 16 8.5V10ZM12.25 23.5H19.75V28H12.25V23.5Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Performance and Capability Uplift",
		body: "Strengthen consistency, confidence, and delivery across teams and portfolios with guided prompts, real-time coaching, and PMI-aligned best practices.",
		svg: (
			<path
				d="M17.2812 25H18.6211H19.9609V22.4286H18.6211H17.2812H15.9414V25H17.2812ZM17.2812 19.8571H21.3008H22.6406V17.2857H21.3008H17.2812H15.9414V19.8571H17.2812ZM17.2812 14.7143H23.9805H25.3203V12.1429H23.9805H17.2812H15.9414V14.7143H17.2812ZM17.2812 9.57143H26.6602H28V7H26.6602H17.2812H15.9414V9.57143H17.2812ZM10.2345 8.06473L9.24215 7.01607L8.24983 8.06071L4.90021 11.5964L4 12.5527L5.98465 14.2844L6.88486 13.3321L7.9023 12.2554V23.7143V25H10.582V23.7143V12.2554L11.5994 13.3321L12.4997 14.2844L14.4843 12.5527L13.5841 11.6004L10.2345 8.06473Z"
				fill="currentColor"
			/>
		),
	},
];

const TEAMS_ITEMS = [
	{
		title: "Powered by Multiple LLMs",
		body: "Delivers accurate, contextual, and deeper AI conversations for project tasks and decisions.",
		svg: (
			<path
				d="M14.5 4H8.5V10H12.2406L13.2344 12.4891C11.5984 13.4875 10.4219 15.1656 10.0938 17.125H7V15.25H1V21.25H7V19.375H10.0938C10.6281 22.5672 13.4078 25 16.75 25C18.8031 25 20.6406 24.0859 21.8781 22.6375L25 24.5125V28H31V22H25.1875L23.0406 20.7109C23.3406 19.9469 23.5047 19.1172 23.5047 18.25C23.5047 17.1625 23.2469 16.1312 22.7875 15.2219L25.8109 13H31V7H25V10.8062L21.4516 13.4078C20.2375 12.2266 18.5781 11.5 16.75 11.5C16.2578 11.5 15.7844 11.5516 15.3203 11.65L14.5 9.59688V4ZM16.75 13.75C19.3734 13.75 21.5 15.7469 21.5 18.25C21.5 20.7531 19.3734 22.75 16.75 22.75C14.1266 22.75 12 20.7531 12 18.25C12 15.7469 14.1266 13.75 16.75 13.75Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Grounded in PMI Expertise",
		body: "Built on PMI's global standards and community-vetted knowledge.",
		svg: (
			<path
				d="M9.27344 28H6.27344H4.02344V25.75V23.5V22.375V21.25V10.75V9.625V8.5V6.25V4H6.27344H9.27344H11.5234H14.5234H16.7734V5.41094L17.2984 5.27031L19.8719 4.58125L22.0422 4L22.6234 6.175L23.1391 8.10625L23.4297 9.19375L23.7203 10.2812L26.2891 19.8719L26.5797 20.9594L26.8703 22.0469L27.3859 23.9781L27.9766 26.1437L25.8016 26.725L23.2281 27.4141L21.0578 28L20.4766 25.825L19.9609 23.8937L19.6703 22.8063L19.3797 21.7188L16.8063 12.1328L16.7734 12.0156V21.25V22.375V23.5V25.75V28H14.5234H11.5234H9.27344ZM11.5234 25.75H14.5234V23.5H11.5234V25.75ZM9.27344 6.25H6.27344V8.5H9.27344V6.25ZM9.27344 10.75H6.27344V21.25H9.27344V10.75ZM11.5234 8.5H14.5234V6.25H11.5234V8.5ZM14.5234 21.25V10.75H11.5234V21.25H14.5234Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Credible and Cited Responses",
		body: "Responses include references from PMI knowledge, standards, and vetted community content.",
		svg: (
			<path
				d="M17.2 19.6L20.8 17.8L22.6 14.2L24.4 17.8L28 19.6L24.4 21.4L22.6 25L20.8 21.4L17.2 19.6ZM4 14.8C4 10.4913 8.2975 7 13.6 7C18.1413 7 21.9438 9.56125 22.945 13H22.9H22.3H21.1863L21.0963 13.1762C20.2075 10.8138 17.4213 8.79625 13.6 8.79625C8.92375 8.79625 5.8 11.8188 5.8 14.8C5.8 16.1163 6.3625 17.3837 7.40875 18.4338L8.22625 19.255L7.82125 20.3388L7.55875 21.0325L9.71875 20.3837L10.24 20.2263L10.7613 20.3837C11.635 20.65 12.5913 20.7963 13.6 20.7963C14.455 20.7963 15.2575 20.695 16 20.5113V21.0138L16.9938 21.5087L17.6913 21.8575C16.45 22.3338 15.0625 22.6 13.6 22.6C12.4188 22.6 11.2863 22.4275 10.24 22.1088L6.7675 23.1513L4.6 23.8L5.395 21.6813L6.1375 19.705C4.79875 18.3663 4 16.66 4 14.8Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Adaptive Modes",
		body: 'Recognizes "Learning" and "Task" modes to help users achieve faster, more effective outcomes.',
		svg: (
			<path
				d="M22 7L19 8.5L22 10L23.5 13L25 10L28 8.5L25 7L23.5 4L22 7ZM16 19L19.4828 17.2562L22 16L19.4828 14.7437L16 13L14.2563 9.51719L13 7L11.7437 9.51719L10 13L6.51719 14.7437L4 16L6.51719 17.2562L10 19L11.7437 22.4828L13 25L14.2563 22.4828L16 19ZM23.5 19L22 22L19 23.5L22 25L23.5 28L25 25L28 23.5L25 22L23.5 19Z"
				fill="currentColor"
			/>
		),
	},
	{
		title: "Enterprise-Trusted Security",
		body: "Powered by PMI proprietary content and enriched with organizational documentation, safeguarding the confidentiality of your data inputs.",
		svg: (
			<path
				d="M18.7984 18.175L17.6641 17.9969L16.8531 18.8078L15.9109 19.75H14.5H12.25V22V22.75H11.5H9.25V25V25.75H6.25V22.0891L13.1922 15.1469L14.0031 14.3359L13.825 13.2016C13.7781 12.8922 13.75 12.5734 13.75 12.25C13.75 8.93594 16.4359 6.25 19.75 6.25C23.0641 6.25 25.75 8.93594 25.75 12.25C25.75 15.5641 23.0641 18.25 19.75 18.25C19.4266 18.25 19.1078 18.2266 18.7984 18.175ZM16.75 22H16.8391L17.1672 21.6719L18.4422 20.3969C18.8688 20.4625 19.3047 20.5 19.75 20.5C24.3062 20.5 28 16.8062 28 12.25C28 7.69375 24.3062 4 19.75 4C15.1938 4 11.5 7.69375 11.5 12.25C11.5 12.6953 11.5328 13.1312 11.6031 13.5578L4.32812 20.8281L4 21.1562V21.625V25.75V26.875V28H5.125H6.25H9.25H10.375H11.5V27.25V26.875V25.75V25H12.25H13.375H13.75H14.5V24.25V23.875V22.75V22H16.375H16.75ZM21.25 12.25C21.6478 12.25 22.0294 12.092 22.3107 11.8107C22.592 11.5294 22.75 11.1478 22.75 10.75C22.75 10.3522 22.592 9.97064 22.3107 9.68934C22.0294 9.40804 21.6478 9.25 21.25 9.25C20.8522 9.25 20.4706 9.40804 20.1893 9.68934C19.908 9.97064 19.75 10.3522 19.75 10.75C19.75 11.1478 19.908 11.5294 20.1893 11.8107C20.4706 12.092 20.8522 12.25 21.25 12.25Z"
				fill="currentColor"
			/>
		),
	},
];

function IconItem({
	title,
	body,
	svg,
	dark,
}: {
	title: string;
	body: string;
	svg: React.ReactNode;
	dark?: boolean;
}) {
	return (
		<li className="flex flex-col gap-6">
			<div className="flex flex-row gap-6">
				{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
				<svg
					aria-hidden
					className="h-8 w-8 shrink-0"
					fill="none"
					style={{ color: dark ? "white" : INK }}
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
				>
					{svg}
				</svg>
				<div className="flex flex-col gap-2">
					<div
						className="font-medium text-base"
						style={{ color: dark ? "white" : INK }}
					>
						{title}
					</div>
					<div
						className="text-base leading-relaxed"
						style={{ color: dark ? "rgba(255,255,255,0.7)" : BODY }}
					>
						{body}
					</div>
				</div>
			</div>
			<div
				className="h-px w-full"
				style={{ background: dark ? "rgba(255,255,255,0.12)" : "#e5e2de" }}
			/>
		</li>
	);
}

function RouteComponent() {
	return (
		<div>
			{/* ── Hero — full-bleed dark background image, centered content ──── */}
			<div
				className="bg-center bg-cover bg-no-repeat"
				style={{
					background: DARK_BG,
					backgroundImage:
						"url('//www.pmi.org/-/media/pmi/headless-images/business-solutions/pmi-infinity-for-organizations/pmi-for-infinity-hero.png?h=524&iar=0&w=1440&rev=c5bc49b209724f64a9fafe6b043672ec')",
				}}
			>
				<div
					className="flex min-h-[580px] flex-col text-white lg:min-h-[640px]"
					style={{
						background:
							"linear-gradient(to bottom, rgba(28,19,48,0.1) 0%, rgba(28,19,48,0.75) 45%, rgba(28,19,48,0.95) 100%)",
					}}
				>
					{/* Breadcrumb — top-left, white */}
					<nav
						aria-label="Breadcrumb"
						className="mx-auto w-full max-w-screen-xl px-6 pt-6 lg:px-4"
					>
						<ol className="flex flex-wrap items-center gap-1.5 font-medium text-sm text-white/70">
							{[
								{ label: "Home", href: "/" },
								{
									label: "PMI for Organizations",
									href: "/business-solutions",
								},
								{
									label: "Enterprise and Commercial Partners",
									href: "/business-solutions/commercial-partners",
								},
								{ label: "PMI Infinity™ for Organizations", href: null },
							].map((crumb, i, arr) => (
								<li className="flex items-center gap-1.5" key={crumb.label}>
									{crumb.href ? (
										<Link className="hover:text-white" to={crumb.href}>
											{crumb.label}
										</Link>
									) : (
										<span className="text-white">{crumb.label}</span>
									)}
									{i < arr.length - 1 && <span aria-hidden>/</span>}
								</li>
							))}
						</ol>
					</nav>

					{/* Centered hero content */}
					<div className="flex flex-1 items-center justify-center px-6 py-16 text-center lg:px-4">
						<div className="mx-auto max-w-4xl">
							<h1 className="mb-6 font-medium text-4xl text-white leading-tight lg:text-5xl">
								PMI Infinity™ for Organizations
							</h1>
							<p className="mb-8 text-white/80 text-xl leading-relaxed">
								The Credible, Enterprise-Trusted, AI-Powered Coach for Project
								Teams
							</p>
							<div className="flex flex-wrap items-center justify-center gap-3">
								<a
									aria-label="Request a Demo"
									className="inline-flex h-12 items-center rounded-full px-6 font-medium text-base text-white transition hover:opacity-90"
									href="mailto:PMIInfinity@pmi.org"
									style={{ background: DARK_BTN }}
								>
									Request a Demo
								</a>
								<a
									aria-label="Contact Us"
									className="inline-flex h-12 items-center gap-2 rounded-full border border-white/50 px-6 font-medium text-base text-white transition hover:bg-white/10"
									href="/contact"
								>
									Contact Us
									{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
									<svg
										aria-hidden
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
								</a>
							</div>
						</div>
					</div>
				</div>
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
								defaultValue="#about"
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

				{/* ════════════════ #about ════════════════ */}
				<div id="about" style={{ scrollMarginTop: "80px" }}>
					{/* PMI Infinity brings credible AI — col-5 + col-7 */}
					<div className="mx-auto max-w-screen-xl px-6 pt-20 pb-16 lg:px-4">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
							<div className="lg:col-span-5">
								<h2
									className="font-medium text-2xl leading-snug lg:text-3xl"
									style={{ color: INK }}
								>
									PMI Infinity brings credible AI to enterprises
								</h2>
							</div>
							<div className="lg:col-span-7">
								<p
									className="mb-4 font-medium text-lg leading-relaxed"
									style={{ color: INK }}
								>
									PMI Infinity is powered by multiple leading AI models and
									grounded in PMI's global standards and community expertise.
								</p>
								<p
									className="mb-4 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									It equips project organizations with secure, project-specific
									intelligence that strengthens decision-making, accelerates
									delivery, and ensures consistency across teams and portfolios.
								</p>
								<p className="text-lg leading-relaxed" style={{ color: INK }}>
									Built for project professionals, PMI Infinity offers a
									dependable, comprehensive knowledge base and curated library
									of best practices – giving leaders and teams the confidence to
									act with clarity and control.
								</p>
							</div>
						</div>
					</div>

					{/* How are Project Managers using PMI Infinity — dark 3-col stats */}
					<div style={{ background: DARK_BG }}>
						<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
							<h2 className="mb-12 text-center font-medium text-2xl text-white leading-tight lg:text-3xl">
								How are Project Managers using PMI Infinity?
							</h2>
							<div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
								{[
									{
										stat: "50% learn",
										body: "project leadership, sharpening decision-making skills, mastering risk management, and preparing for professional certifications.",
									},
									{
										stat: "77% augment",
										body: "by aligning stakeholders, creating project documentation, and defining solutions to boost their performance.",
									},
									{
										stat: "18% automate",
										body: "and drive impact through coordinated collaboration, standardized templates, and streamlined communication.",
									},
								].map((item) => (
									<div key={item.stat}>
										<p
											className="mb-3 font-medium text-2xl lg:text-3xl"
											style={{ color: INFO }}
										>
											{item.stat}
										</p>
										<p className="text-lg text-white/70 leading-relaxed">
											{item.body}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* What makes PMI Infinity different — col-5 + col-7 icon list */}
					<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
							<div className="lg:col-span-5">
								<h2
									className="font-medium text-2xl leading-snug lg:text-3xl"
									style={{ color: INK }}
								>
									What makes PMI Infinity different?
								</h2>
							</div>
							<div className="lg:col-span-7">
								<p
									className="mb-8 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									PMI Infinity delivers a secure, enterprise-ready environment
									where project leaders and teams can learn, apply, and thrive.
									It brings AI support directly into the flow of project work,
									with no developers or complex integrations required.
								</p>
								<ul className="flex flex-col gap-6">
									{WHAT_MAKES_DIFFERENT.map((item) => (
										<IconItem
											body={item.body}
											key={item.title}
											svg={item.svg}
											title={item.title}
										/>
									))}
								</ul>

								{/* Trust bar */}
								<div className="mt-8 mb-6">
									<p
										className="mb-2 font-semibold text-sm"
										style={{ color: INK }}
									>
										Trust Bar: SSO &amp; MFA
									</p>
									<ul className="space-y-1 text-sm" style={{ color: BODY }}>
										{[
											"SOC 2/ISO 27001 aligned",
											"GDPR-conscious",
											"Data not used to train public models",
										].map((item) => (
											<li className="flex items-center gap-2" key={item}>
												<span aria-hidden>·</span> {item}
											</li>
										))}
									</ul>
								</div>

								<a
									className="inline-flex h-11 items-center gap-2 rounded-full border px-5 font-medium text-sm transition hover:bg-gray-50"
									href="/privacy"
									style={{ borderColor: INK, color: INK }}
								>
									Visit the PMI Infinity Trust Center
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* ════════════════ #organization — DARK ════════════════ */}
				<div
					id="organization"
					style={{ scrollMarginTop: "80px", background: DARK_BG }}
				>
					<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
							<div className="lg:col-span-5">
								<h2 className="font-medium text-2xl text-white leading-snug lg:text-3xl">
									What can PMI Infinity do for your organization?
								</h2>
							</div>
							<div className="lg:col-span-7">
								<p className="mb-8 text-lg text-white/70 leading-relaxed">
									With a purpose-built AI tool, get the insight to manage
									projects more proactively and inform decision-making to
									ultimately elevate performance across your portfolio.
								</p>
								<ul className="flex flex-col gap-6">
									{ORG_ITEMS.map((item) => (
										<IconItem
											body={item.body}
											dark
											key={item.title}
											svg={item.svg}
											title={item.title}
										/>
									))}
								</ul>
							</div>
						</div>

						{/* Full-width screenshot */}
						<div className="mt-16">
							<img
								alt="PMI Infinity organization dashboard"
								className="w-full rounded-2xl"
								height={365}
								src="//www.pmi.org/-/media/pmi/headless-images/business-solutions/pmi-infinity-for-organizations/what-can-pmi-infinity-do-for-your-organization.png?h=365&iar=0&w=1200&rev=cc2bd7882c2a49b1ac19ce5574f6de58"
								width={1200}
							/>
						</div>
					</div>
				</div>

				{/* ════════════════ #teams — LIGHT ════════════════ */}
				<div id="teams" style={{ scrollMarginTop: "80px" }}>
					<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
						<div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
							<div className="lg:col-span-5">
								<h2
									className="font-medium text-2xl leading-snug lg:text-3xl"
									style={{ color: INK }}
								>
									What can PMI Infinity do for your teams?
								</h2>
							</div>
							<div className="lg:col-span-7">
								<p
									className="mb-8 text-lg leading-relaxed"
									style={{ color: BODY }}
								>
									PMI Infinity is designed for project leaders and teams who
									need trusted, AI-powered, real-time support to move work
									forward with confidence.
								</p>
								<ul className="flex flex-col gap-6">
									{TEAMS_ITEMS.map((item) => (
										<IconItem
											body={item.body}
											key={item.title}
											svg={item.svg}
											title={item.title}
										/>
									))}
								</ul>
							</div>
						</div>

						{/* Full-width screenshot */}
						<div className="mt-16">
							<img
								alt="PMI Infinity teams dashboard"
								className="w-full rounded-2xl"
								height={365}
								src="//www.pmi.org/-/media/pmi/headless-images/business-solutions/pmi-infinity-for-organizations/what-can-pmi-infinity-do-for-your-teams.png?h=365&iar=0&w=1200&rev=93dc35c14a1a42369c727c843b8ba5a5"
								width={1200}
							/>
						</div>
					</div>
				</div>

				{/* ════════════════ #pilot ════════════════ */}
				<div
					id="pilot"
					style={{ scrollMarginTop: "80px", background: DARK_BG }}
				>
					<div className="px-6 py-20 text-center">
						<h2 className="mx-auto mb-4 max-w-2xl font-medium text-3xl text-white leading-tight lg:text-4xl">
							Join the PMI Infinity Pilot
						</h2>
						<p className="mx-auto mb-8 max-w-2xl text-lg text-white/70 leading-relaxed">
							Be among the first organizations to experience the future of
							AI-powered project management. Request access to the PMI Infinity
							pilot program and give your teams a competitive advantage.
						</p>
						<div className="flex flex-wrap items-center justify-center gap-3">
							<a
								className="inline-flex h-12 items-center rounded-full px-6 font-medium text-base text-white transition hover:opacity-90"
								href="mailto:PMIInfinity@pmi.org"
								style={{ background: "#6629b2" }}
							>
								Request a Demo
							</a>
							<a
								className="inline-flex h-12 items-center gap-2 rounded-full border border-white/50 px-6 font-medium text-base text-white transition hover:bg-white/10"
								href="/contact"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
