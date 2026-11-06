import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
} from "@pmi-south-asia/ui/components/carousel";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { CourseCard } from "./course-card";
import type { CertificationPageType } from "./pages-data";

interface ExamPrepProps {
	examPrep: CertificationPageType["examPrep"];
}

export function ExamPrep({ examPrep }: ExamPrepProps) {
	const { title, description, ctaText, ctaHref, courses } = examPrep;
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
		<section className="bg-white py-16 md:py-20" id="prep-resources">
			<div className="mx-auto max-w-6xl px-6 md:px-10">
				<div className="grid gap-6 md:grid-cols-2 md:gap-10">
					<h2 className="font-heading font-semibold text-3xl text-[#1d1d35] md:text-4xl">
						{title}
					</h2>
					<div className="flex flex-col gap-5">
						<p className="text-base text-slate-700 leading-relaxed">
							{description}
						</p>
						<a
							className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1d1d35] px-6 py-2.5 font-medium text-sm text-white transition-colors hover:bg-[#0a1628]"
							href={ctaHref}
						>
							{ctaText}
							<IconArrowRight aria-hidden="true" className="size-4" />
						</a>
					</div>
				</div>

				<div className="mt-10">
					<Carousel
						className="w-full"
						opts={{ align: "start" }}
						setApi={setApi}
					>
						<CarouselContent className="ml-0 gap-4 md:gap-6">
							{courses.map((course) => (
								<CarouselItem
									className="basis-[320px] pl-0 md:basis-[360px]"
									key={`${course.title}-${course.colorTheme}`}
								>
									<CourseCard course={course} />
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
				</div>

				<div className="mt-6 flex items-center justify-between">
					<div className="flex gap-2" role="tablist">
						{Array.from({ length: snapCount }, (_, i) => ({ id: i })).map(
							(dot) => (
								<button
									aria-label={`Go to course ${dot.id + 1}`}
									aria-selected={dot.id === currentIndex}
									className={`h-2 rounded-full transition-all ${
										dot.id === currentIndex
											? "w-8 bg-[#1d1d35]"
											: "w-2 bg-slate-300 hover:bg-slate-400"
									}`}
									key={dot.id}
									onClick={() => api?.scrollTo(dot.id)}
									role="tab"
									type="button"
								/>
							)
						)}
					</div>

					<div className="flex gap-2">
						<button
							aria-label="Previous course"
							className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1d1d35] transition-colors hover:bg-slate-100 disabled:opacity-40"
							disabled={!canScrollPrev}
							onClick={() => api?.scrollPrev()}
							type="button"
						>
							<IconArrowLeft aria-hidden="true" className="size-4" />
						</button>
						<button
							aria-label="Next course"
							className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#1d1d35] transition-colors hover:bg-slate-100 disabled:opacity-40"
							disabled={!canScrollNext}
							onClick={() => api?.scrollNext()}
							type="button"
						>
							<IconArrowRight aria-hidden="true" className="size-4" />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
