import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type { CertificationPageType } from "./pages-data";

interface MaintainingCertificationProps {
	maintainingCertification: CertificationPageType["maintainingCertification"];
}

export function MaintainingCertification({
	maintainingCertification,
}: MaintainingCertificationProps) {
	const { title, description, activities, ctaText, ctaHref } =
		maintainingCertification;

	return (
		<section className="bg-white py-16 md:py-20">
			<div className="mx-auto max-w-6xl border-slate-200 border-t px-6 pt-10 md:px-10 md:pt-12">
				<div className="grid gap-8 md:grid-cols-2 md:gap-12">
					<h2 className="font-heading font-semibold text-3xl text-[#1d1d35] md:text-4xl">
						{title}
					</h2>
					<div className="flex flex-col gap-6">
						<p className="text-base text-slate-700 leading-relaxed">
							{description}
						</p>
						<ul className="flex flex-col gap-2">
							{activities.map((activity) => (
								<li
									className="flex items-start gap-2 text-base text-slate-700"
									key={activity}
								>
									<span
										aria-hidden="true"
										className="mt-2 size-1.5 shrink-0 bg-slate-400"
									/>
									{activity}
								</li>
							))}
						</ul>
						<Link
							className="inline-flex w-fit items-center gap-2 rounded-full border border-[#1d1d35] px-6 py-2.5 font-medium text-[#1d1d35] transition-colors hover:bg-[#1d1d35] hover:text-white"
							resetScroll
							to={ctaHref}
						>
							{ctaText}
							<IconArrowRight aria-hidden="true" className="size-4" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
