import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@pmi-south-asia/ui/components/carousel";
import {
	IconArrowRight,
	IconBook,
	IconCertificate,
	IconRocket,
} from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learning/online-courses")({
	component: RouteComponent,
});

const shapeImages = [
	"/assets/shared/shape-pentagon.webp",
	"/assets/shared/shape-circle.webp",
	"/assets/shared/shape-inverted-triangle.webp",
	"/assets/shared/shape-triangle-in-circle.webp",
];

const newlyAddedCourses = [
	{
		badge: "eLearning",
		description:
			"Build Agile leadership capabilities and prepare for the PMI-ACP® certification exam with this official, expert-validated course.",
		title: "PMI-ACP® Exam Prep Course",
		href: "/certifications/agile-acp",
	},
	{
		badge: "eLearning",
		description:
			"Sharpen your risk management skills and reduce exam-day stress with the official PMI-RMP® Practice Exam.",
		title: "PMI-RMP® Practice Exam",
		href: "/certifications/risk-management-rmp",
	},
	{
		badge: "Online Tool",
		description:
			"PMI Study Hall® is a digital learning tool that contains practice questions and gamified activities to make studying effective and enjoyable.",
		title: "PMI Study Hall® Essentials",
		href: "/learning/exam-prep",
	},
	{
		badge: "eLearning",
		description:
			"Enhance your PMO leadership and prepare for the PMI-PMOCP™ Exam with this expert-developed prep course.",
		title: "PMI-PMOCP™ Exam Prep Course",
		href: "/certifications/pmo-certified-professional-pmi-pmocp",
	},
	{
		badge: "eLearning",
		description:
			"Developed by agile leaders, this official practice exam will help you prepare to sit for the PMI-ACP® exam.",
		title: "PMI-ACP® Practice Exam",
		href: "/certifications/agile-acp",
	},
];

const courseCategories = [
	{
		icon: IconBook,
		title: "Agile & Scrum",
		description:
			"Master Agile methodologies, Scrum frameworks, and iterative project delivery approaches.",
		href: "/certifications/agile-acp",
	},
	{
		icon: IconCertificate,
		title: "PMP® Certification Prep",
		description:
			"Comprehensive exam preparation aligned to the current PMP exam content outline.",
		href: "/certifications/project-management-pmp",
	},
	{
		icon: IconRocket,
		title: "Leadership & Influence",
		description:
			"Develop the leadership skills to inspire teams, manage stakeholders, and drive change.",
		href: "/learning/pmi-training",
	},
	{
		icon: IconBook,
		title: "Business Agility",
		description:
			"Learn to adapt quickly to market changes and lead organizations through transformation.",
		href: "/certifications/agile-acp",
	},
	{
		icon: IconCertificate,
		title: "CAPM® Certification Prep",
		description:
			"Build foundational project management knowledge and prepare for the CAPM exam.",
		href: "/certifications/certified-associate-in-project-management-capm",
	},
	{
		icon: IconRocket,
		title: "Strategic Project Management",
		description:
			"Align projects with organizational strategy and deliver meaningful business value.",
		href: "/certifications/project-management-pmp",
	},
	{
		icon: IconBook,
		title: "Risk Management",
		description:
			"Identify, assess, and mitigate project risks using proven frameworks and tools.",
		href: "/certifications/risk-management-rmp",
	},
	{
		icon: IconCertificate,
		title: "PMI-ACP® Certification Prep",
		description:
			"Prepare for the Agile Certified Practitioner exam with hands-on practice and expert guidance.",
		href: "/certifications/agile-acp",
	},
	{
		icon: IconRocket,
		title: "Digital Transformation",
		description:
			"Lead digital initiatives and leverage emerging technologies to modernize project delivery.",
		href: "/learning/pmi-training",
	},
];

function NewlyAddedCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [snapCount, setSnapCount] = useState(0);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	useEffect(() => {
		if (!api) {
			return;
		}

		const onSelect = () => {
			setCurrentIndex(api.selectedScrollSnap());
			setSnapCount(api.scrollSnapList().length);
			setCanScrollPrev(api.canScrollPrev());
			setCanScrollNext(api.canScrollNext());
		};

		onSelect();
		api.on("reInit", onSelect);
		api.on("select", onSelect);

		return () => {
			api.off("reInit", onSelect);
			api.off("select", onSelect);
		};
	}, [api]);

	return (
		<div className="min-w-0 py-16">
			<div className="pl-6 md:pl-10 lg:pl-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]">
				<Carousel
					className="w-full"
					opts={{ align: "start", containScroll: false }}
					setApi={setApi}
				>
					<CarouselContent className="ml-0 gap-6">
						{newlyAddedCourses.map((course, index) => (
							<CarouselItem
								className="basis-[min(380px,calc(100vw-4.5rem))] pl-0 md:basis-[380px]"
								key={course.title}
							>
								<div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-2xl border border-[#d4cbc3] bg-white shadow-sm">
									<img
										alt=""
										aria-hidden="true"
										className="absolute inset-0 h-full w-full object-cover opacity-15"
										height={420}
										src={shapeImages[index % shapeImages.length]}
										width={400}
									/>
									<div className="relative flex flex-1 flex-col gap-4 bg-gradient-to-t from-white to-transparent px-6 pt-24 pb-8">
										<span className="inline-flex w-fit rounded-full border border-[#d4cbc3] bg-white px-3 py-1 font-medium text-[#1d1d35] text-xs">
											{course.badge}
										</span>
										<h3 className="font-semibold text-[#1d1d35] text-lg leading-snug">
											{course.title}
										</h3>
										<p className="text-slate-600 text-sm leading-relaxed">
											{course.description}
										</p>
										<Link
											className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
											resetScroll
											to={course.href}
										>
											Learn More
											<IconArrowRight aria-hidden="true" className="size-4" />
										</Link>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className="mx-auto mt-8 flex max-w-6xl items-center justify-between px-6 md:px-10">
				<div className="flex gap-2">
					{Array.from({ length: snapCount }, (_, i) => ({ id: i })).map(
						(dot) => (
							<button
								aria-label={`Go to slide ${dot.id + 1}`}
								className="min-h-[44px] min-w-[44px] rounded-full transition-all md:h-2 md:min-h-0 md:min-w-0"
								key={dot.id}
								onClick={() => api?.scrollTo(dot.id)}
								style={{
									width: dot.id === currentIndex ? "32px" : "8px",
									backgroundColor:
										dot.id === currentIndex ? "#200f3b" : "#d4c5b9",
								}}
								type="button"
							/>
						)
					)}
				</div>

				<div className="flex gap-4">
					<button
						aria-label="Previous slide"
						className="flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl text-[#6b5b7b] transition-opacity hover:opacity-70 disabled:opacity-30 md:min-h-0 md:min-w-0"
						disabled={!canScrollPrev}
						onClick={() => api?.scrollPrev()}
						type="button"
					>
						←
					</button>
					<button
						aria-label="Next slide"
						className="flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl text-[#6b5b7b] transition-opacity hover:opacity-70 disabled:opacity-30 md:min-h-0 md:min-w-0"
						disabled={!canScrollNext}
						onClick={() => api?.scrollNext()}
						type="button"
					>
						→
					</button>
				</div>
			</div>
		</div>
	);
}

function ExamPrepBanner() {
	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0 bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage:
						"linear-gradient(160deg, #061828 0%, #0c2a3d 45%, #0a2233 100%)",
				}}
			/>
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-overlay"
				height={800}
				src="/assets/shared/grainy-texture.webp"
				width={1200}
			/>
			<div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
				<div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
					<div className="flex flex-col gap-6">
						<span className="inline-flex w-fit rounded-full border border-white/35 px-4 py-1 font-medium text-sm text-white">
							Certification Prep
						</span>
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-[2.75rem]">
							Prep for exam day success
						</h2>
						<p className="max-w-lg text-base text-white/85 leading-relaxed md:text-lg">
							Pave the way for your certification journey with the official PMP®
							Exam Prep. Build the knowledge to not only ace your exam, but grow
							your career.
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								resetScroll
								to="/learning/exam-prep"
							>
								Explore the Course
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="hidden md:block">
						<img
							alt="Professional working on laptop"
							className="rounded-2xl object-cover"
							height={532}
							src="https://pmi.nui.media/pipeline/718754/0/vc?z=pmi&kw=&click="
							width={800}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function CourseCategories() {
	return (
		<section className="bg-white py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="mx-auto mb-16 max-w-3xl text-center">
					<h2
						className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl"
						style={{ color: "#200f3b" }}
					>
						Find the right courses for you
					</h2>
					<p
						className="text-lg leading-relaxed md:text-xl"
						style={{ color: "#6b5b7b" }}
					>
						Whether you're at the very start of your career or looking to
						maintain and grow your skills to further your path, we have a course
						to support your journey.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{courseCategories.map((category) => (
						<div
							className="flex flex-col gap-4 rounded-2xl border border-[#d4cbc3] p-8 transition-shadow hover:shadow-lg"
							key={category.title}
						>
							<div
								className="flex size-14 items-center justify-center rounded-full"
								style={{ backgroundColor: "#f8f5f0" }}
							>
								<category.icon
									aria-hidden="true"
									className="size-7"
									style={{ color: "#200f3b" }}
								/>
							</div>
							<h3
								className="font-bold font-heading text-xl"
								style={{ color: "#200f3b" }}
							>
								{category.title}
							</h3>
							<p
								className="text-sm leading-relaxed md:text-base"
								style={{ color: "#6b5b7b" }}
							>
								{category.description}
							</p>
							<Link
								className="mt-auto inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-5 py-2 font-medium text-sm text-white transition-colors hover:bg-[#0a1628] md:min-h-0"
								resetScroll
								to={category.href}
							>
								Learn More
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					))}
				</div>

				<div className="mt-12">
					<div className="mx-auto max-w-4xl text-center">
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/certifications"
						>
							Explore All Online Courses
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

function InstructorLedCourses() {
	return (
		<section className="bg-[#f8f5f0] py-20 md:py-24 lg:py-28">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="flex flex-col items-center gap-6 text-center">
					<span
						className="inline-flex rounded-full px-4 py-1 font-medium text-xs"
						style={{
							backgroundColor: "#200f3b",
							color: "#f8f5f0",
						}}
					>
						Expert training backed by PMI
					</span>
					<h2
						className="font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-[2.75rem]"
						style={{ color: "#200f3b" }}
					>
						Instructor-Led Certification Prep Courses
					</h2>
					<p
						className="max-w-2xl text-base leading-relaxed md:text-lg"
						style={{ color: "#6b5b7b" }}
					>
						Expert training backed by PMI. Prepare for your PMP, CAPM, ACP, or
						PMI-CP exam with expert-led training from a PMI Authorized Training
						Partner. Choose from online or in-person courses that provide
						structured guidance, real-time interaction, and the accountability
						you need to stay on track and succeed.
					</p>
					<div>
						<Link
							className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/learning/instructor-led-training"
						>
							Find a Course
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>

				<div className="mt-12 grid gap-6 md:grid-cols-2">
					<img
						alt=""
						aria-hidden="true"
						className="w-full rounded-2xl object-cover"
						height={200}
						src="https://pmi.nui.media/pipeline/718755/0/vc?z=pmi&kw=&click="
						width={600}
					/>
					<img
						alt=""
						aria-hidden="true"
						className="w-full rounded-2xl object-cover"
						height={200}
						src="https://pmi.nui.media/pipeline/718756/0/vc?z=pmi&kw=&click="
						width={600}
					/>
				</div>
			</div>
		</section>
	);
}

function MembershipCtaSection() {
	return (
		<section className="relative overflow-hidden">
			<div
				className="absolute inset-0 bg-center bg-cover bg-no-repeat"
				style={{
					backgroundImage:
						"linear-gradient(160deg, #061828 0%, #0c2a3d 45%, #0a2233 100%)",
				}}
			/>
			<img
				alt=""
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-overlay"
				height={800}
				src="/assets/shared/grainy-texture.webp"
				width={1200}
			/>
			<div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
				<div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
					<div className="flex flex-col gap-6">
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-[2.75rem]">
							Ready to join PMI?
						</h2>
						<p className="max-w-lg text-base text-white/85 leading-relaxed md:text-lg">
							Unlock opportunity with members-only access to career-long
							learning, project resources, and our global community.
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90 md:text-base"
								resetScroll
								to="/membership"
							>
								Become a Member
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="hidden md:block">
						<img
							alt=""
							aria-hidden="true"
							className="rounded-2xl object-cover"
							height={480}
							src="https://pmi.nui.media/pipeline/718755/0/vc?z=pmi&kw=&click="
							width={640}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			{/* Hero */}
			<section className="bg-white py-16 md:py-20 lg:py-24">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<h1
						className="mb-6 font-bold font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
						style={{ color: "#200f3b" }}
					>
						Online courses to drive career-long learning
					</h1>
					<p
						className="max-w-3xl text-lg leading-relaxed md:text-xl"
						style={{ color: "#6b5b7b" }}
					>
						A career in project management offers continued opportunities for
						lifelong learning. Use the resources below to help drive your career
						forward and stay at the cutting edge of the profession. All courses
						are aligned to the PMI Talent Triangle® and offer professional
						development units (PDUs).
					</p>
				</div>
			</section>

			{/* Newly Added */}
			<section className="bg-[#f8f5f0]">
				<div className="mx-auto max-w-6xl px-6 md:px-10">
					<h2
						className="pt-16 pb-4 font-bold font-heading text-3xl md:text-4xl lg:text-5xl"
						style={{ color: "#200f3b" }}
					>
						Newly added
					</h2>
				</div>
				<NewlyAddedCarousel />
			</section>

			{/* Prep for exam day success */}
			<ExamPrepBanner />

			{/* Find the right courses for you */}
			<CourseCategories />

			{/* Instructor-Led Certification Prep Courses */}
			<InstructorLedCourses />

			{/* Ready to join PMI? */}
			<MembershipCtaSection />
		</main>
	);
}
