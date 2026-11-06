import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export function CpmaiPromo() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:py-24">
				<div
					className="flex min-h-[360px] items-start overflow-hidden rounded-2xl bg-center bg-cover bg-no-repeat px-8 py-10 md:min-h-[400px] md:px-12 md:py-12 lg:min-h-[420px] lg:px-14 lg:py-14"
					style={{
						backgroundImage: "url(/assets/home/cpmai-promo-bg.webp)",
					}}
				>
					<div className="flex max-w-[18rem] flex-col gap-4 sm:max-w-[20rem] md:max-w-[22rem] md:gap-5 lg:max-w-[24rem] lg:gap-6">
						<h2 className="font-bold font-heading text-[1.875rem] text-white leading-[1.15] md:text-[2.125rem] lg:text-[2.375rem]">
							PMI-CPMAI™ now in
							<br />
							10 languages
						</h2>
						<p className="text-base text-white leading-relaxed md:text-[1.0625rem] lg:text-lg">
							Unlock the skills to lead AI initiatives with confidence.
						</p>
						<Link
							className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2.5 font-medium text-[#032e3f] text-sm transition-opacity hover:opacity-90 md:px-7 md:py-3"
							to="/certifications/ai-project-management-cpmai"
						>
							Explore PMI-CPMAI Certification
							<IconArrowRight aria-hidden="true" className="size-4 md:size-5" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
