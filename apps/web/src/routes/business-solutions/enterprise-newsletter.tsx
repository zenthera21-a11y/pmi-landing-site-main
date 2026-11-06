import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/business-solutions/enterprise-newsletter"
)({
	component: RouteComponent,
});

const INK = "#1f1646";
const BODY = "#4a4458";
const DARK_BG = "#1c1330";

const inputCls =
	"w-full rounded border border-gray-200 bg-[#faf9f8] px-3 py-2.5 text-sm transition focus:border-[#1f1646] focus:outline-none focus:ring-1 focus:ring-[#1f1646]";

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
		<div className="flex flex-col gap-1.5">
			<label
				className="font-semibold text-sm"
				htmlFor={id}
				style={{ color: "#323130" }}
			>
				{label}
				{required && (
					<span aria-hidden className="ml-0.5 text-[#c33400]">
						*
					</span>
				)}
			</label>
			{children}
		</div>
	);
}

function RouteComponent() {
	return (
		<div>
			{/* ── Hero ──────────────────────────────────────────────────────── */}
			<div
				className="bg-cover bg-top"
				style={{
					background: DARK_BG,
					backgroundImage:
						"url('//www.pmi.org/-/media/pmi/headless-images/global/hero-backgrounds/background-pimary-desktop.jpg?h=1620&iar=0&w=2880&rev=69de96068d3e440e99dfd14848184979')",
				}}
			>
				{/* Breadcrumb */}
				<nav
					aria-label="Breadcrumb"
					className="mx-auto max-w-screen-xl px-6 pt-6 lg:px-4"
				>
					<ol className="flex flex-wrap items-center gap-1.5 font-medium text-sm text-white/70">
						{[
							{ label: "Home", href: "/" },
							{ label: "PMI for Organizations", href: "/business-solutions" },
							{ label: "Enterprise Newsletter", href: null },
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

				{/* Hero text — left-aligned, col-span-7 */}
				<div className="mx-auto max-w-screen-xl px-6 pt-16 pb-24 lg:px-4 lg:pt-20 lg:pb-28">
					<div className="max-w-2xl text-white">
						<h1 className="mb-6 font-medium text-4xl leading-tight lg:text-5xl">
							The PMI Enterprise Solutions Newsletter
						</h1>
						<p className="text-lg text-white/80 leading-relaxed lg:text-xl">
							Get monthly insights delivered straight to your inbox.
						</p>
					</div>
				</div>
			</div>

			{/* ── Body — white, rounded top overlapping hero ────────────────── */}
			<div
				className="relative -mt-6 overflow-hidden bg-white"
				style={{ borderRadius: "24px 24px 0 0" }}
			>
				<div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-4 lg:py-20">
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
						{/* ── Left: description ──────────────────────────────── */}
						<div className="lg:col-span-5">
							<h2
								className="mb-6 font-medium text-3xl leading-snug lg:text-4xl"
								style={{ color: INK }}
							>
								Stay Ahead with PMI Enterprise Solutions News
							</h2>
							<p
								className="mb-4 text-base leading-relaxed"
								style={{ color: BODY }}
							>
								Subscribe for the latest trends, research, and strategies in
								project leadership, workforce development, and organization
								transformation.
							</p>
							<p className="mb-3 text-base" style={{ color: BODY }}>
								Editions include:
							</p>
							<ul className="mb-4 space-y-2 text-base" style={{ color: BODY }}>
								{[
									"Insights for enterprise leaders",
									"The latest PMI research and industry data",
									"Real-world success stories and case studies",
									"Tools and resources to empower your project teams",
								].map((item) => (
									<li className="flex items-start gap-2" key={item}>
										<span aria-hidden className="mt-1.5 text-xs">
											▪
										</span>
										{item}
									</li>
								))}
							</ul>
							<p className="text-base leading-relaxed" style={{ color: BODY }}>
								Sign up and join a global community of leaders driving business
								impact through smarter project delivery.
							</p>
						</div>

						{/* ── Right: form ────────────────────────────────────── */}
						<div className="lg:col-span-7">
							<p className="mb-8 text-lg" style={{ color: INK }}>
								Fill out the form below and start reading now!
							</p>

							<form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
								<Field id="workEmail" label="Work Email" required>
									<input
										className={inputCls}
										id="workEmail"
										placeholder="Email"
										required
										type="email"
									/>
								</Field>

								<Field id="firstName" label="First Name" required>
									<input
										className={inputCls}
										id="firstName"
										placeholder="First Name"
										required
										type="text"
									/>
								</Field>

								<Field id="lastName" label="Last Name" required>
									<input
										className={inputCls}
										id="lastName"
										placeholder="Last Name"
										required
										type="text"
									/>
								</Field>

								<Field id="org" label="Organization" required>
									<input
										className={inputCls}
										id="org"
										placeholder="Organization Name"
										required
										type="text"
									/>
								</Field>

								<Field id="jobTitle" label="Job Title" required>
									<input
										className={inputCls}
										id="jobTitle"
										placeholder="Job Title"
										required
										type="text"
									/>
								</Field>

								<Field id="country" label="Country(Option)" required>
									<div className="relative">
										<select
											className={`${inputCls} appearance-none pr-8`}
											defaultValue=""
											id="country"
											required
										>
											<option disabled value="">
												Country
											</option>
											{[
												"United States",
												"United Kingdom",
												"Canada",
												"Australia",
												"India",
												"Germany",
												"France",
												"Brazil",
												"Japan",
												"China",
												"Singapore",
												"South Africa",
											].map((c) => (
												<option key={c} value={c}>
													{c}
												</option>
											))}
										</select>
										{/* biome-ignore lint/a11y/noSvgWithoutTitle: decorative icon */}
										<svg
											aria-hidden
											className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2"
											fill="none"
											height="7"
											viewBox="0 0 12 7"
											width="12"
										>
											<path
												d="M6 6.709L.146.855.855.146 6 5.291 11.145.146l.708.709L6 6.709z"
												fill="#605E5C"
											/>
										</svg>
									</div>
								</Field>

								{/* Privacy policy checkbox */}
								<label className="flex cursor-pointer items-start gap-3 text-sm">
									<input
										className="mt-0.5 h-5 w-5 shrink-0 rounded border border-gray-400 accent-[#0078d4]"
										required
										type="checkbox"
									/>
									<span style={{ color: "#323130" }}>
										<a
											className="font-semibold underline"
											href="/privacy"
											style={{ color: INK }}
										>
											View our privacy policy
										</a>
										. Privacy Policy &amp; Terms of Use Acknowledged{" "}
										<span className="text-[#c33400]">*</span>
									</span>
								</label>

								{/* Marketing opt-in (pre-checked) */}
								<label className="flex cursor-pointer items-start gap-3 text-sm">
									<input
										className="mt-0.5 h-5 w-5 shrink-0 rounded border border-gray-400 accent-[#0078d4]"
										defaultChecked
										type="checkbox"
									/>
									<span style={{ color: "#323130" }}>
										By submitting this form, you grant PMI permission to contact
										you about your inquiry.{" "}
										<span className="text-[#c33400]">*</span>
									</span>
								</label>

								{/* Submit */}
								<div className="flex justify-center pt-2">
									<button
										className="rounded px-6 py-2.5 font-bold text-base text-white transition hover:opacity-90"
										style={{ background: "#2266e3" }}
										type="submit"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>

				{/* ── Offer from our training partner ───────────────────────── */}
				<div
					className="border-t px-6 py-10 text-center"
					style={{ borderColor: "#e1dfdd" }}
				>
					<p className="mb-2 font-semibold text-lg" style={{ color: INK }}>
						Offer from our training partner
					</p>
					<p className="text-sm" style={{ color: BODY }}>
						Advertisement
					</p>
				</div>
			</div>
		</div>
	);
}
