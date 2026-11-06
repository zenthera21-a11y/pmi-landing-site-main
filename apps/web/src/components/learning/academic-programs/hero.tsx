export function AcademicProgramsHero() {
	return (
		<section
			className="relative w-full bg-center bg-cover bg-no-repeat"
			style={{ backgroundColor: "#1e0a45" }}
		>
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 text-center md:gap-10 md:px-10 md:py-24 lg:py-28">
				<div className="flex max-w-3xl flex-col gap-6">
					<h1 className="font-bold font-heading text-4xl text-white leading-[1.15] md:text-5xl lg:text-6xl">
						Support for the future of project management
					</h1>
					<p className="text-lg text-white/75 leading-relaxed md:text-xl">
						As the leading organization for Project Managers across the globe,
						PMI is committed to defining and developing the future of project
						management through support for research, teaching and education.
					</p>
				</div>
			</div>
		</section>
	);
}
