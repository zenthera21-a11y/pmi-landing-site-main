import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/events/events-group-registration")({
	component: RouteComponent,
});

const HD = "#1a2c5b";
const CREAM = "#f5f0ea";
const VIOLET = "#4f17a8";
const DARK_BG = "#200f3b";

const EVENTS = [
	"PMI® Global Summit Series Lisbon | 29–30 April",
	"PMI® Global Summit Series Seoul | 10–11 June",
	"PMI® Agile 2026 | National Harbor, MD USA | 26-28 July",
	"PMI® Global Summit Series Cape Town | 14–15 September",
	"PMI® Global Summit | Detroit, MI, USA | 21–24 October",
];

const COUNTRIES = [
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
	"Mexico",
	"South Africa",
	"Singapore",
	"UAE",
	"Other",
];

function RouteComponent() {
	const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
	const [marketingConsent, setMarketingConsent] = useState(true);

	function toggleEvent(ev: string) {
		setSelectedEvents((prev) =>
			prev.includes(ev) ? prev.filter((e) => e !== ev) : [...prev, ev]
		);
	}

	return (
		<main className="overflow-x-hidden" id="main-layout">
			{/* ── Hero ─────────────────────────────────────────────────────── */}
			<div
				className="relative flex min-h-[520px] w-full items-end justify-center bg-center bg-cover pt-48 pb-20 text-center"
				style={{ backgroundImage: "url('/images/events/group-reg-hero.jpg')" }}
			>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(to bottom, rgba(10,18,40,0.35) 0%, rgba(10,18,40,0.65) 100%)",
					}}
				/>
				<div className="relative z-10 mx-auto max-w-4xl px-4">
					<nav aria-label="Breadcrumb" className="mb-6">
						<ol className="flex items-center justify-center gap-2 font-aeonik text-sm text-white/60">
							<li>
								<Link className="hover:text-white" to="/">
									Home
								</Link>
							</li>
							<li className="text-white/40">/</li>
							<li>
								<Link className="hover:text-white" to={"/events" as never}>
									Attend Events
								</Link>
							</li>
							<li className="text-white/40">/</li>
							<li className="text-white/80">Events Group Registration</li>
						</ol>
					</nav>
					<h1 className="font-aeonik font-medium text-5xl text-white leading-tight lg:text-6xl">
						Join us at PMI events around the world
					</h1>
				</div>
			</div>

			{/* ── Heading band ─────────────────────────────────────────────── */}
			<div className="bg-white">
				<div className="mx-auto max-w-screen-xl px-4 py-14 text-center lg:py-16">
					<h2
						className="font-aeonik font-medium text-3xl lg:text-4xl"
						style={{ color: HD }}
					>
						Send your team to PMI Global Events and Get a Group Discount!
					</h2>
				</div>
			</div>

			{/* ── 2-col: content + form ─────────────────────────────────────── */}
			<div style={{ background: CREAM }}>
				<div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-12 px-4 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
					{/* Left: rich text */}
					<div
						className="font-aeonik text-base leading-7"
						style={{ color: HD }}
					>
						<h3 className="mb-4 font-semibold text-2xl" style={{ color: HD }}>
							Empower Your Teams at PMI Global Events
						</h3>
						<p className="mb-4 text-gray-700">
							Elevate your organization's performance by sending your teams to
							PMI Global Events—where the future of project management takes
							shape. These events offer invaluable insights into emerging
							trends, cutting-edge tools, and proven best practices, equipping
							your teams with the knowledge to drive innovation and stay ahead
							of the curve.
						</p>
						<p className="mb-4 text-gray-700">
							Invest in leadership development, cultivate strategic thinking,
							and foster meaningful industry connections that align with your
							organization's goals. These events also provide professional
							development units (PDUs) to support certification renewals,
							reinforcing your commitment to continuous learning, excellence,
							and talent growth.
						</p>
						<p className="mb-6 font-semibold text-gray-800">
							Seize the opportunity to inspire, upskill, and future-proof your
							teams. Fill out the form to request group registrations for teams
							of 10 or more.
						</p>

						<p className="mb-2 font-semibold text-gray-800">
							Definition of a group:
						</p>
						<p className="mb-4 text-gray-700">
							Individuals from one organization attending an event. A single
							person from the organization must serve as PMI's single point of
							contact for all attendees eligible for the group rate.
						</p>
						<ul className="mb-6 space-y-1 pl-4">
							<li className="flex items-start gap-2 text-gray-700">
								<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
								10–19 attendees: <strong>10% discount</strong>
							</li>
							<li className="flex items-start gap-2 text-gray-700">
								<span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-500" />
								20 + attendees: <strong>20% discount</strong>
							</li>
						</ul>
						<p className="mb-6 text-gray-600 text-sm leading-6">
							NOTE: The actual rate each person within the group is charged
							depends on their membership status and the rate period when
							registration is completed. If the group falls below 10 registered
							attendees, eligibility for the group discount will be forfeited.
							To secure your discounted group registration rate, your group's
							payment must be submitted by the end of the rate tier in which
							your group has registered.
						</p>

						<p className="mb-2 font-semibold text-gray-800">
							Highlight Your Brand!
						</p>
						<p className="mb-2 text-gray-700">
							If you're looking to showcase your solutions to a highly engaged
							audience of project leaders, innovators, and decision-makers, we'd
							love to connect. Exhibiting at PMI's premier events offers a
							powerful opportunity to position your brand in front of
							professionals actively seeking tools and strategies to drive
							project success.
						</p>
						<p className="text-gray-700">
							Connect with us at{" "}
							<a
								className="underline hover:no-underline"
								href="mailto:advertising@pmi.org"
								style={{ color: HD }}
							>
								advertising@pmi.org
							</a>{" "}
							to explore exhibitor opportunities and learn how you can be part
							of this influential global community.
						</p>
					</div>

					{/* Right: form */}
					<div className="rounded-2xl bg-white p-8 shadow-sm">
						<h3 className="mb-1 font-semibold text-gray-800 text-xl">
							Fill out the form below for teams of 10 or more:
						</h3>
						<div className="mb-6 h-px bg-gray-200" />
						<form
							className="space-y-5"
							onSubmit={(e) => {
								e.preventDefault();
								console.warn(
									"Thank you for your group registration submission. A team member from the PMI events team will contact you within 5–7 business days. If your inquiry is urgent, please contact events@pmi.org"
								);
							}}
						>
							{/* Organization */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="org"
								>
									Organization <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
									id="org"
									placeholder="Organization Name"
									required
									type="text"
								/>
							</div>

							{/* First / Last */}
							<div className="grid grid-cols-2 gap-4">
								<div className="flex flex-col gap-1.5">
									<label
										className="font-semibold text-base text-gray-800"
										htmlFor="fname"
									>
										First Name <span className="text-red-500">*</span>
									</label>
									<input
										className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
										id="fname"
										placeholder="First Name"
										required
										type="text"
									/>
								</div>
								<div className="flex flex-col gap-1.5">
									<label
										className="font-semibold text-base text-gray-800"
										htmlFor="lname"
									>
										Last (Family) Name <span className="text-red-500">*</span>
									</label>
									<input
										className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
										id="lname"
										placeholder="Last Name"
										required
										type="text"
									/>
								</div>
							</div>

							{/* Work Email */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="email"
								>
									Work Email <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
									id="email"
									placeholder="Email"
									required
									type="email"
								/>
							</div>

							{/* Phone */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="phone"
								>
									Phone <span className="text-red-500">*</span>
								</label>
								<div className="flex w-full overflow-hidden rounded border border-gray-300 bg-gray-50 focus-within:border-blue-500">
									<span className="flex items-center border-gray-300 border-r bg-gray-100 px-3 text-gray-500 text-sm">
										+
									</span>
									<input
										className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none"
										id="phone"
										placeholder=""
										required
										type="tel"
									/>
								</div>
							</div>

							{/* Job Title */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="jobtitle"
								>
									Job Title <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
									id="jobtitle"
									placeholder="Job Title"
									required
									type="text"
								/>
							</div>

							{/* Country */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="country"
								>
									Country <span className="text-red-500">*</span>
								</label>
								<select
									className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
									id="country"
									required
								>
									<option value="">Choose country</option>
									{COUNTRIES.map((c) => (
										<option key={c}>{c}</option>
									))}
								</select>
							</div>

							{/* Team Size */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="teamsize"
								>
									Team Size <span className="text-red-500">*</span>
								</label>
								<input
									className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
									id="teamsize"
									min="10"
									placeholder="No. of team members (numeric only)"
									required
									type="number"
								/>
							</div>

							{/* Events checkboxes */}
							<div className="flex flex-col gap-2">
								<p className="font-semibold text-base text-gray-800">
									My organization is interested in{" "}
									<span className="text-red-500">*</span>
								</p>
								<div className="space-y-2">
									{EVENTS.map((ev) => (
										<label
											className="flex cursor-pointer items-start gap-3"
											key={ev}
										>
											<input
												checked={selectedEvents.includes(ev)}
												className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-violet-700"
												onChange={() => toggleEvent(ev)}
												type="checkbox"
											/>
											<span className="text-gray-700 text-sm">{ev}</span>
										</label>
									))}
								</div>
							</div>

							{/* Comments */}
							<div className="flex flex-col gap-1.5">
								<label
									className="font-semibold text-base text-gray-800"
									htmlFor="comments"
								>
									Comments
								</label>
								<textarea
									className="w-full resize-y rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
									id="comments"
									placeholder="Additional Information"
									rows={4}
								/>
							</div>

							{/* Privacy note */}
							<p className="text-gray-600 text-sm leading-5">
								By submitting this form, you grant PMI permission to contact you
								about your inquiry.{" "}
								<a
									className="underline"
									href="/privacy"
									rel="noreferrer"
									style={{ color: VIOLET }}
									target="_blank"
								>
									View our privacy policy
								</a>
								.
							</p>

							{/* Privacy Policy checkbox */}
							<label className="flex cursor-pointer items-start gap-3">
								<input
									className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-violet-700"
									required
									type="checkbox"
								/>
								<span className="text-gray-700 text-sm">
									Privacy Policy &amp; Terms of Use Acknowledged{" "}
									<span className="text-red-500">*</span>
								</span>
							</label>

							{/* Marketing consent */}
							<label className="flex cursor-pointer items-start gap-3">
								<input
									checked={marketingConsent}
									className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer accent-violet-700"
									onChange={(e) => setMarketingConsent(e.target.checked)}
									type="checkbox"
								/>
								<span className="text-gray-700 text-sm">
									By checking this box, you grant PMI permission to contact you
									about your inquiry and send occasional offers and promotional
									emails. You can unsubscribe at any time.{" "}
									<span className="text-red-500">*</span>
								</span>
							</label>

							{/* reCAPTCHA mock */}
							<div className="flex items-center justify-end">
								<div className="flex w-[304px] items-center justify-between rounded border border-gray-300 bg-gray-50 px-4 py-3 shadow-sm">
									<label className="flex cursor-pointer items-center gap-3">
										<input className="h-5 w-5 cursor-pointer" type="checkbox" />
										<span className="text-gray-700 text-sm">
											I'm not a robot
										</span>
									</label>
									<div className="flex flex-col items-center gap-0.5">
										<svg
											aria-hidden={true}
											className="h-10 w-10"
											fill="none"
											viewBox="0 0 48 48"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="24" cy="24" fill="#4A90D9" r="20" />
											<path
												d="M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14S31.7 10 24 10zm0 4c2.2 0 4.2.7 5.9 1.8L14.8 29.9C13.7 28.2 13 26.2 13 24c0-6.1 4.9-11 11-11zm0 22c-2.2 0-4.2-.7-5.9-1.8l15.1-14.1c1.1 1.7 1.8 3.7 1.8 5.9 0 6.1-4.9 11-11 11z"
												fill="white"
											/>
										</svg>
										<span className="text-[9px] text-gray-400">reCAPTCHA</span>
										<span className="text-[8px] text-gray-300">
											Privacy - Terms
										</span>
									</div>
								</div>
							</div>

							{/* Submit */}
							<div className="pt-2 text-center">
								<button
									className="inline-flex h-12 items-center justify-center rounded-full px-10 font-semibold text-base text-white transition hover:opacity-90"
									style={{ background: VIOLET, minWidth: "220px" }}
									type="submit"
								>
									Request Group Registration
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* ── Speaking CTA ─────────────────────────────────────────────── */}
			<div style={{ background: "#f0ebe3" }}>
				<div className="mx-auto max-w-screen-xl px-4 py-20 text-center">
					<h2
						className="mb-4 font-aeonik font-bold text-4xl lg:text-5xl"
						style={{ color: HD }}
					>
						Interested in speaking at a PMI event?
					</h2>
					<p className="mb-8 text-gray-600 text-lg">
						Submit your topic/talk to our ongoing call for presentations for
						consideration for various PMI events.
					</p>
					<Link
						className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 font-semibold text-base transition hover:bg-gray-100"
						style={{ borderColor: HD, color: HD }}
						to={"/events/speaking-opportunities" as never}
					>
						Submit Your Idea
						<svg
							aria-hidden={true}
							fill="none"
							height="18"
							stroke="currentColor"
							strokeWidth="2"
							viewBox="0 0 24 24"
							width="18"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</div>

			{/* ── Ready to join PMI ────────────────────────────────────────── */}
			<div className="py-20 text-center" style={{ background: DARK_BG }}>
				<div className="mx-auto max-w-screen-md px-4">
					<h2 className="mb-4 font-aeonik font-bold text-4xl text-white lg:text-5xl">
						Ready to join PMI?
					</h2>
					<p className="mb-8 text-lg text-white/70">
						Unlock opportunity with members-only access to career-long learning,
						project resources, and our global community.
					</p>
					<a
						className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-base transition hover:bg-gray-100"
						href="/membership"
						rel="noreferrer"
						style={{ color: HD }}
						target="_blank"
					>
						<span
							className="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs"
							style={{
								background:
									"linear-gradient(135deg, #e84393, #f5a623, #4f17a8)",
							}}
						>
							✦
						</span>
						Become a Member
					</a>
				</div>
			</div>
		</main>
	);
}
