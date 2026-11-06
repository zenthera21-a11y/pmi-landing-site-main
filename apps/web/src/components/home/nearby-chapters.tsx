export function NearbyChapters() {
	return (
		<section style={{ backgroundColor: "#f8f5f0" }}>
			<div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:py-24">
				<div
					className="grid min-h-[360px] gap-8 overflow-hidden rounded-2xl bg-center bg-cover bg-no-repeat px-8 py-10 md:min-h-[400px] md:grid-cols-2 md:items-center md:gap-12 md:px-12 md:py-12 lg:min-h-[420px] lg:gap-16 lg:px-14 lg:py-14"
					style={{
						backgroundImage: "url(/assets/home/chapter-promo-background.webp)",
					}}
				>
					<h2 className="font-bold font-heading text-[1.875rem] text-white leading-[1.15] md:text-[2.125rem] lg:text-[2.375rem]">
						Check out
						<br />
						the chapters
						<br />
						near you
					</h2>
					<div className="flex max-w-md flex-col gap-5 md:gap-6">
						<p className="text-base text-white leading-relaxed md:text-[1.0625rem] lg:text-lg">
							Connect with like-minded professionals who shape the future one
							project at a time.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
