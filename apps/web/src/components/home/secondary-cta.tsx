const certificationBadges = [
	"PMOCP™",
	"PMI-ACP®",
	"PMI-RMP®",
	"PMI-PBA®",
	"PMI-CPMAI™",
	"GPM-b™",
	"PMI-SP®",
] as const;

function CertificationBadge({
	label,
}: {
	label: (typeof certificationBadges)[number];
}) {
	const isHighlighted = label === "PMI-PBA®";

	return (
		<span
			className="inline-flex shrink-0 items-center px-6 py-2.5 font-bold text-xl md:px-7 md:py-3 md:text-2xl lg:text-3xl"
			style={{
				color: isHighlighted ? "#200f3b" : "#6b5b7b",
			}}
		>
			{label}
		</span>
	);
}

export function SecondaryCta() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="border-[#d4cbc3] border-b">
				<div
					adoberegion="certification-marquee"
					className="overflow-hidden py-6 md:py-8"
				>
					<div className="certification-marquee-track flex w-max gap-8 md:gap-10 lg:gap-12">
						{[...certificationBadges, ...certificationBadges].map(
							(badge, index) => (
								<CertificationBadge key={`${badge}-${index}`} label={badge} />
							)
						)}
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-4xl px-6 py-20 text-center md:px-10 md:py-24 lg:py-28">
				<h2 className="secondary-cta-gradient font-bold font-heading text-6xl leading-[1.08] md:text-7xl lg:text-8xl">
					Start learning for free.
				</h2>
				<p className="secondary-cta-gradient mx-auto mt-6 max-w-3xl font-bold text-xl leading-relaxed md:mt-8 md:text-2xl lg:text-3xl">
					Sign up for a free PMI account to unlock dozens of free online
					courses, digital tools, virtual events, and thought leadership
					insights to accelerate your career.
				</p>
			</div>
		</section>
	);
}
