export function Hero() {
	return (
		<section
			className="relative w-full bg-center bg-cover bg-no-repeat"
			style={{ backgroundImage: "url(/assets/home/hero-bg.webp)" }}
		>
			<div className="mx-auto flex min-h-[auto] max-w-6xl flex-col items-center gap-8 px-6 py-12 md:min-h-[700px] md:flex-row md:gap-14 md:px-10 md:py-20">
				<div className="w-full max-w-[400px] flex-shrink-0 md:w-[400px] lg:w-[440px]">
					<img
						alt="PMI Agile 2026 speakers Elisabeth Hendrickson and Joel Tosi with waterfront ferris wheel"
						className="h-auto w-full"
						height="640"
						src="/assets/home/hero-intro.webp"
						width="440"
					/>
				</div>
				<div className="flex max-w-lg flex-col gap-6">
					<h1 className="font-bold font-heading text-4xl text-white leading-[1.15] lg:text-5xl">
						Rethink everything you know about change
					</h1>
					<p className="text-lg text-white/75 leading-relaxed">
						PMI® Agile 2026 opens with Elisabeth Hendrickson and Joel Tosi
						challenging conventional thinking on organizational change. Discover
						why transformation efforts fail—and how real impact happens.
					</p>
				</div>
			</div>
		</section>
	);
}
