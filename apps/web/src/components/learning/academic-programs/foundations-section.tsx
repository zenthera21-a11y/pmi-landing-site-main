import { Link } from "@tanstack/react-router";

export function FoundationsSection() {
	return (
		<section style={{ backgroundColor: "#1e0a45" }}>
			<div className="mx-auto max-w-6xl px-6 py-20 md:px-10 lg:py-24">
				<div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
					<div>
						<img
							alt="Certified project professional presenting to fellow project professionals during a conference meeting"
							className="h-auto w-full rounded-2xl"
							height="768"
							src="https://www.pmi.org/-/media/pmi/headless-images/business-solutions/pm-foundations/5_4-academic_pmfoundations-960x768.png?h=792&iar=0&w=960&rev=aebf6060e7904d51a562bb4eca077646&sc_lang=en"
							width="960"
						/>
					</div>
					<div className="flex flex-col gap-6">
						<h2 className="font-bold font-heading text-3xl text-white leading-tight md:text-4xl lg:text-5xl">
							Get project ready with PMI<sup>®</sup> Foundations of Project
							Management
						</h2>
						<p className="font-semibold text-white/80 text-xl">
							Build confident Project Professionals from day one.
						</p>
						<p className="text-base text-white/70 leading-relaxed md:text-lg">
							Offer your students a practical, accessible project management
							course designed to build the skills to turn ideas into execution.
						</p>
						<Link
							className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 font-medium text-sm transition-opacity hover:opacity-90 md:text-base"
							resetScroll
							style={{ color: "#200f3b" }}
							to="/learning/foundations-of-project-management"
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
