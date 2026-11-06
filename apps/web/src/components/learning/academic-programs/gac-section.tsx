import { Link } from "@tanstack/react-router";

export function GacSection() {
	return (
		<section style={{ backgroundColor: "#ffffff" }}>
			<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
					<div className="flex max-w-xl flex-col gap-6">
						<h2
							className="font-bold font-heading text-3xl leading-tight md:text-4xl lg:text-5xl"
							style={{ color: "#200f3b" }}
						>
							PMI Global Accreditation Center (GAC)
						</h2>
						<p
							className="text-base leading-relaxed md:text-lg"
							style={{ color: "#6b5b7b" }}
						>
							GAC accreditation assures that project management degree programs
							are high-quality, relevant, and student-focused. Visit the GAC
							website to discover the benefits of accreditation and find a list
							of universities with GAC-accredited certificates and degrees.
						</p>
						<Link
							className="inline-flex w-fit items-center rounded-full bg-[#200f3b] px-6 py-3 font-medium text-sm text-white transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							to="/contact"
						>
							Discover GAC
						</Link>
					</div>
					<div className="flex-shrink-0">
						<img
							alt="Flags of nations with GAC-accredited programs"
							className="h-auto w-48 md:w-56"
							height="200"
							src="https://www.pmi.org/-/media/pmi/headless-images/learning/academic-programs/flags-of-nations.png?iar=0&rev=a8b7c94415c5412888f1780b708f9454&sc_lang=en&w=200"
							width="200"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
