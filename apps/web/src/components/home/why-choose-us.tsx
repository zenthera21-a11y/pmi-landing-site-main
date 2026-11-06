"use client";

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@pmi-south-asia/ui/components/carousel";
import { useEffect, useState } from "react";

interface Certification {
	badge: string;
	description: string;
	experience: string;
	id: number;
	shape: "pentagon" | "circle" | "triangle";
	slug: string;
	title: string;
	variant: "light" | "dark-teal" | "dark-purple";
}

const certifications: Certification[] = [
	{
		id: 1,
		badge: "PMI-CPMAI™",
		title: "PMI Certified Professional in Managing AI (PMI-CPMAI)™ Bundle",
		experience: "No experience required",
		description:
			"Invigorate your career with the gold standard certification for leading AI projects and driving real business impact.",
		variant: "light",
		shape: "pentagon",
		slug: "ai-project-management-cpmai",
	},
	{
		id: 2,
		badge: "CAPM®",
		title: "Certified Associate in Project Management (CAPM)®",
		experience: "No experience required",
		description:
			"This certification demonstrates an understanding of the foundational project management skills that project teams demand.",
		variant: "dark-teal",
		shape: "circle",
		slug: "certified-associate-in-project-management-capm",
	},
	{
		id: 3,
		badge: "PMP®",
		title: "Project Management Professional (PMP)®",
		experience: "3+ Years of Experience Leading Projects",
		description:
			"The PMP validates skills and knowledge in managing & directing people, processes, and priorities for a project team from start to finish.",
		variant: "dark-purple",
		shape: "triangle",
		slug: "project-management-pmp",
	},
	{
		id: 4,
		badge: "PMI-ACP®",
		title: "PMI Agile Certified Practitioner (PMI-ACP)®",
		experience: "2+ years of experience",
		description:
			"This certification validates your ability to engage stakeholders, apply agile approaches, and lead teams.",
		variant: "light",
		shape: "pentagon",
		slug: "agile-acp",
	},
	{
		id: 5,
		badge: "PMI-RMP®",
		title: "PMI Risk Management Professional (PMI-RMP)®",
		experience: "3-5 years of experience",
		description:
			"Demonstrate your skills to spot threats early, master risk management, and lead projects to success.",
		variant: "light",
		shape: "pentagon",
		slug: "risk-management-rmp",
	},
	{
		id: 6,
		badge: "PMI-PMOCP™",
		title: "PMI PMO Certified Professional (PMI-PMOCP)™",
		experience: "3+ years of experience",
		description:
			"Learn new and advanced practices to set up, assess, manage and improve value-oriented PMOs.",
		variant: "light",
		shape: "pentagon",
		slug: "pmo-certified-professional-pmi-pmocp",
	},
];

function ShapeGraphic({ shape }: { shape: Certification["shape"] }) {
	const shapeMap = {
		pentagon: "/assets/shared/shape-pentagon.webp",
		circle: "/assets/shared/shape-circle.webp",
		triangle: "/assets/shared/shape-inverted-triangle.webp",
	};

	return (
		<img
			alt=""
			aria-hidden="true"
			className="absolute top-8 right-8 h-32 w-32 object-contain"
			height="128"
			src={shapeMap[shape]}
			width="128"
		/>
	);
}

function CertificationCard({ cert }: { cert: Certification }) {
	const isDark = cert.variant === "dark-teal" || cert.variant === "dark-purple";

	let bgColor = "linear-gradient(180deg, #fdf5ef 0%, #f7ddd0 100%)";
	if (cert.variant === "dark-teal") {
		bgColor = "#0a4a5c";
	} else if (cert.variant === "dark-purple") {
		bgColor = "#2d1b69";
	}

	const textColor = isDark ? "#ffffff" : "#200f3b";
	let badgeColor = textColor;
	if (cert.variant === "dark-teal") {
		badgeColor = "#5eead4";
	} else if (cert.variant === "dark-purple") {
		badgeColor = "#c4b5fd";
	}
	const buttonBg = isDark ? "#ffffff" : "#200f3b";
	const buttonText = isDark ? "#200f3b" : "#ffffff";

	return (
		<div
			className="relative flex min-h-[440px] flex-col overflow-hidden rounded-2xl p-6 md:min-h-[520px] md:p-8 lg:p-10"
			style={{ background: bgColor, color: textColor }}
		>
			{!isDark && (
				<img
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
					height="480"
					src="/assets/shared/grainy-texture.webp"
					width="400"
				/>
			)}

			<div className="relative mb-8 h-44">
				<ShapeGraphic shape={cert.shape} />
				<span
					className="inline-block rounded-full border px-3 py-1 font-medium text-xs"
					style={{ borderColor: textColor }}
				>
					Certification
				</span>
			</div>

			<div className="flex flex-1 flex-col">
				<h3
					className="mb-3 font-bold font-heading text-lg leading-tight"
					style={{ color: badgeColor }}
				>
					{cert.badge}
				</h3>
				<h4 className="mb-4 font-bold font-heading text-xl leading-tight">
					{cert.title}
				</h4>
				<p className="mb-4 font-semibold text-sm opacity-80">
					{cert.experience}
				</p>
				<p className="mb-8 flex-1 text-sm leading-relaxed opacity-75">
					{cert.description}
				</p>
				<a
					className="inline-flex w-fit items-center rounded-full px-6 py-2.5 font-medium text-sm transition-opacity hover:opacity-90"
					href={`/certifications/${cert.slug}`}
					style={{ backgroundColor: buttonBg, color: buttonText }}
				>
					Learn More
				</a>
			</div>
		</div>
	);
}

function CertificationCarousel() {
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
						{certifications.map((cert) => (
							<CarouselItem
								className="basis-[min(440px,calc(100vw-4.5rem))] pl-0 md:basis-[440px]"
								key={cert.id}
							>
								<CertificationCard cert={cert} />
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
								className="h-2 rounded-full transition-all"
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
						className="text-2xl text-[#6b5b7b] transition-opacity hover:opacity-70 disabled:opacity-30"
						disabled={!canScrollPrev}
						onClick={() => api?.scrollPrev()}
						type="button"
					>
						←
					</button>
					<button
						aria-label="Next slide"
						className="text-2xl text-[#6b5b7b] transition-opacity hover:opacity-70 disabled:opacity-30"
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

export function WhyChooseUs() {
	return (
		<section
			className="relative z-10 -mt-8 w-full rounded-t-[32px]"
			style={{ backgroundColor: "#f8f5f0" }}
		>
			<div className="mx-auto min-w-0 max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<div className="grid min-w-0 gap-12 md:grid-cols-2 md:gap-16">
					<div>
						<h2
							className="font-bold font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
							style={{ color: "#200f3b" }}
						>
							Become a
							<br />
							certified
							<br />
							success
						</h2>
					</div>
					<div className="flex flex-col gap-6">
						<p
							className="text-lg leading-relaxed md:text-xl"
							style={{ color: "#6b5b7b" }}
						>
							No matter what your professional goals are, we have a
							certification to help you reach them.
						</p>
						<p
							className="text-lg leading-relaxed md:text-xl"
							style={{ color: "#6b5b7b" }}
						>
							Certifications are an excellent way to increase your earning
							power, drive project success, and stand out from the crowd.
						</p>
					</div>
				</div>
			</div>

			<CertificationCarousel />
		</section>
	);
}
