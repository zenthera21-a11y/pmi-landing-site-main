import { Button } from "@pmi-south-asia/ui/components/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@pmi-south-asia/ui/components/select";
import {
	IconArrowRight,
	IconCalendar,
	IconDownload,
	IconFilter,
	IconMapPin,
	IconUsers,
	IconX,
} from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/learning/pmi-training")({
	component: RouteComponent,
});

const PURPLE = "#200f3b";
const CREAM = "#f8f5f0";
const MUTED = "#6b5b7b";
const GOLD = "#c9a227";

const TOPIC_OPTIONS = [
	"All Topics",
	"Project Management Fundamentals",
	"PMP® Exam Prep",
	"Agile & Hybrid",
	"AI in Project Management",
	"Business Acumen",
	"Leadership & Communication",
];

const LOCATION_OPTIONS = [
	"All Locations",
	"Virtual Training",
	"National Harbor, MD",
	"San Diego, CA",
	"Denver, CO",
	"Detroit, MI",
	"Washington, DC",
	"Newtown Square, PA",
	"Cape Town",
];

const LEVEL_OPTIONS = [
	"All Levels",
	"Foundational",
	"Intermediate",
	"Advanced",
];

const TOPIC_HREFS: Record<string, string> = {
	"Agile & Hybrid": "/certifications/agile-acp",
	"AI in Project Management": "/certifications/ai-project-management-cpmai",
	"Business Acumen": "/certifications/project-management-pmp",
	"Leadership & Communication": "/certifications/project-management-pmp",
	"PMP® Exam Prep": "/certifications/project-management-pmp",
	"Project Management Fundamentals":
		"/certifications/certified-associate-in-project-management-capm",
};

const SESSIONS = [
	{
		date: "20–23 July 2026",
		format: "Virtual",
		image: "/images/events/training/virtual.jpg",
		level: "Intermediate",
		location: "Virtual Training",
		title: "PMP® Certification Exam Prep",
		topic: "PMP® Exam Prep",
	},
	{
		date: "29–30 July 2026",
		format: "In Person",
		image: "/images/events/training/national-harbor.jpg",
		level: "Foundational",
		location: "National Harbor, MD",
		title: "Project Management Fundamentals",
		topic: "Project Management Fundamentals",
	},
	{
		date: "3–6 August 2026",
		format: "In Person",
		image: "/images/events/training/san-diego.jpg",
		level: "Advanced",
		location: "San Diego, CA",
		title: "Agile Leadership Immersion",
		topic: "Agile & Hybrid",
	},
	{
		date: "14–30 August 2026",
		format: "Virtual",
		image: "/images/events/training/ai-virtual.jpg",
		level: "Intermediate",
		location: "Virtual Training",
		title: "AI and Project Management",
		topic: "AI in Project Management",
	},
	{
		date: "14–17 September 2026",
		format: "In Person",
		image: "/images/events/training/denver.jpg",
		level: "Intermediate",
		location: "Denver, CO",
		title: "Business Acumen for Project Leaders",
		topic: "Business Acumen",
	},
	{
		date: "12–13 September 2026",
		format: "In Person",
		image: "/images/events/training/cape-town.jpg",
		level: "Foundational",
		location: "Cape Town",
		title: "Stakeholder Engagement Essentials",
		topic: "Leadership & Communication",
	},
	{
		date: "20–21 October 2026",
		format: "In Person",
		image: "/images/events/training/detroit.jpg",
		level: "Advanced",
		location: "Detroit, MI",
		title: "Strategic Program Management",
		topic: "PMP® Exam Prep",
	},
	{
		date: "26–29 October 2026",
		format: "In Person",
		image: "/images/events/training/washington-dc.jpg",
		level: "Intermediate",
		location: "Washington, DC",
		title: "PMI-ACP® Certification Prep",
		topic: "Agile & Hybrid",
	},
	{
		date: "16–19 November 2026",
		format: "Virtual",
		image: "/images/events/training/virtual-2.jpg",
		level: "Foundational",
		location: "Virtual Training",
		title: "CAPM® Certification Exam Prep",
		topic: "Project Management Fundamentals",
	},
];

function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-[#200f3b]">
			<div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-24 lg:py-28">
				<p className="mb-4 font-medium text-sm text-white/70 uppercase tracking-wide">
					Upcoming 2026 Training Events
				</p>
				<h1 className="mx-auto max-w-4xl font-bold font-heading text-3xl text-white leading-tight md:text-5xl lg:text-6xl">
					PMI Instructor-Led Training
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-base text-white/85 leading-relaxed md:text-lg lg:text-xl">
					Whether you want to boost your leadership skills, enhance project
					management capabilities, or take the next step in your career, unlock
					your potential with our expert-led courses. Our trainings, tailored
					for Project Managers by project management experts, are available both
					in-person and virtually.
				</p>
			</div>
		</section>
	);
}

function ScheduleCardSection() {
	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="overflow-hidden rounded-3xl bg-white p-8 shadow-sm md:p-12">
					<div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
						<div>
							<h2
								className="mb-3 font-bold font-heading text-2xl md:text-3xl"
								style={{ color: PURPLE }}
							>
								Full Schedule for PMI Training
							</h2>
							<p
								className="max-w-2xl text-base leading-relaxed md:text-lg"
								style={{ color: MUTED }}
							>
								Prefer to view the full year at a glance? Download the PDF for a
								complete list of all 2026 instructor-led training sessions
								including dates and locations.
							</p>
						</div>
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/contact"
						>
							<IconDownload aria-hidden="true" className="size-4" />
							Download Schedule
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function TrainingFilterSection() {
	const [topic, setTopic] = useState("All Topics");
	const [location, setLocation] = useState("All Locations");
	const [level, setLevel] = useState("All Levels");

	const filtered = useMemo(
		() =>
			SESSIONS.filter((s) => {
				const matchesTopic = topic === "All Topics" || s.topic === topic;
				const matchesLocation =
					location === "All Locations" || s.location === location;
				const matchesLevel = level === "All Levels" || s.level === level;
				return matchesTopic && matchesLocation && matchesLevel;
			}),
		[topic, location, level]
	);

	function clearFilters() {
		setTopic("All Topics");
		setLocation("All Locations");
		setLevel("All Levels");
	}

	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mb-10 text-center md:mb-14">
					<h2
						className="mb-4 font-bold font-heading text-2xl md:text-3xl lg:text-4xl"
						style={{ color: PURPLE }}
					>
						Find the 2026 instructor-led training for you
					</h2>
					<p
						className="mx-auto max-w-3xl text-base leading-relaxed md:text-lg"
						style={{ color: MUTED }}
					>
						With 100+ interactive small-group sessions to choose from, ranging
						from four hours to four days, you&apos;re sure to find the perfect
						fit for your professional development.
					</p>
				</div>

				{/* Filters */}
				<div className="mb-10 rounded-3xl bg-[#f8f5f0] p-6 md:p-8">
					<div className="grid items-end gap-4 md:grid-cols-2 lg:grid-cols-4">
						<div className="space-y-2">
							<label
								className="font-medium text-sm"
								htmlFor="topic-select"
								style={{ color: PURPLE }}
							>
								Topic
							</label>
							<Select
								onValueChange={(value) => setTopic(value ?? "All Topics")}
								value={topic}
							>
								<SelectTrigger
									className="w-full rounded-2xl bg-white"
									id="topic-select"
								>
									<SelectValue placeholder="Select topic" />
								</SelectTrigger>
								<SelectContent>
									{TOPIC_OPTIONS.map((opt) => (
										<SelectItem key={opt} value={opt}>
											{opt}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<label
								className="font-medium text-sm"
								htmlFor="location-select"
								style={{ color: PURPLE }}
							>
								Event Location and Date
							</label>
							<Select
								onValueChange={(value) => setLocation(value ?? "All Locations")}
								value={location}
							>
								<SelectTrigger
									className="w-full rounded-2xl bg-white"
									id="location-select"
								>
									<SelectValue placeholder="Select location" />
								</SelectTrigger>
								<SelectContent>
									{LOCATION_OPTIONS.map((opt) => (
										<SelectItem key={opt} value={opt}>
											{opt}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<label
								className="font-medium text-sm"
								htmlFor="level-select"
								style={{ color: PURPLE }}
							>
								Level
							</label>
							<Select
								onValueChange={(value) => setLevel(value ?? "All Levels")}
								value={level}
							>
								<SelectTrigger
									className="w-full rounded-2xl bg-white"
									id="level-select"
								>
									<SelectValue placeholder="Select level" />
								</SelectTrigger>
								<SelectContent>
									{LEVEL_OPTIONS.map((opt) => (
										<SelectItem key={opt} value={opt}>
											{opt}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>

						<div className="flex gap-3">
							<Button
								className="flex-1 rounded-full"
								onClick={clearFilters}
								type="button"
								variant="outline"
							>
								<IconX aria-hidden="true" className="size-4" />
								Clear Filters
							</Button>
							<Button className="flex-1 rounded-full" type="button">
								<IconFilter aria-hidden="true" className="size-4" />
								Apply Filters
							</Button>
						</div>
					</div>
				</div>

				{/* Results */}
				{filtered.length === 0 ? (
					<div className="flex flex-col items-center justify-center rounded-3xl bg-[#f8f5f0] py-16 text-center">
						<img
							alt="In-person instruction"
							className="mb-6 h-40 w-auto"
							height={160}
							src="https://www.pmi.org/-/media/pmi/headless-images/events/pmi-training/in-person-instruction.png?iar=0&rev=9dfbb817fd2b40e18c69a8e40c72568d&sc_lang=en&w=200"
							width={200}
						/>
						<p className="font-medium text-lg" style={{ color: PURPLE }}>
							No sessions match your filters.
						</p>
						<p className="mt-2" style={{ color: MUTED }}>
							Try clearing a filter to see more options.
						</p>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
						{filtered.map((session) => (
							<article
								className="group flex flex-col overflow-hidden rounded-2xl border border-[#d4cbc3] bg-white transition-shadow hover:shadow-md"
								key={session.title}
							>
								<div className="relative aspect-video overflow-hidden">
									<img
										alt={session.title}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										height={900}
										loading="lazy"
										src={session.image}
										width={1600}
									/>
									<span
										className="absolute top-3 right-3 rounded-full px-3 py-1 font-semibold text-white text-xs"
										style={{
											backgroundColor:
												session.format === "Virtual" ? GOLD : PURPLE,
										}}
									>
										{session.format}
									</span>
								</div>
								<div className="flex flex-1 flex-col p-6">
									<h3
										className="mb-3 font-bold font-heading text-xl"
										style={{ color: PURPLE }}
									>
										{session.title}
									</h3>
									<div
										className="mb-4 space-y-2 text-sm"
										style={{ color: MUTED }}
									>
										<div className="flex items-center gap-2">
											<IconCalendar
												aria-hidden="true"
												className="size-4 shrink-0"
											/>
											<time dateTime={session.date}>{session.date}</time>
										</div>
										<div className="flex items-center gap-2">
											<IconMapPin
												aria-hidden="true"
												className="size-4 shrink-0"
											/>
											<span>{session.location}</span>
										</div>
									</div>
									<div className="mb-5 flex flex-wrap gap-2">
										<span
											className="rounded-full px-3 py-1 font-medium text-xs"
											style={{ backgroundColor: CREAM, color: PURPLE }}
										>
											{session.level}
										</span>
										<span
											className="rounded-full px-3 py-1 font-medium text-xs"
											style={{ backgroundColor: CREAM, color: PURPLE }}
										>
											{session.topic}
										</span>
									</div>
									<Link
										className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#200f3b] px-5 py-2 font-medium text-sm text-white transition-opacity hover:opacity-90"
										resetScroll
										to={TOPIC_HREFS[session.topic] ?? "/certifications"}
									>
										Learn More
										<IconArrowRight aria-hidden="true" className="size-4" />
									</Link>
								</div>
							</article>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

function TeamTrainingSection() {
	return (
		<section className="bg-[#200f3b] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col gap-6">
						<IconUsers aria-hidden="true" className="size-12 text-white/60" />
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-5xl">
							Tailor training for your team
						</h2>
						<p className="max-w-lg text-base text-white/85 leading-relaxed md:text-lg">
							Upskill your whole team with our custom training programs, virtual
							and in-person, designed to your specifications. Choose from 100+
							courses, or request customized training based on your
							organization&apos;s goals.
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								resetScroll
								to="/learning/instructor-led-training"
							>
								Explore Team Training
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="hidden lg:block">
						<img
							alt="Team training session"
							className="rounded-2xl object-cover"
							height={480}
							loading="lazy"
							src="/images/events/speaker-opportunities/training.jpg"
							width={640}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function InfoSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-2xl bg-[#f8f5f0] p-8">
						<h3
							className="mb-3 font-bold font-heading text-xl"
							style={{ color: PURPLE }}
						>
							Questions
						</h3>
						<p className="mb-6" style={{ color: MUTED }}>
							If you have questions, please view our FAQs page.
						</p>
						<Link
							className="inline-flex items-center gap-1 font-medium hover:underline"
							resetScroll
							style={{ color: PURPLE }}
							to="/contact"
						>
							View FAQs
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>

					<div className="rounded-2xl bg-[#f8f5f0] p-8">
						<h3
							className="mb-3 font-bold font-heading text-xl"
							style={{ color: PURPLE }}
						>
							Craft a Case for Attending
						</h3>
						<p className="mb-6" style={{ color: MUTED }}>
							Imagine the impact your newfound skills could have on your
							organization&apos;s goals. We drafted a letter to help in your
							first step.
						</p>
						<Link
							className="inline-flex items-center gap-1 font-medium hover:underline"
							resetScroll
							style={{ color: PURPLE }}
							to="/contact"
						>
							Make the Case to Your Boss
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>

					<div className="rounded-2xl bg-[#f8f5f0] p-8">
						<h3
							className="mb-3 font-bold font-heading text-xl"
							style={{ color: PURPLE }}
						>
							Interested in instructing for PMI?
						</h3>
						<p className="mb-6" style={{ color: MUTED }}>
							Our current call for proposals is closed. Content development for
							topics: AI-Early Career Professionals, Giga & Mega Projects,
							Business Acumen ONLY can be submitted via the email link below.
						</p>
						<Link
							className="inline-flex items-center gap-1 font-medium hover:underline"
							resetScroll
							style={{ color: PURPLE }}
							to="/contact"
						>
							Email Us
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function MembershipSection() {
	return (
		<section className="relative overflow-hidden bg-[#200f3b] py-16 md:py-20 lg:py-24">
			<img
				alt=""
				className="absolute inset-0 h-full w-full object-cover opacity-20"
				height={1080}
				src="/images/membership/hero-desktop.jpg"
				width={1920}
			/>
			<div className="absolute inset-0 bg-[#200f3b]/80" />
			<div className="relative mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
					<div>
						<p className="mb-3 font-medium text-sm text-white/70 uppercase tracking-wide">
							PMI Membership
						</p>
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-5xl">
							PMI Members enjoy exclusive member pricing
						</h2>
						<p className="mt-4 max-w-lg text-base text-white/85 leading-relaxed md:text-lg">
							Every member receives up to 30% off all training events, in person
							or virtual.
						</p>
						<div className="mt-6">
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								resetScroll
								to="/membership"
							>
								Explore Membership
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="grid gap-6 sm:grid-cols-2">
						<div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
							<h3 className="mb-2 font-bold font-heading text-white text-xl">
								Value
							</h3>
							<p className="text-sm text-white/80 leading-relaxed">
								PMI membership gives you access to not only trainings but also
								the best courses and certifications in the field.
							</p>
						</div>
						<div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
							<h3 className="mb-2 font-bold font-heading text-white text-xl">
								Community
							</h3>
							<p className="text-sm text-white/80 leading-relaxed">
								Connect with an international community of project management
								professionals.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<HeroSection />
			<ScheduleCardSection />
			<TrainingFilterSection />
			<TeamTrainingSection />
			<InfoSection />
			<MembershipSection />
		</main>
	);
}
