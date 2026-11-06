import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@pmi-south-asia/ui/components/accordion";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@pmi-south-asia/ui/components/carousel";
import { IconArrowRight } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learning/instructor-led-training")({
	component: RouteComponent,
});

const ATP_BADGES_IMAGE =
	"https://www.pmi.org/-/media/pmi/headless-images/learning/instructor-led-training/atp-badges.png";
const EXPERT_GUIDANCE_IMAGE =
	"https://www.pmi.org/-/media/pmi/headless-images/learning/instructor-led-training/expert-guidance.jpg";
const CERT_PREP_IMAGE =
	"https://www.pmi.org/-/media/pmi/headless-images/learning/instructor-led-training/cert-exam-prep.jpg";
const TEAM_PROPOSAL_IMAGE =
	"https://www.pmi.org/-/media/pmi/headless-images/learning/instructor-led-training/custom-proposal-rounded.png";

const testimonials = [
	{
		attribution: "Yamilette Bautista, MBA, PMP",
		image:
			"https://www.pmi.org/-/media/pmi/headless-images/business-solutions/testimonial-1200x676-gov_bautista.png",
		quote:
			"Working with an ATP was a game changer. The mentorship, motivation, and accountability I received helped me stay on track, pass the PMP exam, and build confidence in my abilities.",
		role: "Operations Manager, U.S. House of Representatives Green & Gold Congressional Aide Program",
	},
	{
		attribution: "PMP® Prep Course Attendee",
		image:
			"https://www.pmi.org/-/media/pmi/headless-images/learning/instructor-led-training/testimonials/professional-collaboration.png",
		quote:
			"The 4-day course left me feeling confident and prepared me for what to study on the exam.",
		role: "",
	},
	{
		attribution: "PMP® Prep Course Attendee",
		image:
			"https://www.pmi.org/-/media/pmi/headless-images/learning/instructor-led-training/testimonials/woman-with-sharpie.png",
		quote:
			"I feel more confident than ever that I now have the tools and knowledge necessary to successfully pass the PMP® exam in the coming months.",
		role: "",
	},
] as const;

const faqs = [
	{
		answer:
			"Use the PMI Authorized Training Partner course search to filter by certification, delivery format, language, location, and schedule. Compare providers and choose the one that fits your learning style and goals.",
		question:
			"How do I choose the Authorized Training Partner that’s right for me?",
	},
	{
		answer:
			"PMI Authorized Training Partners are independently accredited organizations that deliver PMI-developed or PMI-approved course content. Certification courses through PMI are offered directly by PMI and may follow a different schedule and delivery model.",
		question:
			"What’s the difference between taking a course through an accredited PMI Authorized Training Partner or a certification course through PMI?",
	},
	{
		answer:
			"A PDU-only course is designed to help you earn Professional Development Units (PDUs) for certification maintenance. A certification prep course is structured to prepare you to sit for a specific PMI certification exam.",
		question:
			"What’s the difference between a PDU-only course and a certification prep course?",
	},
	{
		answer:
			"PMI can reach out to the Authorized Training Partner on your behalf, but documentation requests are typically handled directly by the training provider. Contact your ATP first for the fastest response.",
		question:
			"If I need documentation that validates my course completion at a PMI Authorized Training Partner, can PMI contact the partner on my behalf?",
	},
	{
		answer:
			"No. You can earn Education PDUs through a variety of learning providers and activities. However, only PMI Authorized Training Partners can deliver PMI official course content and display the PMI ATP badge.",
		question:
			"Do I need an Authorized Training Partner to earn Education PDUs?",
	},
	{
		answer:
			"You can share feedback directly with your Authorized Training Partner or contact PMI Customer Care to report your experience.",
		question:
			"How do I give feedback about my experience with an Authorized Training Partner?",
	},
	{
		answer:
			"Submit a request for a custom training proposal and a PMI representative will connect you with Authorized Training Partners who can deliver tailored instructor-led training for your team.",
		question: "What is the group training proposal process like?",
	},
] as const;

function HeroSection() {
	return (
		<section className="relative overflow-hidden bg-[#200f3b]">
			<div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:px-10 md:py-24 lg:py-28">
				<h1 className="mx-auto max-w-4xl font-bold font-heading text-3xl text-white leading-tight md:text-5xl lg:text-6xl">
					Find your trusted training partner
				</h1>
				<p className="mx-auto mt-6 max-w-3xl text-base text-white/85 leading-relaxed md:text-lg lg:text-xl">
					Our global network of PMI Authorized Training Partners delivers
					high-quality, PMI-approved instruction to help you advance your skills
					and prepare for PMI certifications with confidence. Available online
					and in-person.
				</p>
				<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Link
						className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
						resetScroll
						to="/certifications"
					>
						Find a Course
						<IconArrowRight aria-hidden="true" className="size-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}

function WhyChooseSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2
					className="mb-12 font-bold font-heading text-2xl md:text-3xl lg:text-4xl"
					style={{ color: "#200f3b" }}
				>
					Why choose a PMI Authorized Training Partner?
				</h2>

				<div className="flex flex-col gap-12 lg:gap-16">
					<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
						<div className="flex-1">
							<h3
								className="mb-3 font-bold font-heading text-xl md:text-2xl"
								style={{ color: "#200f3b" }}
							>
								PMI-backed quality
							</h3>
							<p
								className="text-base leading-relaxed md:text-lg"
								style={{ color: "#6b5b7b" }}
							>
								Only PMI Authorized Training Partners use PMI official course
								content. Train with confidence knowing your course meets
								certification requirements, aligns with PMI standards, and is
								delivered by a trusted provider. Just look for the PMI ATP
								badge.
							</p>
						</div>
						<div className="lg:w-1/2">
							<img
								alt="PMI Authorized Training Partner badges"
								className="w-full rounded-2xl object-cover"
								height={360}
								src={ATP_BADGES_IMAGE}
								width={640}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-6 lg:flex-row-reverse lg:items-center lg:gap-12">
						<div className="flex-1">
							<h3
								className="mb-3 font-bold font-heading text-xl md:text-2xl"
								style={{ color: "#200f3b" }}
							>
								Expert guidance & support
							</h3>
							<p
								className="text-base leading-relaxed md:text-lg"
								style={{ color: "#6b5b7b" }}
							>
								Learn from PMI-certified instructors who provide real-time
								coaching, feedback, and accountability to keep you on track.
								Choose from flexible training formats—online or in-person—to
								match your learning style.
							</p>
						</div>
						<div className="lg:w-1/2">
							<img
								alt="Instructor providing expert guidance"
								className="w-full rounded-2xl object-cover"
								height={360}
								src={EXPERT_GUIDANCE_IMAGE}
								width={640}
							/>
						</div>
					</div>

					<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
						<div className="flex-1">
							<h3
								className="mb-3 font-bold font-heading text-xl md:text-2xl"
								style={{ color: "#200f3b" }}
							>
								Structured path to certification & career growth
							</h3>
							<p
								className="text-base leading-relaxed md:text-lg"
								style={{ color: "#6b5b7b" }}
							>
								Upskill, prepare for certification exams, and earn PDUs for
								certification maintenance through instructor-led courses
								including CAPM®, PMP®, PMI-CP™, PMI-ACP®, PMI-RMP®, PMI-PMOCP™,
								and Disciplined Agile®.
							</p>
							<div className="mt-6">
								<Link
									className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90"
									resetScroll
									to="/certifications"
								>
									Search Courses
									<IconArrowRight aria-hidden="true" className="size-4" />
								</Link>
							</div>
						</div>
						<div className="lg:w-1/2">
							<img
								alt="Professional preparing for certification exam"
								className="w-full rounded-2xl object-cover"
								height={360}
								src={CERT_PREP_IMAGE}
								width={640}
							/>
						</div>
					</div>
				</div>

				<p
					className="mt-12 text-base leading-relaxed md:text-lg"
					style={{ color: "#6b5b7b" }}
				>
					<strong>Didn’t find what you need?</strong> Some partners offer
					additional courses on their own websites. Use our complete{" "}
					<Link
						className="inline-flex items-center gap-1 font-medium underline underline-offset-2"
						resetScroll
						style={{ color: "#200f3b" }}
						to="/contact"
					>
						Training Partner Directory
					</Link>{" "}
					to find providers near you and verify Authorized Training Partner
					status.
				</p>
			</div>
		</section>
	);
}

function TestimonialsCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [snapCount, setSnapCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		const onSelect = () => {
			setCurrentIndex(api.selectedScrollSnap());
			setSnapCount(api.scrollSnapList().length);
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
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<h2
					className="mb-10 font-bold font-heading text-2xl md:text-3xl lg:text-4xl"
					style={{ color: "#200f3b" }}
				>
					Real learning experiences
				</h2>

				<Carousel
					className="w-full"
					opts={{ align: "start", containScroll: false }}
					setApi={setApi}
				>
					<CarouselContent className="ml-0 gap-6">
						{testimonials.map((item) => (
							<CarouselItem
								className="basis-full pl-0 md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
								key={item.quote}
							>
								<div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#d4cbc3] bg-[#f8f5f0]">
									<img
										alt={item.attribution}
										className="h-48 w-full object-cover"
										height={200}
										src={item.image}
										width={400}
									/>
									<div className="flex flex-1 flex-col justify-between p-6">
										<blockquote
											className="mb-4 font-medium text-lg leading-relaxed"
											style={{ color: "#200f3b" }}
										>
											“{item.quote}”
										</blockquote>
										<div>
											<p
												className="font-semibold text-sm"
												style={{ color: "#200f3b" }}
											>
												{item.attribution}
											</p>
											{item.role && (
												<p className="text-sm" style={{ color: "#6b5b7b" }}>
													{item.role}
												</p>
											)}
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<div className="mt-8 flex items-center justify-between">
					<div className="flex gap-2">
						{Array.from({ length: snapCount }, (_, i) => i).map((dot) => (
							<button
								aria-label={`Go to slide ${dot + 1}`}
								className="min-h-[44px] min-w-[44px] rounded-full transition-all md:h-2 md:min-h-0 md:min-w-0"
								key={dot}
								onClick={() => api?.scrollTo(dot)}
								style={{
									backgroundColor: dot === currentIndex ? "#200f3b" : "#d4c5b9",
									width: dot === currentIndex ? "32px" : "8px",
								}}
								type="button"
							/>
						))}
					</div>
					<div className="flex gap-4">
						<button
							aria-label="Previous testimonial"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl text-[#6b5b7b] transition-opacity hover:opacity-70 disabled:opacity-30 md:min-h-0 md:min-w-0"
							disabled={currentIndex === 0}
							onClick={() => api?.scrollPrev()}
							type="button"
						>
							←
						</button>
						<button
							aria-label="Next testimonial"
							className="flex min-h-[44px] min-w-[44px] items-center justify-center text-2xl text-[#6b5b7b] transition-opacity hover:opacity-70 disabled:opacity-30 md:min-h-0 md:min-w-0"
							disabled={currentIndex === snapCount - 1}
							onClick={() => api?.scrollNext()}
							type="button"
						>
							→
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

function TeamTrainingSection() {
	return (
		<section className="bg-[#200f3b] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
					<div className="flex flex-col gap-6">
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-[2.75rem]">
							Looking to level up your team?
						</h2>
						<p className="max-w-lg text-base text-white/85 leading-relaxed md:text-lg">
							Get high-quality, PMI-developed training and certification exam
							prep customized to your business needs through a PMI Authorized
							Training Partner. Instructor-led learning is available both online
							and in person. Help employees enhance their skills, prepare for
							certification exams, and meet maintenance requirements with
							courses across PMP®, CAPM®, PMI-ACP®, PMI-CP™, and Disciplined
							Agile®— supporting stronger performance across your organization.
						</p>
						<div>
							<Link
								className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-[#200f3b] transition-opacity hover:opacity-90"
								resetScroll
								to="/contact"
							>
								Request Custom Proposal
								<IconArrowRight aria-hidden="true" className="size-4" />
							</Link>
						</div>
					</div>
					<div className="hidden md:block">
						<img
							alt="Team training proposal"
							className="rounded-2xl object-cover"
							height={480}
							src={TEAM_PROPOSAL_IMAGE}
							width={640}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

function FaqSection() {
	return (
		<section className="bg-white py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-3xl px-6 md:px-10">
				<h2
					className="mb-10 font-bold font-heading text-2xl md:text-3xl lg:text-4xl"
					style={{ color: "#200f3b" }}
				>
					Frequently Asked Questions
				</h2>

				<Accordion>
					{faqs.map((faq) => (
						<AccordionItem key={faq.question} value={faq.question}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
}

function BecomeAtpSection() {
	return (
		<section className="bg-[#f8f5f0] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-6xl px-6 text-center md:px-10">
				<h2
					className="mb-6 font-bold font-heading text-2xl md:text-3xl lg:text-4xl"
					style={{ color: "#200f3b" }}
				>
					Interested in becoming an Authorized Training Partner?
				</h2>
				<p
					className="mx-auto mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
					style={{ color: "#6b5b7b" }}
				>
					Join our global network of training providers and deliver PMI-approved
					course content to professionals around the world.
				</p>
				<Link
					className="inline-flex items-center gap-2 rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
					resetScroll
					to="/contact"
				>
					Learn More
					<IconArrowRight aria-hidden="true" className="size-4" />
				</Link>
			</div>
		</section>
	);
}

function RouteComponent() {
	return (
		<main className="overflow-x-hidden">
			<HeroSection />
			<WhyChooseSection />
			<TestimonialsCarousel />
			<TeamTrainingSection />
			<FaqSection />
			<BecomeAtpSection />
		</main>
	);
}
