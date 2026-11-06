import {
	IconArrowLeft,
	IconArrowRight,
	IconChevronRight,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import type { CertificationPageType } from "./pages-data";

interface PathToCertificationProps {
	pathToCertification: CertificationPageType["pathToCertification"];
}

export function PathToCertification({
	pathToCertification,
}: PathToCertificationProps) {
	const [activeStep, setActiveStep] = useState(0);
	const { title, steps, tabs, faqsLink } = pathToCertification;

	return (
		<section className="bg-[#f0faf5] py-16 md:py-20">
			<div className="px-6 md:px-10">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-10 font-heading font-semibold text-3xl text-[#1d1d35] md:mb-12 md:text-4xl">
						{title}
					</h2>

					{/* Step Indicator */}
					<div className="mb-10 flex flex-col items-start gap-4 md:mb-12 md:flex-row md:flex-wrap md:gap-0">
						{steps.map((step, index) => (
							<button
								className={`flex w-full items-center gap-3 border-b-2 pt-3 pb-3 text-left transition-colors md:flex-1 md:flex-col md:items-center md:border-r md:border-b-0 md:pt-0 md:pb-0 md:text-center md:last:border-r-0 ${
									activeStep === index
										? "border-[#1d1d35]"
										: "border-slate-300 hover:border-slate-400"
								}`}
								key={step.number}
								onClick={() => setActiveStep(index)}
								type="button"
							>
								<span
									className={`flex size-8 shrink-0 items-center justify-center rounded-full font-semibold text-sm ${
										activeStep === index
											? "bg-[#1d1d35] text-white"
											: "border-2 border-[#1d1d35] text-[#1d1d35]"
									}`}
								>
									{step.number}
								</span>
								<span
									className={`text-sm leading-tight ${
										activeStep === index
											? "font-semibold text-[#1d1d35]"
											: "text-slate-600"
									}`}
								>
									{step.label}
								</span>
							</button>
						))}
					</div>

					{/* Tab Content */}
					<div className="w-full bg-white p-5 shadow-sm sm:p-8 md:p-10">
						<h3 className="mb-8 font-heading font-semibold text-2xl text-[#1d1d35] md:text-3xl">
							{tabs[activeStep].heading}
						</h3>

						<div className="grid gap-8 md:grid-cols-2 md:gap-12">
							{tabs[activeStep].sections.map((section, sectionIndex) => (
								<div key={sectionIndex.toString()}>
									{section.title && (
										<h4 className="mb-4 font-semibold text-[#1d1d35] text-lg">
											{section.title}
										</h4>
									)}
									<div className="flex flex-col gap-4">
										{section.content.map((paragraph, pIndex) => (
											<p
												className="whitespace-pre-line text-base text-slate-700 leading-relaxed"
												key={pIndex.toString()}
											>
												{paragraph}
											</p>
										))}
										{section.links && (
											<ul className="mt-2 flex flex-col gap-2">
												{section.links.map((link, lIndex) => (
													<li key={lIndex.toString()}>
														<Link
															className="text-[#007ba7] underline underline-offset-2 hover:text-[#1d1d35]"
															resetScroll
															to={link.href}
														>
															{link.text}
														</Link>
													</li>
												))}
											</ul>
										)}
										{section.button && (
											<Link
												className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-[#1d1d35] px-6 py-2.5 font-medium text-[#1d1d35] transition-colors hover:bg-[#1d1d35] hover:text-white"
												resetScroll
												to={section.button.href}
											>
												{section.button.text}
												<IconArrowRight aria-hidden="true" className="size-4" />
											</Link>
										)}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Footer */}
					<div className="mt-8 flex items-center justify-between">
						<Link
							className="inline-flex items-center gap-1 font-medium text-[#1d1d35] hover:underline"
							resetScroll
							to={faqsLink.href}
						>
							{faqsLink.text}
							<IconChevronRight aria-hidden="true" className="size-4" />
						</Link>

						<div className="flex items-center gap-4">
							<button
								aria-label="Previous step"
								className="flex size-10 items-center justify-center rounded-full border border-[#1d1d35] text-[#1d1d35] transition-colors hover:bg-[#1d1d35] hover:text-white disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300"
								disabled={activeStep === 0}
								onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
								type="button"
							>
								<IconArrowLeft aria-hidden="true" className="size-5" />
							</button>
							<button
								aria-label="Next step"
								className="flex size-10 items-center justify-center rounded-full border border-[#1d1d35] text-[#1d1d35] transition-colors hover:bg-[#1d1d35] hover:text-white disabled:border-slate-300 disabled:text-slate-300 disabled:hover:bg-transparent disabled:hover:text-slate-300"
								disabled={activeStep === steps.length - 1}
								onClick={() =>
									setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))
								}
								type="button"
							>
								<IconArrowRight aria-hidden="true" className="size-5" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
